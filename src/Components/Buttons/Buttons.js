import mail from "../images/mail-icon.png";
import linkedin from "../images/linkedin-icon.png";
import "./Buttons.css";

function Button1() {
  return (
    <div className="buttons-display">
      <button>
        <img src={mail} alt="Mail icon" />
        Email
      </button>
      <button className="linkedin-button">
        <img src={linkedin} alt="Mail icon" />
        LinkedIn
      </button>
    </div>
  );
}

function Button2() {
  return (
    <div className="buttons-display">
      <button className="mail-button">
        <img src={mail} alt="Mail icon" />
        Email
      </button>
    </div>
  );
}

export { Button1, Button2 };
