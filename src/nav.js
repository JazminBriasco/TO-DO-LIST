import './css/nav.css';

function Nav(){
    return(
        <>
            <nav className="back-nav">
                <ul className="ul-nav">
                    <a href="#" className="li-nav"><li >ALL</li></a> 
                    <a href="#" className="li-nav"><li >TO DO</li></a> 
                    <a href="#" className="li-nav"><li className="li-nav">DOING</li></a>
                    <a href="#" className="li-nav"><li className="li-nav">DONE</li></a>
                </ul>
            </nav>
        </>
    );
}

export default Nav;