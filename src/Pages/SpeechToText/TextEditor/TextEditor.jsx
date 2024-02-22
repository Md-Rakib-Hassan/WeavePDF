import { useState } from "react";
import Tiptap from "./Tiptap";
import Details from "./Details";

const TextEditor = () => {
    const [description, setDescription] = useState("");

    return (
        <div className="App">
            <Tiptap setDescription={setDescription} />
            <Details description={description} />
        </div>
    );
}

export default TextEditor;