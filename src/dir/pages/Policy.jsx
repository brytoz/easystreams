import React, { Fragment } from "react";
import { BiFootball } from "react-icons/bi";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function Policy() {
  return (
    <Fragment>
      <Navbar />

      <div className="md:px-32 xl:px-64  mt-6 font-bold text-3xl flex items-center space-x-6 ">
              <BiFootball className="yellow" size={24} />{" "}
              <h1 >Easystreams Terms</h1>{" "}
              <BiFootball className="yellow" size={24} />
            </div>
      <div className="flex justify-center items-center my-8 md:my-12 leading-loose ">
        <div className="flex-wrap justify-center items-center px-6 md:px-32 xl:px-64 space-y-12">
          {/* intro title  */}
          <div className="  flex  justify-center items-center pb-3">
            <div className=" pt-8 md:mt-2 space-y-3 flex-wrap justify-center items-center ">
              <div className="text Bold font-bold text-xl">Terms of Use</div>

              <div className="text-base space-y-3 leading-loose  flex-wrap justify-center items-center">
                <p>
                  We appreciate your interest and your concerns about the
                  privacy of your data on the Internet. This policy has been
                  prepared to help you understand the nature of the data that we
                  collect from you when you visit our website and how we deal
                  with this personal data.
                </p>
              </div>
            </div>
          </div>

          <div className="  flex  justify-center items-center pb-3">
            <div className="  space-y-3 flex-wrap justify-center items-center ">
              <div className="text Bold font-bold text-xl">- Browsing</div>
              <div className="text-base space-y-3 leading-loose  flex-wrap justify-center items-center">
                <p>
                  We did not design this site in order to collect your personal
                  data from your computer while you browse this site, but only
                  the data provided by you will be used with your knowledge and
                  of your own free will.
                </p>
              </div>
            </div>
          </div>
    
          {/* Account Deactivation*/}
          <div className="  flex  justify-center items-center pb-3">
            <div className="  space-y-3 flex-wrap justify-center items-center ">
              <div className="text Bold font-bold text-xl">
                - Internet Protocol (IP) address
              </div>
              <div className="text-base space-y-3 leading-loose  flex-wrap justify-center items-center">
                <p>
                  At any time you visit any website, including this site, the
                  host server will record your Internet Protocol (IP) address,
                  the date and time of the visit, the type of Internet browser
                  you use and the URL of any website that refers you to this
                  site on the web.
                </p>
              </div>
            </div>
          </div>

          {/* account deletion */}
          <div className="  flex  justify-center items-center pb-3">
            <div className="  space-y-3 flex-wrap justify-center items-center ">
              <div className="text Bold font-bold text-xl">- Network scans</div>
              <div className="text-base space-y-3 leading-loose  flex-wrap justify-center items-center">
                <p>
                  The surveys that we do directly on the network enable us to
                  collect specific data such as the data required of you
                  regarding your view and feeling towards our site. Your
                  responses are of utmost importance, and we are appreciated as
                  they enable us to improve the level of our site, and you have
                  complete freedom and choice in providing data related to your
                  name and data. Other.
                </p>
              </div>
            </div>
          </div>

          {/* Geolocation Information */}
          <div className="  flex  justify-center items-center pb-3">
            <div className="  space-y-3 flex-wrap justify-center items-center ">
              <div className="text Bold font-bold text-xl">
                - Links to other sites on the Internet
              </div>
              <div className="text-base space-y-3 leading-loose  flex-wrap justify-center items-center">
                <p>
                  Our site may contain links to other sites on the Internet. Or
                  advertisements from other sites such as Google Advertiseense and we
                  are not responsible for the methods of data collection by
                  those sites. You can view the privacy policies and contents of
                  those sites that are accessed through any link within this
                  site. We may use third-party advertising companies to display
                  Advertise when you visit our website. These companies have the right
                  to use information about your visits to this site and other
                  websites (except for the name, address, e-mail address or
                  phone number), in order to provide advertisements about the
                  goods and services that interest you. If you would like more
                  information on this matter as well as if you would like to
                  know your options for preventing this information from being
                  used by these companies, please{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    click here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="  flex  justify-center items-center pb-3">
            <div className="  space-y-3 flex-wrap justify-center items-center ">
              <div className="text Bold font-bold text-xl">
                - Disclosure of information
              </div>
              <div className="text-base space-y-3 leading-loose  flex-wrap justify-center items-center">
                <p>
                  We will maintain at all times the privacy and confidentiality
                  of all personal data that we obtain. This information will not
                  be disclosed unless it is required by any law or when we
                  believe in good faith that such a procedure will be required
                  or desirable to comply with the law, or to defend or protect
                  the property rights of this site or the beneficiaries of it.
                </p>
              </div>
            </div>
          </div>

          {/* DMCA */}
          <div className="  flex  justify-center items-center pb-3">
            <div className="  space-y-3 flex-wrap justify-center items-center ">
              <div className="text Bold font-bold text-xl">- DMCA</div>
              <div className="text-base space-y-3 leading-loose  flex-wrap justify-center items-center">
                <p>
                  This Website contains only the favorite channels and 3rd party
                  sites are not affiliated in any way responsible for their
                  content that are freely available to all Internet. We. All
                  content is copyright of their respective owners We are on the
                  side of the I -frame link and tick the Embed code. We are not
                  their responsibility.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <span className="rounded-md text-white px-2 py-1 bg-black mr-3">
              Last Updated:
            </span>
            21st December, 2022.
          </div>
        </div>
      </div>
      <Footer />
      <BottomNav />
    </Fragment>
  );
}

export default Policy;
