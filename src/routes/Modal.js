import '../css/modal.css'
import Quit from'../icon/quit.svg';
function Modal({onClose, currMovie, movies}) {
    
    console.log(movies[currMovie]);
    return (
        <div className="modal_box">
            <h1>{movies[currMovie].title}</h1>
            <img src={movies[currMovie].medium_cover_image} />
            <ul>
                {(movies[currMovie].genres).map((g) => <li>{g}</li>)}
            </ul>
            
            <h3>{(movies[currMovie].summary).slice(0,144)}...</h3>
            <button onClick={onClose}><img src={Quit} /></button>
        </div>
    );
}

export default Modal;