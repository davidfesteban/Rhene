import {Router} from "../../config/router";
import "../../service/member"
import {MemberService} from "../../service/member";
import {LoginViewModel} from "./loginViewModel";

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
                    <ion-input type="text" id="usernameInput" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input type="password" id="passwordInput" required></ion-input>
                </ion-item>
                <ion-button expand="block" id="loginButton">Login</ion-button>
            </ion-card-content>
        </ion-card>
    </div>
</ion-content>
`;

    #viewModel = new LoginViewModel();


    async connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
    ${PageLogin.htmlText}
  `;
        shadow.innerHTML = PageLogin.htmlText;

        const loginButton = shadow.getElementById('loginButton');
        const usernameInput = shadow.getElementById('usernameInput');
        const passwordInput = shadow.getElementById('passwordInput');

        // Bind the email property of the identity to the username input field
        this.#viewModel.addBindings(new Binding(this.#viewModel.identity(), 'email', usernameInput, 'input'));
        this.#viewModel.addBindings(new Binding(this.#viewModel.identity(), 'password', passwordInput, 'input'));

        loginButton.addEventListener('click', () => {
            console.log(this.#viewModel.identity());
            new Router().push("/two", new MemberService().login(this.#viewModel.identity()));
        });
    }


}