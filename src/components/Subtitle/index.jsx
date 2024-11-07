import React from "react"; 

export default function Subtitle(props) {
  const containerStyle = {
    margin: "24px auto 0",  
    padding: 0,
    width: "80%", 
    textAlign: "center",  
    fontSize: "clamp(1.25rem, 4vw, 1.75rem)",  // Use clamp for responsiveness
  };

  return <div style={containerStyle}>{props.children}</div>;
}
