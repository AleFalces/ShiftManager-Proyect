import React from "react";
import styles from "./footer.module.css";
import LogoInsta from "../../assets/instagram.png";
import LogoFace from "../../assets/facebook.png";
import LogoWhats from "../../assets/whatsapp.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <img src={LogoWhats} alt="WhatsApp" />
      <img src={LogoInsta} alt="Instagram" />
      <img src={LogoFace} alt="Facebook" />
    </div>
  );
}

export default Footer;
