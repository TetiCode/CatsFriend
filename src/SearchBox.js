import React from 'react';

const SearchBox = ({ searchHandler }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='text'
        placeholder='Search Cats'
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBox;
