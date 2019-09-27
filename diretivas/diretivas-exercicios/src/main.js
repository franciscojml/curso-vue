import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el){
		el.style.background = 'lightgreen'
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
