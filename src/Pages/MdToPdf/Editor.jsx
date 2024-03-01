import { useContext, useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import jsPDF from 'jspdf';
import TakeReviews from '../../Shared/Reviews/TakeReviews';
import ShowReviews from '../../Shared/Reviews/ShowReviews';
import Task from '../../Shared/RecentTask/Task';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useCloudinery from '../../hooks/useCloudinery';
import usePremium from '../../hooks/usePremium';
import {useNavigate } from 'react-router-dom';
import { Incon } from './InputContext';
const Editor = () => {
  
  const [isOn, setIsOn] = useState(false);
  const {setInput,input}=useContext(Incon);
  const [previous_work, setPrevious_work] = useState([]);
  const [limited_previous_work, setlimited_Previous_work] = useState([]);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const getFileUrl = useCloudinery();
  const [isPremium] = usePremium();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      axiosPublic.get(`/tasks/${user.email}`)
        .then(res => setPrevious_work(res.data));

      if (previous_work?.length > 8 && limited_previous_work.length == 0) setlimited_Previous_work(previous_work?.slice(0, 8));
      else if (previous_work?.length <= 8 && limited_previous_work.length == 0) setlimited_Previous_work(previous_work);
    }

  }, []);

  useEffect(() => {

      if (previous_work?.length > 8 && limited_previous_work.length == 0) setlimited_Previous_work(previous_work?.slice(0, 8));
      else if (previous_work?.length <= 8 && limited_previous_work.length == 0) setlimited_Previous_work(previous_work);
    

  }, [previous_work]);



  const handlePost = (fileurl) => {
    const date = new Date();
    const user_email = user?.email
    const no_of_files = 1;
    const service_name = "md-to-pdf"
    const file = fileurl
    const status = true

    const service = { date, user_email, no_of_files, service_name, status, file }
    axiosPublic.post('/upload-service', service)
  }

  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#prose"), {
      callback: function (pdf) {
        pdf.save("md-to-pdf.pdf");

        if (user) {
          getFileUrl(pdf).then(res => handlePost(res))
        }

      }

    })
    setIsOn(true);

  }
  return (
    <div className='relative'>
      <Task uid='md-to-pdf' service_name='md-to-pdf' no_of_files={1} isON={isOn} content={input}></Task>
      <TakeReviews isOn={isOn} setIsOn={setIsOn} uniqueId='md-to-pdf'></TakeReviews>

      {input ? <button className='absolute right-2 bg-blue px-2 rounded-md' onClick={generatePDF}>Download Pdf</button> : ''}
      {limited_previous_work?.length>0 ? <div className="dropdown dropdown-right">
        <div className='flex'> 
        <div onClick={()=>setInput('')}  role="button" className="left-2 bg-blue px-2 rounded-md m-2">Clear</div>
        <div tabIndex={0} role="button" className="left-2 bg-blue px-2 rounded-md m-2">Previous Work</div></div>
       
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          {
            limited_previous_work?.map(work => <li key={work._id}><a onClick={() => setInput(work.content)}>{work.date}</a></li>)
          }
          {
            previous_work?.length > 8 ? <li className='font-medium'><a onClick={isPremium ?()=> navigate('/history') :()=> navigate('/user-subscription')}>View more  &gt;&gt; </a></li> : ''
          }


        </ul>

      </div> : ''}
      
      <div className='flex lg:flex-row flex-col' >
        <textarea autoFocus className=' min-h-[100vh] lg:w-1/2 p-4 border bg-neutral-50' value={input} onChange={(e) => setInput(e.target.value)}></textarea>
        <div className='lg:w-1/2 p-4 text-black text-wrap' id='prose'>
          <Markdown
            remarkPlugins={remarkGfm}
            rehypePlugins={[rehypeKatex]}
            children={input}
            className='prose'
            components={{
              code(props) {
                const { children, className, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={vs}
                  />
                ) : (
                  <code {...rest} className={className}>

                  </code>
                )
              }
            }}

          ></Markdown>

        </div>

      </div>

      <ShowReviews uniqueId='md-to-pdf'
        title='Users Feedback'
        subTitle='Our clients have shared their experiences, and their words speak volumes about our dedication to creating unforgettable work. Explore what our clients have to say about their remarkable event experiences with us.'
      ></ShowReviews>



    </div>
  );
};

export default Editor;