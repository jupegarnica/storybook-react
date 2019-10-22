"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _styledComponents=_interopRequireWildcard(require("styled-components"));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function _getRequireWildcardCache(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};if(obj!=null){var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}}function _templateObject(){var data=_taggedTemplateLiteral(["\n body {\n   margin:0;\n }\n"]);_templateObject=function _templateObject(){return data};return data}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0)}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var GlobalStyle=(0,_styledComponents.createGlobalStyle)(_templateObject());var growChild=function growChild(num){return"\n  & > *:nth-child(".concat(num,") {\n    flex: 1;\n  }\n")};var FlexContainer=_styledComponents.default.div.withConfig({displayName:"FlexContainer",componentId:"sc-1t8amby-0"})(["display:flex;min-height:",";flex-direction:",";flex-wrap:",";justify-content:",";align-items:",";align-content:",";"," "," ",""],function(_ref){var _ref$height=_ref.height,height=_ref$height===void 0?"100%":_ref$height;return height},function(_ref2){var column=_ref2.column;return column&&"column;"},function(_ref3){var wrap=_ref3.wrap;return wrap?"wrap":"nowrap"},function(_ref4){var _ref4$justifyContent=_ref4.justifyContent,justifyContent=_ref4$justifyContent===void 0?"flex-start":_ref4$justifyContent;return justifyContent},function(_ref5){var _ref5$alignItems=_ref5.alignItems,alignItems=_ref5$alignItems===void 0?"stretch":_ref5$alignItems;return alignItems},function(_ref6){var _ref6$alignContents=_ref6.alignContents,alignContents=_ref6$alignContents===void 0?"center":_ref6$alignContents;return alignContents},function(_ref7){var grows=_ref7.grows;return grows===true&&(0,_styledComponents.css)(["& > *{flex:1;}"])},function(_ref8){var grows=_ref8.grows;return+grows>=0&&growChild(grows)},function(_ref9){var _ref10;var _ref9$grows=_ref9.grows,grows=_ref9$grows===void 0?[]:_ref9$grows;return Array.isArray(grows)&&(_ref10="").concat.apply(_ref10,_toConsumableArray(grows.map(growChild)))});var _default=function _default(p){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(GlobalStyle,p),_react.default.createElement(FlexContainer,p))};exports.default=_default;