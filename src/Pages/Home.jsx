import Brands from "../Components/Brands";
import FAQ from "../Components/FAQ";
// import Features from "../Components/Features";
import FileDropper from "../Components/FileDropper";
import Newsletter from "../Components/Newsletter";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Banner from "./V2/Banner";
import MostPopularPDF from "./V2/MostPopularPDF";
import PlansPricing from "./V2/PlansPricing";
import WhyChoose from "./V2/WhyChoose";
import TryWeavePDF from "./V2/TryWeavePDF";
import SimpleTask from "./V2/SimpleTask";
import GetMobile from "./V2/GetMobile";
import Landing from "../Components/Landing";

const Home = () => {

    return (
        <>
            {/* <FileDropper></FileDropper> */}
            <Landing></Landing>
            <div className="max-w-7xl mx-auto">
                <Banner />
                <MostPopularPDF />
                <SimpleTask />
                <GetMobile />
                {/* <Features></Features> */}
                <Brands></Brands>
                <PlansPricing />
                <WhyChoose />
                <TryWeavePDF />
                <FAQ></FAQ>
            </div>
            <Newsletter></Newsletter>
            <MessengerCustomerChat
                pageId="102878114526702"
                appId="889999869341760"
            // htmlRef="<REF_STRING>"
            />
        </>

    );
};

export default Home;
