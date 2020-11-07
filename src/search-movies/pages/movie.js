import React from 'react';
import SearchMovie from '../components/search';
import ResultMovie from '../components/result';

const AppMovie = () => {
  return (
    <>
      <SearchMovie/>
      <ResultMovie/>
    </>
  )
}
export default React.memo(AppMovie);