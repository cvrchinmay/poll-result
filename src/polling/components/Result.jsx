const Result = ({ question, options, votes }) => {

  const totalVotes = votes.reduce((prev, curr) => { return prev + curr }, 0);
  return (
    <div className='flex flex-col gap-y-4 bg-slate-100 border-2 rounded-xl pb-4'>
      <h3 className='text-lg font-semibold border-b-2 p-2'>Result</h3>
      <h3 className='text-lg font-semibold border-b-2 pb-2'>{question}</h3>
      <div className='flex flex-col gap-y-2 items-left'>
        {options.map((option, index) => (
            <div className="flex flex-row relative gap-x-2">
              <div key={index} className={"flex ease-out transition hover:ease-in duration-800 relative flex-col hover:scale-110 hover:translate-x-10 bg-green-400 p-4 w-full items-center"} style={{ width: `${votes[index]
                * 100 / totalVotes}%`
              }}>
                {option} {Math.round(votes[index] * 100 / totalVotes)}%
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Result;
