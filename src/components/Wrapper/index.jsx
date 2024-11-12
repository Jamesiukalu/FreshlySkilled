/* eslint-disable react/prop-types */
export default function Wrapper(props) {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    width: "100%",
    height: "100vh",  // Ensure the wrapper takes full viewport height
    margin: 0,
    padding: 0,
  };

  return <div style={containerStyle}>{props.children}</div>;
}
