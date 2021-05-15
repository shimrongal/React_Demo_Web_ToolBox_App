
let inlineStyleUl = {
    width: "40%",
    margin: "0 30%",
    display: "flex",
    justifyContent: "center"
};

let inlineStyleLi = {
    flex: "1",
    listStyle: "none"
};

function OrefWarringMessageComp({item}) {
    return <ul style={inlineStyleUl}>
        <li style={inlineStyleLi}>{item.data}</li>
        <li style={inlineStyleLi}>{item.alertDate}</li>
        <li style={inlineStyleLi}>{item.title}</li>

    </ul> 
}

export default OrefWarringMessageComp;