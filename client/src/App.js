import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";



const App = () => {


  const [newsTitles, setNewsTitles] = useState([]);

  const downloadJsonFile = (jsonData) => {
    const jsonStr = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlSearch = async (query) => {
    console.log(JSON.stringify({ query: query }));
    const response = await fetch(
      'http://localhost:5000/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
      }
    );

    const data = await response.json()
    console.log(data.news_title)
    setNewsTitles(data.news_title)
    // downloadJsonFile({title: data.new})
 
  };

  useEffect(() => {
    if (newsTitles.length > 0) {
      const hello = newsTitles.join(', ')
      downloadJsonFile({hello: [hello]})
    }
  }, [newsTitles])

  return (
    <div className="container">
      
   
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home onSearch={handlSearch} />} />
          <Route exact path="/result" element={<Result newsTitles={newsTitles} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
