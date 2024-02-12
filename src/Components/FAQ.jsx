

const FAQ = () => {
    return (
        <div className="py-20">
            <h1 className=' text-[30px] md:text-3xl font-bold text-center'>Frequently Asked Question</h1>
            <br /><br />
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
            <div className="collapse-title my-4 text-xl font-medium">
            What is an electronic signature?
            </div>
            <div className="collapse-content"> 
                <p>An electronic signature is defined as "data in electronic form which is attached to or logically associated with other data in electronic form and which is used by the signatory to sign" </p>
            </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 my-5">
            <div className="collapse-title my-4 text-xl font-medium">
            What types of documents can be signed electronically?            </div>
            <div className="collapse-content"> 
                <p>When you need to request a signature, it's most common to use a PDF or Microsoft Word document, but there are many other file types that support digital signing. They can include: XLS and XLSX. PPT and PPTX.e</p>
            </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
            <div className="collapse-title my-4 text-xl font-medium">
            Is an electronic signature legally binding?            </div>
            <div className="collapse-content"> 
                <p>Electronic signatures hold up in court since they are legal signatures. The Electronic Signatures in Global and National Commerce Act, otherwise known as the E-Sign Act, states that electronic signatures shouldn't be considered invalid simply because they're electronic.</p>
            </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 my-5">
            <div className="collapse-title my-4 text-xl font-medium">
            How secure are electronic signatures?            </div>
            <div className="collapse-content"> 
                <p>Digital signatures are secure and impossible to forge. Because they are based on asymmetric cryptography, they have a private key that only the signatory knows and a public key that everyone can see; both are produced using a public key algorithm.</p>
            </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
            <div className="collapse-title my-4 text-xl font-medium">
            How does the signing process work?            </div>
            <div className="collapse-content"> 
                <p>When a signer electronically signs a document, the signature is created using the signer's private key, which is always securely kept by the signer. The mathematical algorithm acts like a cipher, creating data matching the signed document, called a hash, and encrypting that data.</p>
            </div>
            </div>
        </div>
    );
};

export default FAQ;