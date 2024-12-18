import { createApp, h } from "vue";
import App from "~/component/Console.vue";
const app = createApp(h(App, {isNativeAgent: true}))
import "xterm/css/xterm.css";
import "~/main.css";
app
  .mount("#app");
