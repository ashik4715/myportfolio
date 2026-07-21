import React from 'react';

function Experience({ startMonth, startYear, endMonth, endYear, schoolName, schoolDescription }) {
  return (
    <div>
      <div>
        <div className="cell">
          <p>{startMonth} {startYear} - {endMonth} {endYear}</p>
        </div>
        <div className="cell">
          <h4 style={{marginTop:'0px'}}> {schoolName} </h4>
          <p>{schoolDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;