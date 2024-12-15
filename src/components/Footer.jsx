import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
  FaTimes
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Logo from "../assets/logo.png";
import "../styles/Footer.scss";
import image1 from "../assets/gallery-01.jpg";
import image2 from "../assets/gallery-02.jpg";
import image3 from "../assets/gallery-03.jpg";
import image4 from "../assets/gallery-04.jpg";
import image5 from "../assets/gallery-05.jpg";
import image6 from "../assets/gallery-06.jpg";

const navigationLinks = [
  "Home",
  "Services",
  "About Us",
  "Testimonials",
  "News",
  "Contact"
];

const supportLinks = [
  "Contact Us",
  "Submit a Ticket",
  "Visit Knowledge Base",
  "Support System",
  "Refund Policy",
  "Professional Services"
];

const socialLinks = [
  { Icon: FaFacebook, label: "Facebook" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaLinkedin, label: "LinkedIn" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaPinterest, label: "Pinterest" }
];

const Modal = ({ isOpen, onClose, imageSrc }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Modal" />
        <button
          className="close-button"
          onClick={onClose}
          style={{ color: "black" }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired
};

const Brand = () => (
  <div className="footer-section brand">
    <a href="/">
      <img src={Logo} alt="" style={{ width: "60%" }} />
    </a>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation
    </p>
  </div>
);

const Links = () => (
  <div className="footer-section links">
    <h4>LINKS</h4>
    <ul>
      {navigationLinks.map((link) => (
        <li key={link}>
          <a href="#">
            <MdOutlineKeyboardArrowRight style={{ color: "#ebb644" }} />
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Support = () => (
  <div className="footer-section support">
    <h4>SUPPORT</h4>
    <ul>
      {supportLinks.map((link) => (
        <li key={link}>
          <a href="#">
            <MdOutlineKeyboardArrowRight style={{ color: "#ebb644" }} />
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="footer-section gallery">
      <h4>GALLERY</h4>
      <div className="gallery-grid">
        {[image1, image2, image3, image4, image5, image6].map(
          (image, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openModal(image)}
            >
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          )
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </div>
  );
};

const SocialIcons = () => (
  <div className="social-icons">
    <span>Follow us:</span>
    {socialLinks.map(({ Icon, label }) => (
      <a href="#" key={label} aria-label={label} style={{ color: "white" }}>
        <Icon />
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Brand />
        <Links />
        <Support />
        <Gallery />
      </div>
      <div className="footerCopyright">
        <div className="footer-bottom">
          <p>
            2024 © All Rights Reserved by <span>CaseThemes</span>
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
