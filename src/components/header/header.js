import React from "react";
import { Link } from "react-router-dom";

import './header.css'



const Header=()=>{
    return(
    <div id="top" class="module1"  >
        <div class="container-12 relative" id='module_phone'>
            <div id="utp1" class="content-editable utp" >Промышленный альпинизм и высотные работы</div>
           <a href="https://wa.me/+79063207897"><div class="btn">Напиши</div></a> 
           <div className="grid_header">
               <Link className="link_header" to="/about">О нас</Link>
               <Link  className='link_header' to="/jobs">Виды работ</Link>
                <Link className='link_header' to="/schema">Схема работ</Link>
                <Link className='link_header' to="/photo">Фотогалерея</Link>
           </div>
        </div>
        <a class="phone-button" href="tel:+79063207897"><img className="img_phone" src="https://img.icons8.com/color/48/000000/phone-message--v2.gif" /></a>
    </div>





        
    )
}

export default Header;