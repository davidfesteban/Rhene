import {Router} from "../config/router";

export class PageLogin extends HTMLElement {

    static htmlText = `
<ion-content>
    <div class="login-container">
        <ion-card class="login-form">
            <ion-card-header>
                <ion-card-title>Login</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-item>
                    <ion-label position="floating">Username</ion-label>
                    <ion-input type="text" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input type="password" required></ion-input>
                </ion-item>
                <ion-button expand="block" id="loginButton">Login</ion-button>
            </ion-card-content>
        </ion-card>
    </div>
</ion-content>
`;


    async connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
    ${PageLogin.htmlText}
  `;
        const loginButton = shadow.getElementById('loginButton');
        loginButton.addEventListener('click', () => {
            new Router().push("/two", delay);
        });
    }


}

async function delay() {
    await new Promise(resolve => setTimeout(resolve, 10000));
    throw new Error("Me he exo caca");
}