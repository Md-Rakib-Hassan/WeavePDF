import WebViewer from '@pdftron/pdfjs-express';
import { useEffect, useRef, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import TakeReviews from '../../Shared/Reviews/TakeReviews';
import ShowReviews from '../../Shared/Reviews/ShowReviews';

const EditPdf = () => {
    const [doce, setDoce] = useState()
    const [isOn, setIsOn] = useState(false);
    const viewer = useRef(null);
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
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
        setTimeout(() => {
          setIsOn(true)
        }, "60000");
    }
    
  }, [doce]);

    const handleChange = e =>{
      e.preventDefault();
      const file = e.target.files[0];
      const PdfBlob = new Blob([file], { type: 'application/pdf' });
      setDoce(URL.createObjectURL(PdfBlob));
      if(user){
        const date = new Date();
        const user_email = user.email
        const no_of_files = 1
        const service_name = "Edit PDF"
        const status = true

        const service = {  date, user_email, no_of_files, service_name, status}
        axiosPublic.post('/upload-service',service)
      }
    }
    return (
        <div className="MyComponent h-full">
          {!doce ?
          <div>
            <br />
             <h1 className='text-3xl font-playfair font-bold text-center'>Edit your PDF Files here</h1><br />
            <p className='text-center'>Edit PDFs in the order you want with the easiest PDF editor available.</p><br />
            <div className='flex justify-center'>
                <label className='label w-48'>
                <input type="file" accept='application/pdf' onChange={handleChange} name="" id="merge-input" />
                <span className='font-bold text-xl text-white'>Select PDF file</span>
                </label>
            </div>
            
            </div>
            :
          <div>
          <div className="webviewer h-[600px]" ref={viewer}></div>
          <TakeReviews isOn={isOn} setIsOn={setIsOn} uniqueId="edit"></TakeReviews>
          </div>
          } 
          <ShowReviews uniqueId='edit'
        title='Users Feedback'
        subTitle='Our clients have shared their experiences, and their words speak volumes about our dedication to creating unforgettable work. Explore what our clients have to say about their remarkable event experiences with us.'
        ></ShowReviews>
    </div>
    );
};

export default EditPdf;