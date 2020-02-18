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

import { AmazonFishing, Arrakis, CrystalLattice, DataCenterStateMachine, FloodFill, Ionic, Obj2Spring, Raytracer, VoxelHack, WebGLCL, ReduxJournal, LightLab } from './projects'

const projects = [
  { name: "amazon-fishing", data: AmazonFishing },
  { name: "arrakis", data: Arrakis },
  { name: "crystal-lattice", data: CrystalLattice },
  { name: "data-center-state-machine", data: DataCenterStateMachine },
  { name: "flood-fill", data: FloodFill },
  { name: "ionic", data: Ionic },
  { name: "obj2spring", data: Obj2Spring },
  { name: "raytracer", data: Raytracer },
  { name: "voxel-hack", data: VoxelHack },
  { name: "webglcl", data: WebGLCL },
  { name: "redux-journal", data: ReduxJournal },
  { name: "light-lab", data: LightLab }
];

const App = () => (
  <div className="App">
    <div className="app-background">
      <Router>
        <Switch>
          <Route path="/projects/:name">

          </Route>
          <Route path="/projects">
            <ProjectPortfolio projects={projects.map(project => project.data)} />
            {/*<ProjectAlbum projects={projects.map(project => project.data)} />*/}
          </Route>

        </Switch>
      </Router>

    </div>
  </div>
);

export default App;
