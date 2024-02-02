import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Editor = () => {

    const [input,setInput]=useState();
    return (
        <div className='flex' >
            <textarea autoFocus className=' min-h-[100vh] w-1/2 p-4 border bg-neutral-50' value={input} onChange={(e)=>setInput(e.target.value)}></textarea>
            <div className='w-1/2 p-4'>
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
    );
};

export default Editor;