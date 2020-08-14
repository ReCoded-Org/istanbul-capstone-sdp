import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({}) => {
  const editor = useRef(null);
  const [config, setConfig] = useState({
    readonly: false,
    toolbar: true,
  });

  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaChange = (newTextAreaValue) => {
    console.log("handleTextAreaChange", newTextAreaValue);
    return setTextAreaValue(() => newTextAreaValue);
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        config={config}
        tabIndex={1} // tabIndex of textarea
        // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        // onChange={(newContent) => {}}
        onChange={handleTextAreaChange}
        value={textAreaValue}
      />
    </div>
  );
};

export default TextEditor;
