import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import {
  MenuOutlined,
  LinkedinOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
  CaretRightOutlined 
} from "@ant-design/icons";
import Link from "next/link";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showAboutHeading, setShowAboutHeading] = useState(true);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [isMenuExpanded, setIsMenuExpanded] = useState(false); // State for the menu expansion
  const [openMenu, setOpenMenu] = useState(null); // Track the open main menu
  const [showAboutList, setShowAboutList] = useState(false);
  const handleMenuClick = () => {
    setIsMenuExpanded(!isMenuExpanded);
    setNavbarBackground(!navbarBackground);
  };
  // const toggleBodyScrollbar = () => {
  //   document.body.style.overflowY = expanded ? "hidden" : "auto";
  // };
  const handleMainLinkClick = (menu) => {
    if (window.scrollY > window.innerHeight / 2) {
      if (openMenu === menu) {
        setOpenMenu(null); // Clicking on the same main link closes the list

      } else {
        setOpenMenu(menu); // Clicking on a different main link opens its list
      }
    }
  };

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

    handleScroll(); // Call it initially to set the correct state
    // toggleBodyScrollbar(); // Set body scrollbar initially based on expanded state

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // toggleBodyScrollbar(); // Reset the body scrollbar when the component unmounts
    };
  }, [expanded]);

  return (
    <div
      className={`${styles.sidebar} ${expanded ? styles.expanded : ""} ${
        scrolling ? styles.scrolling : ""
      } ${isMenuExpanded ? styles.menuExpanded : ""}`}
    >
      <div className={`bg-${navbarBackground} h-screen shadow-lg lg:shadow-xl`}>
      <div className="bg-transparent flex justify-between items-center p-5 border-r border-gray-300">
          <Link href="/">
            <Image
              src="https://www.teknorix.com/wp-content/uploads/2019/01/teknorix-logo.svg"
              width="180"
              height="42" 
              className="w-36 h-8" 
            />
          </Link>
          <div
            className={styles.hamburgerIcon}
            onClick={() => setIsMenuExpanded(!isMenuExpanded)}
          >
        <MenuOutlined
  onClick={() => {
    if (isMenuExpanded) {
      setNavbarBackground("transparent"); // Set to transparent when menu is expanded
    } else {
      setNavbarBackground("white"); // Set to white when menu is not expanded
    }
    setIsMenuExpanded(!isMenuExpanded); // Toggle the menu
    // toggleBodyScrollbar();
  }}
/>
          </div>{" "}
        </div>
        <nav
          className={`${styles.nav} ${expanded ? styles.expanded : ""}`}
          style={{ overflowY: "hidden" }}
        >
          {isMenuExpanded ? (
          <div className="mx-auto max-w-screen-xl px-4 py-16 overflow-hidden">
              <div className="lg:flex lg:items-start lg:gap-8">
                <div className="flex space-x-2">
                  <div class=" hover:bg-yellow-400 pr-20 pl-10 py-10">
                    <Link
                      href="/about-us"
                      class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      className={styles.lineLink}
                      onClick={handleMenuClick}
                    >
                    About us 
                    </Link>

                    <ul class="mt-3 space-y-1 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>
                        <Link
                          href="/about-us"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          About us{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/process"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          Process
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/technologies"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          Technologies
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-works"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          Our Works
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className=" hover:bg-yellow-400 pr-1 pl-10 py-10">
                    <Link
                      href="/services"
                      class="font-bold text-2xl dark:text-black"
                      className={styles.lineLink}
                      onClick={handleMenuClick}
                    >
                      Services
                    </Link>

                    <ul class="mt-3 space-y-2 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>
                        <Link
                          href="/services/it-consulting/"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          IT consulting
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/custom-software-development/"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          Custom software development
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/managed-it-services/"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          Managed IT services
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div class=" hover:bg-yellow-400 pr-20 pl-10 py-10">
                    <Link
                      href="/products"
                      class="font-bold text-2xl dark:text-black"
                      className={styles.lineLink}
                      onClick={handleMenuClick}
                    >
                      Products
                    </Link>

                    <ul class="mt-3 space-y-1 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>
                        <Link
                          href="/products/jobsoid/"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          Jobsoid
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/products/ivue-video/"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          iVue video
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/adhoc-reporting-platform/"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          Rix Adhoc
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div class=" hover:bg-yellow-400 pr-20 pl-10 py-10">
                    <Link
                      href="/careers"
                      class="font-bold text-2xl dark:text-black"
                      className={styles.lineLink}
                      onClick={handleMenuClick}
                    >
                      Careers
                    </Link>

                    <ul class="mt-3 space-y-1 text-sm text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      <li>
                        <Link
                          href="/careers"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
                        >
                          Work culture
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/careers"
                          class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                          className={styles.lineLink}
                          onClick={handleMenuClick}
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
              <Link
                href="/about-us"
                className={styles.lineLink}
                onClick={() => handleMainLinkClick("about")}
              >
                ABOUT US
              </Link>

              {showAboutList && openMenu === "about" && (
                <ul className={styles.subMenu}>
                  <li>
                    <Link href="/about-us" className={styles.lineLink}>
                    <CaretRightOutlined />About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/process" className={styles.lineLink}>
                    <CaretRightOutlined /> Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/technologies" className={styles.lineLink}>
                    <CaretRightOutlined />Technologies
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-works" className={styles.lineLink}>
                    <CaretRightOutlined />  Our Works
                    </Link>
                  </li>
                </ul>
              )}

              <Link
                href="/services"
                className={styles.lineLink}
                onClick={() => handleMainLinkClick("services")}
              >
                SERVICES
              </Link>
              {showAboutList && openMenu === "services" && (
                <ul className={styles.subMenu}>
                  <li>
                    <Link
                      href="/services/it-consulting/"
                      className={styles.lineLink}
                    >
                    <CaretRightOutlined />  IT consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/custom-software-development/"
                      className={styles.lineLink}
                    >
                    <CaretRightOutlined />  Custom software development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/managed-it-services/"
                      className={styles.lineLink}
                    >
                    <CaretRightOutlined />  Managed IT services
                    </Link>
                  </li>
                </ul>
              )}
              <Link
                href="/products"
                className={styles.lineLink}
                onClick={() => handleMainLinkClick("products")}
              >
                PRODUCTS
              </Link>
              {showAboutList && openMenu === "products" && (
                <ul className={styles.subMenu}>
                  <li>
                    <Link href="/products/jobsoid/" className={styles.lineLink}>
                    <CaretRightOutlined />   Jobsoid
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/ivue-video/"
                      className={styles.lineLink}
                    >
                    <CaretRightOutlined />  iVue video
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/adhoc-reporting-platform/"
                      className={styles.lineLink}
                    >
                    <CaretRightOutlined />  Rix Adhoc
                    </Link>
                  </li>
                </ul>
              )}
              <Link
                href="/careers"
                className={styles.lineLink}
                onClick={() => handleMainLinkClick("careers")}
              >
                CAREERS
              </Link>
              {showAboutList && openMenu === "careers" && (
                <ul className={styles.subMenu}>
                  <li>
                    <Link href="/careers" className={styles.lineLink}>
                    <CaretRightOutlined />   Work culture
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className={styles.lineLink}>
                    <CaretRightOutlined />   Join our team
                    </Link>
                  </li>
                </ul>
              )}
              <Link href="/contact" className={styles.lineLink}>
                CONTACT
              </Link>

              {showAboutHeading && <h1>ABOUT US</h1>}
              <div className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/company/teknorix/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinOutlined className={styles.iconStyle} />
                </a>
                <a
                  href="https://www.facebook.com/teknorix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookFilled className={styles.iconStyle} />
                </a>
                <a
                  href="https://twitter.com/teknorix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterOutlined className={styles.iconStyle} />
                </a>
                <a
                  href="https://www.instagram.com/teknorix/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
