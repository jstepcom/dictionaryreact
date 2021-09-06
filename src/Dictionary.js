import React, {useState} from 'react';
import "./Dictionary.css";
import Swal from 'sweetalert2'

export default function Dictionary (){
  let [keyword, setKeyword] = useState("");

  function updateWord(event){
    setKeyword (event.target.value);
  }

  function search(event){
    event.preventDefault();
    let msg = "";
    if (keyword === ""){
      msg = "Please type a world";
    }else{
      msg = `Searching for ${keyword}`;
    }
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
    Toast.fire({
      background:'#CEE5D0',
      icon: 'success',
      iconColor:'cadetblue',
      title: msg,
      confirmButtonText: 'Cool',
    })
  }

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
    </div>
  );
};