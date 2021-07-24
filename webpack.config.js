const path = require("path");

module.exports = {
    entry:"./source/index.js",
    output:{
        path:path.resolve(__dirname, "puplic"),
        filename:'index_bundle.js'
    }
}
