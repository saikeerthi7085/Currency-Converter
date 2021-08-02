import React, { useEffect,useState } from 'react';
import '../App.css';

import arrowmark from '../images/double-arrow.png'
import InputFields from  './InputFields';
import Customconversions from './Customconversions';
const Rate_URL = 'https://openexchangerates.org/api/latest.json?app_id=bf711ec61d894a28ba5e162cd73d5c10'
const Codes_URL = 'https://openexchangerates.org/api/currencies.json'

function Conversions(props) {
    const {
        Bgcolor,t
    }= props

    const [codeNames,setCodenames] = useState([])
    const [fromcurrency,setfromcurrency]= useState();
    const [tocurrency,settocurrency]= useState();
   
    
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
    const [flag,setflag] = useState('N')
    let toAmount, fromAmount;
    if (amountInFromCurrency) {
      fromAmount = amount
      toAmount = amount * exchangeRate
    } else {
      toAmount = amount
      fromAmount = amount / exchangeRate
    }
    useEffect(() => {
  
        fetch(Codes_URL)
        .then(res => res.json())
        .then(data =>{
  
          setCodenames(data)
          setfromcurrency('GBP')
          settocurrency('INR')
     } )
  
    },[])




    useEffect(() => {
      if (fromcurrency != null && tocurrency != null) {
          console.log(fromcurrency);
          console.log(tocurrency);
      fetch(`${Rate_URL}&base=${fromcurrency}&symbols=${tocurrency}`)
      .then(res => res.json())
      .then(data =>{ setExchangeRate(data.rates[tocurrency]) } )
      }   
        
        }, [fromcurrency, tocurrency])

  
        function handleFromAmountChange(e) {
          setAmount(e.target.value)
          console.log(e.target.value)
          setAmountInFromCurrency(true)
        }
      
        function handleToAmountChange(e) {
          setAmount(e.target.value)
          console.log("From")

          console.log(e.target.value)
          setAmountInFromCurrency(false)
        }
      
        function clearfields(){
            setAmountInFromCurrency(true);
            setAmount(1);
            setfromcurrency('GBP')
            settocurrency('INR')

        }
   
    return (
       <>
        {flag ==='N' ?
        <>
            <div id="box1">
            <InputFields  Codenames={codeNames} 
             defaultoption ={fromcurrency}
             onchangecurrency ={e=>setfromcurrency(e.target.value)}
             amount={fromAmount}
             onChangeAmount={handleFromAmountChange}
             Flag={flag}/>

             <img src={arrowmark} alt="Arrow.mark" className="image mt-5" />

             <InputFields Codenames={codeNames} 
             defaultoption={tocurrency} 
             onchangecurrency ={e=>settocurrency(e.target.value)}
             amount={toAmount}
             onChangeAmount={handleToAmountChange}
             Flag={flag}/>
       </div>
        <div className="row buttons" >
        <input type="button" className="btn button m-4" style={{'background-color': Bgcolor}} value={t("RateCalculation")} onClick={()=> setflag('Y')}/>
        <input type="button" className="btn button m-4" style={{'background-color': Bgcolor}} value ={t("ClearFields")} onClick={()=> clearfields()}/>
        </div>
        </>
       
        :

        <>
            <div className="m-3">
                <div id="box2"> 
                    <h4 className="text-center m-4"> {t('CustomTitle')}</h4>
                    
        <Customconversions t={t}/>
      

                </div>
                
                <div className="row buttons" >
                    <input type="button" className="btn button m-4" style={{'background-color': Bgcolor}} value ='Go Back' onClick={()=> setflag('N')}/>
                </div>
            </div>
            </>
    }
         </>
    )
}

export default Conversions

