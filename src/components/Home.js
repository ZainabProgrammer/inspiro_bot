import React from "react";
import { useEffect, useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
const Home = ({
  data,
  loadNext,
  randomColor,
  randomColorStyle,
  getRandomColor,
}) => {
  const [quote, setquote] = useState([]);
  useEffect(() => {
    const bgAnimation = document.getElementById("bg-container");
    const numberOfBoxes = 200;
    for (let i = 0; i < numberOfBoxes; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      bgAnimation.append(colorBox);
    }
  }, []);

  useEffect(() => {
    setquote(data);
    getRandomColor();
  }, [data]);

  return (
    <>
      <div id="bg-container" className="bgAnimation">
        <div className="backgroundAnim" style={randomColorStyle}></div>
      </div>

      <div
        className="container  d-flex  align-items-center justify-content-center text-danger "
        style={{
          height: "calc(100vh)",
          backgroundColor: "transparent",
          pointerEvents: "none",
        }}
      >
        <div
          className="  text-white main-div  d-flex align-items-center justify-content-center"
          style={{
            width: "100%",
            height: "100vh",
            zIndex: "999",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <blockquote
            className="blockquote mb-0 quote   p-5 sm:p-2 rounded shadow-lg "
            style={{
              backgroundColor: randomColor,
              width: "100%",
            }}
          >
            {quote.map((ele, i) => {
              return (
                <div key={i}>
                  <p
                    className="fw-bold"
                    style={{
                      color: "whitesmoke",
                    }}
                    key={i}
                  >
                    <RiDoubleQuotesL />
                    {ele.quote}
                    <RiDoubleQuotesR />
                  </p>
                  <footer className="blockquote-footer text-white">
                    By <cite title="Source Title">{ele.author}</cite>
                  </footer>
                </div>
              );
            })}
          </blockquote>

          <button
            className="btn glow-on-hover text-white rounded mt-3 shadow-lg"
            style={{
              cursor: "pointer",
              zIndex: "999",
              pointerEvents: "auto",
              backgroundColor: randomColor,
            }}
            onClick={loadNext}
          >
            Generate Next Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
