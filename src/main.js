import { createApp } from "vue";
import App from "./App.vue";
import "primeflex/primeflex.min.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

const app = createApp(App);
app.component("PrimeAccordion", Accordion);
app.component("PrimeAccordionTab", AccordionTab);
app.mount("#app");
