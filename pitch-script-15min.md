# WEGRO — 15-Minute Pitch Script (simple English · IELTS ~6.5 level)

**1803 words · 15:41 of speaking at 115 words per minute · 15 slides.**  
With natural pauses this runs about 40 seconds over a strict 15-minute slot. If the slot is hard, cut the last two sentences of slide 11 (-0:20) and say only the first two sentences of slide 15 — that brings it to roughly 14:30, with about a minute left for questions.

### How to use this script

1. Print it or keep it open on a second screen. The PowerPoint notes contain exactly the same text.
2. Speak slowly. The sentences are short on purpose — do not join them together.
3. Pause for one second at every full stop. Pause for two seconds after every **Next:** line.
4. If you are late on the clock, say only the first two sentences of a slide and move on.
   Never skip slide 07 (the loan cycle) or slide 11 (the investment loop) — they are the two slides that sell the system.
5. Hard words you may need to practise: *endpoint*, *permission*, *settlement*, *gateway*, *container*.

### Timing table

| # | Slide | Words | Time | Clock at end |
|---|---|---|---|---|
| 01 | Two systems. One platform. | 83 | 0:43 | 0:43 |
| 02 | Agenda | 55 | 0:29 | 1:12 |
| 03 | Ecosystem | 148 | 1:17 | 2:29 |
| 04 | OGRO at a glance | 110 | 0:57 | 3:27 |
| 05 | Stack | 118 | 1:02 | 4:28 |
| 06 | Module map | 94 | 0:49 | 5:17 |
| 07 | Loan lifecycle | 181 | 1:34 | 6:52 |
| 08 | OGRO API surface | 120 | 1:03 | 7:54 |
| 09 | Investor platform | 138 | 1:12 | 9:06 |
| 10 | Three surfaces | 99 | 0:52 | 9:58 |
| 11 | The investment loop | 115 | 1:00 | 10:58 |
| 12 | Polygon packages | 96 | 0:50 | 11:48 |
| 13 | Investor API | 134 | 1:10 | 12:58 |
| 14 | Integration | 159 | 1:23 | 14:21 |
| 15 | Deployment | 153 | 1:20 | 15:41 |
| | **Total** | **1803** | **15:41** | — |

---

## Slide 01 — Two systems. One platform.
*0:43 · 83 words · clock 0:00 → 0:43*  
*On screen: Platform architecture briefing · November 2026 — TWO SYSTEMS. ONE PLATFORM.*

Good morning, and thank you for your time. My name is [your name]. I am a senior full stack developer.

Today I will show you one platform. We call it WEGRO. It is not one system. It is two systems for one business.

OGRO runs the farm side: farmers, field work, and the money for one season. WEGRO-INVESTOR runs the money side: it brings investors in, and pays them back.

Together they close the circle. Let me show you how they are built.

---

## Slide 02 — Agenda
*0:29 · 55 words · clock 0:43 → 1:12*  
*On screen: 15 minutes · 14 slides — WHAT WE'LL COVER*

The plan has six short steps.

The big picture. Then OGRO: what it does and the main business flow. Then its API, kept short. Then the investor platform. Then how the two connect. And last, how we deliver.

All the numbers today come from the real code, not from a slide.

Next: the big picture.

---

## Slide 03 — Ecosystem
*1:17 · 148 words · clock 1:12 → 2:29*  
*On screen: Ecosystem overview — TWO SYSTEMS, ONE BRAND*

Let me start with the business problem.

A small farmer needs money before the season. Seeds, fertiliser, and a drone team. It is a loan, and he pays it back after the harvest.

Three groups: the farmer, who needs the loan. The field officer, who visits the farm. And the bank, which puts the money in.

OGRO is the system for these three. One record per farmer. The loan, the inputs, the visits, and every payment.

Where does the money come from? From investors. WEGRO-INVESTOR is their system. An investor buys a product, and later he gets his return. Agents help people join, area by area.

One design choice: the two systems do not share a database or code. So if the investor app has a bad day, the farm work continues.

The only link today is four numbers on the investor home screen.

Next: OGRO in numbers.

---

## Slide 04 — OGRO at a glance
*0:57 · 110 words · clock 2:29 → 3:27*  
*On screen: System 1 · the operational core — OGRO AT A GLANCE*

Now OGRO in numbers. Numbers help you judge size and risk.

Thirty-six modules. One module is one business area: farmers, banks, stock. Thirty-six areas means real work, not a demo.

Three hundred and forty-seven endpoints. An endpoint is one action the software can do. That many actions means a user can work all day inside the system.

Eighty-five tables, and sixty-eight database changes. Each change is a small, tested file. We never edit the database by hand, so the data stays safe when the product grows.

Who uses it: the farmer, the field officer, the bank. What it owns: the full chain, from land to last payment.

Next: the technology.

---

