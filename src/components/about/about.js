import React from "react";

import './about.css'

import q from './q.png'
import w from './w.png'
import e from './e.png'
import r from './r.png'



const About=()=>{
    return(
    <section>
        <div id="benefits" class="benefits">
    <div class="container-12 relative">
        <div id="benefits-header1" class="module-header content-editable" contenteditable="true">
            Ваши глаза боятся,<br/>
            <span >наши руки делают</span>
        </div>

        

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
    </div>
    </section>
    )
}

export default About;