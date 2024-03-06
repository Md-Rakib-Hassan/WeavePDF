
const Landing = () => {
    return (
        <div>
            <div className='text-center lg:text-left lg:flex justify-center items-center px-5 lg:px-20 py-5 lg:py-10'>
                <div className="lg:w-1/3">
                <h1 className="text-4xl lg:text-5xl font-bold">Powerful PDF<br />  Tools Made <span className="text-aqua_marine">Simple.</span></h1><br />
                <p>Say goodbye to complicated software & hello to easy-to-use PDF tools. Edit, merge, convert, split, sign & sign your documents and many more in just a few clicks.</p>
                <div className="py-6">
                    <a href="#tools"><button className="btn border-[#52ab98] text-black font-bold w-3/4 animate-pulse">Explore</button></a>
                </div>
                </div>
                <div className="lg:w-2/3">
                    <img src="/src/images/home.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Landing;