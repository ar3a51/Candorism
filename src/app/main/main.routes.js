const newsfeedComponent = () => import(/*webpackChunkName: newsfeed*/ "./newsfeed/newsfeed.vue");
const profileComponent = () => import(/*webpackChunkName: profile*/ "./profile/profile.vue");


export const routes = [
    {path: '/', component: newsfeedComponent},
    {path: '/profile', component: profileComponent},
];