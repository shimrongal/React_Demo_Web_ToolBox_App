import OrefWarningMessageComp from "./OrefWarningMessageComp";


function OrefWarringMessagesComp({alerts}) {
    const handleAlert = alerts.map( (item,index) =>{
       return <OrefWarningMessageComp  key={item.data +"_" + item.alertDate} item={item} index={index}/>
    });
    return(<div>{handleAlert}</div>)
}

export default OrefWarringMessagesComp;