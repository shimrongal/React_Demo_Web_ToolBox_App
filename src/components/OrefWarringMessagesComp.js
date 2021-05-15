import OrefWarringMessageComp from "./OrefWarringMessageComp";

function OrefWarringMessagesComp({alerts}) {
    const handleAlert = alerts.map( item =>{
       return <OrefWarringMessageComp  key={item.data +"_" + item.alertDate} item={item} />
    });
    return(<div>{handleAlert}</div>)
}

export default OrefWarringMessagesComp;