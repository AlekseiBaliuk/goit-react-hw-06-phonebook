import React from 'react';
import { FilterTitle, FilterContainer, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterContainer>
      <label>
        <FilterTitle>Find contacts by name</FilterTitle>
        <FilterInput
          type="text"
          value={filter}
          onChange={changeFilter}
        ></FilterInput>
      </label>
    </FilterContainer>
  );
};
