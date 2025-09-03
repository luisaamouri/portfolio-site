import { projectData } from "./project_data";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                            <div className="small-icons">
                                {project.gitHubLink && project.gitHubLink.trim() !== "" && (
                                    <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                                )}
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-text">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="project-image">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="project-img"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;