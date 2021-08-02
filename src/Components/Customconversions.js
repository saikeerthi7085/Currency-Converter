import React, {useState } from 'react';
import '../App.css';
import InputFields from  './InputFields';

function Customconversions(props) {
    const {
        t
    }=props
    const [customInFromCurrency, setCustomInFromCurrency] = useState(true)
    const [CustomAmount, setcustomAmount] = useState(1)
    const [Rate, setRate] = useState();
  
   let fromcustom,tocustom;
    function handleFromcustomChange(e) {
        setcustomAmount(e.target.value)
        setCustomInFromCurrency(true)
      }
    
      function handleTocustomChange(e) {
        setcustomAmount(e.target.value)
     
        setCustomInFromCurrency(false)
      }
 
      if (customInFromCurrency) {
        fromcustom= CustomAmount;
        tocustom= CustomAmount * Rate
      
    
    } else {
        fromcustom= CustomAmount/Rate
        tocustom= CustomAmount 
    
    }
    
    return (
        <>
        <center>
                    <input type="text"  placeholder={t("Base")} className="m-2 p-2"></input>
                    <input type="text" placeholder={t("Target")} className="m-2 p-2"></input>
                    <input type="number" Required placeholder={t("Rate")} className="m-2 p-2" value={Rate} onChange={e=>setRate(e.target.value)}></input>
                    </center>
        <div id="box1">
        <InputFields   
        amount={fromcustom}
        onChangeAmount={handleFromcustomChange}
        Flag='Y' t={t}/>

        <InputFields 
        amount={tocustom}
        onChangeAmount={handleTocustomChange}
        Flag='Y' t={t}/>

        
      
 </div>
 </>
    )
}

export default Customconversions
