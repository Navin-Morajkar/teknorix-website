import { useState, useEffect } from "react";
import styles from "./SideBar.module.css";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showAboutHeading, setShowAboutHeading] = useState(true);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [showAboutList, setShowAboutList] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); // State for the drawer
  const [isMenuExpanded, setIsMenuExpanded] = useState(false); // State for the menu expansion

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolling(true);
        setShowAboutList(true);
        setShowAboutHeading(false);
        setNavbarBackground("white");
      } else {
        setScrolling(false);
        setShowAboutList(false);
        setShowAboutHeading(true);
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.sidebar} ${expanded ? styles.expanded : ""} ${scrolling ? styles.scrolling : ""
        } ${isMenuExpanded ? styles.menuExpanded : ""}`}
    >
      <div
        style={{
          backgroundColor: navbarBackground,
          height: "100%",
          boxShadow: "-5px 0 10px rgba(255, 0, 0, 0.1)",
        }}
      >
        <div className={styles.header}>
          <Image
            src="https://www.teknorix.com/wp-content/uploads/2019/01/teknorix-logo.svg"
            width="180"
            height="42"
          />
          <div
            className={styles.hamburgerIcon}
            onClick={() => setIsMenuExpanded(!isMenuExpanded)}
          >
            <MenuOutlined />
          </div>{" "}
        </div>
        <nav className={`${styles.nav} ${expanded ? styles.expanded : ""}`}>
          {isMenuExpanded ? (
            <div className={styles.outerbar}>
              <div className="lg:flex lg:items-start lg:gap-8">
                <div className="flex space-x-10">
                  <div class=" hover:bg-yellow-400 pr-40 pl-10 py-10">
                    <p class="font-bold text-2xl dark:text-black">About us</p>

                    <ul class="mt-3 space-y-4 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>
                        <a href="#"  >About Us</a>
                      </li>
                      <li>
                        <a href="#"  >Process</a>
                      </li>
                      <li>
                        <a href="#">Technologies</a>
                      </li>
                      <li>
                        <a href="#">Our Works</a>
                      </li>
                    </ul>
                  </div>


                  <div className=" hover:bg-yellow-400 pr-40 pl-10 py-10">
                  <p class="font-bold text-2xl dark:text-black">
                      Services
                    </p>

                    <ul class="mt-3 space-y-4 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          IT consulting
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Custom software development
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Managed IT services
                        </a>
                      </li>

                    </ul>
                  </div>

                  <div class=" hover:bg-yellow-400 pr-40 pl-10 py-10">
                  <p class="font-bold text-2xl dark:text-black">
                      Products
                    </p>

                    <ul class="mt-3 space-y-4 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Jobsoid
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          iVe video
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                           Rix Adhoc
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class=" hover:bg-yellow-400 pr-40 pl-10 py-10">
                  <p class="font-bold text-2xl dark:text-black">
                      Careers
                    </p>

                    <ul class="mt-3 space-y-4 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                     
                      <li>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Work culture
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Join our team
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <a href="#about">ABOUT US </a>
              {showAboutList && (
                <ul>
                  <li>About Us</li>
                  <li>Process</li>
                  <li>Technologies</li>
                  <li>Our Works</li>
                </ul>
              )}

              <a href="#services">SERVICES</a>
              <a href="#products">PRODUCTS</a>
              <a href="#careers">CAREERS</a>
              <a href="#contact">CONTACT</a>
              {showAboutHeading && <h1>ABOUT US</h1>}
              <div className={styles.socialMediaContainer}></div>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;