import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = ({ onSearch }) => {


  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    navigate("/result");
  };

  return (
    <>
      <Header />

      <div className="body">
        <div className="content">
          <div className="introduction">
            <h1 className="tagline">
              Uncover the Emotions <br></br> Behind the Headlines
            </h1>

            <p className="intro">
              Explore news stories with sentiment analysis to uncover emotions,
              opinions, and trends that shape headlines, gaining valuable
              insights for informed decision-making.
            </p>
          </div>

          <form className="search" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Search news here"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="bg-image">
          <img src="bg-image.jpg" alt="bg"></img>
        </div>
      </div>
    </>
  );
};

export default Home;

