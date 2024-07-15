export class PageLogin extends HTMLElement {

    static htmlText = `
<ion-header>
    <ion-toolbar>
        <ion-title>Page Login</ion-title>
    </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
    This is the content for page 1.
    <ion-router-link href="#/page-two">
        <ion-button>Go to Page 2</ion-button>
    </ion-router-link>
</ion-content>
`;


    async connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
    ${PageLogin.htmlText}
  `;
    }
}