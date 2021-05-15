import axios from 'axios';

export const orefWarningMessagesManager =  (updateOrefAlerts)=> {
     axios.get('http://www.oref.org.il/WarningMessages/History/AlertsHistory.json').then(res=>{
        const alertArr = []
        for (let index =0 ; index < 10 ; index++){
            alertArr[index] = res.data[index];
        }
        updateOrefAlerts(alertArr);
    }).catch(error=>{
        console.log("OrefWarningMessagesManager error : " + error)  
    });
    
}

