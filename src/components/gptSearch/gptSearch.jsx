import Search from "./GPTSearchBar/search";
import Page from "./GPTSearchPage/page";
import './gptSearch.css';

const GptSearch = () => {
  console.log("hi")
  return (
    <div className="gpt-container">
      <Search />
      <Page />
    </div>
  );
};

export default GptSearch;
