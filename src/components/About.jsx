import { useState } from "react";
import "../styles/About.scss";
import Signature from "../assets/signature.png";
import img1 from "../assets/construction_service6.jpg";
import img2 from "../assets/construction_service2.jpg";
import img3 from "../assets/construction_service3.jpg";
import img5 from "../assets/construction_service5.jpg";
import img6 from "../assets/construction_service1.jpg";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" }
  ];

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <div className="content">
      <div className="slider-container">
        <div className="slider-text">
          <h2>
            Get full range of premium Industrial services for your business
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exerci tation ullamco. Laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum
          </p>
          <div className="signature">
            <img src={Signature} alt="Signature" />
            <div className="signatureText">
              <p style={{ fontWeight: "500", color: "black" }}>Damsel Saul</p>
              <p style={{ fontSize: "15px", color: "B5B5B5" }}>Founder</p>
            </div>
          </div>
        </div>
        <div className="slider-image">
          <img
            src={activeImage ? activeImage.src : images[0].src}
            alt={activeImage ? activeImage.alt : images[0].alt}
            className="main-image"
          />
          <div className="thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="thumbnail"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
