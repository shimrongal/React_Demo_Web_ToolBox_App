import axios from 'axios';

/**
 *  Created by Gal Shimron  20/5/2021
 *  This class will manage Pikod Aoref API functions
 */


export const orefWarningMessagesManager =  (updateOrefAlerts)=> {
     axios.get('http://www.oref.org.il/WarningMessages/History/AlertsHistory.json').then(res=>{
        const alertArr = []
        for (let index =0 ; index < 10 ; index++){
            alertArr[index] = res.data[index];
        }
        updateOrefAlerts(alertArr);
    }).catch(error=>{
        console.error("OrefWarningMessagesManager error : " + error)  
    });
    
}

