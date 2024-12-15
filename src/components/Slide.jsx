import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md";
import "../styles/Slide.scss";
import Img from "../assets/slide-9.jpg";

const slides = [
  {
    image: Img,
    title: "We provide the best Industrial Services worldwide",
    description:
      "An unknown printer took a galley of type and scrambled it to make a type specimen book.",
    firstButton: "About us",
    secondButton: "Services"
  },
  {
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
    title: "We only do what we are great on !",
    description:
      "An unknown printer took a galley of type and scrambled it to make a type specimen book.",
    firstButton: "Read More",
    secondButton: "Get Started"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  const nextSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setAnimate(true);
    }, 50);
  };

  const prevSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setAnimate(true);
    }, 50);
  };

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carouselSlide ${index === currentSlide ? "active" : ""}`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="carouselImage"
            />
            <div className="postiotn inset-0 bg-black bg-opacity-50" />
            <div className={`carouselContent ${animate ? "animate" : ""}`}>
              <h1 className="carouselTitle">{slide.title}</h1>
              <p className="carouselDescription">{slide.description}</p>
              <div className="carouselButtons">
                <button className="carouselButton">{slide.firstButton}</button>
                <button className="carouselButton">{slide.secondButton}</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="carouselNav carouselNav--prev" onClick={prevSlide}>
        <MdOutlineKeyboardArrowLeft size={24} />
      </button>
      <button className="carouselNav carouselNav--next" onClick={nextSlide}>
        <MdOutlineKeyboardArrowRight size={24} />
      </button>
    </div>
  );
}

export default App;
