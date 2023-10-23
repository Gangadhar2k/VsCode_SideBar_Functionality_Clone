import React, { useState } from "react";

const SideBar = ({ handelInsertion, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  const handelShowINput = (e, isFolder) => {
    setExpand(true);
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder
    });
  };

  const handelAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value.trim().length > 0) {
      // console.log(explorer);
      handelInsertion(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder" onClick={handleExpand}>
          <span>📁{explorer.name}</span>
          <span>
            <button onClick={(e) => handelShowINput(e, true)}>📁</button>
            <button onClick={(e) => handelShowINput(e, false)}>📄</button>
          </span>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 10 }}>
          {showInput.visible && (
            <div className="input__field">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="input_field"
                autoFocus
                onKeyDown={handelAddFolder}
                onBlur={(e) => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return (
              <SideBar
                handelInsertion={handelInsertion}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        <span>📄{explorer.name}</span>
      </div>
    );
  }
};

export default SideBar;
