import React, { useState } from "react";

function CreateArea(props) {
  const [fullNote, setFullNote] = useState({
    title: "",
    content: ""
  });

  function handlChange(event) {
    const { name, value } = event.target;
    setFullNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  const [cards, setCards] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    props.onAdd(fullNote);
    setFullNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handlChange}
          value={fullNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handlChange}
          value={fullNote.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
