import Home from '../src/components/home.vue'
import Search from '../src/components/search.vue'
import Member from '../src/components/member.vue'
import Cart from '../src/components/cart.vue'
import NewsList from '../src/components/newslist.vue'
import NewsDetail from '../src/components/newsdetail.vue'


export default [{
        path: '/home',
        component: Home
    },
    {
        path: '/home/newslist',
        component: NewsList
    },
    {
        path: '/home/newsdetail/:id',
        component: NewsDetail
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