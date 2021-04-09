import React, {useState} from 'react';
import '../css/card.css';

    
const Card = ({titulo}) => {
    

    const[content, saveContent] = useState('');  //Variable a guardar, función a llamar.

    return(

            <div className="body-card">
                <h2 className="title-card">{titulo}</h2>
                <hr className="border-card"></hr>
                <div className="content-card">
                    <form>
                        <input className="no-style-input" type="text" placeholder="Write me" onChange={ e => saveContent(e.target.value)}></input>
                        <button className="btn-card">OK</button>
                    </form>
                </div>
                <div className="content-card">
                    {content}
                </div>
            </div>
        
    );
}
export default Card;






/* function Card(props ){
    console.log(props); */
    /* React usa JSX, que permite mezclar HTML y JS */
/*     return(
        <>
            <div className="body-card">
                <h2 className="title-card">{props.titulo }</h2>
                <hr className="border-card"></hr>
                <div className="content-card">
                    Aenean vulputate neque ante, ut facilisis elit ultricies a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras mi arcu, mattis sit amet mauris at, eleifend congue velit. Proin bibendum commodo tellus. Quisque faucibus ex nulla, id suscipit metus pharetra at. Donec tincidunt, massa eget euismod imperdiet, urna ex viverra velit, at bibendum odio libero quis diam. Suspendisse suscipit congue congue.
                </div>
            </div>
        </>
    );
} */

/* const Card = ({titulo}) => */
    /* console.log(titulo); */
    /*Código JS */
    /*Se puede sacar el return y <></> siempre y cuando no se use JS en esta sección */
    /*   (
        <>
            <div className="body-card">
                <h2 className="title-card">{titulo}</h2>
                <hr className="border-card"></hr>
                <div className="content-card">
                    Aenean vulputate neque ante, ut facilisis elit ultricies a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras mi arcu, mattis sit amet mauris at, eleifend congue velit. Proin bibendum commodo tellus. Quisque faucibus ex nulla, id suscipit metus pharetra at. Donec tincidunt, massa eget euismod imperdiet, urna ex viverra velit, at bibendum odio libero quis diam. Suspendisse suscipit congue congue.
                </div>
            </div>
        </>
    ); */



/*class es una palabra reservada de JS, como usa JSX usa className para HTML. */