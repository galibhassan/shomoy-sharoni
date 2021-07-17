import { useContext } from "react";
import { ViewTypeContext } from "../context/viewTypeContext";

const Dropdown = (props) => {
  const ctx = useContext(ViewTypeContext);
  const handleOnChange = (event) => {
    ctx.setViewType(event.target.value);
  };
  return (
    <div>
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
