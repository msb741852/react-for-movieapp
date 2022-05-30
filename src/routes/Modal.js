import { useEffect } from 'react';
import '../css/modal.css'
import Quit from'../icon/quit.svg';
function Modal({setMovies, onClose, setLoading, currMovie, movies}) {
    const reRender = async (event) => {
        onClose();
        setLoading(true);
        const json = await (
        await fetch (
            `https://yts.mx/api/v2/list_movies.json?genre=${event.target.outerText}&sort_by=like_count&limit=24`
        )).json();
        setMovies(json.data.movies);
        setLoading(false);
    }      
    return (
        <>
            <div className="background_box" onClick={onClose}/>
            <div className="modal_box">
                <h1>{movies[currMovie].title}</h1>
                <img src={movies[currMovie].medium_cover_image} />
                <div className="genre_buttons">
                    {(movies[currMovie].genres).map((g, index) => <button key={index} onClick={reRender}>{g}</button>)}
                </div>
                <h3>{(movies[currMovie].summary).slice(0,144)}...</h3>
                <button className="close_button" onClick={onClose}><img src={Quit} /></button>
            </div>
        </>
    );
}

export default Modal;