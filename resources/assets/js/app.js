require('./bootstrap');

window.Vue = require('vue');

window.VueRouter=require('vue-router').default;

window.VueAxios=require('vue-axios').default;

window.Axios=require('axios').default;


let AppLayout= require('./components/App.vue');

const Home=Vue.component('Home', require('./components/Home.vue'));
const Blog=Vue.component('Blog', require('./components/Blog.vue'));
const Post = Vue.component('Post', require('./components/Post.vue'));
const EditPost = Vue.component('EditPost', require('./components/EditPost.vue'));
const DetailPost = Vue.component('DetailPost', require('./components/Detail.vue'));
// registering Modules
Vue.use(VueRouter,VueAxios, axios);

const routes = [
	{
    name: 'Home',
    path: '/',
    component: Home
  	},
  	{
  		name: 'Blog',
  		path: '/blog',
  		component: Blog
  	},
    {
      name: 'Post',
      path : '/posts',
      component: Post
    },
    {
      name : 'EditPost',
      path : '/editpost/:id',
      component : EditPost
    },
    {
      name : 'DetailPost',
      path : '/detail-post/:id',
      component : DetailPost
    }
];
const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(
 Vue.util.extend(
 { router },
 AppLayout
 )
).$mount('#app');