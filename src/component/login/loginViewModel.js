import {Identity} from "../../apiclient";

export class LoginViewModel {

    static #instance = null;
    #identity = new Identity();
    #bindings = [];

    constructor() {
        if (!LoginViewModel.#instance) {
            LoginViewModel.#instance = this;
        }
        return LoginViewModel.#instance;
    }

    addBindings(binding) {
        this.#bindings.push(binding);
    }

    updateAllBindings() {
        for (const binding in this.#bindings) {
            binding.updateElement();
        }
    }

    set identity(newIdentity) {
        this.#identity = newIdentity;
        this.updateAllBindings();
    }

    get identity() {
        return this.#identity;
    }

}