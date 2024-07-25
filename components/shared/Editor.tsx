"use client";

import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";
import { useMemo } from "react";
import ReactQuill from "react-quill";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

const Editor = ({ value, onChange }: EditorProps) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="h-[65vh] mb-6 whitespace-pre-wrap"
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    [{ font: [] }],
    ["clean"],
    [{ align: [] }],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
];
