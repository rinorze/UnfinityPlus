import { useState } from "react";
import { Home, Phone, Mail, MapPin } from "lucide-react";
import "../styles/ContactUs.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contactUs">
      <div className="contact-page">
        <div className="container">
          <div className="contact-info">
            <div className="header">
              <div style={{ backgroundColor: "#ebb644" }}>
                <h1>Contact Us</h1>
                <h2>FIND OUR HOME</h2>
              </div>
            </div>

            <div className="info-list">
              <div className="info-item">
                <Home />
                <span>14 Tottenham Road, London, England, UK</span>
              </div>
              <div className="info-item">
                <Phone />
                <span>+1 (872) 981 765</span>
              </div>
              <div className="info-item">
                <Mail />
                <span>support@infinityplus.com</span>
              </div>
            </div>

            <button className="map-button">
              <MapPin />
              Find us in map
            </button>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name.."
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name.."
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address.."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone.."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message.."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
