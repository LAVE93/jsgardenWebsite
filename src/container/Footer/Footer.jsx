import React from 'react';

import images from '../../constants/images';

import './Footer.css';

const Footer = () => (
  <div className='app__footer'>
    
    <img src={images.jsgarden} alt="app logo"/>
    <p>상호명 : js가든 | 사업자등록번호 : 211-85-65672 | 대표자 : 정영태</p>
    <p>E-MAIL : jsgarden_@naver.com | TEL : 02-540-227- | FAX : 02-540-2271 | 주소 : 서울특별시 강남구 선릉로145길 16 4F</p>
    
  </div>
);

export default Footer;
