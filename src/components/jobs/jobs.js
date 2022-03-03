import React from "react";

import { Link } from "react-router-dom";

import one from './one.jpg'
import two from './two.jpg'
import fri from './fri.jpg'
import four from './four.jpg'
import five from './five.jpg'
import six from './six.jpg'
import seven from './seven.jpg'
import eight from './eight.jpg'
import nine from './nine.jpg'
import ten from './ten.jpg'
import eleven from './eleven.jpg'
import twele from './twele.jpg'
import thirteen from './thirteen.jpg'
import fourteen from './fourteen.jpg'

import './jobs.css';

const Jobs=()=>{
    return(
        <div id="catalog" class="catalog">
        <div class="container-12 " id="container-12phone">
        <div id="catalog-header1" class="module-header content-editable" >Виды работ</div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head1" class="catalog-head content-editable" >
                        Ремонт<br/>
                        и гидроизоляция<br/>
                        межпанельных швов
                    </div>
                    <img src={one} />
                    <div id="catalog-price1" class="catalog-price content-editable" >
                        От 400 руб.<br/>
                        погонный метр
                    </div>
              
                </div>
            </div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head2" class="catalog-head content-editable" >
                        Фасадные работы -<br/>
                        утепление квартир,<br/>
                        фасадов зданий
                    </div>
                    <img src={two} />
                    <div id="catalog-price2" class="catalog-price content-editable" >
                        От 1300 руб.<br/>
                        за квадратный метр
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head3" class="catalog-head content-editable" >
                        Монтаж различных<br/>
                        конструкций<br/>
                        и наружной  рекламы
                    </div>
                    <img src={fri} />
                    <div id="catalog-price3" class="catalog-price content-editable" >
                        Рассчитывается<br/>
                        индивидуально
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head14" class="catalog-head content-editable" >
                        Подъём негабаритных<br/>
                        и малогабаритных<br/>
                        грузов
                    </div>
                    <img src={four} />
                    <div id="catalog-price4" class="catalog-price content-editable" >
                        Рассчитывается<br/>
                        индивидуально
                    </div>
                </div>
            </div>

            <div class="clear"></div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head15" class="catalog-head content-editable">
                        Мойка окон,<br/>
                        фасадов  на высоте
                    </div>
                    <img src={five} />
                    <div id="catalog-price5" class="catalog-price content-editable">
                        От 50 руб.<br/>
                        за метр
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head16" class="catalog-head content-editable">
                        Сварочные работы<br/>
                        на высоте
                    </div>
                    <img src={six} />
                    <div id="catalog-price6" class="catalog-price content-editable">
                        Рассчитывается<br/>
                        индивидуально
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head17" class="catalog-head content-editable">
                        Электромонтажные<br/>
                        работы
                    </div>
                    <img src={seven} />
                    <div id="catalog-price7" class="catalog-price content-editable">
                        Рассчитывается<br/>
                        индивидуально
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head18" class="catalog-head content-editable" >
                        Остекление<br/>
                        на высоте
                    </div>
                    <img src={eight} />
                    <div id="catalog-price8" class="catalog-price content-editable">
                        Рассчитывается<br/>
                        индивидуально
                    </div>
                </div>
            </div>

            <div class="clear"></div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head9" class="catalog-head content-editable">
                        Монтаж различных<br/>
                        инженерных сетей<br/>
                        (пожаротушения,<br/>
                        сигнализация и т.п.)
                    </div>
                    <img src={nine} />
                    <div id="catalog-price9" class="catalog-price content-editable">
                        Рассчитывается<br/>
                        индивидуально
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head10" class="catalog-head content-editable">
                        Кровельные работы<br/>
                        (покраска, монтаж,<br/>
                        гидроизоляция<br/>
                        и ремонт крыш)
                    </div>
                    <img src={ten} />
                    <div id="catalog-price10" class="catalog-price content-editable">
                        Рассчитывается<br/>
                        индивидуально
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head11" class="catalog-head content-editable">
                        Ремонт<br/>
                        и сервис<br/>
                        промышленных<br/>
                        дымовых труб
                    </div>
                    <img src={eleven} />
                    <div id="catalog-price11" class="catalog-price content-editable">
                        Рассчитывается<br/>
                        индивидуально
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="catalog-item">
                    <div id="catalog-head12" class="catalog-head content-editable">
                        Монтаж<br/>
                        газовых труб<br/>
                        на многоэтажных<br/>
                        новостройках
                    </div>
                    <img src={twele} />
                    <div id="catalog-price12" class="catalog-price content-editable">
                        Рассчитывается<br/>
                        индивидуально
                    </div>
                </div>
            </div>

        <div class="clear"></div>

        <div class="grid-3">
            <div class="catalog-item">
                <div id="catalog-head13" class="catalog-head content-editable">
                    Опиливание<br/>
                    деревьев
                </div>
                <img src={thirteen} />
                <div id="catalog-price13" class="catalog-price content-editable">
                    Рассчитывается<br/>
                    индивидуально
                </div>
            </div>
        </div>

        <div class="grid-3">
            <div class="catalog-item">
                <div id="catalog-head14" class="catalog-head content-editable" >
                    Монтаж<br/>
                    поликарботата
                </div>
                <img src={fourteen} />
                <div id="catalog-price14" class="catalog-price content-editable" >
                    Рассчитывается<br/>
                    индивидуально
                </div>
            </div>
        </div>

        <div className="grid_jobs">
               <Link className="link_jobs" to="/">Главная</Link>
               <Link  className='link_jobs' to="/about">О нас</Link>
                <Link className='link_jobs' to="/schema">Схема работ</Link>
                <Link className='link_jobs' to="/photo">Фотогалерея</Link>
           </div>
    </div>
    </div>
    )
}

export default Jobs;