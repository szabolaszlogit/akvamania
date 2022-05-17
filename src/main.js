import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

/* https://docs.amplify.aws/start/getting-started/setup/q/integration/vue/#install-as-a-global-plugin-optional */

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import AmplifyVue from "@aws-amplify/ui-vue";

Amplify.configure(awsExports);


const app = createApp(App);
app.use(router);
app.use(AmplifyVue);

app.mount("#app");
