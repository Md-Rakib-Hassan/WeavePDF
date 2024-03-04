import Marquee from "react-fast-marquee";

const Brands = () => {
    const grayscaleStyle = {
        filter: 'grayscale(100%) opacity(0.6)',
    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-center text-[40px] font-bold pt-20'>Our Tools are trusted by 5000+ Company</h1>
            <br />
            <Marquee>
                <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-8 py-20'>
                    <div><img className='w-28 h-20' style={grayscaleStyle} src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png" alt="google-logo" /></div>
                    <div><img className='w-28 h-20' style={grayscaleStyle} src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-768x432.png" alt="google-logo" /></div>
                    <div><img className='w-28 h-20' style={grayscaleStyle} src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-768x432.png" alt="google-logo" /></div>
                    <div><img className='w-28 h-20' style={grayscaleStyle} src="https://1000logos.net/wp-content/uploads/2017/06/Unilever-Logo-768x582.png" alt="google-logo" /></div>
                    <div><img className='w-28 h-20' style={grayscaleStyle} src="https://1000logos.net/wp-content/uploads/2021/03/UNICEF-logo-768x432.png" alt="google-logo" /></div>
                    <div><img className='w-32 h-20' style={grayscaleStyle} src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png" alt="google-logo" /></div>
                    <div><img className='w-32 h-20' style={grayscaleStyle} src="https://1000logos.net/wp-content/uploads/2017/04/Microsoft-Logo-768x251.png" alt="google-logo" /></div>
                    <div><img className='w-28 h-20' style={grayscaleStyle} src="https://1000logos.net/wp-content/uploads/2017/02/Hilton-logo-640x504.png" alt="google-logo" /></div>
                </div>
            </Marquee>
        </div>
    );
};

export default Brands;
