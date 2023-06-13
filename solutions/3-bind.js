// BEGIN
const myBind = (obj, fn) => (...args) => fn.apply(obj, args)
export default myBind;
// END