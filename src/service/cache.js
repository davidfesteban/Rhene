import {Storage} from "../config/storage";
import {Consumer} from "../../generated-client";

export class CacheService {

    static #instance = null;
    #storage = new Storage();

    #token = "";

    constructor() {
        if (!CacheService.#instance) {
            CacheService.#instance = this;
        }
        return CacheService.#instance;
    }

    async registerWorker(worker) {
        //new DefaultApi().myConsumerProfileGet().then().catch()
        //doRegister
    }

    async registerConsumer(consumer) {
        //doRegister
    }

    async login(identity) {
        this.#token = await this.#storage.getStoredValue(this.#storage.keys.TOKEN)


        //check token
        //doLogin

    }

    async logout() {
        //doLogout
    }

}