import React, {} from "react";

import ProjectsCard from "../ProjectsCard";
import projects from "../pages/data/projects.json";

function Projects() {
  return (
    <div>



      <div className="container portfolio-container">
        <h1 className="title">Projects List</h1>
        <div className="row">
          <ProjectsCard
            name={projects[0].name}
            image={projects[0].image}
            project={projects[0].project}
            location={projects[0].location}
          />
          <ProjectsCard
            name={projects[1].name}
            image={projects[1].image}
            project={projects[1].project}
            location={projects[1].location}
          />
        </div>
        <div className="row">
          <ProjectsCard
            name={projects[2].name}
            image={projects[2].image}
            project={projects[2].project}
            location={projects[2].location}
          />

          <ProjectsCard
            name={projects[3].name}
            image={projects[3].image}
            project={projects[3].project}
            location={projects[3].location}
          />
        </div>

        <div className="row">

          <ProjectsCard
            name={projects[4].name}
            image={projects[4].image}
            project={projects[4].project}
            location={projects[4].location}
          />

          <ProjectsCard
            name={projects[5].name}
            image={projects[5].image}
            project={projects[5].project}
            location={projects[5].location}
          />

        </div>
      </div>



    </div >
  );
}

export default Projects;