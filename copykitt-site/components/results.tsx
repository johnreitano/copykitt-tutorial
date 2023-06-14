interface ResultsProps {
  prompt: string;
  snippet: string;
  keywords: string[];
  onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {
  const keywordElements = [];
  for (let i = 0; i < props.keywords.length; i++) {
    const element = <div key={i}>#{props.keywords[i]}</div>;
    keywordElements.push(element);
  }
  return (
    <>
      <div>
        <div>
          <div>
            <b>Prompt</b>
          </div>
          <div>{props.prompt}</div>
        </div>
        <div>
          <div>
            <b>Snippet</b>
          </div>
          <div>{props.snippet}</div>
        </div>
        <div>
          <div>
            <b>Keywords</b>
          </div>
          <div>{keywordElements}</div>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={props.onBack}
      >
        Back
      </button>
    </>
  );
};

export default Results;
