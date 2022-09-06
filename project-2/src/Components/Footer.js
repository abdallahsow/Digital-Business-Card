import Twitter from '../images/twitter-icon.png';
import Facebook from '../images/facebook-icon.png';
import Instagram from '../images/instagram-icon.png';
import GitHub from "../images/github-icon.png";

function Footer1() {
    return (
      <footer className="footer1">
        <img src={Twitter} alt="Twitter icon" />
        <img src={Facebook} alt="Facebook icon" />
        <img src={Instagram} alt="Instagram icon" />
        <img src={GitHub} alt="GitHub icon" />
      </footer>
    );
}

function Footer2() {
  return (
    <footer className="footer2">
      <img src={Twitter} alt="Twitter icon" />
      <img src={Facebook} alt="Facebook icon" />
      <img src={Instagram} alt="Instagram icon" />
      <img src={GitHub} alt="GitHub icon" />
    </footer>
  );
}

export { Footer1, Footer2 };