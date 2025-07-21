// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";function t(t,e,a,n,s){var o;return e<0&&(e+=t.length)<0&&(e=0),a<0?a+=t.length:a>t.length&&(a=t.length),(o=r(t)).accessorProtocol?function(r,t,e,a,n){var s,o,c,l;for(s=r.data,o=r.accessors[0],c=r.accessors[1],l=t;l<e;l++)c(s,l,a.call(n,o(s,l),l,s));return s}(o,e,a,n,s):function(r,t,e,a,n){var s;for(s=t;s<e;s++)r[s]=a.call(n,r[s],s,r);return r}(t,e,a,n,s)}export{t as default};
//# sourceMappingURL=index.mjs.map
