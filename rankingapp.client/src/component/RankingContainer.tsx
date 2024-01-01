
import RankItem from './RankItems';
import { useState } from 'react';

const RankingContainer = ({ dataType, imgArr }) => {

    const albumLocalStorageKey = "albums";
    const movieLocalStorageKey = "movies";

    var localStorageKey = "";

    const [albumItems, setAlbumItems] = useState(JSON.parse(localStorage.getItem(albumLocalStorageKey)));
    const [movieItems, setMovieItems] = useState(JSON.parse(localStorage.getItem(movieLocalStorageKey)));



    var data = [];
    var setFunc = null;

    if (dataType === 1) {
        data = movieItems;
        setFunc = setMovieItems;
        localStorageKey = movieLocalStorageKey;
        console.log("dataType =1", movieItems);

    }
    else if (dataType === 2) {
        data = albumItems;
        setFunc = setAlbumItems;
        localStorageKey = albumLocalStorageKey;
        console.log("dataType =2");
    }

    return (
        <RankItem items={data} setItems={setFunc} dataType={dataType} imgArr={imgArr} localStorageKey={localStorageKey} /> 
    );


}

export default RankingContainer;