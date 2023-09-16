import React from "react";
import { FaGithub, FaFacebookMessenger } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="contactUs">
      <h1>Contact Us</h1>
      <div className="icons">
        <FaGithub />
        <FaFacebookMessenger />
        <GrInstagram />
        <BsWhatsapp />
        <BsLinkedin />
        <RiTwitterXFill />
      </div>
    </div>
  );
};

export default Contact;
