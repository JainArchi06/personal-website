import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiGooglemaps,
  SiPandas,
  SiSelenium,
  SiDjango,
} from "react-icons/si";
import { DiCss3, DiPython, DiReact } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/V9C8Jm9/rockstar-games.png"
                    alt="GoogleMap DataScraper"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>GoogleMap DataScraper</h2>
                <p>
                  In this Python project, we use Playwright and
                  Pandas to extract data from Google Maps without
                  any additional services. We automate the Google
                  Chrome browser to scrape the data and use
                  argparse to parse command-line arguments.
                </p>
                <div>
                  <DiPython />
                  <SiGooglemaps />
                  <SiPandas />
                </div>
                <div>
                  {/* <a
                    href="https://store-rockstargames.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/JainArchi06/GoogleMapScraper-"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/MPzWN49/weather-app.png"
                    alt="Band Music App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Band Music App</h2>
                <p>
                  Band Music is a ReactJS project utilizing
                  the Spotify API to create a music player
                  with HTML, CSS, and JavaScript.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <DiReact />
                  <FaNodeJs />
                </div>
                <div>
                  {/* <a
                    href="https://sk-weather-app.netlify.app/weather-app.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/JainArchi06/Band-Music"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/M2qW7xL/apijs-npm.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Bulk E-mails Automation</h2>
                <p>
                  This project automates bulk email sending by
                  fetching email data from a CSV file and sending
                  emails automatically in bulk, saving time and
                  increasing efficiency. It also allows for
                  customization and personalization of emails.
                </p>
                <div>
                  <DiPython />
                  <SiSelenium />
                  <SiPandas />
                </div>
                <div>
                  {/* <a
                    href="https://www.npmjs.com/package/apijs-mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View NPM Package
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/JainArchi06/Bulk-E-mails-Automation"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Form Automation</h2>
                <p>
                  This project automates form submission by
                  fetching data from a CSV file and
                  automatically filling it into the form, saving
                  time and reducing manual input errors.
                </p>
                <div>
                  <DiPython />
                  <SiSelenium />
                  <SiPandas />
                </div>
                <div>
                  {/* <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/imbickydutta/file-system-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Sports_Med_Portal"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Sports Med Portal</h2>
                <p>
                  This is a Django Project, made for students of our
                  collage. It is a collage project and it's made in a
                  team of 4 members. This is a portal where
                  students can register when they enter in the sports
                  room and for medical portal, the teacher will
                  register student details.
                </p>
                <div>
                  <SiDjango />
                  <DiPython />
                  <SiJavascript />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/JainArchi06/Sports_Med_Portal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
    </>
  );
};
