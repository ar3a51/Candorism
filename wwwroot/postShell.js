(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postShell"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/main/components/shared/post-shell.vue":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/main/components/shared/post-shell.vue ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvar postMessage = function postMessage() {\n    return __webpack_require__.e(/*! import() | post-message */ \"post-message\").then(__webpack_require__.bind(null, /*! ./post.vue */ \"./src/app/main/components/shared/post.vue\"));\n};\nvar postVideo = function postVideo() {\n    return __webpack_require__.e(/*! import() | post-video */ \"post-video\").then(__webpack_require__.bind(null, /*! ./post-video.vue */ \"./src/app/main/components/shared/post-video.vue\"));\n};\nvar postComment = function postComment() {\n    return __webpack_require__.e(/*! import() | post-comment */ \"post-comment\").then(__webpack_require__.bind(null, /*! ./post-comment.vue */ \"./src/app/main/components/shared/post-comment.vue\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function data() {\n        return {\n            post: {\n                type: \"post\",\n                message: \"lorem ipsum\",\n                comments: [{\n                    id: 0,\n                    author: {\n                        name: \"James Spiegel\",\n                        photoUrl: \"img/author-page.jpg\",\n                        profileUrl: \"02-ProfilePage.html\"\n                    },\n                    published: \"2004-07-24T18:18\",\n                    message: \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.\",\n                    likes: 8\n                }, {\n                    id: 1,\n                    author: {\n                        name: \"Mathilda Brinker\",\n                        photoUrl: \"img/avatar1-sm.jpg\",\n                        profileUrl: \"02-ProfilePage.html\"\n                    },\n                    published: \"2004-07-24T18:18\",\n                    message: \"Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum\\n                    quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.\",\n                    likes: 8\n                }]\n            }\n        };\n    },\n    components: {\n        \"candorism-message\": postMessage,\n        \"candorism-video\": postVideo,\n        \"candorism-post-comment\": postComment\n    }\n\n}));\n\n//# sourceURL=webpack:///./src/app/main/components/shared/post-shell.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d02f37f4\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/main/components/shared/post-shell.vue":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d02f37f4","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/main/components/shared/post-shell.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"ui-block\" },\n    [\n      _c(\n        \"article\",\n        { staticClass: \"hentry post\" },\n        [\n          _c(\"div\", { staticClass: \"post__author author vcard inline-items\" }, [\n            _c(\"img\", { attrs: { src: \"img/avatar10-sm.jpg\", alt: \"author\" } }),\n            _vm._v(\" \"),\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"more\" }, [\n              _c(\"svg\", { staticClass: \"olymp-three-dots-icon\" }, [\n                _c(\"use\", {\n                  attrs: {\n                    \"xlink:href\":\n                      \"svg-icons/sprites/icons.svg#olymp-three-dots-icon\"\n                  }\n                })\n              ]),\n              _vm._v(\" \"),\n              _vm._m(1)\n            ])\n          ]),\n          _vm._v(\" \"),\n          _vm.post.type === \"video\" ? _c(\"candorism-video\") : _vm._e(),\n          _vm._v(\" \"),\n          _vm.post.type === \"post\"\n            ? _c(\"p\", [_vm._v(_vm._s(_vm.post.message))])\n            : _vm._e(),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"post-additional-info inline-items\" }, [\n            _c(\n              \"a\",\n              {\n                staticClass: \"post-add-icon inline-items\",\n                attrs: { href: \"#\" }\n              },\n              [\n                _c(\"svg\", { staticClass: \"olymp-heart-icon\" }, [\n                  _c(\"use\", {\n                    attrs: {\n                      \"xlink:href\":\n                        \"svg-icons/sprites/icons.svg#olymp-heart-icon\"\n                    }\n                  })\n                ]),\n                _vm._v(\" \"),\n                _c(\"span\", [_vm._v(\"24\")])\n              ]\n            ),\n            _vm._v(\" \"),\n            _vm._m(2),\n            _vm._v(\" \"),\n            _vm._m(3),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"comments-shared\" }, [\n              _c(\n                \"a\",\n                {\n                  staticClass: \"post-add-icon inline-items\",\n                  attrs: { href: \"#\" }\n                },\n                [\n                  _c(\"svg\", { staticClass: \"olymp-speech-balloon-icon\" }, [\n                    _c(\"use\", {\n                      attrs: {\n                        \"xlink:href\":\n                          \"svg-icons/sprites/icons.svg#olymp-speech-balloon-icon\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"span\", [_vm._v(\"17\")])\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"a\",\n                {\n                  staticClass: \"post-add-icon inline-items\",\n                  attrs: { href: \"#\" }\n                },\n                [\n                  _c(\"svg\", { staticClass: \"olymp-share-icon\" }, [\n                    _c(\"use\", {\n                      attrs: {\n                        \"xlink:href\":\n                          \"svg-icons/sprites/icons.svg#olymp-share-icon\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"span\", [_vm._v(\"24\")])\n                ]\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"control-block-button post-control-button\" },\n            [\n              _c(\n                \"a\",\n                { staticClass: \"btn btn-control\", attrs: { href: \"#\" } },\n                [\n                  _c(\"svg\", { staticClass: \"olymp-like-post-icon\" }, [\n                    _c(\"use\", {\n                      attrs: {\n                        \"xlink:href\":\n                          \"svg-icons/sprites/icons.svg#olymp-like-post-icon\"\n                      }\n                    })\n                  ])\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"a\",\n                { staticClass: \"btn btn-control\", attrs: { href: \"#\" } },\n                [\n                  _c(\"svg\", { staticClass: \"olymp-comments-post-icon\" }, [\n                    _c(\"use\", {\n                      attrs: {\n                        \"xlink:href\":\n                          \"svg-icons/sprites/icons.svg#olymp-comments-post-icon\"\n                      }\n                    })\n                  ])\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"a\",\n                { staticClass: \"btn btn-control\", attrs: { href: \"#\" } },\n                [\n                  _c(\"svg\", { staticClass: \"olymp-share-icon\" }, [\n                    _c(\"use\", {\n                      attrs: {\n                        \"xlink:href\":\n                          \"svg-icons/sprites/icons.svg#olymp-share-icon\"\n                      }\n                    })\n                  ])\n                ]\n              )\n            ]\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"ul\",\n        { staticClass: \"comments-list\" },\n        _vm._l(_vm.post.comments, function(comment) {\n          return _c(\"li\", { key: comment.id }, [\n            _c(\n              \"div\",\n              { staticClass: \"post__author author vcard inline-items\" },\n              [\n                _c(\"img\", {\n                  attrs: { src: comment.author.photoUrl, alt: \"author\" }\n                }),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"author-date\" }, [\n                  _c(\n                    \"a\",\n                    {\n                      staticClass: \"h6 post__author-name fn\",\n                      attrs: { href: comment.author.profileUrl }\n                    },\n                    [_vm._v(_vm._s(comment.author.name))]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"div\", { staticClass: \"post__date\" }, [\n                    _c(\n                      \"time\",\n                      {\n                        staticClass: \"published\",\n                        attrs: { datetime: comment.published }\n                      },\n                      [\n                        _vm._v(\n                          \"\\n                             38 mins ago\\n                         \"\n                        )\n                      ]\n                    )\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"a\", { staticClass: \"more\", attrs: { href: \"#\" } }, [\n                  _c(\"svg\", { staticClass: \"olymp-three-dots-icon\" }, [\n                    _c(\"use\", {\n                      attrs: {\n                        \"xlink:href\":\n                          \"svg-icons/sprites/icons.svg#olymp-three-dots-icon\"\n                      }\n                    })\n                  ])\n                ])\n              ]\n            ),\n            _vm._v(\" \"),\n            _c(\"p\", [_vm._v(_vm._s(comment.message))]),\n            _vm._v(\" \"),\n            _c(\n              \"a\",\n              {\n                staticClass: \"post-add-icon inline-items\",\n                attrs: { href: \"#\" }\n              },\n              [\n                _c(\"svg\", { staticClass: \"olymp-heart-icon\" }, [\n                  _c(\"use\", {\n                    attrs: {\n                      \"xlink:href\":\n                        \"svg-icons/sprites/icons.svg#olymp-heart-icon\"\n                    }\n                  })\n                ]),\n                _vm._v(\" \"),\n                _c(\"span\", [_vm._v(\"3\")])\n              ]\n            ),\n            _vm._v(\" \"),\n            _c(\"a\", { staticClass: \"reply\", attrs: { href: \"#\" } }, [\n              _vm._v(\"Reply\")\n            ])\n          ])\n        })\n      ),\n      _vm._v(\" \"),\n      _vm._m(4),\n      _vm._v(\" \"),\n      _c(\"candorism-post-comment\")\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"author-date\" }, [\n      _c(\n        \"a\",\n        { staticClass: \"h6 post__author-name fn\", attrs: { href: \"#\" } },\n        [_vm._v(\"Elaine Dreyfuss\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"post__date\" }, [\n        _c(\n          \"time\",\n          { staticClass: \"published\", attrs: { datetime: \"2004-07-24T18:18\" } },\n          [\n            _vm._v(\n              \"\\n                         9 hours ago\\n                     \"\n            )\n          ]\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"ul\", { staticClass: \"more-dropdown\" }, [\n      _c(\"li\", [_c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"Edit Post\")])]),\n      _vm._v(\" \"),\n      _c(\"li\", [_c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"Delete Post\")])]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"Turn Off Notifications\")])\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"Select as Featured\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"ul\", { staticClass: \"friends-harmonic\" }, [\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [\n          _c(\"img\", {\n            attrs: { src: \"img/friend-harmonic7.jpg\", alt: \"friend\" }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [\n          _c(\"img\", {\n            attrs: { src: \"img/friend-harmonic8.jpg\", alt: \"friend\" }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [\n          _c(\"img\", {\n            attrs: { src: \"img/friend-harmonic9.jpg\", alt: \"friend\" }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [\n          _c(\"img\", {\n            attrs: { src: \"img/friend-harmonic10.jpg\", alt: \"friend\" }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"a\", { attrs: { href: \"#\" } }, [\n          _c(\"img\", {\n            attrs: { src: \"img/friend-harmonic11.jpg\", alt: \"friend\" }\n          })\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"names-people-likes\" }, [\n      _c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"You\")]),\n      _vm._v(\", \"),\n      _c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"Elaine\")]),\n      _vm._v(\" and\\n                 \"),\n      _c(\"br\"),\n      _vm._v(\"22 more liked this\\n             \")\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"a\", { staticClass: \"more-comments\", attrs: { href: \"#\" } }, [\n      _vm._v(\"View more comments \"),\n      _c(\"span\", [_vm._v(\"+\")])\n    ])\n  }\n]\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/app/main/components/shared/post-shell.vue?./node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-d02f37f4%22,%22hasScoped%22:false,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!./node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "./src/app/main/components/shared/post-shell.vue":
/*!*******************************************************!*\
  !*** ./src/app/main/components/shared/post-shell.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_post_shell_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./post-shell.vue */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/main/components/shared/post-shell.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d02f37f4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_shell_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-d02f37f4\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./post-shell.vue */ \"./node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-d02f37f4\\\",\\\"hasScoped\\\":false,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/main/components/shared/post-shell.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"./node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = null\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_post_shell_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d02f37f4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_shell_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_d02f37f4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_post_shell_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\app\\\\main\\\\components\\\\shared\\\\post-shell.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///./src/app/main/components/shared/post-shell.vue?");

/***/ })

}]);