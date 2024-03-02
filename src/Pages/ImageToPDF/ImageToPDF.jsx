import { useRef, useState } from "react";
import { saveAs } from "file-saver";
import { Page, Image, pdf, Document, StyleSheet } from '@react-pdf/renderer';
import TakeReviews from '../../Shared/Reviews/TakeReviews';
import ShowReviews from "../../Shared/Reviews/ShowReviews";


// Create styles
const styles = StyleSheet.create({
    image: {
        padding: '20px',
        marginTop: '20px'
    },
});

const ImageToPDF = () => {

  
    const fileInputRef = useRef(null);
    const [isOn, setIsOn] = useState(false);


    const convertToPDF = async () => {
        const files = fileInputRef.current.files;
        const images = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (event) => {
                images.push(event.target.result);

                if (images.length === files.length) {
                    generatePDF(images);
                    fileInputRef.current.value = "";
                }
            };

            reader.onerror = (error) => {
                console.log("Error reading file", error);
            };

            reader.readAsDataURL(file);
        }
    };
    const generatePDF = async (images) => {
        try {
            const doc = (
                <Document>
                    {images.map((img, index) => (
                        <Page key={index}>
                            <Image src={img} style={styles.image} />
                        </Page>
                    ))}
                </Document>
            );

            const asPdf = pdf();
            asPdf.updateContainer(doc);
            const pdfBlob = await asPdf.toBlob();
            saveAs(pdfBlob, 'convertImgToPDF.pdf');
            setIsOn(true);

        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <>
            <div className="container mx-auto overflow-hidden my-20">
                <TakeReviews isOn={isOn} setIsOn={setIsOn} uniqueId='img-to-pdf'></TakeReviews>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center p-5 shadow-2xl lg:w-3/4 xl:w-1/2">
                        <h1 className="my-5 text-3xl lg:text-5xl font-bold text-center">Image To PDF</h1>
                        <h2 className="my-5 text-xl lg:text-3xl font-semibold text-center">Convert images to PDF in seconds. Easily adjust orientation and margins.</h2>
                        <input
                            type="file"
                            ref={fileInputRef}
                            multiple
                            className="text-lg lg:text-xl font-semibold my-5"
                        />
                        <button
                            onClick={convertToPDF}
                            className="w-3/5 px-5 py-3 mt-5 mb-10 bg-blue text-black text-lg lg:text-xl  font-semibold rounded-md transition-transform transform hover:scale-110 focus:outline-none"
                        >
                            Convert To PDF
                        </button>
                        {/* <div className="my-10 w-full">
                            <div className="flex justify-center items-center">

                            </div>
                        </div>
                        <div className="flex justify-center items-center">

                        </div> */}
                    </div>
                </div>
            </div>
            <ShowReviews uniqueId='md-to-pdf'
                title='Users Feedback'
                subTitle='Our clients have shared their experiences, and their words speak volumes about our dedication to creating unforgettable work. Explore what our clients have to say about their remarkable event experiences with us.'
            ></ShowReviews>
        </>
    );
};

export default ImageToPDF;
