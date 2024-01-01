import { useState, useEffect } from 'react';
//import MovieImageArr from './movieImages';
import "./NavBar.css";
import RankingGrid from './RankingGrid';
import ResetBtn from './ResetBtn';
import ItemCollection from './ItemCollection';


const RankItem = ({ items, setItems, dataType, imgArr, localStorageKey }) => {
    //getItems();
    const [reset, setReset] = useState(false);
    //console.log(items);

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        console.log(ev.target, "drag");
    }

    function allowDrop(ev) {
        ev.preventDefault();
       // console.log(ev.target, "allowDrop")
    }

    function drop(ev) {

        ev.preventDefault();
        const targetElm = ev.target;

        if (targetElm.nodeName === "IMG") {
            return false;
        }
        if (targetElm.childNodes.length === 0) {
            const data = parseInt(ev.dataTransfer.getData("text").substring(5));
            const transformedCollection = items.map((item) =>
                (item.id === parseInt(data)) ?
                { ...item, ranking: parseInt(targetElm.id.substring(5)) } :
                    { ...item, ranking: item.ranking }
            );
            setItems(transformedCollection);
        }
    }
    function resetfn() {

        setReset(true);
    }

    console.log("before useEffect", localStorageKey);
    useEffect(() => {   
        console.log("Hello, Item");
        if (items == null)
        getItems();

    }, [dataType]);//end of useEffect


    useEffect(() => {
        console.log("useEffect2");
        if (items != null) {
            localStorage.setItem(localStorageKey, JSON.stringify(items));
        }
        setReset(false);
    }, [items])


    useEffect(() => {
        console.log("useEffect3");
        if (reset === true) {
            getItems();
        }
        //setReset(false);

    }, [reset]);//end of useEffect

    async function getItems() {
        const response = await fetch(`item/${dataType}`);
        const data = await response.json();
        console.log("Data test", data);
        setItems(data);
    }
    //items = undefined;

    return (
        (items != null)
        ? <div className="ranking-bord-container">
            <RankingGrid items={items} imgArr={imgArr} drop={drop} allowDrop={allowDrop} drag={drag} />   
            <ItemCollection items={items} drag={drag} imgArr={imgArr} />
            <ResetBtn items={items} reset={resetfn} />
            </div>
        : <h2>Loading...</h2>

    );


}

export default RankItem;