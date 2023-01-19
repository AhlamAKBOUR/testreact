import React, { useState } from 'react'

function Animal(props) {
    const [like, setLike]=useState(true);
    const handlclick= ()=>{
        setLike(!like)
    }
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.image} alt={props.nom} />
            <div className="card-body">
                <h5 className="card-title">{props.nom}</h5>
                <h6 className="card-title">{props.espece}</h6>
                <p className="card-text">{props.age}</p>
                <p className="card-text">{props.descr}</p>
                <a href="/" className="btn btn-primary"> go</a>
                <button onClick={handlclick} className={like ?'btn btn-success' :'btn btn-primary' } data-toggle="button" aria-pressed="false" autocomplete="off">
                 {like ? "Like" : "Dislike"}
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default Animal