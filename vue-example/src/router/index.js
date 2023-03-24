import Vue from 'vue';
import VueRouter from 'vue-router';
import hello from '@/components/hello';
import home from '@/components/home';
import about from '@/components/about';
import error from '@/components/error';
import study from '@/components/study';
import work from '@/components/work';
import hobby from '@/components/hobby';
import slider from '@/components/slider';


Vue.use(VueRouter);


var router = new VueRouter({
    linkActiveClass : 'active', 
    scrollBehavior : function (to,from,savedPosition) {
        // console.log(to);
        // console.log(from);
        // console.log(savedPosition);
        // if(savedPosition) {
        //     return savedPosition
        // } else {
        //     return {x : 0 , y : 0}
        // }
        if(to.hash) {
            return to.hash;
        }
        
    },
    routes : [{
        path:'/hello',
        name : 'hello',
        components : {
            slider : slider,
            default : hello
        }
    },{
        name : 'home',
        path : '/',
        component : home,
    },{
        path : '/about',
        component : about,
        children : [{
            path : 'study',
            component : study
        },{
            path : '',
            name : 'about',
            component : work
        },{
            path : 'hobby',
            component : hobby
        }
    ]
    },{
        path : '*',
        // component : error
        // redirect : '/home'
        redirect (to) {
            if(to.path === '/123') {
                return '/home'
            } else if (to.path === '/456') {
                return '/hello'
            } else {
                return '/about'
            }
        }
    }]
})

export default router;