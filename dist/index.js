"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var f=n(function(q,u){
var v=require('@stdlib/array-base-arraylike2object/dist');function g(r,e,a,c,o){var i;for(i=e;i<a;i++)r[i]=c.call(o,r[i],i,r);return r}function h(r,e,a,c,o){var i,s,t,l;for(i=r.data,s=r.accessors[0],t=r.accessors[1],l=e;l<a;l++)t(i,l,c.call(o,s(i,l),l,i));return i}function b(r,e,a,c,o){var i;return e<0&&(e+=r.length,e<0&&(e=0)),a<0?a+=r.length:a>r.length&&(a=r.length),i=v(r),i.accessorProtocol?h(i,e,a,c,o):g(r,e,a,c,o)}u.exports=b
});var j=f();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
