import { useEffect, useState } from 'react';
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
const Editor = () => {
    const [isOn,setIsOn]=useState(false);
    const [input,setInput]=useState();
    const [previous_work,setPrevious_work]=useState([]);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    useEffect(()=>{
      if(user){
        axiosPublic.get(`/tasks/${user.email}`)
        .then(res=>setPrevious_work(res.data));
      }

    },[axiosPublic,user]);

    console.log(previous_work);
    
    const generatePDF=()=>{
      const doc= new jsPDF("p","pt","a4");
      doc.html(document.querySelector("#prose"),{
        callback: function(pdf){
          pdf.save("md-to-pdf.pdf");
        }
        
      })
      setIsOn(true);

    }
    return (
      <div className='relative'>
          <Task uid='md-to-pdf' service_name='md-to-pdf' no_of_files={1} isON={isOn} content={input}></Task>
         <TakeReviews isOn={isOn} uniqueId='md-to-pdf'></TakeReviews>

        {input ? <button className='absolute right-2 bg-blue px-2 rounded-md' onClick={generatePDF}>Download Pdf</button>:''}
        <div className='flex lg:flex-row flex-col' >
            <textarea autoFocus className=' min-h-[100vh] lg:w-1/2 p-4 border bg-neutral-50' value={input} onChange={(e)=>setInput(e.target.value)}></textarea>
            <div className='lg:w-1/2 p-4 text-black text-wrap' id='prose'>
                <Markdown 
                remarkPlugins={remarkGfm}
                rehypePlugins={[rehypeKatex]}
                children={input}
                className='prose'
                components={{
                    code(props) {
                      const {children, className, ...rest} = props
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