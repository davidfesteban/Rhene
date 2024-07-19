import {ToastError} from "../util/error";

export class Router {

    static #instance = null;

    constructor() {
        if (!Router.#instance) {
            this.router = document.querySelector('ion-router');
            if (!this.router) {
                throw new Error('ion-router not found in the document.');
            }
            this.router.addEventListener('ionRouteWillChange', this.beforeRouteChange.bind(this));
            Router.#instance = this;
        }
        Object.freeze(this);
        return Router.#instance;
    }

    beforeRouteChange(event) {
        const {from, to} = event.detail;
        console.log(`Navigating from ${from} to ${to}`);
        // Add any logic you want to execute before route change
        if (to === '/restricted') {
            console.log('Navigation to the restricted route is blocked.');
            event.preventDefault();
        }

    }

    async push(path, petition = undefined, direction = 'forward', animation = undefined) {
        if (!this.router) throw new Error('ion-router not found in the document.');

        if (petition) {
            try {
                await this.router.push("/loading", "forward", animation);
                let result = await petition();
                await this.router.push(path, direction, animation);
                return result;
            } catch (e) {
                await this.router.back();
                throw new ToastError(e.message);
            }

        } else {
            await this.router.push(path, direction, animation);
        }
    }
}