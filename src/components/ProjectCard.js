import React from 'react';

/*import Project from '../interfaces/project.interface'*/

const ProjectCard = ({ project, handleViewRequest, handleDemoRequest }) => {

    let imgStyle = {
        backgroundColor: "#CCC",
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-header" style={imgStyle}>
                    <i className={`fa-4x ${project.getCardIcon()} text-secondary`} />
                </div>
                {/*<div className="card-img-top text-center" style={{ width: "100%", height: 180, backgroundColor: "#000", opacity: 1.0 }}>
                    <img className="img-fluid" style={imgStyle} src={project.getCardImg()} alt="project"/>

                </div>*/}

                <div className="card-body" /*style={{ minHeight: 250 }}*/>

                    <h3 className="card-title mb-1">{project.getTitle()}
                        {/*<span className="float-right">

                            {this.props.request.additions.length > 0 ? <AdditionsBadge count={this.props.request.additions.length} /> : null}
                            {this.props.request.edits.length > 0 ? <UpdatesBadge count={this.props.request.edits.length} /> : null}

    </span>*/}
                    </h3>
                    <small className="text-muted text-center">{`${project.getYear()}`}</small>

                    <p className="card-text mt-3">{project.getCardDescription()}</p>

                    <hr />

                    <span className="align-bottom">
                        <TechnologyIcons technologies={project.getTechnologies().sort()} />
                    </span>
                </div>

                <div className="card-footer">
                    <div className="btn-group">
                        {project.hasView() ? <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleViewRequest}>View</button> : null}
                        {project.hasDemo() ? <button type="button" className="btn btn-sm btn-outline-success" onClick={handleDemoRequest}>Demo</button> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

const TechnologyIcons = ({ technologies }) => (
    <div className="row mb-0">
        {technologies.map((technology, ndx) => <span key={ndx} className="col-sm-1 pr-4"><img src={`/assets/icons/${technology}.svg`} alt={`${technology}.svg`} height={24} width={24} /></span>)}
    </div>
)
