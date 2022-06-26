var async = require("async")
async.series([
    async.apply(anyWord, "Oh"),
    async.apply(anyWord, "My"),
    async.apply(anyWord, "God")
],
    function (err, result) {
        if (err) throw err;
        console.log(result.join(' '))
    });
function anyWord(arg, callback) {
    callback(null, arg)
}