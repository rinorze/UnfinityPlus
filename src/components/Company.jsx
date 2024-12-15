import "../styles/Company.scss";
import reflex from "../assets/gray-client1.png";
import ap from "../assets/gray-client2.png";
import voice from "../assets/gray-client3.png";
import ubs from "../assets/gray-client4.png";
import speed from "../assets/gray-client5.png";

function Company() {
  const logos = [
    { img: speed, alt: "Speed Towing Logo" },
    { img: reflex, alt: "Reflex Logo" },
    { img: ap, alt: "AP Logo" },
    { img: voice, alt: "Voiceware Logo" },
    { img: ubs, alt: "UBS Logo" }
  ];

  return (
    <div className="App">
      <div className="logo-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo.img} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}

export default Company;
