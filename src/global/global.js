import {PageLogin} from "../component/page-login.js";
import {PageTwo} from "../component/page-two.js";
import {PageLoading} from "../component/loading/page-loading.js";
import {Router} from "../config/router";

//Initialize Views
customElements.define('page-loading', PageLoading);
customElements.define('page-login', PageLogin);
customElements.define('page-two', PageTwo);

//Initialize Configs
const router = new Router();

//Initialize Services

