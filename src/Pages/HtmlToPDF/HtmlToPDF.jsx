

const HtmlToPDF = () => {
    return (
        <div className="hero min-h-[70vh] bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">HTML to PDF</h1>
                    <p className="py-4">Transform web pages into PDF files with precision and reliability.</p>
                    <label htmlFor="my_modal_6" className="buttonProject3">Add HTML to get Started </label>
                </div>
            </div>


            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn font-bold ">X</label>
                    </div>
                    <h1 className="text-center text-2xl font-bold">Add HTML to convert from</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <span className="label-text my-3 font-bold">Write the website URL</span>
                            <input type="text" placeholder="Website Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <button className="buttonProject3 w-2/5 mx-auto">Convert To PDF</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default HtmlToPDF;