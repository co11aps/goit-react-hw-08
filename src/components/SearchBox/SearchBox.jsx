import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { useState } from "react";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    dispatch(changeFilter(newValue));
  };

  const resetFilter = () => {
    setInputValue("");
    dispatch(changeFilter(""));
  };

  return (
    <div className={css.contact}>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Find contacts by name/number"
      />
      <button className={css.btn} onClick={resetFilter}>
        Reset
      </button>
    </div>
  );
};

export default SearchBox;
