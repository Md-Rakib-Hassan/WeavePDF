import WebViewer from '@pdftron/pdfjs-express';
import { useEffect, useRef, useState } from 'react';

const EditPdf = () => {
    const [doce, setDoce] = useState()
    const viewer = useRef(null);

  
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