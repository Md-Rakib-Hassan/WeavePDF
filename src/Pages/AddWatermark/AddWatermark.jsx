import  { useState } from 'react';
import { PDFDocument, rgb, degrees } from 'pdf-lib';

const AddWatermark = () => {
  const [file, setFile] = useState(null);
  const [watermarkText, setWatermarkText] = useState('');
  const [watermarkSize, setWatermarkSize] = useState(50);
  const [watermarkColor, setWatermarkColor] = useState({ r: 0.5, g: 0.5, b: 0.5 });
  const [rotationAngle, setRotationAngle] = useState(0);
  const [modifiedPdfUrl, setModifiedPdfUrl] = useState('');

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleWatermarkTextChange = (event) => {
    setWatermarkText(event.target.value);
  };

  const handleWatermarkSizeChange = (event) => {
    setWatermarkSize(parseInt(event.target.value));
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    const [r, g, b] = color.substring(1).match(/.{1,2}/g).map((val) => parseInt(val, 16) / 255);
    setWatermarkColor({ r, g, b });
  };

  const handleRotationChange = (event) => {
    setRotationAngle(parseInt(event.target.value));
  };

  const addWatermark = async () => {
    if (!file) {
      alert('Please upload a PDF file.');
      return;
    }

    const reader = new FileReader();

    reader.onload = async (event) => {
      const pdfBytes = new Uint8Array(event.target.result);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();

      pages.forEach((page) => {
        const { width, height } = page.getSize();
        const radians = (rotationAngle * Math.PI) / 180;
        const rotation = degrees(radians);

        page.drawText(watermarkText, {
          x: width / 2,
          y: height / 2,
          size: watermarkSize,
          color: rgb(watermarkColor.r, watermarkColor.g, watermarkColor.b),
          rotate: rotation,
          opacity: 0.5, // example opacity
        });
      });

      const modifiedPdfBytes = await pdfDoc.save();
      const modifiedPdfUrl = URL.createObjectURL(new Blob([modifiedPdfBytes], { type: 'application/pdf' }));
      setModifiedPdfUrl(modifiedPdfUrl);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h2>Add Watermark to PDF</h2>
      <div>
        <input type="file" onChange={handleFileChange} accept="application/pdf" />
        {file && <p>File selected: {file.name}</p>}
      </div>
      <div>
        <label>Watermark Text:</label>
        <input type="text" value={watermarkText} onChange={handleWatermarkTextChange} />
      </div>
      <div>
        <label>Watermark Size:</label>
        <input type="number" value={watermarkSize} onChange={handleWatermarkSizeChange} />
      </div>
      <div>
        <label>Watermark Color:</label>
        <input type="color" value={`#${Math.floor(watermarkColor.r * 255).toString(16).padStart(2, '0')}${Math.floor(watermarkColor.g * 255).toString(16).padStart(2, '0')}${Math.floor(watermarkColor.b * 255).toString(16).padStart(2, '0')}`} onChange={handleColorChange} />
      </div>
      <div>
        <label>Rotation Angle (degrees):</label>
        <input type="number" value={rotationAngle} onChange={handleRotationChange} />
      </div>
      <div>
        <button onClick={addWatermark}>Add Watermark</button>
      </div>
      {modifiedPdfUrl && (
        <div>
          <h3>Modified PDF with Watermark</h3>
          <iframe src={modifiedPdfUrl} width="100%" height="600px" title="Modified PDF"></iframe>
          <a href={modifiedPdfUrl} download="modified_pdf_with_watermark.pdf">Download Modified PDF</a>
        </div>
      )}
    </div>
  );
};

export default AddWatermark;
