import Home from '../src/components/home.vue'
import Search from '../src/components/search.vue'
import Member from '../src/components/member.vue'
import Cart from '../src/components/cart.vue'

export default [{
        path: '/home',
        component: Home
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/member',
        component: Member
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '*',
        redirect: '/home'
    }
]