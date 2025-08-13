const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card html">
            <i className="fa-brands fa-java"></i>
            <p>Java</p>
          </div>
          <div className="skill-card C">
            <i className="fa-solid fa-copyright"></i>
            <p>C</p>
          </div>
          <div className="skill-card js">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card node">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-python python-icon"></i>
            <p>Python</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-microsoft"></i>
            <p>Azure</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-linux"></i>
            <p>Linux</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;