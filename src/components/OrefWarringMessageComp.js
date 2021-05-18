import "../components/OrefWarrnigMessageComp.css"

function OrefWarringMessageComp({item}) {
    
    return <ul id="c-oref-warning-container" >
        <li >{item.data}</li>
        <li >{item.alertDate}</li>
        <li >{item.title}</li>

    </ul> 
}

export default OrefWarringMessageComp;