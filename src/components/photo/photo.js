import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import one from './img/one.jpg'
import two from './img/two.jpg'
import fri from './img/fri.jpg'
import four from './img/four.jpg'
import five from './img/five.jpg'
import six from './img/six.jpg'
import seven from './img/seven.jpg'
import eignt from './img/eignt.jpg'
import nine from './img/nine.jpg'
import ten from './img/ten.jpg'
import eleven from './img/eleven.jpg'
import alp from './img/alp.jpg'

import './photo.css'

const Photo=()=>{
    return(
    <section>
        <div id="photo" class="photo">
            <div class="container-12 ">
                <div id="photo-header1" class="module-header content-editable" >Фотогалерея</div>
                <Carousel>
  <Carousel.Item>
   <div className='img_grid'>
   <img
      className="photo-block"
      src={one}
      alt="First slide"
    />
    <img
      className="photo-block"
      src={two}
      alt="First slide"
    />
    <img
      className="photo-block"
      src={fri}
      alt="First slide"
    />
   </div>
    <Carousel.Caption>
      <h3>Утепление фасада квартир</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
 <div className='img_grid'>
 <img
      className="photo-block"
      src={four}
      alt="First slide"
    />
    <img
      className="photo-block"
      src={five}
      alt="First slide"
    />
    <img
      className="photo-block"
      src={six}
      alt="First slide"
    />
 </div>

    <Carousel.Caption>
      <h3>Монтаж поликарботата</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className='img_grid'>
  <img
      className="photo-block"
      src={seven}
      alt="First slide"
    />
    <img
      className="photo-block"
      src={eignt}
      alt="First slide"
    />
    <img
      className="photo-block"
      src={nine}
      alt="First slide"
    />
  </div>

    <Carousel.Caption>
      <h3>Монтаж кондицанера</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className='img_grid'>
  <img
      className="photo-block"
      src={ten}
      alt="First slide"
    />
    <img
      className="photo-block"
      src={eleven}
      alt="First slide"
    />
    <img
      className="photo-block"
      src={alp}
      alt="First slide"
    />
  </div>

    <Carousel.Caption>
      <h3>Помыв окон</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        </div>
    </section>
        
        
        
    )
}

export default Photo