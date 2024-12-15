import img1 from "../assets/c_icon-1.png";
import img2 from "../assets/c_icon-2.png";
import img3 from "../assets/c_icon-3.png";
import img4 from "../assets/c_icon-4.png";
import car from "../assets/why-choose-car.jpg";
import "../styles/CoreValue.scss";

const CoreValues = () => {
  const values = [
    {
      icon: img1,
      title: "Customer Support",
      description:
        "Sed quia non numquam eius modi tempo ra incidunt ut labore et dolore magnam aliq uam quaera."
    },
    {
      icon: img2,
      title: "Delivery On time",
      description:
        "Sed quia non numquam eius modi tempo ra incidunt ut labore et dolore magnam aliq uam quaera."
    },
    {
      icon: img3,
      title: "Solid Dedication",
      description:
        "Sed quia non numquam eius modi tempo ra incidunt ut labore et dolore magnam aliq uam quaera."
    },
    {
      icon: img4,
      title: "Professional Culture",
      description:
        "Sed quia non numquam eius modi tempo ra incidunt ut labore et dolore magnam aliq uam quaera."
    }
  ];

  return (
    <div className="coreValues">
      <section className="valuesSection">
        <div className="valuesContainer">
          <div className="valuesImage">
            <img src={car} alt="Construction Vehicle" loading="lazy" />
          </div>

          <div className="valuesContent">
            <div className="valuesHeader">
              <h2>Our Core Value</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="valuesGrid">
              {values.map((value) => (
                <div key={value.title} className="valueItem">
                  <div className="valueIcon">
                    <img src={value.icon} alt="" />
                  </div>
                  <div className="valueContent">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreValues;
