import Vue from 'vue'
// 全局引入
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// 按需引入
import { Header, Button, Cell, Swipe, SwipeItem, Toast } from 'mint-ui'
import {} from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Toast.name, Toast);