import React from 'react';

import ProjectView from './ProjectView';

const ProjectsView = ({ match, projects }) => {

    let project = projects.find(p => p.getLinkName() == match.params.project)
    
    return project ? <ProjectView project={project} /> : <h2>This project does not exist</h2>
}

export default ProjectsView;