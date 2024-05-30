import React from "react";

const Input = ({ setInput, setSaveAfter, setNewValue, newValue }) => {


  const handleSave = () => {
    setSaveAfter(prevSaveAfter => [...prevSaveAfter, newValue]);
    setInput(false);
    console.log(newValue);
  };

  const handleCancel = () => {
    setInput(false);
    console.log("helo > ");
  };

  return (
    <div className="afterSave" >
      <input
        type="text"
        placeholder="enter value"
        style={{ width: "90%" }}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Input;
