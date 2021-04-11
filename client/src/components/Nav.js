import React from 'react';
import '../css/nav.css';

function Nav(){
    return(
        <>
            <nav className="back-nav">
                <ul className="ul-nav">
                    <a href="home" className="li-nac icon-nav"> </a> 
                    <a href="all" className="li-nav"><li >ALL</li></a> 
                    <a href="todo" className="li-nav"><li >TO DO</li></a> 
                    <a href="doing" className="li-nav"><li >DOING</li></a>
                    <a href="done" className="li-nav"><li >DONE</li></a>
                </ul>
            </nav>
            
        </>
    );
}

export default Nav;