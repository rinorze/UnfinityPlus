import { useState } from "react";
import {
  FaPhone,
  FaRegClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSearch,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "../styles/Header.scss";
import Logo from "../assets/logo.png";
import Certificate from "../assets/chrome_aNPIxyO58h.png";
import Winner from "../assets/winner.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section className="header">
        <div className="topbar">
          <div className="topbarContact">
            <div>
              <FaPhone
                flip="horizontal"
                style={{
                  padding: "2px",
                  color: "#000000",
                  backgroundColor: "#ebb644",
                  borderRadius: "2px",
                  width: "10px",
                  height: "auto"
                }}
              />
              <p>Phone: +123 (4567) 890</p>
            </div>
            <div>
              <FaRegClock
                style={{
                  width: "15px",
                  height: "auto",
                  color: "#ebb644",
                  border: "2px"
                }}
              />
              <p>Mon - Fri: 9 am - 7 pm</p>
            </div>
          </div>
          <div className="follow">
            <p>Follow:</p>
            <div>
              <FaFacebookF
                className="socialIcon"
                style={{ color: "#ebb644" }}
              />
              <FaTwitter className="socialIcon" style={{ color: "#ebb644" }} />
              <FaLinkedinIn
                className="socialIcon"
                style={{ color: "#ebb644" }}
              />
            </div>
          </div>
        </div>

        <div className="hr"></div>

        <div className="middleHeader">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="fancyBox">
            <img src={Certificate} alt="" />
            <div>
              <p>Global Certified</p>
              <span>ISO: 9001:2016</span>
            </div>
            <img src={Winner} alt="" />
            <div>
              <p>Winner</p>
              <span>Construction Award 2018</span>
            </div>
          </div>
        </div>

        <div className="mainHeader">
          <div className="header">
            <nav className="leftMenu">
              <ul>
                <li>
                  <Link className="a" to="#home" style={{ color: "black" }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="a" to="#services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="a" to="#about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="a" to="#testimonials">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link className="a" to="#projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="a" to="#blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="a" to="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="rightMenu">
              <FaSearch
                style={{ color: "black", cursor: "pointer" }}
                onClick={toggleModal}
              />
              <Link className="quote">Request Quote</Link>
            </div>
            <div className="mobileHeader">
              <Link to="/">
                <img src={Logo} alt="Logo" className="mobileLogo" />
              </Link>
              <button className="menuToggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        <div className={`mobileMenu ${isMenuOpen ? "active" : ""}`}>
          <IoMdClose
            onClick={toggleMenu}
            style={{
              color: "white",
              backgroundColor: "#ebb644",
              padding: "10px",
              margin: "-20px 0 20px 234px",
              textAlign: "right",
              cursor: "pointer"
            }}
          />
          <div className="mobileSearch">
            <input type="text" placeholder="Search..." />
            <FaSearch style={{ color: "#c5c5c5" }} />
          </div>
          <Link className="mobileQuote" onClick={toggleMenu}>
            Request Quote
          </Link>
          <nav className="mobileNav">
            <ul>
              <li>
                <Link
                  to="#home"
                  onClick={toggleMenu}
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="#services" onClick={toggleMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="#about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="#testimonials" onClick={toggleMenu}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="#projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#blog" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mobileSocial">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        {isModalOpen && (
          <div className="searchModal">
            <div className="searchModalContent">
              <button onClick={toggleModal} className="closeModal">
                <IoMdClose className="closeIcon" />
              </button>
              <form
                className="searchForm"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="searchInputWrapper">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="searchInput"
                    autoFocus
                  />
                  <div className="searchUnderline"></div>
                  <FaSearch className="modalSearchIcon" />
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
