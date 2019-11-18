"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _antd=require("antd");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function _getRequireWildcardCache(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};if(obj!=null){var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var FormItem=_antd.Form.Item;var Option=_antd.Select.Option;var AutoCompleteOption=_antd.AutoComplete.Option;var residences=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];console;var Registration=function(_Component){_inherits(Registration,_Component);function Registration(){var _getPrototypeOf2;var _this;_classCallCheck(this,Registration);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(Registration)).call.apply(_getPrototypeOf2,[this].concat(args)));_defineProperty(_assertThisInitialized(_this),"state",{confirmDirty:false,autoCompleteResult:[]});_defineProperty(_assertThisInitialized(_this),"handleSubmit",function(e){e.preventDefault();_this.props.form.validateFieldsAndScroll(function(err,values){if(!err)return})});_defineProperty(_assertThisInitialized(_this),"handleConfirmBlur",function(e){var value=e.target.value;_this.setState({confirmDirty:_this.state.confirmDirty||!!value})});_defineProperty(_assertThisInitialized(_this),"checkPassword",function(rule,value,callback){var form=_this.props.form;if(value&&value!==form.getFieldValue("password")){callback("Two passwords that you enter is inconsistent!")}else{callback()}});_defineProperty(_assertThisInitialized(_this),"checkConfirm",function(rule,value,callback){var form=_this.props.form;if(value&&_this.state.confirmDirty){form.validateFields(["confirm"],{force:true})}callback()});_defineProperty(_assertThisInitialized(_this),"handleWebsiteChange",function(value){var autoCompleteResult;if(!value){autoCompleteResult=[]}else{autoCompleteResult=[".com",".org",".net"].map(function(domain){return"".concat(value).concat(domain)})}_this.setState({autoCompleteResult:autoCompleteResult})});return _this}_createClass(Registration,[{key:"render",value:function render(){var getFieldDecorator=this.props.form.getFieldDecorator;var autoCompleteResult=this.state.autoCompleteResult;var formItemLayout={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}};var tailFormItemLayout={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var prefixSelector=getFieldDecorator("prefix",{initialValue:"86"})(_react.default.createElement(_antd.Select,{style:{width:70}},_react.default.createElement(Option,{value:"86"},"+86"),_react.default.createElement(Option,{value:"87"},"+87")));var websiteOptions=autoCompleteResult.map(function(website){return _react.default.createElement(AutoCompleteOption,{key:website},website)});return _react.default.createElement("section",{className:"example"},_react.default.createElement("h3",{className:"ex-title"},"Registration"),_react.default.createElement(_antd.Form,{style:{width:"600px"},onSubmit:this.handleSubmit},_react.default.createElement(FormItem,_extends({},formItemLayout,{label:"E-mail"}),getFieldDecorator("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:true,message:"Please input your E-mail!"}]})(_react.default.createElement(_antd.Input,null))),_react.default.createElement(FormItem,_extends({},formItemLayout,{label:"Password"}),getFieldDecorator("password",{rules:[{required:true,message:"Please input your password!"},{validator:this.checkConfirm}]})(_react.default.createElement(_antd.Input,{type:"password"}))),_react.default.createElement(FormItem,_extends({},formItemLayout,{label:"Confirm Password"}),getFieldDecorator("confirm",{rules:[{required:true,message:"Please confirm your password!"},{validator:this.checkPassword}]})(_react.default.createElement(_antd.Input,{type:"password",onBlur:this.handleConfirmBlur}))),_react.default.createElement(FormItem,_extends({},formItemLayout,{label:_react.default.createElement("span",null,"Nickname\xA0",_react.default.createElement(_antd.Tooltip,{title:"What do you want others to call you?"},_react.default.createElement(_antd.Icon,{type:"question-circle-o"})))}),getFieldDecorator("nickname",{rules:[{required:true,message:"Please input your nickname!",whitespace:true}]})(_react.default.createElement(_antd.Input,null))),_react.default.createElement(FormItem,_extends({},formItemLayout,{label:"Habitual Residence"}),getFieldDecorator("residence",{initialValue:["zhejiang","hangzhou","xihu"],rules:[{type:"array",required:true,message:"Please select your habitual residence!"}]})(_react.default.createElement(_antd.Cascader,{options:residences}))),_react.default.createElement(FormItem,_extends({},formItemLayout,{label:"Phone Number"}),getFieldDecorator("phone",{rules:[{required:true,message:"Please input your phone number!"}]})(_react.default.createElement(_antd.Input,{addonBefore:prefixSelector,style:{width:"100%"}}))),_react.default.createElement(FormItem,_extends({},formItemLayout,{label:"Website"}),getFieldDecorator("website",{rules:[{required:true,message:"Please input website!"}]})(_react.default.createElement(_antd.AutoComplete,{dataSource:websiteOptions,onChange:this.handleWebsiteChange,placeholder:"website"},_react.default.createElement(_antd.Input,null)))),_react.default.createElement(FormItem,_extends({},formItemLayout,{label:"Captcha",extra:"We must make sure that your are a human."}),_react.default.createElement(_antd.Row,{gutter:8},_react.default.createElement(_antd.Col,{span:12},getFieldDecorator("captcha",{rules:[{required:true,message:"Please input the captcha you got!"}]})(_react.default.createElement(_antd.Input,null))),_react.default.createElement(_antd.Col,{span:12},_react.default.createElement(_antd.Button,null,"Get captcha")))),_react.default.createElement(FormItem,tailFormItemLayout,getFieldDecorator("agreement",{valuePropName:"checked"})(_react.default.createElement(_antd.Checkbox,null,"I have read the ",_react.default.createElement("a",{href:""},"agreement")))),_react.default.createElement(FormItem,tailFormItemLayout,_react.default.createElement(_antd.Button,{type:"primary",htmlType:"submit"},"Register"))))}}]);return Registration}(_react.Component);Registration=_antd.Form.create()(Registration);var _default=Registration;exports.default=_default;