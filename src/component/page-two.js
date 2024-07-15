export class PageTwo extends HTMLElement {

    static htmlText = `
<ion-header>
    <ion-toolbar>
        <ion-title>Page Two</ion-title>
    </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
    This is the content for page 1.
    <ion-router-link href="#/">
        <ion-button>Go to Page 1</ion-button>
    </ion-router-link>
</ion-content>
`;


    async connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
    ${PageTwo.htmlText}
  `;
    }
}