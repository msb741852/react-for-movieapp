import PropTypes from "prop-types";
import '../css/movie.css';
import star_full_svg from '../icon/star_full.svg';
import star_half_svg from '../icon/star_half.svg' ;
import star_empty_svg from '../icon/star_empty.svg' ;

function Movie({idx, medium_cover_image, title, rating, onPopup, onSetCurrMovie}) {
  const new_rating = rating / 2 ;
  const star_full = <img src={star_full_svg} />;
  const star_half = <img src={star_half_svg} />;
  const star_empty = <img src={star_empty_svg} />;
  const rating_icon = [];
  
  if(new_rating <= 0.5) {
    rating_icon.push(star_half, star_empty, star_empty, star_empty, star_empty);
  } else if(new_rating <= 1.0) { 
    rating_icon.push(star_full, star_empty, star_empty, star_empty, star_empty);
  } else if(new_rating <= 1.5) {
    rating_icon.push(star_full, star_half, star_empty, star_empty, star_empty);
  } else if(new_rating <= 2.0) {
    rating_icon.push(star_full, star_full, star_empty, star_empty, star_empty);
  } else if(new_rating <= 2.5) {
    rating_icon.push(star_full, star_full, star_half, star_empty, star_empty);
  } else if(new_rating <= 3.0) {
    rating_icon.push(star_full, star_full, star_full, star_empty, star_empty);
  } else if(new_rating <= 3.5) {
    rating_icon.push(star_full, star_full, star_full, star_half, star_empty);
  } else if(new_rating <= 4.0) {
    rating_icon.push(star_full, star_full, star_full, star_full, star_empty);
  } else if(new_rating <= 4.5) {
    rating_icon.push(star_full, star_full, star_full, star_full, star_half);
  } else if(new_rating <= 5.0) {
    rating_icon.push(star_full, star_full, star_full, star_full, star_full);
  } 

    return(
      <>
        <div className="movie_container" id={idx} onClick={(event) => {
          onPopup();
          onSetCurrMovie(Number(event.target.id));
        }}>
          <img src={medium_cover_image} id={idx} alt={title}/>
          <div id={idx} className="movie_info">
            <div className="rating">
              {rating_icon}
            </div>
            <h2 id={idx}>{title}</h2>
          </div>
        </div>
      </>
    );
}

Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Movie;