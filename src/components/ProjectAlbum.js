import React from 'react';
import ProjectCard from './ProjectCard'

const ProjectAlbum = ({ projects }) => {

    return projects.length === 0 ?
        <h2 className="text-white">No Projects</h2>
        :
        <div className="request-album py-5">


            <div className="container">
                <div className="text-center">
                    {/*<input type="text" placeholder="Search" id="search" onChange={this.filterRequests} style={{ lineHeight: 2, fontSize: 18, height: "auto", paddingLeft: 20, margin: 'auto', marginBottom: 20 }} />*/}
                </div>
                <div className='row'>
                    {
                        projects.map((project, ndx) =>
                            <ProjectCard
                                key={ndx}
                                project={project}
                            />)
                    }
                </div>
            </div>
        </div>
}

export default ProjectAlbum;