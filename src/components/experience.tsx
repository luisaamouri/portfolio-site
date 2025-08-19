import { experience } from "./experience_data";

const Experience = () => {
    return (
        <div className="projects-container">
            <h2>Experience</h2>
            <div className="projects-grid">
                {experience && experience.map((experience) => (
                    <div className="project-card" key={experience.id}>
                        <div className="project-header">
                            <i className="fa-solid fa-briefcase"></i>
                            <div className="small-icons">
                                <a href={experience.gitHubLink}><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <h3>{experience.title}</h3>
                        <h2>{experience.role}</h2>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;