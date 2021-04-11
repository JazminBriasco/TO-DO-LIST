import React from 'react';
import '../css/card.css';

const Card = ({title, upTo}) => {
    return(
        <>
            <div className="body-card">
                <h2 className="title-card">{title}</h2>
                <hr className="border-card"></hr>
                <div className="content-card">
                    <form className="form-save">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in libero vitae lectus commodo laoreet interdum nec libero. In ultricies augue sed purus porta feugiat. Fusce mollis est a ante luctus, ut laoreet ante accumsan.</p>
                        {upTo ? <button className="btn-card">{upTo}</button> : null}
                        
                        <button className="btn-card">Remove</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Card;
