import "../pages/parking/ParkingPage.css"

function ParkingButtonsComp({ mainBtnText, onMainParkingButtonClick, onFindParkingButtonClick }) {
        return (<div className="p-parking-page-button-container">
               <button onClick={()=>onMainParkingButtonClick()}>{mainBtnText}</button>
               <button onClick={()=>onFindParkingButtonClick()}>Find parking lot</button>
           </div>)}


export default ParkingButtonsComp;