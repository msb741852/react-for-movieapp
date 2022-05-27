import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import '../css/movie.css';

function Movie({idx, id, medium_cover_image, title, summary, genres, onPopup, onSetCurrMovie}) {
    return(<>
        <div className="movie_container" id={idx} onClick={(event) => {
          onPopup();
          onSetCurrMovie(Number(event.target.id));
        }}>
          <img src={medium_cover_image} id={idx} alt={title}/>
          {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}</p> */}
          <div id={idx} className="movie_info">
            {/* <h2><Link to={`/movie/${id}`}>{title}</Link></h2> */}
            <h2 id={idx}>{title}</h2>
            <ul id={idx}>
              {genres.map(g =><li key={g} id={idx}>{g}</li>)}
            </ul>
          </div>
        </div>
        </>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;