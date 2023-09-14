import React from "react";
import "./Footer.module.css";
function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="flex space-x-72">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                Who we are
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="http://localhost:3000/about-us/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="http://localhost:3000/careers"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    href="http://localhost:3000/our-works/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Our Works
                  </a>
                </li>

                <li>
                  <a
                    href="http://localhost:3000/blog/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                What we do
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="http://localhost:3000/services/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Strategy
                  </a>
                </li>

                <li>
                  <a
                    href="http://localhost:3000/services/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Design
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Development
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3000/services/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Lifecycle
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                How we do
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="http://localhost:3000/process/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Teknorix Flow
                  </a>
                </li>

                <li>
                  <a
                    href="http://localhost:3000/technologies/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Technologies
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                Our Products
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="http://localhost:3000/products/jobsoid"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Jobsoid
                  </a>
                </li>

                <li>
                  <a
                    href="http://localhost:3000/products/ivue-video"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    iVue Video
                  </a>
                </li>

                <li>
                  <a
                    href="http://localhost:3000/products/adhoc-reporting-platform"
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
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; 2022. Teknorix. All rights reserved.
            </p>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  href="https://www.instagram.com/teknorix/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/teknorix"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/teknorix"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/teknorix/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">LinkedIn</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi biLinkedin"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
                  </svg>
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
