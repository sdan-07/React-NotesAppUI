import React, { useState } from "react";

const CreateNotes = () => {
  const [title, setTitle] = useState(``);
  const [savedTitle, setsavedTitle] = useState(``);

  return (
    <>
      <h1 className="bg-amber-400 flex justify-center">Notes App</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(title);
          setsavedTitle(title);
          console.log(savedTitle);

          setTitle(``);
        }}
      >
        <input
          className="py-5"
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input className="py-12" type="text" placeholder="Enter Details" />
        <button className="px-3 py-7 border-2 my-12 w-full"> Submit </button>
      </form>
    </>
  );
};

export default CreateNotes;
