import profile from "../images/profile.png";
import {Button1, Button2} from "./Buttons";

const Info1 = () => (
  <div className="info-section">
    <img src={profile} alt="Laura Smith" className="profile-pic" />
    <h3 className="card-owner">Laura Smith</h3>
    <p className="profession">Frontend Developer</p>
    <p className="website">laurasmith.website</p>
    <Button1 />
  </div>
);

const Info2 = () => (
  <div className="info-section">
    <img src={profile} alt="Laura Smith" className="profile-pic" />
    <h3 className="card-owner-wh">Laura Smith</h3>
    <p className="profession-wh">Frontend Developer</p>
    <p className="website-wh">laurasmith.website</p>
    <Button1 />
  </div>
);

const Info3 = () => (
  <div className="info-section">
    <img src={profile} alt="Laura Smith" className="profile-pic" />
    <h3 className="card-owner">Laura Smith</h3>
    <p className="profession">Frontend Developer</p>
    <p className="website">laurasmith.website</p>
    <Button2 />
  </div>
);

const Info4 = () => (
  <div className="info-section">
    <img src={profile} alt="Laura Smith" className="profile-pic" />
    <h3 className="card-owner-wh">Laura Smith</h3>
    <p className="profession-wh">Frontend Developer</p>
    <p className="website-wh">laurasmith.website</p>
    <Button2 />
  </div>
);

export {Info1 , Info2, Info3, Info4};
