import {useState, useEffect} from 'react';
import Modal from './Modal';
import Movie from '../components/Movie';
import PrevBtn from '../icon/left.svg';
import NextBtn from '../icon/right.svg';
import '../css/home.css';

function Home() {
  const [modal, setModal] = useState(false);
  const [currMovie, setCurrMovie] = useState(0);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [startNum, setStartNum] = useState(1);
  const [endNum, setEndNum] = useState(6);
  const pages = Math.ceil(movies.length / 6) - 1;
  const onPopup = () => {
    setModal(true);
  };
  const onClose = () => setModal(false);
  const onSetCurrMovie = (id) => {
    setCurrMovie(id);
  };


  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?genre=Animation&sort_by=like_count&limit=24"
        )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  
  const prevPage = () => {
    if(currPage === 0) {
      setCurrPage(pages);
    } else {
      setCurrPage(currPage - 1);
    }
  }

  const nextPage = () => {
    if(currPage === 3) {
      setCurrPage(0);
    } else {
      setCurrPage(currPage + 1);
    }
  }

  useEffect(() => setStartNum(currPage * 6), [currPage]);
  useEffect(() => currPage === pages ? setEndNum(movies.length-1) : setEndNum(startNum + 5), [startNum]);

  const currMovies = () => {
    const result = [];
    for(let i = startNum; i <= endNum; i++) {
      result.push(<Movie idx={i} key={movies[i].id} id={movies[i].id} medium_cover_image={movies[i].medium_cover_image} title={movies[i].title} summary={movies[i].summary} genres={movies[i].genres} onPopup={onPopup} onSetCurrMovie={onSetCurrMovie}/>);
    }
    return result;
  };
  return (
    <>
      {loading ? <h1 className="loadingText">Loading...</h1> 
      : 
      <>
        <div className='flexBox'>
          {modal && <Modal onClose={onClose} currMovie={currMovie} movies={movies}/>}
          <button id="prevBtn" onClick={prevPage}><img src={PrevBtn} /></button>        
          <div className="grid_container">
            {/* {movies.map((movie, index) => <Movie idx={index} key={movie.id} id={movie.id} medium_cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />)} */}
            {currMovies()}
          </div>
          <button id="nextBtn" onClick={nextPage}><img src={NextBtn} /></button>
        </div>
      </>
      }
    </>
  );
}

export default Home;