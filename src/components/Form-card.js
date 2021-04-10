import React, {useState} from 'react';
import Error from './Error';
import Spinner from './Spinner';
import '../css/card.css';


    
const FormCard = ({titulo}) => {

/**States */
    //Save the first content (What user is typing) in content variable.
    const [content, saveContent] = useState(null);  //Variable to save, function to call.

    //Error message
    const [error, generateError] = useState(false);

    //Save the confirm content (After 'Save' button)
    const [confirm, confirmContent] = useState(null);

    //Call Spinner
    const [load, loading] = useState(false); 


/**Handles */    
    //When the data in the form is confirmed
    const sendContent = e =>{
        e.preventDefault(); 

        //Validations
        if(content !== null){
            //Spinner active
            loading(true);
            
            //Error not active
            generateError(false);

            //Simulate loading
            setTimeout(() => {

            //After Save button, this is de data for the other div
            confirmContent(content);

            //Stop loading
            loading(false);

            //Clean the input
            document.getElementById("card-input").value = '';
            saveContent(null);
            }, 1500);

        }else{
            console.log('Wrong information');
            generateError(true);
        }
    }
    
    return(
        <>
            <div className="body-card">
                <h2 className="title-card">{titulo}</h2>
                <hr className="border-card"></hr>
                <div className="content-card">
                    <form onSubmit = {sendContent} className="form-save">
                        <input className="no-style-input" id="card-input" type="text" placeholder="Write me" onChange={ e => saveContent(e.target.value)}></input>
                        <button className="btn-card">Save</button>
                    </form>
                </div>
                <div className="content-card ">
                    {(confirm) ? <p>{confirm} </p>: null}
                    <form className="form-save">
         {/*                <button className="btn-card">REMOVE</button> */}
                        <button className="btn-card">OK !</button>
                    </form>
                </div>
                {/* Conditional components */}
                { (error) ? <Error/> : null  } 
                { (load) ? <Spinner/> : null  } 
            </div>

        </>
    );
}
export default FormCard;






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