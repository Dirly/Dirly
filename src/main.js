import './assets/main.css'
import { createApp } from 'vue'
import VueSilentbox from 'vue-silentbox'
import 'vue-silentbox/dist/style.css'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon,  } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'animate.css';
import Particles from "vue3-particles";

library.add(fas,fab)


import App from './App.vue'
import router from './router'

const app = createApp(App)
.component('fa', FontAwesomeIcon)

app.directive('parentHover', {
  // Using `mounted` and `unmounted` for Vue 3
  mounted(el, binding) {
    const className = binding.value || '';

    // Define the event handlers
    const mouseEnterHandler = () => el.classList.add(className);
    const mouseLeaveHandler = () => el.classList.remove(className);

    // Add event listeners to the parent node
    el.parentNode.addEventListener('mouseenter', mouseEnterHandler);
    el.parentNode.addEventListener('mouseleave', mouseLeaveHandler);

    // Store the handlers on the element for later removal
    el._hoverEnterHandler = mouseEnterHandler;
    el._hoverLeaveHandler = mouseLeaveHandler;
  },
  unmounted(el) {
    // Remove the event listeners from the parent node
    if (el.parentNode) {
      el.parentNode.removeEventListener('mouseenter', el._hoverEnterHandler);
      el.parentNode.removeEventListener('mouseleave', el._hoverLeaveHandler);
    }
  }
})

app.use(VueSilentbox)
app.use(createPinia())
app.use(router)
app.use(Particles)

app.mount('#app')