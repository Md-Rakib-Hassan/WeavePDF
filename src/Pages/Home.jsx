import Brands from "../Components/Brands";
import FAQ from "../Components/FAQ";
import Features from "../Components/Features";
import FileDropper from "../Components/FileDropper";
import Newsletter from "../Components/Newsletter";


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

        </>

    );
};

export default Home;