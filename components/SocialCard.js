class CustomCardSocial extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Cria um Shadow DOM
    }

    static get observedAttributes() {
        return ['image', 'title', 'text','insta', 'facebook', 'whats'];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const image = this.getAttribute('image') || '';
        const title = this.getAttribute('title') || 'Título do Card';
        const text = this.getAttribute('text') || 'Descrição do card.';
        const insta = this.getAttribute('insta') || 'Descrição do card.';
        const facebook = this.getAttribute('x') || 'Descrição do card.';
        const whats = this.getAttribute('whats') || 'Descrição do card.';


        this.shadowRoot.innerHTML = `
        <style>
            /* From Uiverse.io by Smit-Prajapati */ 
            .parent {
                width: 100%;
                top: 50%;
                left: 0%;
                height: 300px;
                perspective: 1000px;
                position: relative;
            }
            .card {
            height: 100%;
            background: linear-gradient(135deg, rgb(0, 89, 255) 0%, rgb(30, 8, 226) 100%);
            transition: all 0.5s ease-in-out;
            transform-style: preserve-3d;
            box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
            }

            .glass {
            transform-style: preserve-3d;
            position: absolute;
            inset: 8px;
            border-top-right-radius: 100%;
            background: linear-gradient(0deg, rgba(43, 37, 219, 0.72) 0%, rgba(151, 161, 189, 0.81) 100%);
            /* -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px); */
            transform: translate3d(0px, 0px, 25px);
            border-left: 1px solid white;
            border-bottom: 1px solid white;
            transition: all 0.5s ease-in-out;
            }

            .content {
            padding: 100px 60px 0px 30px;
            transform: translate3d(0, 0, 26px);
            }

            .content .title {
            display: block;
            color: white;
            font-weight: 900;
            font-size: 20px;
            }

            .content .text {
            display: block;
            color: white;
            font-size: 15px;
            margin-top: 20px;
            }

            .bottom {
            padding: 10px 12px;
            transform-style: preserve-3d;
            position: absolute;
            bottom: 20px;
            left: 20px;
            right: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transform: translate3d(0, 0, 26px);
            }

            .bottom .view-more {
            display: flex;
            align-items: center;
            width: 40%;
            justify-content: flex-end;
            transition: all 0.2s ease-in-out;
            }

            .bottom .view-more:hover {
            transform: translate3d(0, 0, 10px);
            }

            .bottom .view-more .view-more-button {
            background: none;
            border: none;
            color:rgb(34, 52, 211);
            font-weight: bolder;
            font-size: 12px;
            }

            .bottom .view-more .svg {
            fill: none;
            stroke: rgb(34, 52, 211);
            stroke-width: 3px;
            max-height: 15px;
            }

            .bottom .social-buttons-container {
            display: flex;
            gap: 10px;
            transform-style: preserve-3d;
            }
            .social-buttons-container{
                display: flex;
                gap: 10px;
                margin-left:5%;
            }

            .bottom .social-buttons-container .social-button {
                width: 40px;
                aspect-ratio: 1;
                padding: 5px;
                background: rgb(255, 255, 255);
                border-radius: 50%;
                border: none;
                display: grid;
                place-content: center;
                box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
            }

            .bottom .social-buttons-container .social-button:first-child {
            transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
            }

            .bottom .social-buttons-container .social-button:nth-child(2) {
            transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
            }

            .bottom .social-buttons-container .social-button:nth-child(3) {
            transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
            }

            .bottom .social-buttons-container .social-button .svg {
            width: 15px;
            fill: rgb(34, 52, 211);
            }

            .bottom .social-buttons-container .social-button:hover {
            background: black;
            }

            .bottom .social-buttons-container .social-button:hover .svg {
            fill: white;
            }

            .bottom .social-buttons-container .social-button:active {
            background: rgb(34, 52, 211);
            }

            .bottom .social-buttons-container .social-button:active .svg {
            fill: black;
            }

            .logo {
            position: absolute;
            right: 0;
            top: 0;
            transform-style: preserve-3d;
            }

            .logo .circle {
            display: block;
            position: absolute;
            aspect-ratio: 1;
            border-radius: 50%;
            top: 0;
            right: 5px;
            box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
            background: rgba(255, 255, 255, 0.2);
            transition: all 0.5s ease-in-out;
            }

            .logo .circle1 {
            width: 170px;
            transform: translate3d(0, 0, 20px);
            top: 8px;
            right: 8px;
            }

            .logo .circle2 {
            width: 140px;
            transform: translate3d(0, 0, 40px);
            top: 10px;
            right: 10px;
            -webkit-backdrop-filter: blur(1px);
            backdrop-filter: blur(1px);
            transition-delay: 0.4s;
            }

            .logo .circle3 {
            width: 110px;
            transform: translate3d(0, 0, 60px);
            top: 17px;
            right: 17px;
            transition-delay: 0.8s;
            }

            .logo .circle4 {
            width: 80px;
            transform: translate3d(0, 0, 80px);
            top: 23px;
            right: 23px;
            transition-delay: 1.2s;
            }

            .logo .circle5 {
            width: 50px;
            transform: translate3d(0, 0, 100px);
            top: 30px;
            right: 30px;
            display: grid;
            place-content: center;
            transition-delay: 1.6s;
            }

            .logo .circle5 .svg {
            width: 20px;
            fill: white;
            }

            .parent:hover .card {
            box-shadow: rgba(5, 15, 71, 0.3) 30px 50px 25px -40px, rgba(6, 5, 71, 0.1) 0px 25px 30px 0px;
            }

            .parent:hover .card .bottom .social-buttons-container .social-button {
            transform: translate3d(0, 0, 50px);
            box-shadow: rgba(9, 5, 71, 0.2) -5px 20px 10px 0px;
            }

            .parent:hover .card .logo .circle2 {
            transform: translate3d(0, 0, 60px);
            }

            .parent:hover .card .logo .circle3 {
            transform: translate3d(0, 0, 80px);
            }

            .parent:hover .card .logo .circle4 {
            transform: translate3d(0, 0, 100px);
            }

            .parent:hover .card .logo .circle5 {
            transform: translate3d(0, 0, 120px);
            }
            .ajuste-circle{
                margin-right: 70px;
            }
            @media (max-width: 768px) {
                .ajuste-circle{
                    margin-right: -10px;
                }
                .parent {
                    height: 400px !important;
                }
            }

        </style>
        
        <!-- From Uiverse.io by Smit-Prajapati --> 
    <div class="parent">
        <div class="card">
            <div class="logo">
                <div class="logo ajuste-circle">
                    <span class="circle circle1"></span>
                    <span class="circle circle2"></span>
                    <span class="circle circle3"></span>
                    <span class="circle circle4"></span>
                    <span class="circle circle5">
                        <img src="${image}" alt="Logo" width="30" height="30">
                    </span>
                </div>


                </div>
                <div class="glass"></div>
                <div class="content">
                    <span class="title">${title}</span>
                    <span class="text">${text}</span>
                </div>
                <div class="bottom">     
                    <div class="social-buttons-container">
                        <button class="social-button .social-button1" onclick="window.location.href='${insta}'">
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class="svg">
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                            </svg></button>
                        <button class="social-button .social-button2" onclick="window.location.href='${facebook}'">
                            <svg viewBox="-2 -1 25 30" xmlns="http://www.w3.org/2000/svg" class="svg">
                           <title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
                        </button>
                      <button class="social-button social-button3" onclick="window.location.href='https://wa.me/${whats}'">
                            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class="svg">
                            viewBox="0 0 32 32" xml:space="preserve">
                        <path d="M17,0C8.7,0,2,6.7,2,15c0,3.4,1.1,6.6,3.2,9.2l-2.1,6.4c-0.1,0.4,0,0.8,0.3,1.1C3.5,31.9,3.8,32,4,32c0.1,0,0.3,0,0.4-0.1
                            l6.9-3.1C13.1,29.6,15,30,17,30c8.3,0,15-6.7,15-15S25.3,0,17,0z M25.7,20.5c-0.4,1.2-1.9,2.2-3.2,2.4C22.2,23,21.9,23,21.5,23
                            c-0.8,0-2-0.2-4.1-1.1c-2.4-1-4.8-3.1-6.7-5.8L10.7,16C10.1,15.1,9,13.4,9,11.6c0-2.2,1.1-3.3,1.5-3.8c0.5-0.5,1.2-0.8,2-0.8
                            c0.2,0,0.3,0,0.5,0c0.7,0,1.2,0.2,1.7,1.2l0.4,0.8c0.3,0.8,0.7,1.7,0.8,1.8c0.3,0.6,0.3,1.1,0,1.6c-0.1,0.3-0.3,0.5-0.5,0.7
                            c-0.1,0.2-0.2,0.3-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2c0.3,0.5,0.9,1.4,1.7,2.1c1.2,1.1,2.1,1.4,2.6,1.6l0,0c0.2-0.2,0.4-0.6,0.7-0.9
                            l0.1-0.2c0.5-0.7,1.3-0.9,2.1-0.6c0.4,0.2,2.6,1.2,2.6,1.2l0.2,0.1c0.3,0.2,0.7,0.3,0.9,0.7C26.2,18.5,25.9,19.8,25.7,20.5z"/>
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
}

// Defina o nome do componente customizado
customElements.define('social-card', CustomCardSocial);