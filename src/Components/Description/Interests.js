import "./Description.css";

function Interests({ information, typography, sideTypography }) {
  return (
    <div className={information}>
      <h4 className={typography}>Interests</h4>
      <p className={sideTypography}>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}


export default Interests;
