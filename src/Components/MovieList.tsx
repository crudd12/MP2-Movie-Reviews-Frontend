import React from 'react';
import SearchForm from './SearchForm';

const MovieList: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to JEDCV Movie Reviews</h1>
      <SearchForm />
    </div>
  );
};

export default MovieList;



// import SearchForm from './SearchForm';

// function MovieList() {

//     return (
//         <div>
//             <h1 align="center">Welcome to JEDCV Movie Reviews</h1>
//             <SearchForm />
//         </div>
//     );
// };

// export default MovieList;