import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './landingpage';
import aboutme from './aboutme';
import contact from './contact';
import project from './project';
import resume from './resume';

const Main = () => (
  <Routes>
    <Route exact path="/myportfolio/" element={<Landing />} />
    <Route exact path="/" element={<Landing />} />
    <Route exact path="/aboutme" element={<aboutme />} />
    <Route exact path="/contact" element={<contact />} />
    <Route exact path="/project" element={<project />} />
    <Route exact path="/resume" element={<resume />} />
  </Routes>
);

export default Main;