(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/main/components/sidebar-left-responsive.vue":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/main/components/sidebar-left-responsive.vue ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    methods: {\n        init: function init() {\n            var $window = $(window),\n                $document = $(document),\n                $body = $('body'),\n                $sidebar = $('.fixed-sidebar');\n\n            $(\".js-sidebar-open-responsive\").on('click', function () {\n                var mobileWidthApp = $('body').outerWidth();\n                if (mobileWidthApp <= 560) {\n                    $(this).closest('body').find('.popup-chat-responsive').removeClass('open-chat');\n                }\n\n                $(this).toggleClass('active');\n                $(this).closest($sidebar).toggleClass('open');\n                return false;\n            });\n\n            // Close on \"Esc\" click\n            $window.keydown(function (eventObject) {\n                if (eventObject.which == 27 && $sidebar.is(':visible')) {\n                    $sidebar.removeClass('open');\n                }\n            });\n\n            // Close on click outside elements.\n            $document.on('click', function (event) {\n                if (!$(event.target).closest($sidebar).length && $sidebar.is(':visible')) {\n                    $sidebar.removeClass('open');\n                }\n            });\n        }\n    },\n    mounted: function mounted() {\n        this.init();\n    }\n}));\n\n//# sourceURL=webpack:///./src/app/main/components/sidebar-left-responsive.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/app/main/components/sidebar-left-responsive.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/app/main/components/sidebar-left-responsive.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/app/main/components/sidebar-left-responsive.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22scoped%22:false,%22sourceMap%22:false%7D!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-09dd2496\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/main/components/sidebar-left-responsive.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-09dd2496","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/main/components/sidebar-left-responsive.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"fixed-sidebar fixed-sidebar-responsive\" }, [\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"fixed-sidebar-left sidebar--large\",\n        attrs: { id: \"sidebar-left-1-responsive\" }\n      },\n      [\n        _vm._m(1),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"mCustomScrollbar\",\n            attrs: { \"data-mcs-theme\": \"dark\" }\n          },\n          [\n            _c(\"div\", { staticClass: \"control-block\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"author-page author vcard inline-items\" },\n                [\n                  _vm._m(2),\n                  _vm._v(\" \"),\n                  _c(\n                    \"a\",\n                    {\n                      staticClass: \"author-name fn\",\n                      attrs: { href: \"02-ProfilePage.html\" }\n                    },\n                    [\n                      _c(\"div\", { staticClass: \"author-title\" }, [\n                        _vm._v(\n                          \"\\n                              James Spiegel \"\n                        ),\n                        _c(\n                          \"svg\",\n                          { staticClass: \"olymp-dropdown-arrow-icon\" },\n                          [\n                            _c(\"use\", {\n                              attrs: {\n                                \"xlink:href\":\n                                  \"svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon\"\n                              }\n                            })\n                          ]\n                        )\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"span\", { staticClass: \"author-subtitle\" }, [\n                        _vm._v(\"SPACE COWBOY\")\n                      ])\n                    ]\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _vm._m(3),\n            _vm._v(\" \"),\n            _c(\"ul\", { staticClass: \"left-menu\" }, [\n              _c(\"li\", [\n                _c(\n                  \"a\",\n                  {\n                    staticClass: \"js-sidebar-open-responsive\",\n                    attrs: { href: \"#\" }\n                  },\n                  [\n                    _c(\n                      \"svg\",\n                      { staticClass: \"olymp-close-icon left-menu-icon\" },\n                      [\n                        _c(\"use\", {\n                          attrs: {\n                            \"xlink:href\":\n                              \"svg-icons/sprites/icons.svg#olymp-close-icon\"\n                          }\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                      _vm._v(\"Collapse Menu\")\n                    ])\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\"a\", { attrs: { href: \"mobile-index.html\" } }, [\n                  _c(\n                    \"svg\",\n                    {\n                      staticClass: \"olymp-newsfeed-icon left-menu-icon\",\n                      attrs: {\n                        \"data-toggle\": \"tooltip\",\n                        \"data-placement\": \"right\",\n                        \"data-original-title\": \"NEWSFEED\"\n                      }\n                    },\n                    [\n                      _c(\"use\", {\n                        attrs: {\n                          \"xlink:href\":\n                            \"svg-icons/sprites/icons.svg#olymp-newsfeed-icon\"\n                        }\n                      })\n                    ]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                    _vm._v(\"Newsfeed\")\n                  ])\n                ])\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\n                  \"a\",\n                  {\n                    attrs: {\n                      href: \"Mobile-28-YourAccount-PersonalInformation.html\"\n                    }\n                  },\n                  [\n                    _c(\n                      \"svg\",\n                      {\n                        staticClass: \"olymp-star-icon left-menu-icon\",\n                        attrs: {\n                          \"data-toggle\": \"tooltip\",\n                          \"data-placement\": \"right\",\n                          \"data-original-title\": \"FAV PAGE\"\n                        }\n                      },\n                      [\n                        _c(\"use\", {\n                          attrs: {\n                            \"xlink:href\":\n                              \"svg-icons/sprites/icons.svg#olymp-star-icon\"\n                          }\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                      _vm._v(\"Fav Pages Feed\")\n                    ])\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\n                  \"a\",\n                  {\n                    attrs: {\n                      href: \"mobile-29-YourAccount-AccountSettings.html\"\n                    }\n                  },\n                  [\n                    _c(\n                      \"svg\",\n                      {\n                        staticClass: \"olymp-happy-faces-icon left-menu-icon\",\n                        attrs: {\n                          \"data-toggle\": \"tooltip\",\n                          \"data-placement\": \"right\",\n                          \"data-original-title\": \"FRIEND GROUPS\"\n                        }\n                      },\n                      [\n                        _c(\"use\", {\n                          attrs: {\n                            \"xlink:href\":\n                              \"svg-icons/sprites/icons.svg#olymp-happy-faces-icon\"\n                          }\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                      _vm._v(\"Friend Groups\")\n                    ])\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\n                  \"a\",\n                  {\n                    attrs: { href: \"Mobile-30-YourAccount-ChangePassword.html\" }\n                  },\n                  [\n                    _c(\n                      \"svg\",\n                      {\n                        staticClass: \"olymp-headphones-icon left-menu-icon\",\n                        attrs: {\n                          \"data-toggle\": \"tooltip\",\n                          \"data-placement\": \"right\",\n                          \"data-original-title\": \"MUSIC&PLAYLISTS\"\n                        }\n                      },\n                      [\n                        _c(\"use\", {\n                          attrs: {\n                            \"xlink:href\":\n                              \"svg-icons/sprites/icons.svg#olymp-headphones-icon\"\n                          }\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                      _vm._v(\"Music & Playlists\")\n                    ])\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\n                  \"a\",\n                  {\n                    attrs: {\n                      href: \"Mobile-31-YourAccount-HobbiesAndInterests.html\"\n                    }\n                  },\n                  [\n                    _c(\n                      \"svg\",\n                      {\n                        staticClass: \"olymp-weather-icon left-menu-icon\",\n                        attrs: {\n                          \"data-toggle\": \"tooltip\",\n                          \"data-placement\": \"right\",\n                          \"data-original-title\": \"WEATHER APP\"\n                        }\n                      },\n                      [\n                        _c(\"use\", {\n                          attrs: {\n                            \"xlink:href\":\n                              \"svg-icons/sprites/icons.svg#olymp-weather-icon\"\n                          }\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                      _vm._v(\"Weather App\")\n                    ])\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\n                  \"a\",\n                  {\n                    attrs: {\n                      href: \"Mobile-32-YourAccount-EducationAndEmployement.html\"\n                    }\n                  },\n                  [\n                    _c(\n                      \"svg\",\n                      {\n                        staticClass: \"olymp-calendar-icon left-menu-icon\",\n                        attrs: {\n                          \"data-toggle\": \"tooltip\",\n                          \"data-placement\": \"right\",\n                          \"data-original-title\": \"CALENDAR AND EVENTS\"\n                        }\n                      },\n                      [\n                        _c(\"use\", {\n                          attrs: {\n                            \"xlink:href\":\n                              \"svg-icons/sprites/icons.svg#olymp-calendar-icon\"\n                          }\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                      _vm._v(\"Calendar and Events\")\n                    ])\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\n                  \"a\",\n                  {\n                    attrs: { href: \"Mobile-33-YourAccount-Notifications.html\" }\n                  },\n                  [\n                    _c(\n                      \"svg\",\n                      {\n                        staticClass: \"olymp-badge-icon left-menu-icon\",\n                        attrs: {\n                          \"data-toggle\": \"tooltip\",\n                          \"data-placement\": \"right\",\n                          \"data-original-title\": \"Community Badges\"\n                        }\n                      },\n                      [\n                        _c(\"use\", {\n                          attrs: {\n                            \"xlink:href\":\n                              \"svg-icons/sprites/icons.svg#olymp-badge-icon\"\n                          }\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                      _vm._v(\"Community Badges\")\n                    ])\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\n                  \"a\",\n                  {\n                    attrs: { href: \"Mobile-34-YourAccount-ChatMessages.html\" }\n                  },\n                  [\n                    _c(\n                      \"svg\",\n                      {\n                        staticClass: \"olymp-cupcake-icon left-menu-icon\",\n                        attrs: {\n                          \"data-toggle\": \"tooltip\",\n                          \"data-placement\": \"right\",\n                          \"data-original-title\": \"Friends Birthdays\"\n                        }\n                      },\n                      [\n                        _c(\"use\", {\n                          attrs: {\n                            \"xlink:href\":\n                              \"svg-icons/sprites/icons.svg#olymp-cupcake-icon\"\n                          }\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                      _vm._v(\"Friends Birthdays\")\n                    ])\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\n                  \"a\",\n                  {\n                    attrs: {\n                      href: \"Mobile-35-YourAccount-FriendsRequests.html\"\n                    }\n                  },\n                  [\n                    _c(\n                      \"svg\",\n                      {\n                        staticClass: \"olymp-stats-icon left-menu-icon\",\n                        attrs: {\n                          \"data-toggle\": \"tooltip\",\n                          \"data-placement\": \"right\",\n                          \"data-original-title\": \"Account Stats\"\n                        }\n                      },\n                      [\n                        _c(\"use\", {\n                          attrs: {\n                            \"xlink:href\":\n                              \"svg-icons/sprites/icons.svg#olymp-stats-icon\"\n                          }\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                      _vm._v(\"Account Stats\")\n                    ])\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\"a\", { attrs: { href: \"#\" } }, [\n                  _c(\n                    \"svg\",\n                    {\n                      staticClass: \"olymp-manage-widgets-icon left-menu-icon\",\n                      attrs: {\n                        \"data-toggle\": \"tooltip\",\n                        \"data-placement\": \"right\",\n                        \"data-original-title\": \"Manage Widgets\"\n                      }\n                    },\n                    [\n                      _c(\"use\", {\n                        attrs: {\n                          \"xlink:href\":\n                            \"svg-icons/sprites/icons.svg#olymp-manage-widgets-icon\"\n                        }\n                      })\n                    ]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"span\", { staticClass: \"left-menu-title\" }, [\n                    _vm._v(\"Manage Widgets\")\n                  ])\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _vm._m(4),\n            _vm._v(\" \"),\n            _c(\"ul\", { staticClass: \"account-settings\" }, [\n              _c(\"li\", [\n                _c(\"a\", { attrs: { href: \"#\" } }, [\n                  _c(\"svg\", { staticClass: \"olymp-menu-icon\" }, [\n                    _c(\"use\", {\n                      attrs: {\n                        \"xlink:href\":\n                          \"svg-icons/sprites/icons.svg#olymp-menu-icon\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"span\", [_vm._v(\"Profile Settings\")])\n                ])\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\"a\", { attrs: { href: \"#\" } }, [\n                  _c(\n                    \"svg\",\n                    {\n                      staticClass: \"olymp-star-icon left-menu-icon\",\n                      attrs: {\n                        \"data-toggle\": \"tooltip\",\n                        \"data-placement\": \"right\",\n                        \"data-original-title\": \"FAV PAGE\"\n                      }\n                    },\n                    [\n                      _c(\"use\", {\n                        attrs: {\n                          \"xlink:href\":\n                            \"svg-icons/sprites/icons.svg#olymp-star-icon\"\n                        }\n                      })\n                    ]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"span\", [_vm._v(\"Create Fav Page\")])\n                ])\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", [\n                _c(\"a\", { attrs: { href: \"#\" } }, [\n                  _c(\"svg\", { staticClass: \"olymp-logout-icon\" }, [\n                    _c(\"use\", {\n                      attrs: {\n                        \"xlink:href\":\n                          \"svg-icons/sprites/icons.svg#olymp-logout-icon\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"span\", [_vm._v(\"Log Out\")])\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _vm._m(5),\n            _vm._v(\" \"),\n            _vm._m(6)\n          ]\n        )\n      ]\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticClass: \"fixed-sidebar-left sidebar--small\",\n        attrs: { id: \"sidebar-left-responsive\" }\n      },\n      [\n        _c(\n          \"a\",\n          {\n            staticClass: \"logo js-sidebar-open-responsive\",\n            attrs: { href: \"#\" }\n          },\n          [_c(\"img\", { attrs: { src: \"img/logo.png\", alt: \"Olympus\" } })]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"a\", { staticClass: \"logo\", attrs: { href: \"#\" } }, [\n      _c(\"div\", { staticClass: \"img-wrap\" }, [\n        _c(\"img\", { attrs: { src: \"img/logo.png\", alt: \"Olympus\" } })\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"title-block\" }, [\n        _c(\"h6\", { staticClass: \"logo-title\" }, [_vm._v(\"olympus\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"author-thumb\" }, [\n      _c(\"img\", {\n        staticClass: \"avatar\",\n        attrs: { alt: \"author\", src: \"img/author-page.jpg\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"icon-status online\" })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"ui-block-title ui-block-title-small\" }, [\n      _c(\"h6\", { staticClass: \"title\" }, [_vm._v(\"MAIN SECTIONS\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"ui-block-title ui-block-title-small\" }, [\n      _c(\"h6\", { staticClass: \"title\" }, [_vm._v(\"YOUR ACCOUNT\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"ui-block-title ui-block-title-small\" }, [\n      _c(\"h6\", { staticClass: \"title\" }, [_vm._v(\"About Olympus\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"ul\", { staticClass: \"about-olympus\" }, [\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [\n          _c(\"span\", [_vm._v(\"Terms and Conditions\")])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [_c(\"span\", [_vm._v(\"FAQs\")])])\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [_c(\"span\", [_vm._v(\"Careers\")])])\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [_c(\"span\", [_vm._v(\"Contact\")])])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/app/main/components/sidebar-left-responsive.vue?./node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-09dd2496%22,%22hasScoped%22:false,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!./node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/app/main/components/sidebar-left-responsive.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/app/main/components/sidebar-left-responsive.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sidebar-left-responsive.vue */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"scoped\\\":false,\\\"sourceMap\\\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/app/main/components/sidebar-left-responsive.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"4b853b9e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/app/main/components/sidebar-left-responsive.vue?./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22scoped%22:false,%22sourceMap%22:false%7D!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./src/app/main/components/sidebar-left-responsive.vue":
/*!*************************************************************!*\
  !*** ./src/app/main/components/sidebar-left-responsive.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sidebar_left_responsive_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./sidebar-left-responsive.vue */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/main/components/sidebar-left-responsive.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_09dd2496_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sidebar_left_responsive_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-09dd2496\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./sidebar-left-responsive.vue */ \"./node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-09dd2496\\\",\\\"hasScoped\\\":false,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/main/components/sidebar-left-responsive.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"./node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!sass-loader!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./sidebar-left-responsive.vue */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"scoped\\\":false,\\\"sourceMap\\\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/app/main/components/sidebar-left-responsive.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sidebar_left_responsive_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_09dd2496_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sidebar_left_responsive_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_09dd2496_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sidebar_left_responsive_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\app\\\\main\\\\components\\\\sidebar-left-responsive.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///./src/app/main/components/sidebar-left-responsive.vue?");

/***/ })

}]);