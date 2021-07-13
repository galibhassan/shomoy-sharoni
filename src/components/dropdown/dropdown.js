const Dropdown = (props) => {
  const handleOnChange = (event) => {
    props.onViewTypeChange(event.target.value);
  };
  return (
    <div
      style={{
        position: "absolute",
        top: -50,
      }}
    >
      <div> View type: </div>
      <select onChange={handleOnChange}>
        <option value="week">Week</option>
        <option value="twoWeeks">2 Weeks</option>
        <option value="threeWeeks">3 Weeks</option>
        <option value="month">Month</option>
        <option value="twoMonths">2 Months</option>
        <option value="threeMonths">3 Months</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};

export { Dropdown };
