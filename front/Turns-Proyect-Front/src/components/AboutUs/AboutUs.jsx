import styles from "./aboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.text}>
        We offer a wide variety of dental services designed to maintain,
        restore, and enhance your oral health. Our areas of expertise include:
      </p>
      <p className={styles.text}>
        <strong>General Dentistry:</strong> Routine check-ups, cleanings, and
        preventive care.
        <br />
        <strong>Orthodontics:</strong> Modern braces and clear aligners for
        perfectly aligned teeth.
        <br />
        <strong>Implants:</strong> Durable and natural-looking solutions for
        missing teeth.
        <br />
        <strong>Cosmetic Dentistry:</strong> Teeth whitening, veneers, and smile
        makeovers.
        <br />
        <strong>Pediatric Dentistry:</strong> Gentle and friendly care for our
        youngest patients.
      </p>
      <p className={styles.text}>
        Our team of highly trained and experienced specialists works together to
        ensure you receive seamless and effective treatments, always
        prioritizing your comfort and well-being.
      </p>

      <h2 className={styles.title}>Personalized Care</h2>
      <p className={styles.text}>
        We understand that every smile is unique, and that’s why we take the
        time to listen and understand your concerns and goals. From your first
        consultation to the completion of your treatment, our team will be with
        you every step of the way, providing tailored solutions and
        compassionate support. Your comfort and satisfaction are our top
        priorities.
      </p>

      <h2 className={styles.title}>Cutting-Edge Technology</h2>
      <p className={styles.text}>
        We are proud to use state-of-the-art equipment and the latest dental
        techniques to offer accurate diagnoses and efficient treatments. Our
        advanced technology ensures minimal discomfort, faster recovery times,
        and outstanding results.
      </p>

      <h2 className={styles.title}>Get in Touch</h2>
      <div className={styles.contactSection}>
        <p className={styles.contactText}>
          We would love to hear from you! If you have any questions or would
          like to schedule an appointment, don’t hesitate to reach out.
        </p>
        <p className={styles.contactText}>
          <strong>Phone:</strong> (555) 123-4567
          <br />
          <strong>Email:</strong> contact@ourdentalclinic.com
          <br />
          <strong>Address:</strong> 123 Smile Avenue, Dental City, DC 45678
        </p>
        <p className={styles.contactText}>
          Your smile is our passion—let’s keep it healthy and radiant together!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
