import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants/images'

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus">

    <SubHeading title="ABOUT" />

    <div className='info'>
  
      <h4>js가든의 모든 브랜드 레스토랑은 신선한 고품질의 식자재를 사용해 최고의 셰프들이 만들어내는 최상의 음식을 고객분들이 경험하실 수 있도록 최선을 다하고 있습니다. js가든은 고급 중식당 청담점 1호점 오픈 이래 캐주얼 중식 wok, 중식 와인바 청담 대패당, 고급 일식당 ROBA, 브랜드를 창출하여 현재 15개 매장을 직영하고 있습니다.</h4>
     </div>    
  </div>
);

export default AboutUs;
