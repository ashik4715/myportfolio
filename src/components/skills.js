import React from 'react';

function Skills({ skill, progress }) {
  return (
    <div>
      <div>
        <div className="cell">
          <div style={{display:'flex'}}>
            {skill} 
            <div style={{margin:'auto', width:'75%'}}>
              <div style={{height: '10px', backgroundColor: '#ccc'}}>
                <div style={{height: '100%', width: `${progress}%`, backgroundColor: '#4caf50'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;