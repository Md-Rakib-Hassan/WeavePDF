import parse from "html-react-parser";


const Details = ({ description }) => {
    return (
        <div id='previewDownload'>
            <div className="ProseMirror">{parse(description)}</div>
        </div>
    );
};

export default Details;