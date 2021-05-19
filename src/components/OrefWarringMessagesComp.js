import OrefWarringMessageComp from "./OrefWarringMessageComp";

function OrefWarringMessagesComp({alerts}) {
    const handleAlert = alerts.map( (item,index) =>{
       return <OrefWarringMessageComp  key={item.data +"_" + item.alertDate} item={item} index={index}/>
    });
    return(<div>{handleAlert}</div>)
}

export default OrefWarringMessagesComp;