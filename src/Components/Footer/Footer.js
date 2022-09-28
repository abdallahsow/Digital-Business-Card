import Twitter from '../images/twitter-icon.png';
import Facebook from '../images/facebook-icon.png';
import Instagram from '../images/instagram-icon.png';
import GitHub from "../images/github-icon.png";
import "./Footer.css";


function Footer({ footer }) {
  return (
    <footer className={footer}>
        <img src={Twitter} alt="Twitter icon" />
        <img src={Facebook} alt="Facebook icon" />
        <img src={Instagram} alt="Instagram icon" />
        <img src={GitHub} alt="GitHub icon" />
      </footer>
    );
}

export default Footer;