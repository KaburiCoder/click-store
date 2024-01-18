export const toolbarOptions = [
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ header: 1 }, { header: 2 }, "blockquote", "code-block"],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }, { align: [] }], // text direction
  ["clean"], // remove formatting button
];
