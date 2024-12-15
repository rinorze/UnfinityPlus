import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Services.scss";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import img1 from "../assets/construction_service6.jpg";
import img2 from "../assets/construction_service2.jpg";
import img3 from "../assets/construction_service3.jpg";
import img4 from "../assets/construction_service4.jpg";
import img5 from "../assets/construction_service5.jpg";
import img6 from "../assets/construction_service1.jpg";

const Card = ({ title, description, image, icon, overlayIcon }) => {
  const [showText, setShowText] = useState(false);

  const handleMouseOver = () => {
    setShowText(true);
  };

  const handleMouseOut = () => {
    setShowText(false);
  };

  return (
    <div
      className="card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={`card-content ${showText ? "fade-out" : ""}`}>
        <div className="title-container">
          <div className="icon">{icon}</div>
          <h3 className="title">{title}</h3>
          <div className="black-overlay"></div>
        </div>
      </div>
      <div className={`overlay ${showText ? "active" : ""}`}>
        <div className="icon">{overlayIcon}</div>{" "}
        <h3 className="new-title">{title}</h3>
        {showText && <p className="description">{description}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  overlayIcon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

const App = () => {
  const cards = [
    {
      title: "Repair & Maintenance",
      icon: (
        <HiOutlineWrenchScrewdriver size={40} style={{ color: "#ebb644" }} />
      ),
      overlayIcon: (
        <HiOutlineWrenchScrewdriver
          size={40}
          style={{ color: "black", paddingTop: "10px" }}
        />
      ),
      description:
        " If you’re struggling with debt, it can be hard to know where to turn. But with lots of free, confidential help and advice services available, there’s no need to use a fee-charging debt management company.",
      image: img1
    },
    {
      title: "House Renovation",
      icon: (
        <HiOutlineWrenchScrewdriver size={40} style={{ color: "#ebb644" }} />
      ),
      overlayIcon: (
        <HiOutlineWrenchScrewdriver
          size={40}
          style={{ color: "black", paddingTop: "10px" }}
        />
      ),
      description:
        " Work out how much you can afford to save and find out how to set and reach your savings goal. How to save money, types of savings account, and getting started with investing.",
      image: img5
    },
    {
      title: "Interior Moderation",
      icon: (
        <HiOutlineWrenchScrewdriver size={40} style={{ color: "#ebb644" }} />
      ),
      overlayIcon: (
        <HiOutlineWrenchScrewdriver
          size={40}
          style={{ color: "black", paddingTop: "10px" }}
        />
      ),
      description:
        " Our mortgage Advisors can offer you independent advice through our network of phone based advisers and from our team online. All of these advisers can help you search different mortgages.",
      image: img4
    },
    {
      title: "Condo Builders",
      icon: (
        <HiOutlineWrenchScrewdriver size={40} style={{ color: "#ebb644" }} />
      ),
      overlayIcon: (
        <HiOutlineWrenchScrewdriver
          size={40}
          style={{ color: "black", paddingTop: "10px" }}
        />
      ),
      description:
        " Our mortgage Advisors can offer you independent advice through our network of phone based advisers and from our team online. All of these advisers can help you search different mortgages.",
      image: img3
    },
    {
      title: "Landscaping",
      icon: (
        <HiOutlineWrenchScrewdriver size={40} style={{ color: "#ebb644" }} />
      ),
      overlayIcon: (
        <HiOutlineWrenchScrewdriver
          size={40}
          style={{ color: "black", paddingTop: "10px" }}
        />
      ),
      description:
        "Work out how much you can afford to save and find out how to set and reach your savings goal. How to save money, types of savings account, and getting started with investing.",
      image: img2
    },
    {
      title: "Electrical Services",
      icon: (
        <HiOutlineWrenchScrewdriver size={40} style={{ color: "#ebb644" }} />
      ),
      overlayIcon: (
        <HiOutlineWrenchScrewdriver
          size={40}
          style={{ color: "black", paddingTop: "10px" }}
        />
      ),
      description:
        "Work out how much you can afford to save and find out how to set and reach your savings goal. How to save money, types of savings account, and getting started with investing.",
      image: img6
    }
  ];

  return (
    <>
      <section>
        <div className="text">
          <h1>What We Serve</h1>
          <p>
            We understand the importance of approaching each work integrally and
            believe in the power of simple and easy communication.
          </p>
        </div>
        <div className="card-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              icon={card.icon}
              overlayIcon={card.overlayIcon}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