## Slide 05 — Stack
*1:02 · 118 words · clock 3:27 → 4:28*  
*On screen: System 1 · technology — STACK & CROSS-CUTTING CONCERNS*

This slide is about tools. I will only explain why they are good for a business.

The server uses NestJS with TypeScript. TypeScript is JavaScript with a safety net: many mistakes are caught before release.

For data we use PostgreSQL. It is well known, and strong with money records.

For login we use tokens. A token is a visitor pass. It expires after one day, so a lost phone is a short risk.

The screens are React. One web app that also installs on a phone, so we do not build two apps.

Why it matters: these are standard tools. Many developers know them, so you are not locked to one person.

Next: how the system is organised.

---

## Slide 06 — Module map
*0:49 · 94 words · clock 4:28 → 5:17*  
*On screen: ~36 feature modules, four domains — BACKEND MODULE MAP*

The system is organised in four groups.

Money and risk. This is the centre: projects, loan agreements, collections, deposits, and partner banks.

Field operations: farmers, land, surveys, visits, and notices.

Supply chain: products, warehouses, stock, purchase orders, and sales.

And the platform: users, roles, permissions, notifications.

Why it matters: each group is separate. A new feature changes one module, not everything. Smaller change, faster test, less risk.

The star is one module: the project application. Almost every action connects to it, so new developers start there.

Next: the most important flow in the system.

---

## Slide 07 — Loan lifecycle
*1:34 · 181 words · clock 5:17 → 6:52*  
*On screen: ProjectApplication — the core state machine — THE LOAN LIFECYCLE*

This is the heart of the system. If you remember one slide, remember this one.

One farmer, from application to repayment. Eight steps.

One. He applies. A field officer records his land, his answers, and a credit score.

Two. We approve. The officer recommends, and a supervisor checks. We can reject, or blacklist.

Three. The loan agreement: drafted, approved, stored. Corrections are recorded.

Four. We pay out. First the bank account, then CRM approval. Then the money moves.

Five. He gets his inputs: seeds, fertiliser, drone service. He confirms receipt.

Six. Five field visits. One for identity, three to check crop health, one for the harvest. Each visit is a checkpoint.

Seven. He pays back. We record every payment. If he is late, we add a late fee.

Eight. We settle with the bank, and we keep a full audit log.

Two things to notice. Big projects need two approvals: the COO, then the CFO. Nobody moves large money alone. And everything is logged, so the system is ready for a bank audit.

Next: how the screens talk to this system.

---

## Slide 08 — OGRO API surface
*1:03 · 120 words · clock 6:52 → 7:54*  
*On screen: System 1 · the surface — FRONTEND ↔ 347 ENDPOINTS*

A short technical part. How does a screen talk to the server?

Every request passes the same doors.

First: is the user logged in? Second: does he have permission for this screen? Third: is the pass still valid? Fourth: what is his role? A field officer sees only his own farmers. An admin sees everything.

Last: is the data real? If not, the server refuses with a clear error.

Only then is the database touched.

On the right you can see where the actions live: login, farmers, projects and loans, inventory, and the platform.

There is also a documentation page that lists every endpoint, so a new team can start on day one.

Next: the investor side of the platform.

---

## Slide 09 — Investor platform
*1:12 · 138 words · clock 7:54 → 9:06*  
*On screen: System 2 · Laravel 8 + Bagisto — THE INVESTOR PLATFORM*

Now the second system. Different product, different user, different technology.

The users are investors, agents, and a small operations team. So the questions change. Not "where is the farmer's loan?", but "where is my money, and when do I get my return?"

Four jobs. Money in: the investor sees products and applies. Money out: we run the return payments and keep a history. Network: agents work in zones and territories, under a manager. Reach: push messages to the app.

Fourteen packages are our own code. Twenty-four come from the open-source base, and those are read-only.

We did not start from zero. The base already had login, admin screens, and reports, and that saved us months.

But the base gives you a shop. It does not give you investments or returns. That is our fourteen packages.

Next: three doors.

---

## Slide 10 — Three surfaces
*0:52 · 99 words · clock 9:06 → 9:58*  
*On screen: System 2 · architecture — ONE CODEBASE, THREE SURFACES*

This system has three doors, and one building behind them.

Door one, the shop: what an investor sees in a browser.

Door two, the admin dashboard: our team reviews applications, creates products, manages agents, runs returns.

Door three, the API: what the mobile app uses.

All three lead to the same core. Same database, same rules. Fix a rule once, and it is fixed for web, admin, and app.

One rule for the next team: we never edit the open-source core. We add a package, so security updates from the base stay safe.

Next: what is inside those packages.

---

## Slide 11 — The investment loop
*0:57 · 115 words · clock 9:58 → 10:58*  
*On screen: System 2 · the app journey — THE INVESTOR LOOP*

Now the app journey, because this is where the investor lives.

First he onboards: our team reviews and approves his application.

