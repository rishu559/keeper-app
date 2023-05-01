import React, { useState } from "react";
import notes from "../notes.js";
function CreateArea(props) {
  const [item, setItem] = useState({
    title: "",
    content: "",
  });

function refresh(){
    setItem({
        title: "",
        content: "",
      });
}
  function UpdateItem(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  
  return (
    <div>
      <form onSubmit={UpdateItem}>
        <input name="title" placeholder="Title" onChange={UpdateItem} value = {item.title} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value = {item.content}
          onChange={UpdateItem}
        />
        <button
          onClick={() => {
            props.UpdateArr(item);
            refresh();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
