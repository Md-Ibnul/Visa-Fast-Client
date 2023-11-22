import React from 'react';
import './title.css'
import bottom from "../../../assets/images/bottom-bar.png";

const Title = ({title, subtitle}) => {
    return (
        <div className="text-center relative">
              <p className="font-Fasthand text-2xl text-orange-600">
                {subtitle}
              </p>
              <h3 className="font-Urbanist font-extrabold text-5xl">
                {title}
              </h3>
              <div className="absolute left-1/3 -bottom-8 bottom">
                <img src={bottom} width="100%" alt="" />
              </div>
            </div>
    );
};

export default Title;