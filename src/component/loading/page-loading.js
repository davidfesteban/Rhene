import imgUrl from '../../assets/imgs/logo.png'
import cssGeneric from '../../global/global.css'
import cssPage from './page-loading.css'

import {createAnimation} from "@ionic/core";

export class PageLoading extends HTMLElement {

    //_integer = 0;
    _htmlTemplate = `
<style>
    ${cssGeneric}
    ${cssPage}   
</style>
<ion-content class="ion-padding">
    <div class="ion-justify-content-center ion-align-items-center ion-text-center full-flex">
        <ion-img src="${imgUrl}" alt="Logo"></ion-img>
    </div>
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
            .keyframes([{
                offset: 0,
                transform: 'rotate(0turn)',
                opacity: '1',
                easing: 'ease-out'
            }, {offset: 0.5, transform: 'rotate(2turn)', opacity: '0.4', easing: 'ease-in'}, {
                offset: 0.9,
                transform: 'rotate(2turn)',
                opacity: '1',
                easing: 'ease-out'
            }, {offset: 1, transform: 'rotate(2turn)', opacity: '1', easing: 'ease-in'}]);
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