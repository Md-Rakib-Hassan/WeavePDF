import { useState } from "react";
import Details from "./Details";
import { Tiptap } from "./Tiptap";

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