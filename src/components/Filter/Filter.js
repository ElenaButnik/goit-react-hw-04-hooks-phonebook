import s from "../Filter/Filter.module.css";
import PropTypes from "prop-types";

export default function Filter({ value, changeFilter }) {
  return (
    <>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={changeFilter}
      ></input>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.array,
  changeFilter: PropTypes.func,
};
