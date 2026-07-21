import React, { useState } from 'react';

function Project() {
  const [activeTab, setActiveTab] = useState(0);

  const toggleCategories = () => {
    if (activeTab === 0) {
      return (
        <div className="projects-grid">
          <div className="card">
            <div className="card-title">
              React Project #1
            </div>
            <div className="card-text">
              <ul>
                <li>Calculator Implementation of the iOS calculator built in React.</li>
                <li>Emoji Search Simple React app for searching emoji.</li>
              </ul>
            </div>
            <div className="card-actions">
              <button>Github</button>
              <button>CodePen</button>
              <button>LiveDemo</button>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              React Project #2
            </div>
            <div className="card-text">
              <ul>
                <li>Pokedex The list of Pokémon with live search.</li>
                <li>Shopping Cart Simple ecommerce cart application built using React.</li>
              </ul>
            </div>
            <div className="card-actions">
              <button>Github</button>
              <button>CodePen</button>
              <button>LiveDemo</button>
            </div>
          </div>    

          <div className="card">
            <div className="card-title">
              React Project #3
            </div>
            <div className="card-text">
              <ul>
                <li>Course Learn Page Open Source LMS script in Laravel 5.8 and ReactJS 16.9</li>
                <li>BMI Calculator A React Hooks app for calculating BMI</li>
              </ul>
            </div>
            <div className="card-actions">
              <button>Github</button>
              <button>CodePen</button>
              <button>LiveDemo</button>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div className="projects-grid">
          <div className="card">
            <div className="card-title">
              Vue Project #1
            </div>
            <div className="card-text">
              <ul>
                <li>Calculator Implementation of the iOS calculator built in Vue.</li>
                <li>Emoji Search Simple Vue app for searching emoji.</li>
              </ul>
            </div>
            <div className="card-actions">
              <button>Github</button>
              <button>CodePen</button>
              <button>LiveDemo</button>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div className="projects-grid">
          <div className="card">
            <div className="card-title">
              MongoDB Project #1
            </div>
            <div className="card-text">
              <ul>
                <li>Calculator Implementation of the iOS calculator built in MongoDB.</li>
                <li>Emoji Search Simple MongoDB app for searching emoji.</li>
              </ul>
            </div>
            <div className="card-actions">
              <button>Github</button>
              <button>CodePen</button>
              <button>LiveDemo</button>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 3) {
      return (
        <div className="projects-grid">
          <div className="card">
            <div className="card-title">
              Java Project #1
            </div>
            <div className="card-text">
              <ul>
                <li>Calculator Implementation of the iOS calculator built in Java.</li>
                <li>Emoji Search Simple Java app for searching emoji.</li>
              </ul>
            </div>
            <div className="card-actions">
              <button>Github</button>
              <button>CodePen</button>
              <button>LiveDemo</button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="category-tabs">
      <div className="tabs">
        <button onClick={() => setActiveTab(0)}>React</button>
        <button onClick={() => setActiveTab(1)}>VueJS</button>
        <button onClick={() => setActiveTab(2)}>MongoDB</button>
        <button onClick={() => setActiveTab(3)}>Java</button>
      </div>

      <section>
        <div>
          <div className="cell">
            <div className="content">
              {toggleCategories()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;