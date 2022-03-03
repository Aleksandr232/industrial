import React from "react";
import { Link } from "react-router-dom";

import './about.css'

import q from './q.png'
import w from './w.png'
import e from './e.png'
import r from './r.png'



const About=()=>{
    return(
    <section className="about">
        <div id="benefits" class="benefits">
    <div class="container-12 relative" id='module_phone'>
        <div id="benefits-header1" class="module-header content-editable" >
            Ваши глаза боятся,<br/>
            <span >наши руки делают</span>
        </div>

        
        <div className="grid_about_phone">
            
        <div class="grid-4">
            <div class="ben-item">
                <div class="ben-line"></div>
                <img src={q}/>
                <div id="benefits-text2" class="ben-text content-editable" >
                    Выезд<br/>
                    на консультацию<br/>
                    <span>бесплатно</span>
                </div>
            </div>
        </div>

        <div class="grid-4">
            <div class="ben-item">
                <img src={w}/>
                <div id="benefits-text3" class="ben-text content-editable" >
                    Мы используем<br/>
                    <span>проверенное</span><br/>
                    снаряжение и инструмент
                </div>
            </div>
        </div>
        <div class="clear"></div>

        <div class="grid-5 push-1">
            <div class="ben-item">
                <div class="ben-line" ></div>
                <img src={e}/>
                <div id="benefits-text4" class="ben-text content-editable" >
                    На консультацию<br/>
                    выезжает <span>квалифицированный</span><br/>
                    сотрудник, с которым  обсуждаются<br/>
                    все необходимые нюансы
                </div>
            </div>
        </div>

        <div class="grid-5 push-1">
            <div class="ben-item">
                <img src={r}/>
                <div id="benefits-text5" class="ben-text content-editable" >
                    При выполнении работ<br/>
                    соблюдаются все требования<br/>
                    <span  >безопасности</span> и используются<br/>
                    средства индивидуальной защиты
                </div>
            </div>
        </div>
        </div>
        <div className="grid_about">
               <Link className="link_about" to="/">Главная</Link>
               <Link  className='link_about' to="/jobs">Виды работ</Link>
                <Link className='link_about' to="/schema">Схема работ</Link>
                <Link className='link_about' to="/photo">Фотогалерея</Link>
           </div>
    </div>
    </div>
    </section>
    )
}

export default About;