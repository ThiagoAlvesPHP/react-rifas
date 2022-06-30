// LIBs
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";

// STYLE
import './style.scss';

export function Carousel(props) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='carousel'>
            <Slider {...settings}>
                { props.props.map( (e, key) => 
                    <div className='list' key={key}>
                        <img src={e.image} alt={e.product} />
                        <div className='content'>
                            <div className='description'>
                                <p className='product-name'>{e.product}</p>
                                <p className='date-name'>{e.date}</p>
                                <Link className='link' to={e.id}>Comprar Rifa</Link>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
    )
}