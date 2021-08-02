import React,{Suspense, useState} from 'react';
import './App.css';
import Conversions from "./Components/Conversions"
import { useTranslation } from 'react-i18next';

function Maincomponent() {
  var colors = [
    {
      hex: '#008080',
      name: 'Teal'
    },
    {
      hex: '#898989',
      name: 'Grey'
    },
    {
      hex: '#A71930',
      name: 'Red'
    },
    {
      hex: '#6495ED',
      name: 'Blue'
    }
  ];
  var FontFamily = [
    {
      name: 'Verdana',
      value: 'Verdana sans-serif'
    },
    {
      name: 'Trebuchet',
      value: '\'Trebuchet MS\', sans-serif'
    },
    {
      name: 'Garamond',
      value: 'Garamond, serif'
    },
    {
      name: 'cursive',
      value:'\'Brush Script MT\', cursive'
    }
  ];
  const [bgcolor, setbgcolor] = useState();
  const [font, setFont] = useState();
  const {t, i18n}= useTranslation();
  document.getElementById("body").style.fontFamily = font;
  return (
    
    <div className="container app" style={{'backgroundColor': bgcolor}}> 
      <h1 className="text-center m-3 mt-5">{t("Title")}</h1>
      <div className="row">
        <div className="col-8 m-3" id="box"  >
          
              <Conversions Bgcolor={bgcolor} t={t}/>
             
              
        </div>
        <div className="col-3 m-3" id="smallbox" >
          <center>
          <h5 className="m-3">{t("CustomStyle")}</h5>
        
          <div className="outerdiv">
          { colors.map((code,Codename)=>(
                  <button  value={code.hex} className="innerdiv" onClick={()=>setbgcolor(code.hex)} style={{'background-color': code.hex }}></button>
             ))}
         </div>

         <div className="fontbox row  m-3">
          { FontFamily.map((Font,key)=>(
                  <button   className=" m-2" style={{'fontFamily':Font.value}} onClick={()=>setFont(Font.value)}>{t(Font.name)}</button>
             ))}
         </div>
         <div className=" row outerdiv  m-3">
         <button onClick={() => i18n.changeLanguage('de')} className="m-1">German</button>
        <button onClick={() => i18n.changeLanguage('en')} className="m-1">English</button>
           
         </div>

          </center>

        </div>

    </div>
    </div>
  
  );
}

function App()
{
    return (
        <Suspense fallback="loading">
            <div className="App">
                <Maincomponent/>
            </div>
        </Suspense>
    );
}

export default App;
