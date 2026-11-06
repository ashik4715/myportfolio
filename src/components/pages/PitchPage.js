import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const MD_URL = `${process.env.PUBLIC_URL}/pitch-script-15min.md`;

/* ---------- inline markdown (**bold**, *italic*) ---------- */
function inline(text, baseKey) {
  const parts = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let m;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const t = m[0];
    if (t.startsWith('**')) {
      parts.push(<b key={`${baseKey}-b${k}`} style={{ color: '#fff' }}>{t.slice(2, -2)}</b>);
    } else {
      parts.push(<i key={`${baseKey}-i${k}`}>{t.slice(1, -1)}</i>);
    }
    k += 1;
    last = m.index + t.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/* ---------- mini markdown parser (subset used by the pitch script) ---------- */
function parse(md) {
  const lines = md.split(/\r?\n/);
  const blocks = [];
  let table = null;
  const pushTable = () => {
    if (table) {
      blocks.push(table);
      table = null;
    }
  };
  lines.forEach((raw) => {
    const line = raw.replace(/\s+$/, '');
    if (/^\|/.test(line)) {
      const cells = line.split('|').slice(1, -1).map((c) => c.trim()).filter((c, i, a) => !(c === '' && (i === 0 || i === a.length - 1)));
      if (!table) table = { type: 'table', rows: [] };
      table.rows.push(cells);
      return;
    }
    pushTable();
    const t = line.trim();
    if (!t) return;
    if (/^-{3,}$/.test(t)) { blocks.push({ type: 'hr' }); return; }
    let m;
    if ((m = /^###\s+(.*)$/.exec(t))) { blocks.push({ type: 'h3', text: m[1] }); return; }
    if ((m = /^##\s+(.*)$/.exec(t))) { blocks.push({ type: 'h2', text: m[1] }); return; }
    if ((m = /^#\s+(.*)$/.exec(t))) { blocks.push({ type: 'h1', text: m[1] }); return; }
    if (/^\*\*[^*]+\*\*$/.test(t)) { blocks.push({ type: 'boldlead', text: t.slice(2, -2) }); return; }
    if (/^\*[^*].*\*$/.test(t)) { blocks.push({ type: 'note', text: t.slice(1, -1) }); return; }
    if ((m = /^\d+\.\s+(.*)$/.exec(t))) { blocks.push({ type: 'ol', text: m[1] }); return; }
    blocks.push({ type: 'p', text: t });
  });
  pushTable();
  return blocks;
}

const slideId = (text) => {
  const m = /^Slide\s+(\d+)/i.exec(text || '');
  return m ? `slide-${m[1].padStart(2, '0')}` : null;
};

/* ---------- renderer ---------- */
function RenderBlocks({ blocks, isDark }) {
  const out = [];
  let slideKey = 0;
  let group = [];

  const flush = () => {
    if (!group.length) return;
    const id = slideId(group.find((b) => b.type === 'h2')?.text || '');
    out.push(
      <motion.section
        key={`slide-${slideKey}`}
        id={id || undefined}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.35 }}
        className={`rounded-2xl border p-6 md:p-8 mb-6 ${isDark ? 'bg-portavia-gray/60 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}
      >
        {group.map((b, i) => <Block block={b} key={i} isDark={isDark} />)}
      </motion.section>
    );
    group = [];
  };

  blocks.forEach((b, i) => {
    if (b.type === 'h2' && /^Slide\s/i.test(b.text)) {
      flush();
      slideKey = i;
    } else if (b.type === 'h2') {
      flush();
    }
    group.push(b);
  });
  flush();
  return out;
}

function Block({ block, isDark }) {
  switch (block.type) {
    case 'h1':
      return (
        <h1 className={`text-3xl md:text-4xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {inline(block.text, 'h1')}
        </h1>
      );
    case 'h2': {
      const id = slideId(block.text);
      return (
        <div className="flex items-baseline gap-3 mb-3 scroll-mt-28">
          <span className="flex-shrink-0 text-portavia-green font-mono text-sm font-bold">
            {id ? id.replace('slide-', 'S') : '—'}
          </span>
          <h2 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {inline(block.text, 'h2')}
          </h2>
        </div>
      );
    }
    case 'h3':
      return <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{inline(block.text, 'h3')}</h3>;
    case 'note':
      return (
        <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {inline(block.text, 'note')}
        </p>
      );
    case 'boldlead':
      return <p className={`text-base font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{inline(block.text, 'lead')}</p>;
    case 'olgroup':
      return (
        <ol className="mb-4">
          {block.items.map((t, i) => (
            <li key={i} className={`ml-6 mb-2 list-decimal text-[15.5px] leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              {inline(t, 'ol')}
            </li>
          ))}
        </ol>
      );
    case 'table': {
      const [head, ...rows] = block.rows;
      const isDivider = (r) => r.every((c) => /^-+:?$/.test(c));
      const body = isDivider(rows[0] || []) ? rows.slice(1) : rows;
      return (
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr>
                {head.map((c, i) => (
                  <th key={i} className={`text-left px-4 py-2 font-semibold ${isDark ? 'bg-portavia-green/15 text-white' : 'bg-portavia-green/20 text-gray-900'}`}>
                    {inline(c, 'th')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((r, i) => (
                <tr key={i} className={isDark ? 'border-t border-white/10' : 'border-t border-gray-200'}>
                  {r.map((c, j) => (
                    <td key={j} className={`px-4 py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {inline(c, 'td')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case 'hr':
      return <hr className={`my-6 border-0 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`} />;
    default:
      return (
        <p className={`text-[16.5px] leading-[1.75] mb-3 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
          {inline(block.text, 'p')}
        </p>
      );
  }
}

/* ---------- page ---------- */
const PitchPage = () => {
  const { isDark } = useTheme();
  const [md, setMd] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(MD_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(setMd)
      .catch(() => setError('Could not load the pitch script.'));
  }, []);

  const blocks = useMemo(() => {
    if (!md) return [];
    const raw = parse(md);
    const grouped = [];
    for (const b of raw) {
      if (b.type === 'ol' && grouped.length && grouped[grouped.length - 1].type === 'olgroup') {
        grouped[grouped.length - 1].items.push(b.text);
      } else if (b.type === 'ol') {
        grouped.push({ type: 'olgroup', items: [b.text] });
      } else {
        grouped.push(b);
      }
    }
    return grouped;
  }, [md]);
  const toc = useMemo(
    () =>
      blocks
        .filter((b) => b.type === 'h2' && /^Slide\s/i.test(b.text))
        .map((b) => {
          const m = /^Slide\s+(\d+)\s+—\s+(.*)$/i.exec(b.text);
          return m ? { id: `slide-${m[1].padStart(2, '0')}`, label: `${m[1]}. ${m[2]}` } : { id: slideId(b.text), label: b.text };
        }),
    [blocks]
  );

  return (
    <div className={`min-h-screen ${isDark ? 'bg-portavia-dark' : 'bg-portavia-light-gray'}`}>
      {/* header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="text-portavia-green">15 Min</span> <span className={isDark ? 'text-white' : 'text-gray-900'}>Pitch</span>
              </h1>
              <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                WeGro — Two System Architecture · speaker script, timing table and Q&amp;A.
              </p>
            </div>
            <a
              href={MD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                isDark ? 'bg-portavia-gray text-white hover:bg-portavia-gray/80' : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              Open raw markdown
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {['15 slides', '1,803 words', '15:41 total', '~115 wpm', 'simple English'].map((c) => (
              <span key={c} className="px-3 py-1 rounded-full text-xs font-semibold bg-portavia-green text-black">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* TOC */}
      {toc.length > 0 && (
        <div className={`sticky top-16 z-30 backdrop-blur ${isDark ? 'bg-portavia-dark/85' : 'bg-portavia-light-gray/85'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {toc.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    isDark
                      ? 'border-white/15 text-gray-300 hover:border-portavia-green hover:text-white'
                      : 'border-gray-300 text-gray-600 hover:border-portavia-green hover:text-gray-900'
                  }`}
                >
                  {t.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {error && (
          <div className={`rounded-2xl border p-6 ${isDark ? 'bg-red-500/10 border-red-400/40 text-red-200' : 'bg-red-50 border-red-200 text-red-700'}`}>
            {error}
          </div>
        )}
        {!md && !error && (
          <div className={`animate-pulse rounded-2xl h-40 ${isDark ? 'bg-portavia-gray/60' : 'bg-white'}`} />
        )}
        <RenderBlocks blocks={blocks} isDark={isDark} />
        <p className={`text-xs mt-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          Rendered live from <span className="font-mono">public/pitch-script-15min.md</span> — edit that file and this page updates.
        </p>
      </div>
    </div>
  );
};

export default PitchPage;
