import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PrismAsyncLight } from 'react-syntax-highlighter';
const Highlighter = ({value,language}) => {
    return (
        <SyntaxHighlighter language={language ?? null} style={PrismAsyncLight}>
      {value ?? ''}
    </SyntaxHighlighter>
    );
};

export default Highlighter;