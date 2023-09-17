import React from "react";
import "./Footer.module.css";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16">
            {/* Footer content for "Who we are" */}
            <div className="sm:w-1/4">
              <p className="font-medium text-gray-900 dark:text-white">
                Who we are
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="/about-us/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/our-works/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Our Works
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer content for "What we do" */}
            <div className="sm:w-1/4">
              <p className="font-medium text-gray-900 dark:text-white">
                What we do
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="/services/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Strategy
                  </a>
                </li>
                <li>
                  <a
                    href="/services/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Design
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Lifecycle
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer content for "How we do" */}
            <div className="sm:w-1/4">
              <p className="font-medium text-gray-900 dark:text-white">
                How we do
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="/process/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Teknorix Flow
                  </a>
                </li>
                <li>
                  <a
                    href="/technologies/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Technologies
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer content for "Our Products" */}
            <div className="sm:w-1/4">
              <p className="font-medium text-gray-900 dark:text-white">
                Our Products
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="/products/jobsoid"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Jobsoid
                  </a>
                </li>
                <li>
                  <a
                    href="/products/ivue-video"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    iVue Video
                  </a>
                </li>
                <li>
                  <a
                    href="/products/adhoc-reporting-platform"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Rix Adhoc
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between sm:items-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; 2022. Teknorix. All rights reserved.
            </p>

            {/* Social media links */}
            <ul className="mt-4 sm:mt-0 sm:flex sm:gap-6 lg:gap-0">
              <li>
                <a
                  href="https://www.instagram.com/teknorix/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/teknorix"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/teknorix"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/teknorix/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
