import styles from "./aboutUs.module.css";
import {
  Info,
  Smile,
  Stethoscope,
  Wand2,
  Contact,
  Mail,
  MapPin,
  Linkedin,
} from "lucide-react";

function AboutUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <Info size={24} className={styles.icon} />
        About Us
      </h2>
      <p className={styles.text}>
        We offer a wide variety of dental services designed to maintain,
        restore, and enhance your oral health. Our areas of expertise include:
      </p>
      <p className={styles.text}>
        <strong>General Dentistry:</strong> Routine check-ups, cleanings, and
        preventive care. <br />
        <strong>Orthodontics:</strong> Modern braces and clear aligners for
        perfectly aligned teeth. <br />
        <strong>Implants:</strong> Durable and natural-looking solutions for
        missing teeth. <br />
        <strong>Cosmetic Dentistry:</strong> Teeth whitening, veneers, and smile
        makeovers. <br />
        <strong>Pediatric Dentistry:</strong> Gentle and friendly care for our
        youngest patients.
      </p>

      <h2 className={styles.title}>
        <Smile size={24} className={styles.icon} />
        Personalized Care
      </h2>
      <p className={styles.text}>
        We understand that every smile is unique, and that’s why we take the
        time to listen and understand your concerns and goals. From your first
        consultation to the completion of your treatment, our team will be with
        you every step of the way, providing tailored solutions and
        compassionate support. Your comfort and satisfaction are our top
        priorities.
      </p>

      <h2 className={styles.title}>
        <Wand2 size={24} className={styles.icon} />
        Cutting-Edge Technology
      </h2>
      <p className={styles.text}>
        We are proud to use state-of-the-art equipment and the latest dental
        techniques to offer accurate diagnoses and efficient treatments. Our
        advanced technology ensures minimal discomfort, faster recovery times,
        and outstanding results.
      </p>

      <h2 className={styles.title}>
        <Contact size={24} className={styles.icon} />
        Get in Touch
      </h2>
      <div className={styles.contactSection}>
        <p className={styles.text}>
          Are you looking for a reliable and skilled web developer for your next
          project? I'm here to help.
        </p>
        <p className={styles.text}>
          With experience in building full-stack web applications using modern
          technologies like <strong>React</strong>, <strong>Next.js</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>Node.js</strong>, I focus on
          creating clean, responsive, and high-performance solutions.
        </p>
        <p className={styles.text}>
          Whether you're a small business, a startup, or an individual with an
          idea, I’d love to hear from you.
        </p>
        <ul className={styles.contactList}>
          <li>
            <MapPin size={18} /> Based in Córdoba, Argentina – available for
            remote work worldwide.
          </li>
          <li>
            <Mail size={18} /> Email:{" "}
            <a href="mailto:alefalces@gmail.com">alefalces@gmail.com</a>
          </li>
          <li>
            <Linkedin size={18} /> LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/alefalces/"
              target="_blank"
              rel="noopener noreferrer"
            >
              /alefalces
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
