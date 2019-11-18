"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _antd=require("antd");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function _getRequireWildcardCache(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};if(obj!=null){var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var FormItem=_antd.Form.Item;var CollectionCreateForm=_antd.Form.create()(function(props){var visible=props.visible,onCancel=props.onCancel,onCreate=props.onCreate,form=props.form;var getFieldDecorator=form.getFieldDecorator;return _react.default.createElement(_antd.Modal,{visible:visible,title:"Create a new collection",okText:"Create",onCancel:onCancel,onOk:onCreate},_react.default.createElement(_antd.Form,{layout:"vertical"},_react.default.createElement(FormItem,{label:"Title"},getFieldDecorator("title",{rules:[{required:true,message:"Please input the title of collection!"}]})(_react.default.createElement(_antd.Input,null))),_react.default.createElement(FormItem,{label:"Description"},getFieldDecorator("description")(_react.default.createElement(_antd.Input,{type:"textarea"}))),_react.default.createElement(FormItem,{className:"collection-create-form_last-form-item"},getFieldDecorator("modifier",{initialValue:"public"})(_react.default.createElement(_antd.Radio.Group,null,_react.default.createElement(_antd.Radio,{value:"public"},"Public"),_react.default.createElement(_antd.Radio,{value:"private"},"Private"))))))});var FormInModal=function(_Component){_inherits(FormInModal,_Component);function FormInModal(){var _getPrototypeOf2;var _this;_classCallCheck(this,FormInModal);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(FormInModal)).call.apply(_getPrototypeOf2,[this].concat(args)));_defineProperty(_assertThisInitialized(_this),"state",{visible:false});_defineProperty(_assertThisInitialized(_this),"showModal",function(){_this.setState({visible:true})});_defineProperty(_assertThisInitialized(_this),"handleCancel",function(){_this.setState({visible:false})});_defineProperty(_assertThisInitialized(_this),"handleCreate",function(){var form=_this.form;form.validateFields(function(err,values){if(err){return}console.log("Received values of form: ",values);form.resetFields();_this.setState({visible:false})})});_defineProperty(_assertThisInitialized(_this),"saveFormRef",function(form){_this.form=form});return _this}_createClass(FormInModal,[{key:"render",value:function render(){return _react.default.createElement("section",{className:"example"},_react.default.createElement("h3",{className:"ex-title"},"Form in Modal to Create"),_react.default.createElement(_antd.Button,{type:"primary",onClick:this.showModal},"New Collection"),_react.default.createElement(CollectionCreateForm,{ref:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate}))}}]);return FormInModal}(_react.Component);var _default=FormInModal;exports.default=_default;