!function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=t(1),u=function(e){return e&&e.__esModule?e:{default:e}}(o),l={required:"This field is required",minLen:"The minimum number of characters allowed is %s%",maxLen:"The maximum allowed number of characters is %s%",email:"The e-mail field has the wrong format",phone:"The phone number is not in the correct format",number:"The entered data must be a number",equalTo:"The entered data does not match"},s={lang:"ru",onSuccess:function(){},onError:function(){}},c=new RegExp(/^(minLen|maxLen|phone|required|password|email)\((\w{1,20})\)/i),f=function(){function e(n,t){r(this,e),this.options=i({},s,t),this.i18n=i({},l,e.i18n),this.form=n,this.inputs=Array.prototype.slice.call(this.form.querySelectorAll("[data-valid]:not(:disabled)")),this.eventValid=this.valid.bind(this),this.init()}return a(e,[{key:"check",value:function(){for(var e=[],n=0,t=this.inputs.length;n<t;n++){var r=this.inputs[n],i=r.getAttribute("data-valid"),a=[],o={el:r,i18n:this.i18n};if(i){for(var l=i.split("|"),s=l.length,f=0;f<s;f++){var d=l[f].match(c),h=void 0;if(d?(h=d[1],void 0!==d[2]&&(o.param=d[2])):h=l[f],u.default.hasOwnProperty(h)){var m=u.default[h](o);void 0!==m&&!0!==m&&a.push(m)}}a.length>0&&e.push({el:r,errors:a})}}return e}},{key:"valid",value:function(e){var n=this.check();return 0===n.length?this.options.onSuccess(e):(e.preventDefault(),this.options.onError(n))}},{key:"init",value:function(){this.form.addEventListener("submit",this.eventValid)}}],[{key:"run",value:function(n,t){n instanceof Node&&(n=[n]),n instanceof NodeList&&(n=[].slice.call(n)),"string"==typeof n&&(n=[].slice.call(document.querySelectorAll(n))),n instanceof Array&&n.forEach(function(n){"Validate"in n||(n.Validate=new e(n,t))})}},{key:"version",get:function(){return.1}}]),e}();n.default=f,"undefined"!=typeof document&&(window.Validate=f)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={required:function(e){return""!==e.el.value.trim()||e.i18n.required},minLen:function(e){return e.el.value.length>=e.param||e.i18n.minLen.replace("%s%",e.param)},maxLen:function(e){return e.el.value.length<=e.param||e.i18n.maxLen.replace("%s%",e.param)},email:function(e){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e.el.value)||e.i18n.email},phone:function(e){return/^\d[\d\(\)\ -]{4,14}\d$/.test(e.el.value)||e.i18n.phone},equalTo:function(e){return form.querySelector("[name="+e.el.param+"]").value===e.el.value||e.i18n.equalTo},number:function(e){return/^(\d+|\.?\d+)$/.test(e.el.value)||e.i18n.number}}}]);