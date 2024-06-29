import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  };

  return (
    <div className={css.contact}>
      {/* <label className={css.searchLabel}>Find contacts by name</label> */}
      <input
        className={css.input}
        type="text"
        onChange={handleInputChange}
        placeholder="Find contacts by name/number"
      />
    </div>
  );
};

export default SearchBox;
