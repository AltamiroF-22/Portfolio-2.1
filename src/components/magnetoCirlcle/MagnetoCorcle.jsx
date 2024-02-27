/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./MagnetoCircle.sass";

const MagnetoCircle = ({ text, backgroundColor, img , size, position, cursor, alt }) => {
  const magnetoRef = useRef(null);
  const magnetoTextRef = useRef(null);

  useEffect(() => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;

    if (!magneto || !magnetoText) return;

    // mouse move stuff

    const activateMagneto = (event) => {
      let boundBox = magneto.getBoundingClientRect();
      const magnetoStrenght = 60;
      const magnetoTextStrenght = 40;
      const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
      const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

      // Mouve the button
      gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrenght,
        y: newY * magnetoStrenght,
        ease: Power4.easeOut
      });

      gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrenght,
        y: newY * magnetoTextStrenght,
        ease: Power4.easeOut
      });
    };

    // mouse leave stuff
    const restMagneto = () => {
      //move the button to original position
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
      });
      gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
      });
    };

    // Add event Listeners
    magneto.addEventListener("mousemove", activateMagneto);
    magneto.addEventListener("mouseleave", restMagneto);

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      magneto.removeEventListener("mousemove", activateMagneto);
      magneto.removeEventListener("mouseleave", restMagneto);
    };
  }, []);

  return (
    <h1 ref={magnetoRef} className={`magneto magneto-circle ${backgroundColor} ${size} ${position} ${cursor}`}>
      <span ref={magnetoTextRef} className="text">{text}</span>
      <img ref={magnetoTextRef} alt={alt} src={img} />
    </h1>
  );
};

export default MagnetoCircle;
