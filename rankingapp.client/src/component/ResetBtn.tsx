
import './NavBar.css';

const ResetBtn = ({items, reset}) => {
   

    return (

        <>
            <div className="reset-btn-container">
                <button onClick={reset}>Reaset Bord</button>
            </div>
        </>
    
    );

}

export default ResetBtn;