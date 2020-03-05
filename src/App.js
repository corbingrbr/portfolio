import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import ProjectPortfolio from './components/ProjectPortfolio';
import ProjectView from './components/ProjectView';
import ProjectDemo from './components/ProjectDemo';
import Header from './components/Header'

import { AmazonFishing, Arrakis, CrystalLattice, DataCenterStateMachine, FloodFill, Ionic, Obj2Spring, Raytracer, VoxelHack, WebGLCL, ReduxJournal, LightLab } from './projects'

const projects = [
  AmazonFishing,
  Arrakis,
  CrystalLattice,
  DataCenterStateMachine,
  FloodFill,
  Ionic,
  Obj2Spring,
  Raytracer,
  VoxelHack,
  WebGLCL,
  ReduxJournal,
  LightLab
];

const App = () => (



  <div className="App" style={{ height: "100%" }}>

    <Router>
      <Switch>

        <Route path="/profile"><Header activeLink="profile" /><h1 className="text-white">PROFILE</h1></Route>

        <Route exact path="/portfolio/:project/view" render={props => <div className="w-100"><Header activeLink="portfolio" /><ProjectView projects={projects} {...props} /></div>} />

        <Route exact path="/portfolio/:project/demo" render={props => <div className="w-100"><Header activeLink="portolio" /><ProjectDemo projects={projects} {...props} /></div>} />

        <Route path="/portfolio"><Header activeLink="portfolio" /><ProjectPortfolio projects={projects} /></Route>

        <Route path="/contact"><Header activeLink="contact" /><h1 className="text-white">CONTACT</h1></Route>

        <Redirect exact from="/" to="portfolio" />

      </Switch>
    </Router>

  </div >
);

export default App;
