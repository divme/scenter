import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/elementui.css'
import App from './components/App.vue'
import Title from './components/iTitle.vue'
import TestEleUI from './components/iTestEleUI.vue'

Vue.use(ElementUI);

var vm = new Vue({
  el: '#app',
  data: function(){
    return {
      name : '智能投顾',
      dd: 'rrr'
    }
  },
  // render: h => h(Title, {
  render: function(h){
    return h( TestEleUI, {
      attrs:{
        id: 'dd'
      },
      props: {
        dname: this.name
      }
    })
  }
})
