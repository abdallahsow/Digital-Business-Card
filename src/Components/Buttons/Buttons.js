import "./Buttons.css";
import mail from "../images/mail-icon.png";
import linkedin from "../images/linkedin-icon.png";

function Button1() {
  return (
    <div className="buttons-style">
      <button className="mail-address">
        <img src={mail} alt="Mail icon" />
        Email
      </button>
      <button className="linkedin-address">
        <img src={linkedin} alt="Mail icon" />
        LinkedIn
      </button>
    </div>
  );
}

function Button2() {
  return (
    <div className="buttons-style">
      <button className="mail-address-2">
        <img src={mail} alt="Mail icon" />
        Email
      </button>
    </div>
  );
}

export { Button1, Button2 };
