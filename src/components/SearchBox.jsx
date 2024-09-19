import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, handleFilterChange }) => {
  return (
    <form className={css.form}>
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={handleFilterChange}
        />
      </label>
    </form>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default SearchBox;
