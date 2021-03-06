import React from "react";

import { Link } from "react-router-dom";

import one from './one.png'
import two from './two.png'
import fri from './fri.png'
import four from './four.png'

import './schema.css'

const Schema=()=>{
    return(
        
    <div id="element" class="scheme">
    <div class="container-12 relative">

        <div id="scheme-header1" class="module-header1 content-editable" >Схема работы</div>

        <div class="scheme-item grid-3">
            <div class="arrow-up"></div>
            <img src={one} /><br/>
            <div id="scheme-text1" class="scheme-text content-editable" >
                Пишите<br/>
                 или звоните<br/>
                по телефону
            </div>
        </div>

        <div class="scheme-item grid-3">
            <div class="arrow-down"></div>
            <img src={two} /><br/>
            <div id="scheme-text2" class="scheme-text content-editable" >
                Выезжаем бесплатно<br/>
                на консультацию,<br/>
                обсуждаем все нюансы<br/>
                выполнения работ
            </div>
        </div>

        <div class="scheme-item grid-3">
            <div class="arrow-up"></div>
            <img src={fri} /><br/>
            <div id="scheme-text3" class="scheme-text content-editable" >
                Выполняем<br/>
                работы
            </div>
        </div>

        <div class="scheme-item grid-3">
            <img src={four} /><br/>
            <div id="scheme-text4" class="scheme-text content-editable" >
                Сдаем<br/>
                выполненные<br/>
                работы
            </div>
        </div>
        <div className="grid_schema">
               <Link className="link_schema" to="/">Главная</Link>
               <Link  className='link_schema' to="/about">О нас</Link>
                <Link className='link_schema' to="/jobs">Виды работ</Link>
                <Link className='link_schema' to="/photo">Фотогалерея</Link>
           </div>
    </div>
    </div>
    )
}

export default Schema;