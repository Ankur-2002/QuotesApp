(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{39:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(37);var o=n(38);function s(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},50:function(e,t,n){e.exports={comments:"Comments_comments__1ZVf0"}},51:function(e,t,n){e.exports={form:"NewCommentForm_form__197iS",loading:"NewCommentForm_loading__2X7AS",control:"NewCommentForm_control__3n716",actions:"NewCommentForm_actions__3NweL"}},52:function(e,t,n){e.exports={item:"CommentItem_item__KE-VE"}},53:function(e,t,n){e.exports={comments:"CommentsList_comments__32xCL"}},54:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__1Q6wZ"}},55:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(2),s=n(8),r=n(39),a=n(40),m=n(35),i=n(36),j=n(15),u=n(50),d=n.n(u),l=n(51),b=n.n(l),O=n(1),f=function(e){var t=Object(m.a)(i.a),n=t.sendRequest,s=t.data,r=t.status,a=t.error,j=Object(c.useRef)(),u=Object(o.j)(),d=e.onAddComment;Object(c.useEffect)((function(){"completed"!==r||a||d()}),[s,r,d]);var l=function(e){e.preventDefault(),n({quoteId:u.quoteId,commentData:j.current.value}),j.current.value=""};return Object(O.jsxs)("form",{className:b.a.form,onSubmit:l,children:[Object(O.jsxs)("div",{className:b.a.control,onSubmit:l,children:[Object(O.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(O.jsx)("textarea",{id:"comment",rows:"5",ref:j})]}),Object(O.jsx)("div",{className:b.a.actions,children:Object(O.jsx)("button",{className:"btn",children:"Add Comment"})})]})},x=n(52),h=n.n(x),p=function(e){return Object(O.jsx)("li",{className:h.a.item,children:Object(O.jsx)("p",{children:e.text})})},_=n(53),N=n.n(_),v=function(e){return Object(O.jsx)("ul",{className:N.a.comments,children:e.comments.map((function(e){return Object(O.jsx)(p,{text:e.text},e.id)}))})},C=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],u=Object(m.a)(i.c,!0),l=u.sendRequest,b=u.data,x=u.status,h=u.error,p=Object(o.j)();Object(c.useEffect)((function(){l(p.quoteId)}),[]);var _,N=Object(c.useCallback)((function(){l(p.quoteId)}),[p.quoteId,l]);return"pending"===x&&(_=Object(O.jsx)("div",{className:"centered",children:Object(O.jsx)(j.a,{})})),"completed"!==x||h||(_=Object(O.jsx)(v,{comments:Object(r.a)(b)})),"completed"!==x||h||0!=Object(r.a)(b).length||(_=Object(O.jsx)("p",{className:"centered",children:"No Comments Added at this post"})),Object(O.jsxs)("section",{className:d.a.comments,children:[Object(O.jsx)("h2",{children:"User Comments"}),!n&&Object(O.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),n&&Object(O.jsx)(f,{onAddComment:N}),Object(O.jsx)("p",{children:_})]})},q=n(54),g=n.n(q),w=function(e){return Object(O.jsxs)("figure",{className:g.a.quote,children:[Object(O.jsx)("p",{children:e.text}),Object(O.jsx)("figcaption",{children:e.author})]})};t.default=function(e){var t=Object(o.j)(),n=Object(o.k)(),r=Object(m.a)(i.e,!0),a=r.sendRequest,u=r.status,d=r.data,l=r.error;return Object(c.useEffect)((function(){a(t.quoteId)}),[a]),"pending"===u?Object(O.jsx)("p",{className:" centered",children:Object(O.jsx)(j.a,{})}):l?Object(O.jsx)("p",{className:"centered",children:l}):"completed"!==u||l||void 0!=d?Object(O.jsxs)("div",{children:[Object(O.jsx)(w,{text:d.text,author:d.author}),Object(O.jsx)(o.c,{path:"".concat(n.path),exact:!0,children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsx)(s.b,{to:"".concat(n.url,"/comments"),className:"btn--flat",children:"Load Comments"})})}),Object(O.jsx)(o.c,{path:"".concat(n.path,"/comments"),children:Object(O.jsx)(C,{})})]}):Object(O.jsx)("p",{children:"No quote found"})}}}]);
//# sourceMappingURL=4.a01bb37e.chunk.js.map