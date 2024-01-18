import Brands from "../Components/Brands";
import FAQ from "../Components/FAQ";
import Features from "../Components/Features";
import FileDropper from "../Components/FileDropper";
import Newsletter from "../Components/Newsletter";


const Home = () => {
    return (
        <div>
            <FileDropper></FileDropper> 
            <Brands></Brands>  
            <Features></Features> 
            <FAQ></FAQ>    
            <Newsletter></Newsletter>    
        </div>
    );
};

export default Home;