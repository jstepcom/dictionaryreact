import React, {useState} from 'react';
import "./Dictionary.css"

export default function Dictionary (){
  let [keyword, setKeyword] = useState("");

  function updateWord(event){
    setKeyword (event.target.value);
  }

  function search(event){
    event.preventDefault();
    alert (`Searching for ${keyword}`);
  }
  return (
    <div className="Dictionary">
      <h5>Looking for:</h5>
      <form onSubmit={search}>
        <input className = "D-search" type="search" onChange = {updateWord}/> 
      </form>  
    </div>
  );
};