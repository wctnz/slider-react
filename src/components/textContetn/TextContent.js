import React from 'react';
import { GradientTitle } from '../gradientTitle/GradientTitle';
import Slider from '../slider/Slider';
import "./TextContent.css";
import photo_1 from "./../../assets/images/Image__1.png";
import photo_2 from "./../../assets/images/Image__2.png";
import photo_3 from "./../../assets/images/Image__3.png";
import photo_4 from "./../../assets/images/Image__4.png";
import photo_5 from "./../../assets/images/Image__5.png";
import photo_6 from "./../../assets/images/Image__6.png";
import logoReact from "./../../assets/images/svg/React.png";
import logoJavascript from "./../../assets/images/svg/JavaScript.png";
import logoRedux from "./../../assets/images/svg/Redux.png";
import logoTypescript from "./../../assets/images/svg/Typescript.png";
import logoJest from "./../../assets/images/svg/Jest.png";
import logoWebpack from "./../../assets/images/svg/Webpack.png";
import logoHtmlCss from "./../../assets/images/svg/Html&Css.png";

const sliderData = [
    {
        label: 'CEO AND COFOUNDER, ARKETA',
        title: 'Rachel Lea Fishman',
        img: photo_1
    },
    {
        label: 'CEO AND CO-FOUNDER, FORMA',
        title: 'Jason Fan',
        img: photo_2
    },
    {
        label: 'CEO, OPENAI',
        title: 'Sam Altman',
        img: photo_3
    },
    {
        label: 'SVP OF PRODUCT, JOBBER',
        title: 'Jeff Sheclock',
        img: photo_4
    },
    {
        label: 'HEAD OF STRATEGY, SARDINE',
        title: 'Simon Taylor',
        img: photo_5
    },
    {
        label: 'HEAD OF GLOBAL SALES, STRIPE',
        title: `Eileen O'Mara`,
        img: photo_6
    },
    // {
    //     label: 'HEAD OF GLOBAL SALES, STRIPE',
    //     title: `Eileen O'Mara`,
    //     img: logoReact
    // },
    // {
    //     label: 'HEAD OF GLOBAL SALES, STRIPE',
    //     title: `Eileen O'Mara`,
    //     img: logoJavascript,
    // },
    // {
    //     label: 'HEAD OF GLOBAL SALES, STRIPE',
    //     title: `Eileen O'Mara`,
    //     img: logoRedux,
    // },
    // {
    //     label: 'HEAD OF GLOBAL SALES, STRIPE',
    //     title: `Eileen O'Mara`,
    //     img: logoTypescript,
    // },
    // {
    //     label: 'HEAD OF GLOBAL SALES, STRIPE',
    //     title: `Eileen O'Mara`,
    //     img: logoJest,
    // },
    // {
    //     label: 'HEAD OF GLOBAL SALES, STRIPE',
    //     title: `Eileen O'Mara`,
    //     img: logoWebpack,
    // },
    // {
    //     label: 'HEAD OF GLOBAL SALES, STRIPE',
    //     title: `Eileen O'Mara`,
    //     img: logoHtmlCss,
    // }
]

const TextContent = () => {
    return (
        <div className='text-content'>
            <GradientTitle>Meet our speakers</GradientTitle>
            <div className='text-content__grid'>
                <p>Our speaker lineup comprises leaders from Stripe and beyond, who’ll share knowledge and advice on the most pressing topics facing companies today. Stay tuned for more announcements.</p>
            </div>
            <Slider data={sliderData} />
        </div>
    );
};

export default TextContent;