Then he explores the products and projects, and adds one to his cart.

He places the order, and pays through Aamarpay, our payment gateway.

Later he receives his return. He can take it out, or reinvest it in a new product. That loop is the whole business.

Two documents matter: a tax certificate every fiscal year, and an order certificate signed by our CEO. Both download inside the app.

And one engine: every step fires an event. Laravel queues and cron jobs send the emails. When a new product is published, the app gets a push message.

Next: our own packages.

---

## Slide 12 — Polygon packages
*0:50 · 96 words · clock 10:58 → 11:48*  
*On screen: System 2 · 13 business packages + platform glue — CUSTOM POLYGON PACKAGES*

This slide is the custom work. I will keep it quick.

The orange boxes are money. Applications, investment products, returns, and Aamarpay, our payment gateway in Bangladesh.

The green boxes are the network: agents, zones, territories. This is how we grow without staff in every district.

The light boxes are support: reports, notifications, one-time passwords, questions.

Two small points. Agents log in with a code on the phone, not a password: fewer steps, less support. And the Wegro package is tiny, but it is the only place where the two systems meet.

Next: the app API.

---

## Slide 13 — Investor API
*1:10 · 134 words · clock 11:48 → 12:58*  
*On screen: System 2 · route files — INVESTOR APP API SURFACE*

This is the app's technical view. It is small, and that is good.

The login has six steps: send the code, check the code, log in, refresh the pass, read my profile, read my manager. That is all the app needs to start.

Then it reads products, reads returns, and starts payments.

Payments have four endpoints: success, cancel, fail, and IPN. IPN means the gateway calls our server directly, not the phone. A phone can lose connection, so the gateway is the truth. We trust IPN, and it must be signed.

On the right are the admin screens: review, agents, products, returns, and Excel reports.

The line at the bottom is a habit. After every release we print the route list, and check that nothing private became public.

Next: the question clients always ask.

---

## Slide 14 — Integration
*1:23 · 159 words · clock 12:58 → 14:21*  
*On screen: Today: nowhere · Tomorrow: three bridges — WHERE THE TWO SYSTEMS MEET*

Clients always ask this, so let me answer it directly.

Today the two systems do not talk. No API, no shared table. They are separate products under one brand.

Is that a problem? Not today. OGRO knows the field. Investor knows the money.

But one day the business will ask a harder question. If the field says a farmer paid, should the investor see that?

For that day, we do not join the databases. That is the dangerous option. We build three clean bridges.

One: events. When a settlement completes in OGRO, we send a signed message to the investor system, so payouts follow the real work.

Two: the four public numbers can come from one read-only endpoint. Real data, not hard-coded figures.

Three: keep users separate. Farmers and investors have different rules.

And three rules: every message is signed, every message has an ID so we never pay twice, and failed messages are retried.

Next: how we deliver.

---

## Slide 15 — Deployment
*1:20 · 153 words · clock 14:21 → 15:41*  
*On screen: Two pipelines, one shared compose — DEPLOYMENT & INFRASTRUCTURE*

Last part: how this goes live and stays alive.

We use containers. A container is a box that holds the software and everything it needs. It runs the same everywhere, so "it worked on my machine" stops being an excuse.

OGRO has two containers, and they restart by themselves if they crash. The investor system has one bigger container, with the web server and the background jobs. Those jobs send emails and run the return payments.

One honest point: there is no full automated release pipeline yet, and database changes are run by hand. That is the next thing I would fix. Two weeks of work, and it removes a class of human errors.

Two systems, one platform. I understand the whole path: database, server, screens, and release. So I can own a feature from the first question to the first user.

Thank you. I am happy to go deeper on any slide.

---

## If they ask questions — short answers you can give

**“Why two systems and not one?”**  
Because the users are different and the money is different. One product for the field, one product for investors. If one has a problem, the other keeps working. We can also release them separately.

**“Is this scalable?”**  
Yes. The farm system runs in one container today, and the database is separate. We can add more containers and a read copy of the database when traffic grows. No rewrite is needed.

**“What is the biggest risk?”**  
The database changes are still manual, and there is no full automated release pipeline. That is a two-week fix, and I would do it early. The second risk is the missing link between the two systems; slide 13 shows the plan for it.

**“How much of this did you write?”**  
Be exact and calm. Say which parts you owned: modules, endpoints, screens, releases. Then say what you reviewed but did not write. Precision here builds more trust than a big claim.

**"What happens after an investor pays?"**  
Then the loop continues, and it is mostly automatic. The payment is an event: our queues send the receipt email, the return is scheduled, and the investor can reinvest instead of cashing out. His tax certificate and order certificate are already waiting in the app. Nothing there waits for a human.

**"Why should we hire you instead of a bigger team?"**  
Because I understand the whole path: database, server, screens, and release. A small team needs one person who can own a feature from the first question to the first user. That is what I did here.
