import Brands from "../Components/Brands";
import FAQ from "../Components/FAQ";
import Features from "../Components/Features";
import FileDropper from "../Components/FileDropper";
import Newsletter from "../Components/Newsletter";
import MessengerCustomerChat from "react-messenger-customer-chat";


const Home = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <FileDropper></FileDropper>
                <Brands></Brands>
                <Features></Features>
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