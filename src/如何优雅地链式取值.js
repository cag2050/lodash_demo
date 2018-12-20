// 如何优雅地链式取值：https://juejin.im/post/5ba08483e51d450e99430a7f

const _ = require('lodash')

var object = {a: [{b: {c: 3}}]};
var result = _.get(object, 'a[0].b.c', 1);
console.log(result);
// output: 3
