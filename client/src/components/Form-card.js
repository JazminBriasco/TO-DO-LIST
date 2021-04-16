import React, {useState} from 'react';
import Error from './Error';
import Spinner from './Spinner';
import '../css/card.css';
import Axios from 'axios';

    
const FormCard = () => {
    
    /**States */
    //Save the title
    const [title, saveTitle] = useState(null);  

    //Save the content (What user is typing) in content variable.
    const [content, saveContent] = useState(null);  //Variable to save, function to call.

    //Save color (this will be for the color of the cards)
    const [color, saveColor] = useState(null);  

    //Error message
    const [error, generateError] = useState(false);

    //Call Spinner
    const [load, loading] = useState(false); 


/**Handles */    
    //When the data in the form is confirmed
    const sendContent = e =>{
        e.preventDefault(); 

        //Validations
        if((content.length !== null || undefined) && (title !== null || undefined)){
            console.log(content , title);
            //Spinner active
            loading(true);
            
            //Error not active
            generateError(false);

            //Simulate loading
            setTimeout(() => {
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

    //Called by the above function
    const submitTask = () =>{
        Axios.post("http://localhost:3010/api/insert", {
            content: content,
            title: title, 
            color: color
        }).then(()=>{
            alert('Success!');
        });
    }
    
    //This will be for the color of the cards.
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
                        <input required className="no-style-input" id="card-input-title" type="text" placeholder="Title" onChange={ e => saveTitle(e.target.value)}></input> 
                        <input required className="no-style-input" id="card-input-content" type="text" placeholder="Write me!" onChange={ e => saveContent(e.target.value)}></input>              
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
