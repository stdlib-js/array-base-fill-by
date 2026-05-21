"use strict";var n=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var f=n(function(q,u){
var v=require('@stdlib/array-base-arraylike2object/dist');function g(r,i,a,c,o){var e;for(e=i;e<a;e++)r[e]=c.call(o,r[e],e,r);return r}function h(r,i,a,c,o){var e,s,t,l;for(e=r.data,s=r.accessors[0],t=r.accessors[1],l=i;l<a;l++)t(e,l,c.call(o,s(e,l),l,e));return e}function b(r,i,a,c,o){var e;return i<0&&(i+=r.length,i<0&&(i=0)),a<0?a+=r.length:a>r.length&&(a=r.length),e=v(r),e.accessorProtocol?h(e,i,a,c,o):g(r,i,a,c,o)}u.exports=b
});var j=f();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
