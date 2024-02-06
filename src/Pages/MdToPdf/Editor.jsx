import React, { useCallback, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import jsPDF from 'jspdf';
const Editor = () => {

    const [input,setInput]=useState();
    const generatePDF=()=>{
      const doc= new jsPDF("p","pt","a4");
      doc.html(document.querySelector("#prose"),{
        callback: function(pdf){
          pdf.save("md-to-pdf.pdf");
        }
      })

    }
    return (
      <div className='relative'>
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
        </div>
    );
};

export default Editor;