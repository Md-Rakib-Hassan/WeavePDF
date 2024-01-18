import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-5xl mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;