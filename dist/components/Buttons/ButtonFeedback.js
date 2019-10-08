"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.ButtonFeedback=void 0;var _react=_interopRequireWildcard(require("react"));var _styledComponents=_interopRequireDefault(require("styled-components"));var _useClickAway=_interopRequireDefault(require("../../hooks/useClickAway"));var _Fail=_interopRequireDefault(require("../Icons/Fail"));var _Check=_interopRequireDefault(require("../Icons/Check"));var _Spinner=_interopRequireDefault(require("../Icons/Spinner"));var _Button=_interopRequireDefault(require("./Button"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function _getRequireWildcardCache(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};if(obj!=null){var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}function _templateObject(){var data=_taggedTemplateLiteral(["\n  transition: padding 200ms ease;\n  ","\n\n  ","\n  .icon {\n    display: inline-block;\n    height: 1em;\n    overflow: hidden;\n    margin-left: 0.2em;\n\n    transition: all 200ms ease;\n    width: 0;\n    height: 0;\n    opacity: 0;\n    font-size: 0.8em;\n    ","\n    & > * {\n      display: inline-block;\n      width: 80%;\n      height: 80%;\n    }\n    & > .emoji {\n      position: relative;\n      top: -0.1em;\n      left: -0.1em;\n      font-size: 0.8em;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _ButtonFeedback=(0,_styledComponents.default)(_Button.default)(_templateObject(),function(_ref){var showingIcon=_ref.showingIcon;return showingIcon?"padding:0.5em 0.4em;":""},function(_ref2){var loading=_ref2.loading;return loading?"cursor:progress!important;":""},function(_ref3){var showingIcon=_ref3.showingIcon;return showingIcon?"width:1em; height:0.9em;opacity:1;":""});var ButtonFeedback=function ButtonFeedback(_ref4){var _ref4$children=_ref4.children,children=_ref4$children===void 0?"":_ref4$children,_ref4$disabled=_ref4.disabled,disabled=_ref4$disabled===void 0?undefined:_ref4$disabled,props=_objectWithoutProperties(_ref4,["children","disabled"]);var _useState=(0,_react.useState)(false),_useState2=_slicedToArray(_useState,2),loading=_useState2[0],setLoading=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=_slicedToArray(_useState3,2),success=_useState4[0],setSuccess=_useState4[1];var _useState5=(0,_react.useState)(false),_useState6=_slicedToArray(_useState5,2),fail=_useState6[0],setFail=_useState6[1];var ref=(0,_react.useRef)(null);var loadingIcon=props.loadingIcon||_react.default.createElement(_Spinner.default,null);var successIcon=props.successIcon||_react.default.createElement(_Check.default,null);var failIcon=props.failIcon||_react.default.createElement(_Fail.default,null);(0,_useClickAway.default)(ref,function(){setSuccess(false);setFail(false)});function interceptClick(){return _interceptClick.apply(this,arguments)}function _interceptClick(){_interceptClick=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var returned,_args=arguments;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setLoading(true);setSuccess(false);setFail(false);_context.prev=3;_context.next=6;return props.onClick.apply(props,_args);case 6:returned=_context.sent;setSuccess(true);return _context.abrupt("return",returned);case 11:_context.prev=11;_context.t0=_context["catch"](3);setFail(true);throw _context.t0;case 15:_context.prev=15;setLoading(false);return _context.finish(15);case 18:case"end":return _context.stop();}}},_callee,null,[[3,11,15,18]])}));return _interceptClick.apply(this,arguments)}return _react.default.createElement(_ButtonFeedback,_extends({ref:ref},props,{showingIcon:loading||fail||success,onClick:interceptClick,disabled:loading||disabled,loading:loading}),children,_react.default.createElement("span",{className:"icon"},loading?loadingIcon:null,fail?failIcon:null,success?successIcon:null))};exports.ButtonFeedback=ButtonFeedback;var _default=ButtonFeedback;exports.default=_default;