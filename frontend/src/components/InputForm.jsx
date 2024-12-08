import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const InputForm = () => {
  const [input, setInput] = useState("");
  const [List, setList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // console.log(List);
  }, [List]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setList((prevList) =>
        prevList.map((item, i) => (i == editIndex ? input : item))
      );
      setEditIndex(null);
      setEditMode(false);
      setInput("");
    } else {
      setList((prevList) => [...prevList, input]);
      setInput("");
    }
  };

  const updateTask = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setInput(List[index]);
  };

  const deleteTask = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
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
            {editMode ? "Update" : "Submit"}
          </button>
        </div>
      </form>
      <div className="w-full flex flex-col justify-center items-center overflow-y-scroll h-[400px] no-scrollbar">
        {List && List.length > 0 ? (
          List.map((items, index) => (
            <ul
              key={index}
              className="list-none flex flex-col gap-5 text-xl font-semibold items-center justify-center w-full py-2 px-2"
            >
              <li className="w-11/12 bg-breadWhite text-slate-600  px-3 py-2 rounded-lg overflow-hidden">
                <span className="flex justify-between items-center">
                  {items}
                  <span className="flex justify-between items-center gap-4">
                    <button
                      className="active:scale-125 duration-150"
                      onClick={() => updateTask(index)}
                    >
                      <Pencil />
                    </button>
                    <button
                      className="active:scale-125 duration-150"
                      onClick={() => deleteTask(index)}
                    >
                      <Trash2 />
                    </button>
                  </span>
                </span>
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
