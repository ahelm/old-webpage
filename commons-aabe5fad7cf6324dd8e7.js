(self.webpackChunkahelm_github_io=self.webpackChunkahelm_github_io||[]).push([[351],{523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!a(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5566:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var n,o=e.attr,a=e.size,l=e.title,u=c(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},6124:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},618:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),o=n(5444),a=function(){return r.createElement("svg",{className:"h-8 w-auto",width:"166",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M28.277 31.16c-.81 0-1.387-.427-1.728-1.28-.32-.853-.48-2.219-.48-4.096 0-2.773.394-5.408 1.184-7.904.192-.619.501-1.067.928-1.344.448-.299 1.066-.448 1.856-.448.426 0 .725.053.896.16.17.107.256.31.256.608 0 .341-.16 1.11-.48 2.304a49 49 0 00-.512 2.24c-.128.64-.235 1.43-.32 2.368.704-1.835 1.493-3.328 2.368-4.48.874-1.152 1.728-1.973 2.56-2.464.853-.49 1.632-.736 2.336-.736 1.386 0 2.08.693 2.08 2.08 0 .832-.235 2.336-.704 4.512-.406 1.856-.608 3.083-.608 3.68 0 .853.31 1.28.928 1.28.426 0 .928-.256 1.504-.768.597-.533 1.386-1.387 2.368-2.56.256-.299.544-.448.864-.448.277 0 .49.128.64.384.17.256.256.608.256 1.056 0 .853-.203 1.515-.608 1.984-.918 1.13-1.91 2.059-2.976 2.784-1.046.725-2.24 1.088-3.584 1.088-1.088 0-1.91-.31-2.464-.928-.555-.64-.832-1.557-.832-2.752 0-.597.15-1.664.448-3.2.277-1.344.416-2.272.416-2.784 0-.341-.118-.512-.352-.512-.278 0-.672.363-1.184 1.088-.49.704-1.003 1.643-1.536 2.816a22.986 22.986 0 00-1.248 3.712c-.235 1.003-.512 1.685-.832 2.048-.299.341-.779.512-1.44.512z",fill:"#F3F4F6"}),r.createElement("path",{d:"M56.152 23.864c.277 0 .49.128.64.384.17.256.256.608.256 1.056 0 .853-.203 1.515-.608 1.984-.918 1.13-1.92 2.059-3.008 2.784-1.088.725-2.336 1.088-3.744 1.088-4.352 0-6.528-3.061-6.528-9.184 0-.939.032-1.888.096-2.848h-1.248c-.64 0-1.078-.117-1.312-.352-.214-.235-.32-.608-.32-1.12 0-1.195.48-1.792 1.44-1.792h1.824c.362-2.347.917-4.49 1.664-6.432.746-1.941 1.642-3.488 2.688-4.64 1.066-1.152 2.208-1.728 3.424-1.728.896 0 1.6.395 2.112 1.184.512.79.768 1.781.768 2.976 0 3.307-1.387 6.187-4.16 8.64h3.584c.341 0 .586.075.736.224.15.15.224.427.224.832 0 1.472-1.206 2.208-3.616 2.208H47.16a66.443 66.443 0 00-.064 2.496c0 2.219.256 3.776.768 4.672.533.896 1.365 1.344 2.496 1.344a3.82 3.82 0 002.432-.832c.704-.555 1.536-1.387 2.496-2.496.256-.299.544-.448.864-.448zm-5.6-17.728c-.32 0-.683.405-1.088 1.216-.384.79-.758 1.899-1.12 3.328a46.75 46.75 0 00-.864 4.704c1.258-1.088 2.197-2.304 2.816-3.648.64-1.365.96-2.603.96-3.712 0-1.259-.235-1.888-.704-1.888z",fill:"#F3F4F6"}),r.createElement("path",{d:"M70.762 21.176c.278 0 .49.139.64.416.15.277.224.63.224 1.056 0 1.024-.31 1.632-.928 1.824-1.28.448-2.688.704-4.224.768-.405 1.792-1.205 3.232-2.4 4.32-1.194 1.067-2.55 1.6-4.064 1.6-1.28 0-2.378-.31-3.296-.928a5.937 5.937 0 01-2.048-2.464c-.47-1.024-.704-2.133-.704-3.328 0-1.621.31-3.061.928-4.32.619-1.28 1.472-2.272 2.56-2.976a6.38 6.38 0 013.616-1.088c1.622 0 2.923.565 3.904 1.696 1.003 1.11 1.59 2.485 1.76 4.128 1.003-.064 2.198-.277 3.584-.64.17-.043.32-.064.448-.064zm-10.496 6.592c.683 0 1.27-.277 1.76-.832.512-.555.854-1.355 1.024-2.4a4.541 4.541 0 01-1.536-1.76 5.344 5.344 0 01-.512-2.304c0-.341.032-.683.096-1.024h-.16c-.853 0-1.568.416-2.144 1.248-.554.81-.832 1.963-.832 3.456 0 1.173.224 2.07.672 2.688.47.619 1.014.928 1.632.928z",fill:"#F3F4F6"}),r.createElement("path",{d:"M71.152 31.16c-.81 0-1.387-.427-1.728-1.28-.32-.853-.48-2.219-.48-4.096 0-2.773.394-5.408 1.184-7.904.192-.619.501-1.067.928-1.344.448-.299 1.066-.448 1.856-.448.426 0 .725.053.896.16.17.107.256.31.256.608 0 .341-.16 1.11-.48 2.304-.214.853-.384 1.6-.512 2.24-.128.64-.235 1.43-.32 2.368.704-1.835 1.493-3.328 2.368-4.48.874-1.152 1.728-1.973 2.56-2.464.853-.49 1.632-.736 2.336-.736.682 0 1.194.181 1.536.544.362.341.544.853.544 1.536 0 .555-.118 1.6-.352 3.136a69.701 69.701 0 00-.512 3.712 35.314 35.314 0 00-.192 3.872c0 .81-.17 1.397-.512 1.76-.32.341-.854.512-1.6.512-.704 0-1.216-.181-1.536-.544-.32-.363-.48-.907-.48-1.632 0-.853.15-2.261.448-4.224.256-1.707.384-2.795.384-3.264 0-.341-.118-.512-.352-.512-.278 0-.672.363-1.184 1.088-.49.704-1.003 1.643-1.536 2.816a22.986 22.986 0 00-1.248 3.712c-.235 1.003-.512 1.685-.832 2.048-.299.341-.779.512-1.44.512zM135.058 23.864c.277 0 .491.128.64.384.171.256.256.608.256 1.056 0 .853-.203 1.515-.608 1.984-.789.96-1.909 1.845-3.36 2.656a9.186 9.186 0 01-4.608 1.216c-2.24 0-3.979-.608-5.216-1.824-1.237-1.216-1.856-2.88-1.856-4.992 0-1.472.309-2.837.928-4.096.619-1.28 1.472-2.293 2.56-3.04 1.109-.747 2.357-1.12 3.744-1.12 1.237 0 2.229.373 2.976 1.12.747.725 1.12 1.717 1.12 2.976 0 1.472-.533 2.741-1.6 3.808-1.045 1.045-2.827 1.877-5.344 2.496.533.981 1.547 1.472 3.04 1.472.96 0 2.048-.33 3.264-.992a10.983 10.983 0 003.2-2.656c.256-.299.544-.448.864-.448zm-8.064-4.64c-.789 0-1.461.459-2.016 1.376-.533.917-.8 2.027-.8 3.328v.064c1.259-.299 2.251-.747 2.976-1.344.725-.597 1.088-1.29 1.088-2.08 0-.405-.117-.725-.352-.96-.213-.256-.512-.384-.896-.384z",fill:"#F3F4F6"}),r.createElement("path",{d:"M145.477 23.864c.277 0 .49.128.64.384.17.256.255.608.255 1.056 0 .853-.202 1.515-.608 1.984-.917 1.13-1.919 2.059-3.007 2.784-1.067.725-2.283 1.088-3.648 1.088-1.878 0-3.275-.853-4.192-2.56-.896-1.707-1.345-3.915-1.345-6.624 0-2.603.331-5.568.992-8.896.683-3.328 1.675-6.187 2.976-8.576 1.323-2.39 2.891-3.584 4.705-3.584 1.024 0 1.824.48 2.4 1.44.597.939.895 2.293.895 4.064 0 2.539-.704 5.483-2.112 8.832-1.408 3.35-3.317 6.667-5.727 9.952.149.875.394 1.504.735 1.888.342.363.79.544 1.345.544.874 0 1.642-.245 2.304-.736.661-.512 1.504-1.376 2.528-2.592.256-.299.544-.448.864-.448zM141.54 4.088c-.49 0-1.045.885-1.664 2.656-.618 1.77-1.162 3.968-1.631 6.592-.47 2.624-.726 5.141-.768 7.552 1.514-2.496 2.719-4.992 3.615-7.488.896-2.517 1.344-4.81 1.344-6.88 0-1.621-.298-2.432-.896-2.432z",fill:"#F3F4F6"}),r.createElement("path",{d:"M146.058 31.16c-.811 0-1.387-.427-1.728-1.28-.32-.853-.48-2.219-.48-4.096 0-2.773.395-5.408 1.184-7.904.192-.619.501-1.067.928-1.344.448-.299 1.067-.448 1.856-.448.427 0 .725.053.896.16.171.107.256.31.256.608 0 .341-.16 1.11-.48 2.304a49.54 49.54 0 00-.512 2.24 21.345 21.345 0 00-.32 2.336c.576-1.664 1.259-3.072 2.048-4.224.811-1.152 1.632-2.005 2.464-2.56.853-.576 1.653-.864 2.4-.864.747 0 1.269.17 1.568.512.32.341.48.864.48 1.568 0 .683-.203 1.92-.608 3.712a35.716 35.716 0 00-.352 1.728c.704-1.792 1.483-3.253 2.336-4.384.875-1.13 1.728-1.93 2.56-2.4.832-.49 1.6-.736 2.304-.736.683 0 1.195.181 1.536.544.363.341.544.853.544 1.536 0 .555-.117 1.6-.352 3.136a70.115 70.115 0 00-.512 3.712 35.315 35.315 0 00-.192 3.872c0 .81-.171 1.397-.512 1.76-.32.341-.853.512-1.6.512-.704 0-1.216-.181-1.536-.544-.32-.363-.48-.907-.48-1.632 0-.853.149-2.261.448-4.224.256-1.707.384-2.795.384-3.264 0-.341-.117-.512-.352-.512-.277 0-.672.363-1.184 1.088-.512.704-1.024 1.643-1.536 2.816a22.986 22.986 0 00-1.248 3.712c-.235 1.024-.512 1.707-.832 2.048-.299.341-.789.512-1.472.512-.704 0-1.237-.33-1.6-.992-.341-.683-.512-1.504-.512-2.464 0-.81.107-1.984.32-3.52.171-1.365.256-2.261.256-2.688 0-.341-.117-.512-.352-.512-.32 0-.725.384-1.216 1.152-.491.768-.971 1.75-1.44 2.944a30.03 30.03 0 00-1.088 3.52c-.235 1.003-.512 1.685-.832 2.048-.299.341-.779.512-1.44.512z",fill:"#F3F4F6"}),r.createElement("path",{d:"M8.913 31.16c-1.472 0-2.806-.363-4-1.088-1.174-.725-2.102-1.77-2.784-3.136-.683-1.387-1.024-3.019-1.024-4.896 0-3.243.693-6.24 2.08-8.992 1.386-2.773 3.434-4.992 6.144-6.656 2.709-1.685 5.962-2.528 9.76-2.528.98 0 2.026.075 3.136.224 1.13.15 2.154.373 3.072.672.597.17.895.597.895 1.28 0 .555-.213 1.077-.64 1.568-.405.49-.885.736-1.44.736-.17 0-.298-.01-.383-.032a32.108 32.108 0 00-2.848-.544 15.586 15.586 0 00-2.497-.192c-2.709 0-5.013.661-6.912 1.984-1.898 1.301-3.317 3.03-4.255 5.184-.94 2.155-1.408 4.48-1.408 6.976 0 1.813.352 3.221 1.056 4.224.725.981 1.664 1.472 2.816 1.472 1.3 0 2.442-.533 3.424-1.6.98-1.067 1.877-2.795 2.688-5.184.81-2.39 1.61-5.632 2.4-9.728.127-.597.383-1.003.767-1.216.384-.213.896-.32 1.537-.32 1.514 0 2.271.49 2.271 1.472 0 .17-.032.384-.096.64a91.388 91.388 0 00-1.535 6.88c-.448 2.496-.672 4.395-.672 5.696 0 1.152.17 1.995.512 2.528.34.512.863.768 1.567.768.683 0 1.334-.224 1.953-.672.618-.47 1.397-1.259 2.335-2.368.256-.299.544-.448.864-.448.278 0 .491.128.64.384.171.256.257.608.257 1.056 0 .832-.203 1.493-.608 1.984-1.046 1.259-2.07 2.219-3.072 2.88-1.003.661-2.23.992-3.68.992-1.494 0-2.7-.427-3.617-1.28-.917-.875-1.493-2.101-1.727-3.68-1.58 3.307-3.904 4.96-6.976 4.96zM122.481 23.864c.277 0 .49.128.64.384.17.256.256.608.256 1.056 0 .832-.203 1.493-.608 1.984-2.112 2.581-4.363 3.872-6.752 3.872-2.07 0-3.723-.8-4.96-2.4-1.238-1.6-1.856-3.893-1.856-6.88 0-.725.032-1.45.096-2.176a45.24 45.24 0 01-4.608.576c-1.11.085-1.867.139-2.272.16-.427 2.176-1.024 4.843-1.792 8-.448 1.856-1.302 2.784-2.56 2.784-1.366 0-2.049-.619-2.049-1.856 0-.277.054-.661.16-1.152a218.952 218.952 0 001.728-7.424l-1.535.064c-.704 0-1.216-.117-1.537-.352-.32-.256-.48-.661-.48-1.216 0-.704.203-1.216.608-1.536.406-.341 1.078-.533 2.017-.576l1.695-.064c.555-3.008.832-5.301.832-6.88 0-1.003-.149-1.685-.448-2.048-.298-.363-.693-.544-1.183-.544-1.494 0-3.18 1.248-5.056 3.744-.278.363-.587.544-.928.544-.3 0-.555-.139-.768-.416-.214-.277-.32-.63-.32-1.056 0-.661.266-1.365.8-2.112a11.379 11.379 0 013.552-3.2c1.429-.853 2.88-1.28 4.351-1.28 1.387 0 2.454.48 3.201 1.44.768.939 1.152 2.41 1.152 4.416 0 1.77-.256 4.17-.768 7.2l3.136-.16c1.344-.064 2.496-.17 3.456-.32.384-2.347.97-4.544 1.76-6.592.789-2.048 1.77-3.712 2.944-4.992 1.173-1.28 2.485-1.92 3.936-1.92 1.066 0 1.909.427 2.528 1.28.618.832.928 1.93.928 3.296 0 5.29-2.699 8.96-8.096 11.008a35.53 35.53 0 00-.096 2.656c0 2.24.277 3.83.832 4.768.554.939 1.333 1.408 2.336 1.408.874 0 1.674-.224 2.4-.672.725-.47 1.546-1.259 2.464-2.368.256-.299.544-.448.864-.448zm-4.32-18.144c-.47 0-.971.427-1.504 1.28-.512.853-1.003 2.016-1.472 3.488-.47 1.472-.843 3.083-1.12 4.832 1.706-.704 2.965-1.707 3.776-3.008.81-1.301 1.216-2.976 1.216-5.024 0-.49-.086-.875-.256-1.152-.171-.277-.384-.416-.64-.416z",fill:"#60A5FA"}))},i=[{id:1,to:"/",text:"About"}],c=function(e){return r.createElement(o.Link,{to:e.to,className:"text-center px-8 py-2 hover:text-blue-400 hover:bg-gray-50 text-lg"},e.text)},l=function(e){var t=e.className,n=void 0===t?"":t,o=(0,r.useState)(!1),a=o[0],l=o[1];return r.createElement("div",{className:"relative "+n},r.createElement("button",{type:"button",onClick:function(){return l(!a)},className:"focus:outline-none hover:outline-none"},r.createElement("svg",{className:"h-6 w-6 fill-current text-gray-100 ",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{className:a?"":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}),r.createElement("path",{className:a?"hidden":"",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))),r.createElement("div",{className:(a?"":"hidden")+" absolute top-8 right-0 flex flex-col w-48 py-2 rounded-lg bg-white shadow-xl"},i.map((function(e){return r.createElement(c,{to:e.to,text:e.text,key:e.id})}))))},u=function(e){var t=e.className,n=void 0===t?"":t;return r.createElement("nav",{className:n},i.map((function(e){return r.createElement(o.Link,{className:"text-white text-lg px-6 py-2",to:e.to,key:e.id},e.text)})))},s=function(e){var t=e.className,n=void 0===t?"":t;return r.createElement("header",{className:"p-4 flex flex-row justify-between items-center bg-gray-800 shadow-md "+n},r.createElement(o.Link,{to:"/"},r.createElement(a,null)),r.createElement(u,{className:"hidden sm:block"}),r.createElement(l,{className:"sm:hidden"}))},f=n(5971),p=function(e){var t=e.className,n=void 0===t?"":t;return r.createElement("footer",{className:"flex flex-col py-2 text-gray-400 "+n},r.createElement("div",{className:"flex place-content-center text-sm text-center"},r.createElement("div",null,r.createElement("div",null,"Created with Gatsby and Tailwind CSS"),r.createElement("div",null,"© Anton Helm"))),r.createElement("div",{className:"flex flex-row py-2 place-content-center"},r.createElement("a",{href:"https://twitter.com/HelmAnton","aria-label":"Twitter",className:"px-2"},r.createElement(f.fWC,{className:"h-5 w-5"})),r.createElement("a",{href:"https://github.com/ahelm","aria-label":"Github",className:"px-2"},r.createElement(f.hJX,{className:"h-5 w-5"})),r.createElement("a",{href:"https://www.linkedin.com/in/anton-helm/","aria-label":"Linkedin",className:"px-2"},r.createElement(f.ltd,{className:"h-5 w-5"})),r.createElement("a",{href:"mailto:a.helm87@gmail.com","aria-label":"Mail",className:"px-2"},r.createElement(f.uWG,{className:"h-5 w-5"}))))},d=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement("div",{className:"flex min-h-screen justify-around bg-gray-100"},r.createElement("div",{className:"flex-auto antialiased max-w-screen-lg shadow-xl bg-gray-50"},r.createElement("div",{className:"flex flex-col max-w-screen-lg"},r.createElement(s,null),r.createElement("main",{className:"flex-grow"},t),r.createElement(p,null)))))}},5214:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r,o,a,i,c=n(7294),l=n(5697),u=n.n(l),s=n(6124),f=n.n(s),p=n(523),d=n.n(p),m=n(4756),h=n.n(m),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",E="href",O="http-equiv",A="innerHTML",C="itemprop",x="name",S="property",N="rel",k="src",j="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",I="encodeSpecialCharacters",F="onChangeClientState",z="titleTemplate",_=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),R=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,g.TITLE),n=Q(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},V=function(e){return Q(e,F)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===N&&"canonical"===e[n].toLowerCase()||l===N&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==A&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(g.BODY,r),le(g.HTML,o),ce(f,p);var d={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,a),metaTags:ue(g.META,i),noscriptTags:ue(g.NOSCRIPT,c),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(g.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(H):n.getAttribute(H)!==i.join(",")&&n.setAttribute(H,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=fe(n,r),[c.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(b,o,r),link:pe(g.LINK,a,r),meta:pe(g.META,i,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,l,r),style:pe(g.STYLE,u,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},me=f()((function(e){return{baseTag:$([E,j],e),bodyAttributes:Z(y,e),defer:Q(e,L),encode:Q(e,I),htmlAttributes:Z(b,e),linkTags:J(g.LINK,[N,E],e),metaTags:J(g.META,[x,w,O,S,C],e),noscriptTags:J(g.NOSCRIPT,[A],e),onChangeClientState:V(e),scriptTags:J(g.SCRIPT,[k,A],e),styleTags:J(g.STYLE,[T],e),title:G(e),titleAttributes:Z(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=me,i=a=function(e){function t(){return D(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return Y({},o,((t={})[r.type]=i,t.titleAttributes=Y({},a),t));case g.BODY:return Y({},o,{bodyAttributes:Y({},a)});case g.HTML:return Y({},o,{htmlAttributes:Y({},a)})}return Y({},o,((n={})[r.type]=Y({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=he,be=n(5444),ve=function(e){var t=e.description,n=void 0===t?"":t,r=e.lang,o=void 0===r?"en":r,a=e.meta,i=void 0===a?[]:a,l=e.title,u=(0,be.useStaticQuery)("63159454").site,s=n||u.siteMetadata.description,f=[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}];return c.createElement(ye,{htmlAttributes:{lang:o},title:l,titleTemplate:"%s | "+u.siteMetadata.title,meta:f.concat(i)})}}}]);
//# sourceMappingURL=commons-aabe5fad7cf6324dd8e7.js.map