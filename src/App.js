import { render } from "react-dom";
// eslint-disable-next-line import/namespace
import SearchParams from "./SearchParam";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
