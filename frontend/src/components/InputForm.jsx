import React, { useEffect, useState } from "react";
import data from "../data";

const InputForm = () => {
  const [input, setInput] = useState("");
  const [List, setList] = useState([]);

  useEffect(() => {
    console.log(List);
  }, [List]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prevList) => [...prevList, input]);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-between items-center px-2 py-2 text-xl font-semibold gap-4">
          <input
            type="text"
            className="bg-white px-3 py-2 rounded-lg focus:outline-none text-slate-800"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter the title of the task..."
          />
          <button
            type="submit"
            className="px-2 py-2 rounded-lg  text-brown bg-breadWhite active:scale-125 duration-150"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="w-full flex flex-col justify-center items-center">
        {data && data.length > 0 ? (
          data.map((items) => (
            <ul
              key={items.id}
              className="list-none flex flex-col gap-5 text-xl font-semibold items-center justify-center w-full py-2 px-2"
            >
              <li className="w-11/12 bg-breadWhite text-slate-600  px-3 py-2 rounded-lg overflow-hidden">
                {items.title}
              </li>
            </ul>
          ))
        ) : (
          <span className="text-3xl font-semibold text-slate-600">no task</span>
        )}
      </div>
    </div>
  );
};

export default InputForm;
