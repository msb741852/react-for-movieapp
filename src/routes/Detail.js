import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState({});
    const {id} = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setLoading(false);
            setMovieDetail(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    
    console.log(movieDetail);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
            <>
                <h2>Detail</h2>
                <h1>{movieDetail.title}</h1>
            </>
            }
        </div>
    );
}

export default Detail;