import "./About.css"

const About = ({ information, typography, sideTypography }) => (
  <div className={information}>
    <h4 className={typography}>About</h4>
    <p className={sideTypography}>
      I am a frontend developer with a particular interest in making things
      simple and automating daily tasks. I try to keep up with security and best
      practices, and am always looking for new things to learn.
    </p>
  </div>
);

export default About;
