// import Modal from "./components/Modal";

import { useState } from "react";
import { getFromLocalStorage } from "../utils/utils";
import AddPoleModal from "./components/AddPoleModal";

const AddPole = () => {
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");


  return (
    <div className="fixed bottom-10 right-10 flex items-center justify-center  
    h-16 w-16 rounded-full bg-green-600 cursor-pointer">
      <button className="text-white font-bold text-2xl"
        onClick={() => {
          setShowModal(true)
        }}
      >+</button>
      {showModal && <AddPoleModal>
        <div className="flex flex-col p-4 gap-y-4">
          <label>
            Question
          </label>
          <textarea
            className="bg-slate-200 p-4 text-base border-2 w-full border-blue-200"
            maxLength={100}
            placeholder="Add your question here!"
            onChange={(event) => {
              setQuestion(event.target.value);
            }}
            value={question}
          />
          <label>
            Options
          </label>
          <input
            className="bg-slate-200 p-4 text-base border-2 w-full border-blue-200"
            maxLength={100}
            value={option1}
            onChange={(event) => {
              setOption1(event.target.value)
            }}
            placeholder="Option 1"
          />
          <input
            className="bg-slate-200 p-4 text-base border-2 w-full border-blue-200"
            maxLength={100}
            value={option2}
            onChange={(event) => {
              setOption2(event.target.value)
            }}
            placeholder="Option 2"
          />
          <input
            className="bg-slate-200 p-4 text-base border-2 w-full border-blue-200"
            maxLength={100}
            value={option3}
            onChange={(event) => {
              setOption3(event.target.value)
            }}
            placeholder="Option 3"
          />
          <button className="px-8 py-2 text-center border border-gray-500 rounded-lg text-xl bg-blue-500 text-white font-bold hover:bg-blue-600 hover:shadow-xl" onClick={() => {
            if (option1 && option2 && option3) {
              let questions = getFromLocalStorage("questions", true);
              questions.push({
                id: 100 + questions.length,
                question,
                options: [option1, option2, option3]
              });
              localStorage.setItem("questions", JSON.stringify(questions));
              setShowModal(false);
            }
          }}>Submit</button>
        </div>
      </AddPoleModal>}
    </div>
  );
};

export default AddPole;