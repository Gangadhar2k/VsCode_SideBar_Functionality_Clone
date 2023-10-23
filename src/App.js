import "./styles.css";
import SideBar from "./component/SideBar";
import fileStructure from "./data/fileStructure";
import { useState } from "react";
import useTraverse from "./Hooks/useTraverse";
export default function App() {
  const [file, setFile] = useState(fileStructure);
  const { insertNode } = useTraverse();

  const handelInsertion = (folderId, item, bool) => {
    // console.log(folderId, item, bool);
    const finalTree = insertNode(file, folderId, item, bool);
  };
  // console.log(file);
  return (
    <div>
      <SideBar explorer={file} handelInsertion={handelInsertion} />
    </div>
  );
}
