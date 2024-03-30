/* eslint-disable react/prop-types */

import { useRef, useState, useEffect } from "react";
import "./ContactMe.sass";
import TextEffect from "../../../components/textEffect/TextEffect";

const ContactMe = ({ buttomRef }) => {
  const textEffectRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const textEffect = textEffectRef.current;

    //set a new class name when this fuction is true
    const handleScrollY = () => {
      const textEffectBox = textEffect.getBoundingClientRect();

      if (textEffectBox.y + 50 - window.innerHeight < 0) {
        setIsTextVisible(true);
      } else {
        setIsTextVisible(false);
      }
    };

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  return (
    <section
      className="contact-me-section"
      id="contact"
    
    >
      <div className="textEffect" ref={textEffectRef}>
        {isTextVisible && (
          <TextEffect
            text1="say hello"
            fontWeigth="W800"
            color="switch-Dark-Light"
            fontSize="SizeSP"
          />
        )}
      </div>
      <form
        className="form"
        action="https://formsubmit.co/altamiroribeirodarocha@gmail.com"
        method="POST"
      >
        <div className="fullname-email-addres-div">
          <input
            type="text"
            name="Full Name"
            placeholder="Full Name*"
            required
          />
          <input
            type="email"
            name="E-mail Address"
            placeholder="E-mail Address*"
            required
          />
        </div>

        <input
          type="text"
          className="messagesubject"
          maxLength="25"
          placeholder="Message Subject*"
          name="Message Subject"
          rows="10"
          required
        />
        <textarea
          placeholder="Message*"
          maxLength="400"
          className="form-control"
          name="Message"
          rows="10"
          required
        ></textarea>
        <input
          type="hidden"
          name="_blacklist"
          value="spammy pattern, banned term, phrase"
        />
        <input
          type="hidden"
          name="_next"
          value="https://junior-rx22.netlify.app/"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="is possible contact me in the instagram as well (junior.rx22)"
        />
        <input type="hidden" name="_template" value="table" />
        <div className="div-btn-submit">
          <button ref={buttomRef} className="submit" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
