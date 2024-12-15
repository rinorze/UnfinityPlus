import { useState } from "react";
import "../styles/Testimonials.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md";
import img1 from "../assets/testimonial1.jpg";
import img2 from "../assets/testimonial2.jpg";
import img3 from "../assets/testimonial3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Jared Dunn",
    company: "Tie Labs Inc",
    image: img2,
    text: "In my job as social media strategist, I've tried every analytics product on market and when I came across West, I was blown away immediately and great project which make me very!"
  },
  {
    id: 2,
    name: "Monica Hall",
    company: "CEO, Bream-Hall Partners",
    image: img1,
    text: "Unfinity Plus is the greatest media agency I've ever work with. From the intuitive, easy user interface to the powerful tools they provide to me and great project which make me very!"
  },
  {
    id: 3,
    name: "Amr Sadeq",
    company: "Badaia Inc",
    image: img3,
    text: "The level of service and attention to detail is unmatched. Their team consistently delivers exceptional results that exceed our expectations."
  }
];

const ClientFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="testimonials">
      <section className="clientFeedback">
        <div className="clientFeedbackHeader">
          <h2>Client&apos;s Feedback</h2>
          <p>We focus on brands, products & campaigns</p>
        </div>

        <div className="clientFeedbackCarousel">
          {[0, 1].map((offset) => {
            const testimonialIndex =
              (currentIndex + offset) % testimonials.length;
            const testimonial = testimonials[testimonialIndex];

            return (
              testimonial && (
                <div key={testimonial.id} className="testimonialCard">
                  <div className="testimonialCardHeader">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonialCardImage"
                    />
                    <div className="testimonialCardInfo">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.company}</p>
                    </div>
                    <span className="testimonialCardQuote">&quot;</span>
                  </div>
                  <p className="testimonialCardText">{testimonial.text}</p>
                </div>
              )
            );
          })}
        </div>

        <div className="clientFeedbackControls">
          <button
            onClick={prevSlide}
            className="controlButton"
            aria-label="Previous testimonials"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="controlButton"
            aria-label="Next testimonials"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ClientFeedback;
