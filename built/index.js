import Vue from 'vue';
import candorismHeader from './header/candorismHeader.vue';
import loginTab from './login-tab/login-tab.vue';
var app = new Vue({
    el: "#app",
    data: function () {
        return {
            message: "hello world",
        };
    },
    components: {
        "candorism-header": candorismHeader,
        "candorism-login": loginTab,
    },
    methods: {
        click: function () {
            this.message = "";
        },
        initProgressBar: function () {
            var $progress_bar = $('.skills-item');
            $progress_bar.each(function () {
                $progress_bar.appear({ force_process: true });
                $progress_bar.on('appear', function () {
                    var current_bar = $(this);
                    if (!current_bar.data('inited')) {
                        current_bar.find('.skills-item-meter-active').fadeTo(300, 1).addClass('skills-animate');
                        current_bar.data('inited', true);
                    }
                });
            });
        },
    },
    mounted: function () {
        //this.initHeader();
        this.initProgressBar();
    },
});
//# sourceMappingURL=index.js.map