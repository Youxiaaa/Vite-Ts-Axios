import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// 將 api 封裝 provide 到 Vue3 實例
import api from './api/index'
app.provide('$api', api)

app
.use(router)
.mount('#app')
