import React from "react";
import InputForm from "./components/InputForm";

const App = () => {
  return (
    <div className="bg-[url('./assets/background.jpg')] bg-cover bg-center h-screen flex justify-center items-center ">
      <div className="flex flex-col justify-start items-center text-center gap-12">
        <h1 className="text-2xl text-slate-600 font-semibold">To_Do List;)</h1>
        <InputForm />
      </div>
    </div>
  );
};

export default App;
