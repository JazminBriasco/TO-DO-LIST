import React, {useState, useEffect } from 'react';
import '../css/card.css';

import Axios from 'axios';

    

const Card = ({mainTitle, upTo}) => {

    const [taskList, saveTaskList] = useState([]);
    const [color, saveColor] = useState(null);
    

   /*  useEffect(()=>{
        Axios.get("http://localhost:3010/api/getAll").then((response)=>{
            saveTaskList(response.data);
    
            const aux = [];
            taskList.map((value)=>{

                if(value.state === 'todo'){
                    aux.push(value);
                }
                
                if(value.state === 'todo'){
                    aux.push(value);
                }
                    
            });
        })
    }, []); */



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
    });

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
                    <h2 className="title-card" id="intro1">{value.title}  </h2>
                    <hr className="border-card" id="intro2"></hr>
                    <div className="content-card" id="intro3">
                        <form className="form-save" id="intro4">
                            <p>{value.content}</p>
                            {upTo ? <button className="btn-card">{upTo}</button> : null}
                            <button className="btn-card">Remove</button>
                        </form>
                    </div>
                </div>
                })}
            </>
        );
    }
    export default Card;
