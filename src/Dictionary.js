import React, {useState, useEffect} from 'react';
import "./style/Dictionary.css";
import Swal from 'sweetalert2'
import axios from 'axios';

export default function Dictionary ({lang}){
  const [keyword, setKeyword] = useState("");
  let [word,setWord] = useState("");
  let [type, setType] = useState("");
  let [meaning, setMeaning] = useState("");
  let [run, setRun] = useState(false);

  useEffect(()=>{
    setRun(false);
    //reset()
  },[lang])

  function updateWord(event){setKeyword (event.target.value);}

  function reset(){
    setKeyword(null);
    console.log(keyword)}

  function handleResponse(response){
    word = response.data[0].word;
    setWord(word = word.charAt(0).toUpperCase()+word.substring(1));
    setType(response.data[0].meanings[0].partOfSpeech);
    setMeaning(response.data[0].meanings[0].definitions[0].definition)
    setRun(true);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${lang}/`
    const Toast = Swal.mixin({
      toast: true,
      position: 'center-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if (keyword === ""){
      setWord("");
      setType("");
      setMeaning("");
      Toast.fire({
        background:'#CEE5D0',
        icon: 'success',
        iconColor:'cadetblue',
        title: 'Please type a world',
        confirmButtonText: 'Cool',
      })
    }else{
      axios.get(apiUrl+keyword).then(handleResponse);
    }
  }
console.log(run)
//keyword = keyword.charAt(0).toUpperCase()+keyword.substring(1)
if (run){
  return (
    <div className="Dictionary">
      <h5>Looking for:</h5>
      <form className="D-form row g-3" onSubmit={search}>
        <div className="col-4">
          <input className = "D-search form-control" type="search" placeholder="Search word...🔍" onChange = {updateWord}/> 
        </div>
        <div className="col-4">
          <button className="D-btn" type="submit"> Search </button>
        </div>
      </form>  
      <div className='D-def'>
        <h3>{word}</h3>
        <p>{type}</p>
        <p>{meaning}</p>
      </div>
    </div>);
     }else{
      return(
      <div className="Dictionary">
      <h5>Looking for:</h5>
      <form className="D-form row g-3" onSubmit={search}>
        <div className="col-4">
          <input className = "D-search form-control" type="search" placeholder="Search word...🔍" onChange = {updateWord}/> 
        </div>
        <div className="col-4">
          <button className="D-btn" type="submit"> Search </button>
        </div>
      </form> 
      </div>);}
};