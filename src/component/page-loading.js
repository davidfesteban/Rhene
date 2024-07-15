import imgUrl from '../assets/imgs/logo.png'
import {createAnimation} from "@ionic/core";

export class PageLoading extends HTMLElement {

    //_integer = 0;
    _htmlTemplate = `
<style>
@import url('https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css');
                ion-content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh; /* Full viewport height */
                }
                ion-img {
                    margin-top: 150px;
                    width: auto; /* Adjust the width as needed */
                    height: auto; /* Maintain aspect ratio */
                    transform: scale(0.4) rotate(0turn);
                }
            </style>
<ion-content class="ion-padding">
    <ion-img src=${imgUrl} alt="Logo"></ion-img>
    <h2>Which is your next story?</h2>
</ion-content>
        `;

    set integer(value) {
        //this._integer = value;
        this.render(); // Update the shadow DOM when the value changes
    }

    _animation = () => {
        return createAnimation()
            .addElement(this.shadowRoot.querySelector('ion-img'))
            .duration(3500)
            .iterations(Infinity)
            .keyframes([
                { offset: 0, transform: 'scale(0.4) rotate(0turn)', opacity: '1', easing: 'ease-out' },
                { offset: 0.5, transform: 'scale(0.4) rotate(2turn)', opacity: '0.4', easing: 'ease-in' },
                { offset: 0.9, transform: 'scale(0.4) rotate(2turn)', opacity: '1', easing: 'ease-out' },
                { offset: 1, transform: 'scale(0.4) rotate(2turn)', opacity: '1', easing: 'ease-in' }
            ]);
    };

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.render(); // Initial render of the integer value in the DOM
        requestAnimationFrame(() => {
            this._animation().play();
        });
    }

    render() {
        this.shadowRoot.innerHTML = this._htmlTemplate;
    }
}