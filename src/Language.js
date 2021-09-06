import React, {useState} from 'react'
import Dictionary from './Dictionary'

export default function Language(){
  let [lang, setLang] = useState('en');

  function english(){setLang('en');}
  function spanish(event){
    event.preventDefault()
    setLang('es');
  }
  function french (event){
    event.preventDefault();
    setLang('fr');
  }

  function changeLanguage(){
    if(lang==='en'){
      return(
        <ul className='App-language'>
          <li>🇬🇧</li>
          <li><a href="/" onClick = {spanish}>🇪🇸</a></li>
          <li><a href="/" onClick = {french}>🇫🇷</a></li>
        </ul>
      );
    }if (lang==='es'){
      return(
        <ul className='App-language'>
          <li><a href="/" onClick = {english}>🇬🇧</a></li>
          <li>🇪🇸</li>
          <li><a href="/" onClick = {french}>🇫🇷</a></li>
        </ul>
      ); 
    }if(lang==='fr'){
      return(
        <ul className='App-language'>
          <li><a href="/" onClick = {english}>🇬🇧</a></li>
          <li><a href="/" onClick = {spanish}>🇪🇸</a></li>
          <li>🇫🇷</li>
        </ul>
      );
    }
  }
  
  console.log(lang);
    return(
      <div className="Language">
        {changeLanguage()}
        <Dictionary lang={lang}/>
      </div>
    );
  }