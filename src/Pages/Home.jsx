import Brands from "../Components/Brands";
import Features from "../Components/Features";
import FileDropper from "../Components/FileDropper";


const Home = () => {
    return (
        <div>
            <FileDropper></FileDropper> 
            <Brands></Brands>  
            <Features></Features>         
        </div>
    );
};

export default Home;