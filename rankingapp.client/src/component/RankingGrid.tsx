import './NavBar.css';

const RankingGrid = ({ items, imgArr, drag, drop, allowDrop }) => {

    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectiomMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];

    function pushCellMarkupToArr(currCollection, rankNum, label) {
        //in this place we set the cells for the grid bord
        if (rankNum > 0) {
           //console.log(rankNum, "Hello111", label, currCollection);
            const item = items.find(o => o.ranking === rankNum);
            //console.log(allowDrop, "hello", rankNum);
            currCollection.push(<div id={`rank-${rankNum}`} className="rank-cell" onDrop={drop} onDragOver={allowDrop}>
                {
                    
                    item != null ?
                        <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" onDragStart={drag} className="img-ranked" />
                        : null}
            </div>);
        }
        else if (rankNum === 0 && label) {
            
            currCollection.push(
                <div className="row-label">
                    <h4>{label}</h4>
                </div>
            );
        }
    }

    function createCellsForRow(rowNum) {
        let rankNum = 0;
        let currCollection = [];
        let label = "";
        const numCells = 5;

        for (let a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;
            //console.log(rankNum, "calcccc", numCells, rowNum, a);
            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "Top Tier";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectiomMiddle;
                label = "Middle Tier";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionBottom;
                label = "Bottom Tier";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionWorst;
                label = "Worst Tier";
            }
            if(rankNum >= 0)
            pushCellMarkupToArr(currCollection, rankNum, label);
        }


    }

    function createCellsForRows() {

        const maxRows = 4;
        for (let i = 0; i <= maxRows; i++) {
            createCellsForRow(i);
        }
    }

    function createRowsFroGrid() {

        rankingGrid.push(<div id="kiki" className="rank-row-top-tier">{cellCollectionTop}</div>);
        rankingGrid.push(<div id="kiki1" className="rank-row-middle-tier">{cellCollectiomMiddle}</div>);
        rankingGrid.push(<div id="kiki2" className="rank-row-bottom-tier">{cellCollectionBottom}</div>);
        rankingGrid.push(<div id="kiki3" className="rank-row-worst-tier">{cellCollectionWorst}</div>);

        return rankingGrid;

    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsFroGrid();
    }

    return (

        <div className="ranking-grid">
            {createRankingGrid()}
        </div>
    );

}
export default RankingGrid;