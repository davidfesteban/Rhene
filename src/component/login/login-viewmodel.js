import {Identity, LoginConsumer} from "../../apiclient";

export class LoginViewmodel {

    static #instance = null;
    #identity = new Identity();
    profileSelector = "consumer";

    #bindings = [];

    constructor() {
        if (!LoginViewmodel.#instance) {
            LoginViewmodel.#instance = this;
        }
        return LoginViewmodel.#instance;
    }

    get identity() {
        return this.#identity;
    }

    set identity(newIdentity) {
        this.#identity = newIdentity;
        this.updateAllBindings();
    }

    addBindings(binding) {
        this.#bindings.push(binding);
    }

    updateAllBindings() {
        for (const binding in this.#bindings) {
            binding.updateElement();
        }
    }

    async login() {
        //let tokenObject = await LoginConsumer(this.identity);
        //Push to cache for everyone to access it?
        console.log(this.profileSelector);
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}