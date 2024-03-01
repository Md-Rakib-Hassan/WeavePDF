import  { useState } from "react";
import domtoimage from 'dom-to-image';
import jsPDF from "jspdf";

const HtmlToPdfNew = () => {
  const [url, setUrl] = useState("");

  const generatePdf = async () => {
    try {
      const content = document.getElementById('content-to-convert');

      // Use dom-to-image to capture the content as an image
      const dataUrl = await domtoimage.toPng(content);

      // Check if the dataUrl is not blank
      if (dataUrl === 'data:,') {
        throw new Error('Blank image, unable to generate PDF.');
      }

      // Initialize jsPDF
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Add the captured image to the PDF
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

      // Save the PDF or open in a new tab
      pdf.save('generated-pdf.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={generatePdf}>Generate PDF</button>

      <div id="content-to-convert">
        {/* Your content to be converted to PDF goes here */}
        <iframe title="Webpage Preview" src={url} width="100%" height="500px" />
      </div>
    </div>
  );
};

export default HtmlToPdfNew;
