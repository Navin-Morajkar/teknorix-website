import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import { MenuOutlined,LinkedinOutlined, FacebookFilled, TwitterOutlined, InstagramFilled } from "@ant-design/icons";
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

                <div className="flex space-x-2">
                  <div class=" hover:bg-yellow-400 pr-20 pl-10 py-10">

                    <Link href="/about-us" class="font-bold text-2xl dark:text-black" className={styles.lineLink}>About us</Link>

                    <ul class="mt-3 space-y-1 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>

                        <Link href="/about-us" className={styles.lineLink}>About us </Link>
                      </li>
                      <li>
                        <Link href="/process" className={styles.lineLink} >Process</Link>
                      </li>
                      <li>
                        <Link href="/technologies" className={styles.lineLink}>Technologies</Link>
                      </li>
                      <li>
                        <Link href="/our-works" className={styles.lineLink}>Our Works</Link>

                      </li>
                    </ul>
                  </div>

                  <div className=" hover:bg-yellow-400 pr-1 pl-10 py-10">
                  <Link href="/services" class="font-bold text-2xl dark:text-black" className={styles.lineLink}>
                      Services
                    </Link>

                    <ul class="mt-3 space-y-2 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>

                        <Link
                          href="/it-consulting"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200" className={styles.lineLink}
                        >
                          IT consulting
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/custom-software-development"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"className={styles.lineLink}
                        >
                          Custom software development
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/managed-it-services"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200" className={styles.lineLink}
                        >
                          Managed IT services
                        </Link>

                      </li>

                    </ul>
                  </div>

                  <div class=" hover:bg-yellow-400 pr-20 pl-10 py-10">
                  <Link href="/products" class="font-bold text-2xl dark:text-black" className={styles.lineLink}>
                      Products
                    </Link>

                    <ul class="mt-3 space-y-1 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>

                        <Link
                          href="/jobsoid"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"className={styles.lineLink}
                        >
                          Jobsoid
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/ivue-video"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200" className={styles.lineLink}
                        >
                          iVue video
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/adhoc-reporting-platform"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200" className={styles.lineLink}
                        >
                           Rix Adhoc
                        </Link>

                      </li>
                    </ul>
                  </div>

                  <div class=" hover:bg-yellow-400 pr-20 pl-10 py-10">
                  <Link href="/careers" class="font-bold text-2xl dark:text-black" className={styles.lineLink}>
                      Careers
                    </Link>

                    <ul class="mt-3 space-y-1 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                     
                      <li>

                        <Link
                          href="/careers"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200" className={styles.lineLink}
                        >
                          Work culture
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/careers"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200" className={styles.lineLink}
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

              <Link href="/about-us" className={styles.lineLink}>ABOUT US </Link>
            
             
              {showAboutList && (
                <ul>
                  <li>About Us</li>
                  <li>Process</li>
                  <li>Technologies</li>
                  <li>Our Works</li>
                </ul>
              )}

             
              <Link href="/services" className={styles.lineLink}>SERVICES</Link>
              <Link href="/products" className={styles.lineLink}>PRODUCTS</Link>
              <Link href="/careers" className={styles.lineLink}>CAREERS</Link>
              <Link href="/contact" className={styles.lineLink}>CONTACT</Link>

              {showAboutHeading && <h1>ABOUT US</h1>}
              <div className={styles.socialIcons}>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <LinkedinOutlined className={styles.iconStyle}   />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <FacebookFilled className={styles.iconStyle} />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <TwitterOutlined className={styles.iconStyle} />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <InstagramFilled className={styles.iconStyle} />
      </a>
  </div>
             
            </>
          )}
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;