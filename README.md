<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fillBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill all elements within a portion of an array according to a callback function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
fillBy = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fill-by@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var fillBy = require( 'path/to/vendor/umd/array-base-fill-by/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fill-by@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.fillBy;
})();
</script>
```

#### fillBy( x, start, end, fcn\[, thisArg] )

Fills all elements within a portion of an array from an inclusive `start` index to an exclusive `end` index according to a provided callback function.

```javascript
function fcn() {
    return 10;
}

var x = [ 1, 2, 3, 4, 5, 6 ];

var out = fillBy( x, 1, 4, fcn );
// returns [ 1, 10, 10, 10, 5, 6 ]

var bool = ( out === x );
// returns true
```

The callback function is provided the following arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: input array.

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function fcn() {
    this.count += 1;
    return 10;
}

var x = [ 1, 2, 3, 4, 5, 6 ];

var ctx = {
    'count': 0
};
var out = fillBy( x, 1, 4, fcn, ctx );
// returns [ 1, 10, 10, 10, 5, 6 ]

var bool = ( out === x );
// returns true

var cnt = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Negative `start` and `end` indices are resolved to positive indices by counting from the end of the array with `-1` corresponding to the last indexed element.
-   The function **mutates** the input array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-fill-by@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = new Float64Array( zeroTo( 6 ) );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

var y = fillBy( x, 0, 6, constantFunction( 10.0 ) );
// returns <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]

y = fillBy( x, 0, 4, constantFunction( 0.0 ) );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 10.0, 10.0 ]

y = fillBy( x, 2, 6, constantFunction( 20.0 ) );
// returns <Float64Array>[ 0.0, 0.0, 20.0, 20.0, 20.0, 20.0 ]

y = fillBy( x, 2, 4, constantFunction( 30.0 ) );
// returns <Float64Array>[ 0.0, 0.0, 30.0, 30.0, 20.0, 20.0 ]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-fill-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-fill-by

[test-image]: https://github.com/stdlib-js/array-base-fill-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-fill-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-fill-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-fill-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-fill-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-fill-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-fill-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-fill-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-fill-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-fill-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-fill-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-fill-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-fill-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-fill-by/main/LICENSE

</section>

<!-- /.links -->
