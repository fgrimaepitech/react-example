import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from 'react';
// eslint-disable-next-line import/namespace
import SearchParams from "./SearchParam";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
      <header>
        <Link to="/">Adopt Me !</Link>
      </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route exact path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
