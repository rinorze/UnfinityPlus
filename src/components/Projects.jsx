import PropTypes from "prop-types";
import "../styles/Projects.scss";
import img1 from "../assets/c_project1.jpg";
import img2 from "../assets/c_project2.jpg";
import img3 from "../assets/c_project3.jpg";
import img4 from "../assets/c_project4.jpg";
import img5 from "../assets/c_project5.jpg";
import img6 from "../assets/c_project6.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const projectsData = [
  {
    id: 1,
    image: img1,
    title: "Creative Architects",
    description: "Corporate"
  },
  {
    id: 2,
    image: img2,
    title: "Architectural Design",
    description: "Corporate"
  },
  {
    id: 3,
    image: img3,
    title: "Project Management",
    description: "Corporate"
  },
  {
    id: 4,
    image: img4,
    title: "Infrastructure Development",
    description: "Corporate"
  },
  {
    id: 5,
    image: img5,
    title: "Safety Compliance",
    description: "Corporate"
  },
  {
    id: 6,
    image: img6,
    title: "Quality Assurance",
    description: "Corporate"
  }
];

const ProjectItem = ({ image, title, description }) => {
  return (
    <div className="project-item">
      <img src={image} alt={title} />
      <div className="overlay">
        <MdOutlineKeyboardArrowRight size={30} className="icon" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="header">
        <h1>Our Projects</h1>
        <p>
          At Westy Agency, we show only the best websites and portfolios built
          completely with passion, simplicity & creativity!
        </p>
      </div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectItem
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
