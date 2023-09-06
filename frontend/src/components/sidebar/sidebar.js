import { useState, useEffect } from "react";
import styles from "./SideBar.module.css";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";
import  Link  from 'next/link';


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

                <div className="flex space-x-5">
                  <div class=" hover:bg-yellow-400 pr-28 pl-10 py-10">

                    <p class="font-bold text-2xl dark:text-black">About us</p>

                    <ul class="mt-3 space-y-4 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>

                        <Link href="/about-us">ABOUT US </Link>
                      </li>
                      <li>
                        <Link href="/process"  >Process</Link>
                      </li>
                      <li>
                        <Link href="/technologies">Technologies</Link>
                      </li>
                      <li>
                        <Link href="/our-works">Our Works</Link>

                      </li>
                    </ul>
                  </div>


                  <div className=" hover:bg-yellow-400 pr-40 pl-10 py-10">
                  <p class="font-bold text-2xl dark:text-black">
                      Services
                    </p>

                    <ul class="mt-3 space-y-4 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>

                        <Link
                          href="/it-consulting"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          IT consulting
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/custom-software-development"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Custom software development
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/managed-it-services"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Managed IT services
                        </Link>

                      </li>

                    </ul>
                  </div>

                  <div class=" hover:bg-yellow-400 pr-40 pl-10 py-10">
                  <p class="font-bold text-2xl dark:text-black">
                      Products
                    </p>

                    <ul class="mt-3 space-y-4 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>

                        <Link
                          href="/jobsoid"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Jobsoid
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/ivue-video"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          iVue video
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/adhoc-reporting-platform"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                           Rix Adhoc
                        </Link>

                      </li>
                    </ul>
                  </div>

                  <div class=" hover:bg-yellow-400 pr-40 pl-10 py-10">
                  <p class="font-bold text-2xl dark:text-black">
                      Careers
                    </p>

                    <ul class="mt-3 space-y-4 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                     
                      <li>

                        <Link
                          href="/careers"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Work culture
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/careers"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          Join our team
                        </Link>

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>

              <Link href="/about-us">ABOUT US </Link>

              {showAboutList && (
                <ul>
                  <li>About Us</li>
                  <li>Process</li>
                  <li>Technologies</li>
                  <li>Our Works</li>
                </ul>
              )}

             
              <Link href="/services">SERVICES</Link>
              <Link href="/products">PRODUCTS</Link>
              <Link href="/careers">CAREERS</Link>
              <Link href="/contact">CONTACT</Link>

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