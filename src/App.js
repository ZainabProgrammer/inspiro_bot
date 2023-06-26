import "./App.css";
import Home from "./components/Home";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
function App() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const [randomColorStyle, setRandomColorStyle] = useState({
    backgroundColor: "#666",
    color: "whitesmoke",
  });
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var randomColor = "#";
    for (var i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    setRandomColorStyle({
      backgroundColor: randomColor,
      color: randomColor,
    });
  }

  const getQuote = async () => {
    try {
      var category = "happiness";
      var apiKey = "PIqyFKJrQn/fiW08GZsIwQ==UUCDemhGfo3tZVGe";

      var url =
        "https://api.api-ninjas.com/v1/quotes?category=" +
        category +
        "&limit=1";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();

        setdata(result);
        setloading(false);
      } else {
        throw new Error("Error: " + response.status);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <Loading />
        </div>
      )}

      {data.length > 0 && (
        <>
          <Header randomColor={randomColorStyle.color} />
          <Home
            data={data}
            loadNext={getQuote}
            randomColor={randomColorStyle.color}
            randomColorStyle={randomColorStyle}
            getRandomColor={getRandomColor}
          ></Home>
        </>
      )}
    </>
  );
}

export default App;
