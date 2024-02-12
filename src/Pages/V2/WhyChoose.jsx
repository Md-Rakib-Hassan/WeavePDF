import {  FcBullish, FcCollaboration, FcClock, FcConferenceCall, FcCurrencyExchange, FcPrivacy  } from "react-icons/fc";

const WhyChoose = () => {
  return (
    <div className="max-w-7xl mx-auto py-28 p-2">
      <h1 className="text-[34px] font-bold text-center py-6 pb-14">
        Why Choose Weave PDF?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <FcConferenceCall   className="text-[80px]" />
          <h1 className="font-bold text-xl py-3">People Trust Us</h1>
          <p>
            Over a billion users have used our service to simplify their work
            with digital documents.
          </p>
        </div>
        <div>
          <FcBullish  className="text-[80px]" />
          <h1 className="font-bold text-xl py-3">Businesses Trust Us</h1>
          <p>
          We’re one of the highest-rated PDF software on major B2B software listing platforms: Capterra, G2, and TrustPilot.
          </p>
        </div>
        <div>
          <FcCollaboration   className="text-[80px]" />
          <h1 className="font-bold text-xl py-3">Our Partners Trust Us</h1>
          <p>
          Unlock bonus features with the Smallpdf Chrome Extension, Google Workspace, and Dropbox App—all free to use.
          </p>
        </div>
        <div>
          <FcClock className="text-[80px]" />
          <h1 className="font-bold text-xl py-3">24/7 Customer Support</h1>
          <p>
          Get all the help you need with our round-the-clock customer support.
          </p>
        </div>
        <div>
          <FcCurrencyExchange  className="text-[80px]" />
          <h1 className="font-bold text-xl py-3">256-Bit TLS Encryption</h1>
          <p>
          We use 256-bit TLS encryption for secure information transfer.
          </p>
        </div>
        <div>
          <FcPrivacy  className="text-[80px]" />
          <h1 className="font-bold text-xl py-3">Security Standards</h1>
          <p>
          Your safety is our priority. Smallpdf is ISO/IEC 27001 certified and GDPR, CCPA, and nFADP compliant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
