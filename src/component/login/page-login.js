import {Router} from "../../config/router";
import "../../service/member"
import {LoginViewmodel} from "./login-viewmodel";
import {Binding} from "../../config/binding";
import cssGeneric from '../../global/global.css'

export class PageLogin extends HTMLElement {

    static htmlText = `
<style>
    ${cssGeneric}
</style>
<ion-content>
    <div class="ion-justify-content-center ion-align-items-center full-flex">
        <ion-card class="login-form">
            <ion-card-header>
                <ion-card-title>Login</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-item>
                    <ion-input id="usernameInput" label="Username" labelPlacement="floating" placeholder="Username..."></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input id="passwordInput" label="Password" labelPlacement="floating" placeholder="Password..." required type="password"></ion-input>
                </ion-item>
                <ion-segment id="profileSelector" color="secondary" value="consumer">
                    <ion-segment-button value="consumer">
                      <ion-label>Consumer</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="worker">
                      <ion-label>Worker</ion-label>
                    </ion-segment-button>
                </ion-segment>
                <ion-button expand="block" id="loginButton">Login</ion-button>
            </ion-card-content>
        </ion-card>
    </div>
</ion-content>
`;

    #viewModel = new LoginViewmodel();


    async connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
    ${PageLogin.htmlText}
  `;
        shadow.innerHTML = PageLogin.htmlText;

        const loginButton = shadow.getElementById('loginButton');
        const usernameInput = shadow.getElementById('usernameInput');
        const passwordInput = shadow.getElementById('passwordInput');
        const profileSelector = shadow.getElementById('profileSelector');

        // Bind the email property of the identity to the username input field
        this.#viewModel.addBindings(new Binding(this.#viewModel.identity, 'email', usernameInput, 'input'));
        this.#viewModel.addBindings(new Binding(this.#viewModel.identity, 'password', passwordInput, 'input'));
        this.#viewModel.addBindings(new Binding(this.#viewModel, 'profileSelector', profileSelector, 'input'));

        loginButton.addEventListener('click', () => {
            console.log(this.#viewModel);
            new Router().push("/two", () => this.#viewModel.login());
        });
    }


}