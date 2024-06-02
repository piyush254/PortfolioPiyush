import React from "react";
import "./Contact.css";
import LogoName from "./LogoName";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const Contact = (props) => {
  return (
    <>
      {props.nav}
      <div className="contactmainblock">
        <div className="ContactusBlock">
          <div className="contactme">contact me</div>
          <div className="underline">
            <div className="whoiam"> Get in Touch</div>
          </div>
        </div>

        <div className="messagememainblock">
          <div className="messagemainblock">
            <h5>Get in Touch</h5>
            <p className="contactparagrafh">
            You can contact me directly here. Simply click on the provided links to reach out to me via your preferred method. Thank you so much!{" "}
            </p>
            <div className="contactlogo">
              <LogoName
                logo={GitHubIcon}
                names={"Git"}
                link={"https://github.com/piyush254"}
                val={"Click"}
              />
              <LogoName
                logo={LinkedInIcon}
                names={"LinkedIn"}
                link={"https://www.linkedin.com/in/piyush-kumar-9071a1202/"}
                val={"Click"}
              />
              <LogoName
                logo={WhatsAppIcon}
                names={"WhatsApp"}
                link={"http://wa.me/+918769207505"}
                val={"Click"}
              />
              <LogoName
                logo={MailIcon}
                names={"Email-id"}
                val={"piyush1999.iimt@gmail.com"}
              />
              <LogoName
                logo={PersonIcon}
                names={"Name"}
                val={"Piyush"}
              />
              <LogoName
                logo={LocationOnIcon}
                names={"Location"}
                val={"Greater Noida, India"}
              />
            </div>
          </div>

          <div className="contactdetail">
            {/* <h5>Message me</h5> */}
            {/* <Forms /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
