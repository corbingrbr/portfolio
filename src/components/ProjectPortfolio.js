import React, { useState } from 'react';
import Chips from 'react-chips';
import ProjectAlbum from './ProjectAlbum';

const ProjectPortfolio = ({ projects }) => {

    const [chips, setChips] = useState([]);

    let uniqueTechnologies = [... new Set(projects.reduce((technologies, project) => technologies.concat(project.getTechnologies()), []))].sort()
    let filteredProjects = filterProjectsByChips(projects, chips);

    return (
        <div className="pt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <Chips
                        value={chips}
                        onChange={setChips}
                        suggestions={uniqueTechnologies}
                    />
                </div>
            </div>

            <div className="row justify-content-center mt-2">
                <div className="col-md-4 shadow-sm pr-4 pl-4 pt-2 pb-2 bg-light rounded">
                    <SelectableTechnologies technologies={uniqueTechnologies} onSelect={(ndx) => setChips(chips.concat([uniqueTechnologies[ndx]]))} />
                </div>
            </div>


            <ProjectAlbum projects={filteredProjects} />
        </div >
    );
}

const filterProjectsByChips = (projects, chips) => projects.filter(project => filterProjectByChips(project, chips))

const filterProjectByChips = (project, chips) => {
    const technologies = project.getTechnologies();

    return chips.every(chip => technologies.includes(chip));
}

const SelectableTechnologies = ({ technologies, onSelect }) => (
    <div className="row">
        {technologies.map((technology, ndx) => <SelectableTechnology key={ndx} technology={technology} onSelect={onSelect} id={ndx} />)}
    </div>
)

const SelectableTechnology = ({ technology, onSelect, id }) => (
    <div className="col-sm-1 p-2 technology-select rounded text-center" id={id} onClick={(e) => onSelect(id)}>
        <span>
            <img src={`/assets/icons/${technology}.svg`} alt={`${technology}.svg`} height={24} width={24} />
        </span>
    </div>
)

export default ProjectPortfolio