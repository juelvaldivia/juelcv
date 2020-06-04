(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(25);function i(){var e=u(["\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-gap: 2rem;\n    grid-row-gap: 0.5em;\n\n    @media only screen and (max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"]);return i=function(){return e},e}function o(){var e=u(["\n    display: grid;\n    grid-template-columns: minmax(auto, 1024px)\n    justify-content: center;\n    padding: 1em;\n    height: 100%;\n"]);return o=function(){return e},e}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var l=c.c.div(o()),f=c.c.div(i()),s=function(e){var n=e.children;return a.a.createElement(l,null,a.a.createElement(f,null,n))};function d(){var e=p(["\n    height: 100%;\n"]);return d=function(){return e},e}function m(){var e=p(["\n    height: 100%;\n"]);return m=function(){return e},e}function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var v=c.c.div(m()),b=c.c.div(d()),g=function(e){var n=e.children;return a.a.createElement(v,null,a.a.createElement(b,null,n))},h=function(e){var n=e.children;return a.a.createElement("div",{className:"Info"},a.a.createElement("div",{className:"Info-container"},n))};function E(){var e=w(["\n    color: ","\n"]);return E=function(){return e},e}function x(){var e=w(["\n    color: #212121;\n    text-decoration: none;\n    font-size: 1.2em;\n"]);return x=function(){return e},e}function j(){var e=w(["\n    display: inline;\n    margin: 0 1em 0 0;\n"]);return j=function(){return e},e}function y(){var e=w(["\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n"]);return y=function(){return e},e}function O(){var e=w(["\n    margin: 0 auto;\n    display: block;\n"]);return O=function(){return e},e}function w(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var k=c.c.div(O()),z=c.c.ul(y()),N=c.c.li(j()),S=c.c.a(x()),A=c.c.i(E(),(function(e){return e.theme.color})),P={color:"#5998df"},B={color:"#5998df"},D={color:"#5998df"},I={color:"#5998df"},C=function(e){return a.a.createElement(k,null,e.social&&a.a.createElement(z,null,e.social.map((function(e,n){return a.a.createElement(N,{key:"social-".concat(n),target:"_blank"},a.a.createElement(S,{href:e.url},a.a.createElement(c.a,{theme:(t=e.name,"facebook"===t?P:"twitter"===t?B:"linkedin"===t?D:"github"===t?I:void 0)},a.a.createElement(A,{className:"fa fa-".concat(e.name)}))));var t}))))};function J(){var e=G(["\n    color: #fd4b49\n"]);return J=function(){return e},e}function T(){var e=G(["\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n"]);return T=function(){return e},e}function F(){var e=G(["\n    color: #e7e7e5;\n    font-size: 1em;\n    font-weight: 300;\n"]);return F=function(){return e},e}function L(){var e=G(["\n    color: #e7e7e5;\n    font-size: 1em;\n    font-weight: 300;\n    padding:5px 10px 5px 10px;\n    text-indent:15px;\n    text-align: center;\n"]);return L=function(){return e},e}function M(){var e=G(["\n    margin: .2em 0 1em 0;\n    letter-spacing: 1.6px;\n    font-weight: 300;\n    color: #e7e7e5;\n"]);return M=function(){return e},e}function R(){var e=G(["\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    letter-spacing: 1.2px;\n    margin: .5em 0 0 0;\n    color: #e7e7e5;\n"]);return R=function(){return e},e}function U(){var e=G(["\n    text-align: center;\n"]);return U=function(){return e},e}function $(){var e=G(["\n    border-radius: 100%;\n    width: 160px;\n    height: 160px;\n    border: 2px solid #eaeaea;\n    margin: 0 auto;\n    display: block;\n    box-shadow: 0 0 10px rgba(0,0,0,0.6);\n"]);return $=function(){return e},e}function _(){var e=G(["\n    padding: 2em 0 0 0;\n"]);return _=function(){return e},e}function q(){var e=G(["\n    text-align: center;\n    background-color: #141415;\n    height: 100%;\n"]);return q=function(){return e},e}function G(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var H=c.c.div(q()),K=c.c.div(_()),Q=c.c.img($()),V=c.c.div(U()),W=c.c.h2(R()),X=c.c.p(M()),Y=c.c.p(L()),Z=c.c.p(F()),ee=c.c.div(T()),ne=c.c.i(J()),te=function(e){var n=e.avatar,t=e.name,r=e.profession,c=e.bio,i=e.address,o=e.social;return a.a.createElement(H,null,a.a.createElement("div",{className:"About-container"},a.a.createElement(K,null,a.a.createElement("figure",null,a.a.createElement(Q,{src:n,alt:""}))),a.a.createElement(V,null,a.a.createElement(W,null,t)),a.a.createElement("div",{className:"About-profession"},a.a.createElement(X,null,r)),a.a.createElement(ee,null,a.a.createElement(Y,null,c)),a.a.createElement("div",{className:"About-location"},a.a.createElement(Z,null,a.a.createElement(ne,{className:"fa fa-map-marker"})," ",i)),a.a.createElement("div",{className:"About-social"},a.a.createElement(C,{social:o}))))},re=function(e){return a.a.createElement("div",{className:"Education"},a.a.createElement("div",{className:"Education-container"},e.data.map((function(e,n){return a.a.createElement("div",{className:"Education-item",key:"Edu-".concat(n)},a.a.createElement("h3",null,e.degree," ",e.institution,a.a.createElement("span",null,e.startDate," - ",e.endDate)),a.a.createElement("p",null,e.description))}))))},ae=function(e){return a.a.createElement("div",{className:"Experience"},a.a.createElement("div",{className:"Experience-container"},e.data.map((function(e,n){return a.a.createElement("div",{className:"Experience-item",key:"Exp-".concat(n)},a.a.createElement("h3",null,e.jobTitle," ",e.company,a.a.createElement("span",null,e.startDate," - ",e.endDate)),a.a.createElement("p",null,e.description))}))))};function ce(){var e=fe(["\n    display: block;\n    height: 100%;\n    width: ",';\n    border-radius: 8px;\n    background-color: #C2185B;\n    overflow: hidden;\n    position: relative;\n    box-shadow: inset 0 2px 9px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4);\n    &:after {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        backgound-image: linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%,\n                            transparent);\n        z-index: 1;\n        background-size: 50px 50px;\n        animation: '," 4s linear infinite;\n        overflow: hidden;\n    }\n"]);return ce=function(){return e},e}function ie(){var e=fe(["\n    0% { background-position: 0 0; }\n    100% { background-position: 50px 50px; }\n"]);return ie=function(){return e},e}function oe(){var e=fe(["\n    height: 8px;\n    position: relative;\n    border-radius: 50px;\n    background: #F8BBD0;\n"]);return oe=function(){return e},e}function ue(){var e=fe(["\n    margin: .5em 0;\n"]);return ue=function(){return e},e}function le(){var e=fe(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n    grid-row-gap: 0.5em;\n"]);return le=function(){return e},e}function fe(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var se=c.c.div(le()),de=c.c.h5(ue()),me=c.c.div(oe()),pe=Object(c.d)(ie()),ve=c.c.span(ce(),(function(e){return e.width}),pe),be=function(e){return a.a.createElement("div",{className:"Skills"},a.a.createElement(se,null,e.data.map((function(e,n){return a.a.createElement("div",{className:"Skills-item",key:"Skills-".concat(n)},a.a.createElement(de,null,e.name),a.a.createElement(me,null,a.a.createElement(ve,{width:e.percentage})))}))))},ge=t(10);t(33);function he(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Ee(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ee(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function xe(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    body {\n        font-family: 'Lato', sans-serif;\n        margin: 0;\n        padding: 0;\n        background: #eaeaea;\n        position:absolute; \n        display:block; \n        height:100%; \n        width:100%; \n        top:0px; \n        left:0px; \n        z-index:-1;   \n    }\n    #app{\n        height: 100%;\n    }\n"]);return xe=function(){return e},e}var je=Object(c.b)(xe());n.default=function(){var e,n,t,c,i=(e=he(Object(r.useState)([]),2),n=e[0],t=e[1],c=Object(ge.h)().firestore().collection("cv"),Object(r.useEffect)((function(){c.doc("about").get().then((function(e){e.exists&&t(e.data())})).catch((function(e){console.log("Error getting document",e)}))}),[]),n);return i.educations=function(e){var n=he(Object(r.useState)([]),2),t=n[0],a=n[1],c=Object(ge.h)().firestore().collection("cv").doc("about").collection("educations");return Object(r.useEffect)((function(){c.get().then((function(e){var n=[];e.docs.forEach((function(e){n.push(e.data())})),a(n)}))}),[]),t}(),i.experiences=function(e){var n=he(Object(r.useState)([]),2),t=n[0],a=n[1],c=Object(ge.h)().firestore().collection("cv").doc("about").collection("experiences").orderBy("orden","desc");return Object(r.useEffect)((function(){c.get().then((function(e){var n=[];e.docs.forEach((function(e){n.push(e.data())})),a(n)}))}),[]),t}(),i.skills=function(e){var n=he(Object(r.useState)([]),2),t=n[0],a=n[1],c=Object(ge.h)().firestore().collection("cv").doc("about").collection("skills").orderBy("orden");return Object(r.useEffect)((function(){c.get().then((function(e){var n=[];e.docs.forEach((function(e){n.push(e.data())})),a(n)}))}),[]),t}(),i.social=function(e){var n=he(Object(r.useState)([]),2),t=n[0],a=n[1],c=Object(ge.h)().firestore().collection("cv").doc("about").collection("social");return Object(r.useEffect)((function(){c.get().then((function(e){var n=[];e.docs.forEach((function(e){n.push(e.data())})),a(n)}))}),[]),t}(),console.log(i),0===i.length?a.a.createElement("h1",null,"Cargando..."):a.a.createElement(s,null,a.a.createElement(je,null),a.a.createElement(g,null,a.a.createElement(te,{avatar:i.avatar,name:i.name,profession:i.profession,bio:i.bio,address:i.address,social:i.social})),a.a.createElement(h,null,a.a.createElement(re,{data:i.educations}),a.a.createElement(ae,{data:i.experiences}),a.a.createElement(be,{data:i.skills})))}}}]);