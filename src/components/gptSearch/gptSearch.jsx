import Search from "./GPTSearchBar/search";
import Page from "./GPTSearchPage/page";
import "./gptSearch.css";

const GptSearch = () => {
  return (
    <div className="gpt-container">
      <div className="bar">
        <Search />
      </div>
      <div style={{padding:"10px", height:"140%"}}>
      <Page />
      </div>
    </div>
  );
};

export default GptSearch;
