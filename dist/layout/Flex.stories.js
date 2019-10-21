"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.AlignItemsCenter=exports.justifyContentCenter=exports.justifyContentSpaceAround=exports.growAsColumn=exports.growManyChild=exports.growOneChild=exports.growAll=exports.asRowWithWrap=exports.asRowWithoutWrap=exports.asRow=exports.default=void 0;var _styledComponents=_interopRequireDefault(require("styled-components"));var _react=_interopRequireDefault(require("react"));var _FlexContainer=_interopRequireDefault(require("./FlexContainer"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _StyledSpan=_styledComponents.default.span.withConfig({displayName:"Flexstories___StyledSpan",componentId:"sc-402tia-0"})(["background-color:purple;border:2px black  solid;color:white;;padding:0.5em;"]);var FlexItem=function FlexItem(p){return _react.default.createElement(_StyledSpan,p)};var _default={title:"Layout/Flexbox"};exports.default=_default;var generateArray=function generateArray(length,fn){return Array.from({length:length},fn)};var asRow=function asRow(){return _react.default.createElement(_FlexContainer.default,null,generateArray(10,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.asRow=asRow;var asRowWithoutWrap=function asRowWithoutWrap(){return _react.default.createElement(_FlexContainer.default,null,generateArray(50,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.asRowWithoutWrap=asRowWithoutWrap;var asRowWithWrap=function asRowWithWrap(){return _react.default.createElement(_FlexContainer.default,{wrap:true},generateArray(50,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.asRowWithWrap=asRowWithWrap;var growAll=function growAll(){return _react.default.createElement(_FlexContainer.default,{grows:true},generateArray(4,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.growAll=growAll;var growOneChild=function growOneChild(){return _react.default.createElement(_FlexContainer.default,{grows:"2"},generateArray(4,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.growOneChild=growOneChild;var growManyChild=function growManyChild(){return _react.default.createElement(_FlexContainer.default,{grows:[1,4]},generateArray(4,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.growManyChild=growManyChild;var growAsColumn=function growAsColumn(){return _react.default.createElement(_FlexContainer.default,{grows:[2],column:true,height:"100vh"},generateArray(4,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.growAsColumn=growAsColumn;var justifyContentSpaceAround=function justifyContentSpaceAround(){return _react.default.createElement(_FlexContainer.default,{justifyContent:"space-around"},generateArray(4,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.justifyContentSpaceAround=justifyContentSpaceAround;var justifyContentCenter=function justifyContentCenter(){return _react.default.createElement(_FlexContainer.default,{justifyContent:"center"},generateArray(4,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.justifyContentCenter=justifyContentCenter;var _StyledFlexContainer=(0,_styledComponents.default)(_FlexContainer.default).withConfig({displayName:"Flexstories___StyledFlexContainer",componentId:"sc-402tia-1"})(["border:2px solid grey;"]);var AlignItemsCenter=function AlignItemsCenter(){return _react.default.createElement(_StyledFlexContainer,{alignItems:"center",height:"200px"},generateArray(4,function(_,i){return _react.default.createElement(FlexItem,{key:i},i)}))};exports.AlignItemsCenter=AlignItemsCenter;