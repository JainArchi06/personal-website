import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Profile.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Archi Jain </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Agra, Uttar Pardesh (India)
                </span>
                . I have completed my post graduation in Master's in Computer Application
                from{" "}
                <span className="different">
                  K. R. Mangalam University, Gurgaon (Haryana)
                </span>
                . I have completed my graduation in Bachelor's in Computer Science {" "}
                <span className="different">Teethankar Mahaveer University, Moradabad (UP).</span>
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Explorer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Opinionative{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learner{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Self Motivated{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
