import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Mail, Linkedin, ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Technologies Used</h2>

          <div>
            <button
              onClick={() => setShowFrontend(!showFrontend)}
              className={styles.toggleBtn}
            >
              Frontend{" "}
              {showFrontend ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {showFrontend && (
              <ul className={styles.techList}>
                <li>React</li>
                <li>CSS Modules</li>
                <li>Redux-toolkit</li>
                <li>SweetAlert2</li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => setShowBackend(!showBackend)}
              className={styles.toggleBtn}
            >
              Backend{" "}
              {showBackend ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {showBackend && (
              <ul className={styles.techList}>
                <li>Express</li>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
                <li>TypeORM</li>
              </ul>
            )}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Contact</h2>
          <ul className={styles.contactList}>
            <li>
              <Linkedin size={16} />
              <a
                href="https://www.linkedin.com/in/alexis-falces-95b892252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alexis Falces
              </a>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:alefalces@gmail.com">alefalces@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
