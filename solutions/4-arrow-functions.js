// BEGIN
const each = (objects, callback) => {
    objects.forEach(el => {
        callback.call(el)
    });
}
export default each
// END
