const Result = ({ newsTitles }) => {
  return (
    <>
      <div className="result">
        <div className="data">
          {newsTitles.length === 0 ? (
            <h2>Loading...</h2>
          ) : (
            <div>
              <h2>Search Results</h2>
              <ul className="news">
                {newsTitles.map((title, index) => (
                  <li key={index}>
                    {index + 1} {title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Result;
