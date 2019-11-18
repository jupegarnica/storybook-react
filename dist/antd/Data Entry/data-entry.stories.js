"use strict";var _react=_interopRequireWildcard(require("react"));var _react2=require("@storybook/react");var _AutoComplate=_interopRequireDefault(require("./AutoComplate"));var _Checkbox=_interopRequireDefault(require("./Checkbox"));var _DatePicker=_interopRequireDefault(require("./DatePicker"));var _Form=_interopRequireDefault(require("./Form"));var _InputNumber=_interopRequireDefault(require("./InputNumber"));var _Input=_interopRequireDefault(require("./Input"));var _Rate=_interopRequireDefault(require("./Rate"));var _Radio=_interopRequireDefault(require("./Radio"));var _Slider=_interopRequireDefault(require("./Slider"));var _Switch=_interopRequireDefault(require("./Switch"));var _Select=_interopRequireDefault(require("./Select"));var _Upload=_interopRequireDefault(require("./Upload"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function _getRequireWildcardCache(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};if(obj!=null){var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}(0,_react2.storiesOf)("Data Entry",module).add("AutoComplate",function(){return _react.default.createElement(_AutoComplate.default,null)}).add("Checkbox",function(){return _react.default.createElement(_Checkbox.default,null)}).add("DatePicker",function(){return _react.default.createElement(_DatePicker.default,null)}).add("Form",function(){return _react.default.createElement(_Form.default,null)}).add("InputNumber",function(){return _react.default.createElement(_InputNumber.default,null)}).add("Input",function(){return _react.default.createElement(_Input.default,null)}).add("Rate",function(){return _react.default.createElement(_Rate.default,null)}).add("Radio",function(){return _react.default.createElement(_Radio.default,null)}).add("Slider",function(){return _react.default.createElement(_Slider.default,null)}).add("Switch",function(){return _react.default.createElement(_Switch.default,null)}).add("Select",function(){return _react.default.createElement(_Select.default,null)}).add("Upload",function(){return _react.default.createElement(_Upload.default,null)});