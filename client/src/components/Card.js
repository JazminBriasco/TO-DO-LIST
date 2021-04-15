import React, {useState, useEffect } from 'react';
import '../css/card.css';

import Axios from 'axios';

const Card = ({mainTitle, upTo}) => {

    const [taskList, saveTaskList] = useState([]);
    const [color, saveColor] = useState(null);
    
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

    const updateTitle = (id_card, title) =>{
        Axios.put("http://localhost:3010/api/updateTitle", {
            id_card: id_card,
            title: title
        });
    };

    const updateCard = (id_card, content) =>{
        Axios.put(`http://localhost:3010/api/updateTitle/${id_card}`);
    };


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



    return(
            <>
            <h2 id="por"></h2>
                { taskList.map((value)=>{
                /* {saveColor(value.color)} */
                if(colorCard){ colorCard.style.backgroundColor = value.color;}

                    return                    <div className="body-card" id="color-card"  >
                    <h2 className="title-card" >{value.title}  </h2>
                    <button className="btn-card" onClick={() =>{updateTitle(value.id_card)}}>Update</button>
                    <hr className="border-card" ></hr>
                    <div className="content-card" >
                        <form className="form-save" >
                            <p>{value.content}</p>
                            {upTo ? <button className="btn-card" id="btn-to-doing" onClick={() =>{changeState(value.id_card, upTo)}}>{upTo}</button> : null}
                            <button className="btn-card" onClick={() =>{deleteCard(value.id_card)}}>Remove</button>
                            
                            <button className="btn-card" onClick={() =>{updateCard(value.id_card)}}>Update</button>
                        </form>
                    </div>
                </div>
                })}
            </>
        );
    }
    export default Card;
