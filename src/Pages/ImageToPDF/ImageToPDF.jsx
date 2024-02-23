import { useRef } from "react";
import { saveAs } from "file-saver";
import { Page, Image, pdf, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    image: {
        padding: '20px',
        marginTop: '20px'
    },
});

const ImageToPDF = () => {

    const fileInputRef = useRef(null);


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

        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <>
            <div className="container mx-auto my-28 p-5">
                <div className="flex flex-col justify-center items-center p-5 shadow-2xl my-10">
                    <h1 className="my-5 text-5xl font-bold">Image To PDF</h1>
                    <h2 className="my-5 text-3xl font-semibold">Convert images to PDF in seconds. Easily adjust orientation and margins.</h2>
                    <div className="my-10">
                        <input
                            type="file"
                            ref={fileInputRef}
                            multiple
                            className="text-3xl font-semibold"
                        />
                        <button
                            onClick={convertToPDF}
                            className="px-5 py-3 bg-blue text-black text-3xl font-semibold rounded-md transition-transform transform hover:scale-110 focus:outline-none"
                        >
                            Convert To PDF
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageToPDF;
