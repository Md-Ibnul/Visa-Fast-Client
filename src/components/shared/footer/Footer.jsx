import React from "react";
import "./footer.css";
import logo from '../../../assets/images/Logo-2.png'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-main">
        <div className="footer-bg"></div>
      <footer class="">
        <div class="relative z-30 max-w-screen-xl px-4 pt-20 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div class="flex justify-center text-teal-300 sm:justify-start">
                <img src={logo} alt="" />
              </div>

              <p class=" font-Inter max-w-md mx-auto mt-4 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
            Visa Fast is a Travel Agency Company. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              </p>

              <ul class="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="text-blue-500 text-xl transition hover:text-orange-500 duration-300"
                  >
                    <span class="sr-only">Facebook</span>
                    <FaFacebook />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="text-red-600 text-2xl transition duration-300 hover:text-orange-500"
                  >
                    <span class="sr-only">Instagram</span>
                    <FaYoutube />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="text-white text-xl transition duration-300 hover:text-orange-500"
                  >
                    <span class="sr-only">Twitter</span>
                    <FaXTwitter />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="text-teal-500 text-xl transition duration-300 hover:text-orange-500"
                  >
                    <span class="sr-only">GitHub</span>
                    <FaLinkedin />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <span class="sr-only">Dribbble</span>
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">About Us</p>

                <nav class="mt-8">
                  <ul class="space-y-4 text-sm">
                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Company History
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Meet the Team
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Employee Handbook
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">Our Services</p>

                <nav class="mt-8">
                  <ul class="space-y-4 text-sm">
                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Web Development
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Web Design
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Marketing
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Google Ads
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">Helpful Links</p>

                <nav class="mt-8">
                  <ul class="space-y-4 text-sm">
                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Support
                      </a>
                    </li>

                    <li>
                      <a
                        class="flex group justify-center sm:justify-start gap-1.5"
                        href="https://wa.me/+8801737564236" target="_blank"
                      >
                        <span class="text-white transition group-hover:text-white/75">
                          Live Chat
                        </span>

                        <span class="relative flex w-2 h-2 -mr-2">
                          <span class="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
                          <span class="relative inline-flex w-2 h-2 bg-orange-500 rounded-full"></span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">Contact Us</p>

                <ul class="mt-8 space-y-4 text-sm font-Inter">
                  <li>
                    <a
                      class="flex items-center justify-center sm:justify-start gap-1.5 group"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-white shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span class="text-white transition group-hover:text-white/75">
                        visafastusa@gmail.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="flex items-center justify-center sm:justify-start gap-1.5 group"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-white shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span class="text-white transition group-hover:text-white/75">
                        +88017 3756 4236
                      </span>
                    </a>
                  </li>

                  <li class="flex items-start justify-center gap-1.5 sm:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-white shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address class="-mt-0.5 not-italic text-white">
                      44/F/8A West Panthapath, Dhaka-1215
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="pt-6 mt-12 border-t border-gray-800">
            <div class="text-center sm:flex sm:justify-between sm:text-left">
              <p class="text-sm text-gray-400">
                <span class="block sm:inline">All rights reserved.</span>

                <a
                  class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                  href="/"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                  href="/"
                >
                  Privacy Policy
                </a>
              </p>

              <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2023 Visa Fast
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
