

const Newsletter = () => {
    return (
        <>
            <div className='py-16 bg-blue mt-10 text-slate-400'>
                <h1 className=' text-3xl font-bold text-center uppercase'>Get more updates...</h1><br />
                <p className='text-2xl text-center'>Subscribe to our newsletter for updates and special offer </p><br />
                <form className='px-5 lg:px-0 flex-1 flex justify-center items-center'>
                    <div>
                        <input type="text" placeholder="Your Email" name="email" className="w-[300px] px-5 py-2" />
                    </div>
                    <div>
                        <button type="submit" className="px-5 py-2 bg-teal text-white">Subscribe</button>
                    </div>
                </form>
            </div>
        </>

    );
};

export default Newsletter;