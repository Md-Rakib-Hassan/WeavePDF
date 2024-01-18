import Brands from "../Components/Brands";
import FAQ from "../Components/FAQ";
import Features from "../Components/Features";
import FileDropper from "../Components/FileDropper";


const Home = () => {
    return (
        <div>
            <FileDropper></FileDropper> 
            <Brands></Brands>  
            <Features></Features> 
            <FAQ></FAQ>        
        </div>
    );
};

export default Home;