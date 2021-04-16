import React, {useState, useEffect } from 'react';
import '../css/card.css';
import FormCard from '../components/Form-card.js';

import Axios from 'axios';

const Card = ({mainTitle, upTo}) => {

    const [taskList, saveTaskList] = useState([]);
    const [color, saveColor] = useState(null);
    /* 
    const placeholder = document.getElementById('placeholder-input');
     */

    const getAll = e =>{
        Axios.get("http://localhost:3010/api/getAll").then((response)=>{
            saveTaskList(response.data);
    })};
        
    const getToDo = e =>{
        Axios.get("http://localhost:3010/api/getToDo").then((response)=>{
            saveTaskList(response.data);
    })};

    const getDoing = e =>{
        Axios.get("http://localhost:3010/api/getDoing").then((response)=>{
            saveTaskList(response.data);
    })};

    const getDone = e =>{
        Axios.get("http://localhost:3010/api/getDone").then((response)=>{
            saveTaskList(response.data);
    })};

    const deleteCard = (id_card) =>{
        Axios.delete(`http://localhost:3010/api/delete/${id_card}`);
    };

    const changeState = (id_card, status) =>{
        Axios.put("http://localhost:3010/api/upTo", {
            id_card: id_card,
            state: status
    })};

  
  

    useEffect(()=>{
        if(mainTitle === 'All'){
            getAll();
            return;
        }
        if(mainTitle === 'To do'){
            getToDo();
            return;
        }
        if(mainTitle === 'Doing'){
            getDoing();
            return;
        }
        if(mainTitle === 'Done'){
            getDone();
            return;
        }
    }, []);

    const main = document.querySelector('#main-title');
    const colorCard = document.querySelector('#color-card');


    if(colorCard){   colorCard.style.backgroundColor = color } 
    if(main){   main.innerHTML = mainTitle } 


    const updateCard = ( id_card) =>{
        Axios.put("http://localhost:3010/api/updateContent", {
            id_card: id_card,
            content: document.getElementById('placeholder-input').value
        }); 
    };

    const updateTitle = (id_card) =>{
        Axios.put("http://localhost:3010/api/updateTitle", {
            id_card: id_card,
            title: document.getElementById('placeholder-input-title').value
        });
    };

    return(
            <>
            <h2 id="por"></h2>
                { taskList.map((value)=>{

                
                if(colorCard){ colorCard.style.backgroundColor = value.color;}
                
                return                    <div className="body-card" id="color-card"  >
                    <form>
                        <input type="text" className="title-card" id="placeholder-input-title" placeholder = {value.title}>
                        </input>
                        <button className="btn-card" id="btn-update" onClick={(e) =>{updateTitle(value.id_card)}}>Change</button>
                    </form>

                    <hr className="border-card" ></hr>
                    <div className="content-card" >
                        <form>
                            <input type="text" id="placeholder-input" placeholder = {value.content}>
                            </input>
                            <button className="btn-card" onClick={(e) =>{updateCard(value.id_card)}}>Change</button>
                        </form>

                        <form className="form-save" >
                            {upTo ? <button className="btn-card" id="btn-to-doing" onClick={() =>{changeState(value.id_card, upTo)}}>{upTo}</button> : null}
                            <button className="btn-card" onClick={() =>{deleteCard(value.id_card)}}>Remove</button>
                        </form>
                    </div>
                </div>
                })}
            </>
        );
    }
    export default Card;
