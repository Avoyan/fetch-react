import { useCallback, useState } from 'react';
import FilmsList from './components/films/FilmsList';
import DogBreed from './components/dogs/DogBreed';
import BookSearch from './components/books/BookSearch';
import FilmCard from './components/film/FilmCard';
import './App.css';

function App() {
  const [showFilmList, setShowFilmList] = useState(false);
  const [showDogSelect, setShowDogSelect] = useState(false);
  const [showBookSearch, setShowBookSearch] = useState(false);
  const [showFilmCard, setShowFilmCard] = useState(false);

  const handleShowFilmsListClick = useCallback(() => {
    setShowFilmList(!showFilmList);
    setShowDogSelect(false);
    setShowBookSearch(false);
    setShowFilmCard(false);
  }, [setShowFilmList, showFilmList, setShowDogSelect, setShowBookSearch, setShowFilmCard]);

  const handleShowDogSelectClick = useCallback(() => {
    setShowDogSelect(!showDogSelect);
    setShowFilmList(false);
    setShowBookSearch(false);
    setShowFilmCard(false);
  }, [setShowDogSelect, showDogSelect, setShowFilmList, setShowBookSearch, setShowFilmCard]);

  const handleShowBookSearchClick = useCallback(() => {
    setShowBookSearch(!showBookSearch);
    setShowFilmList(false);
    setShowDogSelect(false);
    setShowFilmCard(false);
  }, [setShowBookSearch, showBookSearch, setShowFilmList, setShowDogSelect, setShowFilmCard]);

  const handleShowFilmCardClick = useCallback(() => {
    setShowFilmCard(!showFilmCard);
    setShowFilmList(false);
    setShowDogSelect(false);
    setShowBookSearch(false);
  }, [setShowFilmCard, showFilmCard, setShowFilmList, setShowDogSelect, setShowBookSearch]);

  return (
    <div className="App">
      <div>
        <button className='button button-blue' onClick={handleShowFilmsListClick}>Show Films List</button>
        <button className='button button-blue' onClick={handleShowDogSelectClick}>Show Dog Select</button>
        <button className='button button-blue' onClick={handleShowBookSearchClick}>Show Book Search</button>
        <button className='button button-blue' onClick={handleShowFilmCardClick}>Show Film Card</button>
        <hr />
      </div>  
      <div>
        {showFilmList && <FilmsList />}
        {showDogSelect && <DogBreed />}
        {showBookSearch && <BookSearch />}
        {showFilmCard && <FilmCard />}
      </div>
    </div>
  );
}

export default App;
