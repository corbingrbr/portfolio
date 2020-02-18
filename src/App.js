import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";

/*import Project from './interfaces/project.interface';*/
//import ProjectAlbum from './components/ProjectAlbum';
import ProjectPortfolio from './components/ProjectPortfolio';
import ProjectsView from './components/ProjectsView';

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
  <div className="App">
    <div className="app-background">
      <Router>
        <Switch>
          <Route exact path="/projects/:project/view" render={(props) => <ProjectsView projects={projects} {...props} />} />
          <Route exact path="/projects/:project/demo">
            <h2>This project does not have demo.</h2>
          </Route>
          <Route path="/projects">
            <ProjectPortfolio projects={projects} />
          </Route>

        </Switch>
      </Router>

    </div>
  </div>
);

export default App;
