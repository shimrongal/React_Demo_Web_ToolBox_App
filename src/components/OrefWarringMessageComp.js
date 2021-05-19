import "../components/OrefWarrnigMessageComp.css"

function OrefWarringMessageComp({item , index}) {

    const animDelay = {
        animationDelay : index * 0.5 +"s"
    }
    
    return <ul id="c-oref-warning-container" style={animDelay} >
        <li >{item.data}</li>
        <li >{item.alertDate}</li>
        <li >{item.title}</li>

    </ul> 
}

export default OrefWarringMessageComp;