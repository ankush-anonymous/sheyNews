import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({ setValue }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div>
      <JoditEditor ref={editor} onChange={(content) => setValue(content)} />
    </div>
  );
};

export default RichTextEditor;
