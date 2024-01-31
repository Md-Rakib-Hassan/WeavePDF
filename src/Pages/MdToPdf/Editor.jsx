import React, { useState } from 'react';
import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeKatex from 'rehype-katex'
import parse from 'html-react-parser';
const Editor = () => {
    const remarkPlugins = [remarkToc]
    const [input,setInput]=useState();
    return (
        <div className='flex' >
            <textarea autoFocus className=' w-1/2 h-[100vh] p-4' value={input} onChange={(e)=>setInput(e.target.value)}></textarea>
            {/* <div className='w-1/2 h-[100vh] p-4'> */}
                <Markdown remarkPlugins={remarkPlugins} rehypePlugins={[rehypeKatex]} className='prose'>{input}</Markdown>
            {/* </div> */}
            
        </div>
    );
};

export default Editor;