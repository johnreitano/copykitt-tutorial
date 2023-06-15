"use client";
import React from "react";
import Form from "./form";
import Results from "./results";

const CopyKitt: React.FC = () => {
  const CHARACTER_LIMIT: number = 32;
  const ENDPOINT: string =
    "https://x6w4komxe4.execute-api.us-west-2.amazonaws.com/prod/generate_snippet_and_keywords";
  const [prompt, setPrompt] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
    console.log("Submitting: ", prompt);
    setIsLoading(true);
    fetch(`${ENDPOINT}?prompt=${prompt}`)
      .then((res) => res.json())
      .then(onResult);
  };

  const onResult = (data: any) => {
    setSnippet(data.snippet);
    setKeywords(data.keywords);
    setIsLoading(false);
  };

  const onReset = (data: any) => {
    setPrompt("");
    setSnippet("");
  };

  if (snippet) {
    console.log(`Prompt: ${prompt}, snippet: ${snippet}`);
  }
  let displayedElement = snippet ? (
    <Results
      prompt={prompt}
      snippet={snippet}
      keywords={keywords}
      onBack={onReset}
    />
  ) : (
    <Form
      prompt={prompt}
      setPrompt={setPrompt}
      onSubmit={onSubmit}
      isLoading={isLoading}
      characterLimit={CHARACTER_LIMIT}
    />
  );

  return (
    <div>
      <h1>CopyKitt!</h1>
      {displayedElement}
    </div>
  );
};

export default CopyKitt;
