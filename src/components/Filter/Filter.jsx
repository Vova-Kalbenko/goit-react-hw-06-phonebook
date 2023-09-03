import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  // console.log(dispatch)
  const filter = useSelector((state) => state.filter);
  // console.log(filter)

  const handleChange = (event) => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <div>
      <label>
        <input
          type="text"
          name="filter"
          placeholder="Enter search name"
          onChange={handleChange}
          value={filter}
          className={css.filterLabel}
        />
        <button type="reset">Search</button>
      </label>
    </div>
  )
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
