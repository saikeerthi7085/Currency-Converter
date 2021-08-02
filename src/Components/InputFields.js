import React from 'react'
import '../Styles/textbox.css';

export default function InputFields(props) {
    const {
        Codenames,defaultoption,onchangecurrency,onChangeAmount,amount,Flag,t
    }= props
   
    return (
        <>
        {  
            Flag==='N' ? 
            <>
            <div className="m-5 ">
                <select className=" dropdown m-2" value= {defaultoption} onChange={onchangecurrency}>
                    { Object.keys(Codenames).map((code,Codename)=>(
                        <option key={Codename} value={code}>{Codenames[code]}</option>
                    ))}   
                </select>
                <input type="number"  className="inputfield m-2"  value={amount} onChange={onChangeAmount}/>
            </div>
        </>
            :
            <input type="number"  className="inputfield m-2" placeholder={t("Amount")} value={amount} onChange={onChangeAmount}/>
        }
        
       </>
        
    )
}
