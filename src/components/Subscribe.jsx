import "../styles/Subscribe.scss";
import img from "../assets/newsletter-pic.png";

export default function Subcribe() {
  return (
    <>
      <section className="subscribe">
        <div className="subscribeBox">
          <div className="text">
            <h1>
              Signup for our <span>newsletter</span> & promotions
            </h1>
            <div className="emailBox" style={{ display: "flex" }}>
              <input type="email" name="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
