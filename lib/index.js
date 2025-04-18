/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Fill all elements within a portion of an array according to a callback function.
*
* @module @stdlib/array-base-fill-by
*
* @example
* var fillBy = require( '@stdlib/array-base-fill-by' );
*
* function fcn() {
*     return 5;
* }
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = fillBy( x, 1, 3, fcn );
* // returns [ 1, 5, 5, 4 ]
*
* var bool = ( out === x );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
