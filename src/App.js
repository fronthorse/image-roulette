import React, { useState } from "react";

function App() {
  const images = [
    "brian.jpg",
    "chris.jpg",
    "lois.jpg",
    "meg.jpg",
    "peter.jpg",
    "quagmire.jpg",
    "stewie.jpg",
  ];

  const [currentImages, setCurrentImages] = useState(images);

  const handleClick = () => {
    if (currentImages.length > 1) {
      const randomIndex = Math.floor(Math.random() * currentImages.length);
      setCurrentImages(
        currentImages.filter((image, index) => index !== randomIndex)
      );
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px",
          padding: "20px",
        }}
      >
        {currentImages.map((image) => (
          <img
            src={image}
            alt={image}
            key={image}
            style={{
              width: "200px",
              height: "200px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          />
        ))}
      </div>
      <button
        style={{ padding: "20px", marginTop: "20px" }}
        onClick={handleClick}
      >
        Roll
      </button>
    </div>
  );
}

export default App;
