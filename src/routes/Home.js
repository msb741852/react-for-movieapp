import {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import '../css/home.css';

function Home() {
    
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [startNum, setStartNum] = useState(1);
  const [endNum, setEndNum] = useState(6);
  const pages = Math.ceil(movies.length / 6) - 1;

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
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
      ;
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

  const currMovie = () => {
    const result = [];
    for(let i = startNum; i <= endNum; i++) {
      result.push(<Movie idx={i} key={movies[i].id} id={movies[i].id} medium_cover_image={movies[i].medium_cover_image} title={movies[i].title} summary={movies[i].summary} genres={movies[i].genres} />);
    }
    return result;
  };

  return (
    <>
      {loading ? <h1>Loading...</h1> 
      : 
      <div className="grid_container">
        {/* {movies.map((movie, index) => <Movie idx={index} key={movie.id} id={movie.id} medium_cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />)} */}
        {currMovie()}
        <h1>{currPage}page st:{startNum} end:{endNum}</h1>
        <button onClick={prevPage}>왼</button>        
        <button onClick={nextPage}>오</button>
      </div>
      }
    </>
  );
}

export default Home;