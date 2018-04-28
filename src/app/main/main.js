import Vue       from "vue";
import VueRouter from "vue-router";

import sidebarLeftComponent from './components/sidebar-left.vue';
const sidebarLeftResponsiveComponent = () => import('./components/sidebar-left-responsive.vue');
import sidebarRightComponent from './components/sidebar-right.vue';
const sidebarRightResponsiveComponent = () => import('./components/sidebar-right-responsive.vue');
import headerComponent from './components/header.vue';
const headerResponsiveComponent = () => import("./components/header-responsive.vue");
import UpdatePhotoComponent from './components/update-photo.vue';
const chooseMyPhotoComponent = () => import("./components/choose-my-photo.vue");
const chatComponent = () => import("./components/chat.vue");

const newsfeedComponent = () => import(/*webpackChunkName: newsfeed*/ "./components/newsfeed/newsfeed.vue");
const profileComponent = () => import(/*webpackChunkName: profile*/ "./components/profile/profile.vue");

Vue.use(VueRouter);

const routes = [
    {path: '/', component: newsfeedComponent},
    {path: '/profile', component: profileComponent},
];

const router = new VueRouter({
    routes
});

new Vue({
    el: "#app",
    router,
    components: {
        "candorism-left-sidebar": sidebarLeftComponent,
        "candorism-left-sidebar-responsive": sidebarLeftResponsiveComponent,
        "candorism-right-sidebar": sidebarRightComponent,
        "candorism-right-sidebar-responsive": sidebarRightResponsiveComponent,
        "candorism-header": headerComponent,
        "candorism-header-responsive": headerResponsiveComponent,
        "candorism-update-photo": UpdatePhotoComponent,
        "candorism-choose-my-photo": chooseMyPhotoComponent,
        "candorism-chat": chatComponent,
    },
    methods: {
        init : function() {
            var $document = $(document),
            $body = $('body')
            var action;

        //Scroll to top.
            jQuery('.back-to-top').on('click', function () {
                $('html,body').animate({
                    scrollTop: 0
                }, 1200);
                return false;
            });
        

        
            $(document).on("touchstart mousedown",".number-spinner button",function(){
                var btn = $(this);
                var input = btn.closest('.number-spinner').find('input');
                btn.closest('.number-spinner').find('button').prop("disabled", false);

                if (btn.attr('data-dir') == 'up') {
                    action = setInterval(function () {
                        if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                            input.val(parseInt(input.val()) + 1);
                        } else {
                            btn.prop("disabled", true);
                            clearInterval(action);
                        }
                    }, 50);
                } else {
                    action = setInterval(function () {
                        if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                            input.val(parseInt(input.val()) - 1);
                        } else {
                            btn.prop("disabled", true);
                            clearInterval(action);
                        }
                    }, 50);
                }
            });
            $(document).on("touchend mouseup",".number-spinner button",function() {
                clearInterval(action);
            });
        }
    },
    mounted: function () {
        this.init();
    }
});