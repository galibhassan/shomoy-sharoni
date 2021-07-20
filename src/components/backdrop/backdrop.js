export const BackDrop = (props) => {
  return (
    <div>
      {props.children}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      ></div>
    </div>
  );
};
