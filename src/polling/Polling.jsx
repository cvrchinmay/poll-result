import { useState } from "react";
import { getFromLocalStorage, polls } from "../utils/utils";
import Poll from "./components/Poll";
import Result from "./components/Result";


const Polling = () => {
  const [answeredIds, setAnsweredIds] = useState([]);
  const newlyCreatedQuestions = getFromLocalStorage("questions", true).map((newQuestion) => ({...newQuestion, votes: [0,0,0]}));
  const allQuestions = [...polls, ...newlyCreatedQuestions]
  return (
    <div className="flex flex-col items-center gap-y-8 p-4">
      {
        allQuestions.map(({ id, question, options, votes }) =>
          <div key={`d${id}`} className="w-1/2">
          {answeredIds.includes(id)
              ? <Result key={id} id={id} question={question} options={options} votes={votes} />
            : <Poll key={id} id={id} question={question} options={options}
              onSubmitHandler={(id) => {
              setAnsweredIds((prev) => [...prev, id])
            }} />}
          </div>
        )
      }
    </div>
  );
};

export default Polling;