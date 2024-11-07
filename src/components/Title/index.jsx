import React from "react"; 

export default function Title(props) {
  const containerStyle = {
    margin: "0 auto",
    padding: 0,
    textTransform: "uppercase",
    width: "90%",
    textAlign: "center",
    fontSize: "clamp(2rem, 5vw, 3.5rem)",  // Use clamp for responsiveness
  };

  return <div style={containerStyle}>{props.children}</div>;
}
