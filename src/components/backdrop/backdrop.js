export const BackDrop = (props) => {
  return (
    <div>
      {props.children}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: "100",
        }}
      ></div>
    </div>
  );
};
