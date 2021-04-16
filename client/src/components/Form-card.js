import React, {useState} from 'react';
import Error from './Error';
import Spinner from './Spinner';
import '../css/card.css';
import Axios from 'axios';

    
const FormCard = () => {
    
/**States */
    //Save the title
    const [title, saveTitle] = useState(null);  

    //Save the first content (What user is typing) in content variable.
    const [content, saveContent] = useState(null);  //Variable to save, function to call.

    //Save color
    const [color, saveColor] = useState(null);  

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
        if(content !== null && title !== null){
            console.log(content , title);
            //Spinner active
            loading(true);
            
            //Error not active
            generateError(false);

            //Simulate loading
            setTimeout(() => {

            //After Save button, this is de data for the other div
            /* confirmContent(content); */

                submitTask();

            //Stop loading
            loading(false);

            //Clean the input
            document.getElementById("card-input-title").value = '';
            document.getElementById("card-input-content").value = '';
            
            
            saveContent(null);
            }, 1500);

            

        }else{
            console.log('Wrong information');
            generateError(true);
        }
    }

    const submitTask = () =>{
        console.log("ESTOY EN TASK");
        console.log('title client: ' + title);
        console.log('content client: ' + content);
        console.log('Color client: ' + color);
        Axios.post("http://localhost:3010/api/insert", {
            content: content,
            title: title, 
            color: color
        }).then(()=>{
            alert('Success!');
        });
    }
    
    const changeColor = e =>{
        document.getElementById("card-task-color").style.backgroundColor = e.target.value;
        saveColor(e.target.value);
        console.log(color);
    }

    return(
        <>
            <div className="body-card" id="card-task-color">
                <h2 className="title-card">{'New task'}</h2>
                <hr className="border-card"></hr>
                <div className="content-card">
                    <form onSubmit = {sendContent} className="form-save">
                        <input className="no-style-input" id="card-input-title" type="text" placeholder="Title" onChange={ e => saveTitle(e.target.value)}></input> 
                        <input className="no-style-input" id="card-input-content" type="text" placeholder="Write me!" onChange={ e => saveContent(e.target.value)}></input>              
                        <button className="btn-card">OK!</button>
                    </form>

                </div>
                <input type="color" className="card-color-picker" onChange={changeColor}></input>
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