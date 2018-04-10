import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/HelloWorld'
import users from '@/pages/users'
import signin from '@/pages/signin'
import selectProject from '@/pages/selectProject'

/* eslint-disable */
import Axios from 'axios'

//Axios.defaults.baseURL = 'http://192.168.0.103:8080/';  //路径提取出来，简化代码

//Axios.defaults.baseURL = 'http://';

Vue.use(Router);
Vue.prototype.$axios = Axios;

/*Vue.prototype.getRandColor = function() {
  var ip = this.getCookie('ip') + ":8080/";
  return ip;
};*/

export default new Router({

    routes: [

        {
            path: '/',
            name: 'signin',
            component: signin
        },
        {
            path: '/selectProject',
            name: 'selectProject',
            component: selectProject
        },

        {
            path: '/main',
            name: 'main',
            component: main,
            children: [
                {
                    path: '/users',
                    name: 'users',
                    component: users
                }
            ]
        }

    ]
})
