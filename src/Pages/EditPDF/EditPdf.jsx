import WebViewer from '@pdftron/pdfjs-express';
import { useEffect, useRef, useState } from 'react';

const EditPdf = () => {
    const [doce, setDoce] = useState()
    const viewer = useRef(null);

  useEffect(() => {
    if(doce){
      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: doce,
        },
        viewer.current,
      ).then((instance) => {
        const { Core } = instance;
        // adding an event listener for when a document is loaded
        Core.documentViewer.addEventListener('documentLoaded', () => {
          console.log('document loaded');
        });
        });
    }
    
  }, [doce]);

    const handleChange = e =>{
      e.preventDefault();
      const file = e.target.files[0];
      const PdfBlob = new Blob([file], { type: 'application/pdf' });
      setDoce(URL.createObjectURL(PdfBlob));
    }
    return (
        <div className="MyComponent h-full">
          <input type="file" accept='pdf' onChange={handleChange} name="" id="" />
          { doce &&
          <div>
            <div className="header">React sample</div>
          <div className="webviewer h-[600px]" ref={viewer}></div>
          </div>
          } 
    </div>
    );
};

export default EditPdf;