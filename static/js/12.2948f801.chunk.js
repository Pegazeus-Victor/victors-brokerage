(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[12],{148:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n(16),r=function(){return{type:a.a}},c=function(e,t){return 404===e.response.status?function(e){return{type:a.e,props:e}}(t):500===e.response.status?function(e){return{type:a.f,props:e}}(t):function(e){return{type:a.g,error:e}}(e)}},149:function(e,t,n){},150:function(e,t,n){"use strict";var a=n(16),r=n(148),c=n(154),o=n.n(c).a.create({baseURL:"https://brokerage.herokuapp.com",headers:{headerType:"example header type"}});n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return m}));var u=function(e,t){return function(n){o.get(e).then((function(e){var t;n((t=e.data,{type:a.d,data:t}))})).catch((function(e){n(r.b(e,t))}))}},l=function(e,t,n){return function(c){o.post(e,t).then((function(e){c(function(e){return{type:a.h,response:e}}(e))})).catch((function(e){c(r.b(e,n))}))}},s=function(e,t,n){return function(c){o.put(e,t).then((function(e){c(function(e){return{type:a.i,response:e}}(e))})).catch((function(e){c(r.b(e,n))}))}},i=function(e,t){return function(n){o.delete(e).then((function(e){n(function(e){return{type:a.c,response:e}}(e))})).catch((function(e){n(r.b(e,t))}))}},m=function(e,t){return{type:a.b,props:e,url:t}}},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(269),o=n(259);n(149);t.a=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(c.a,{show:e.show,backdrop:"static"},r.a.createElement(c.a.Header,null,e.modalHeaderText),r.a.createElement(c.a.Body,null,r.a.createElement("p",null,e.modalBodyText)),r.a.createElement(c.a.Footer,null,r.a.createElement(o.a,{bsStyle:"success",onClick:e.successClick},e.okButtonText))))}},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(269),o=n(259);n(149);t.a=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(c.a,{show:e.show,backdrop:"static"},r.a.createElement(c.a.Header,null,e.modalHeaderText),r.a.createElement(c.a.Body,null,r.a.createElement("p",null,e.modalBodyText)),r.a.createElement(c.a.Footer,null,r.a.createElement(o.a,{bsStyle:"danger",onClick:e.closeModal},e.okButtonText))))}},265:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(0),c=n.n(r),o=n(150),u=n(148),l=n(47),s=n(146),i=n(143),m=n(217),d=n(262),f=n(259),p=n(160),E=n.n(p),h=n(152),b=n(153);t.default=function(e){var t=Object(l.d)((function(e){return e.repository.data})),n=Object(l.d)((function(e){return e.repository.showSuccessModal})),p=Object(l.d)((function(e){return e.errorHandler.showErrorModal})),y=Object(l.d)((function(e){return e.errorHandler.errorMessage})),w=Object(l.c)();Object(r.useEffect)((function(){var t="/api/owner/"+e.match.params.id;w(o.c(t,Object(a.a)({},e)))}),[e,w]);var O=Object(a.a)({},t);return c.a.createElement(r.Fragment,null,c.a.createElement(s.a,null,c.a.createElement(i.a,{md:10},c.a.createElement(m.a,null,c.a.createElement(s.a,null,c.a.createElement(i.a,{md:3},c.a.createElement(d.a,{htmlFor:"name"},"Owners name:")),c.a.createElement(i.a,{md:7},c.a.createElement("span",{name:"name"},O.name))),c.a.createElement(s.a,null,c.a.createElement(i.a,{md:3},c.a.createElement(d.a,{htmlFor:"dateOfBirth"},"Date of birth:")),c.a.createElement(i.a,{md:7},c.a.createElement("span",{name:"dateOfBirth"},c.a.createElement(E.a,{format:"MM/DD/YYYY"},O.dateOfBirth)))),c.a.createElement(s.a,null,c.a.createElement(i.a,{md:3},c.a.createElement(d.a,{htmlFor:"address"},"Address:")),c.a.createElement(i.a,{md:7},c.a.createElement("span",{name:"address"},O.address)))))),c.a.createElement(s.a,null,c.a.createElement(i.a,{mdOffset:8,md:1},c.a.createElement(f.a,{type:"submit",bsStyle:"info",onClick:function(n){n.preventDefault();var r="/api/owner/"+t.id;w(o.b(r,Object(a.a)({},e)))}},"Delete")),c.a.createElement(i.a,{md:1},c.a.createElement(f.a,{bsStyle:"danger",onClick:function(){e.history.push("/owner-List")}},"Cancel"))),c.a.createElement(h.a,{show:n,modalHeaderText:"Success message",modalBodyText:"Action completed successfylly",okButtonText:"OK",successClick:function(){return w(o.a(Object(a.a)({},e),"/owner-List"))}}),c.a.createElement(b.a,{show:p,modalHeaderText:"Error message",modalBodyText:y,okButtonText:"OK",closeModal:function(){return w(u.a())}}))}}}]);
//# sourceMappingURL=12.2948f801.chunk.js.map