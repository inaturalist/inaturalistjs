const path = require( "path" );

const config = {
  mode: "none",
  target: ["web", "es5"],
  entry: "./lib/inaturalistjs.js",
  output: {
    filename: "inaturalistjs.js",
    path: path.resolve( __dirname, "build" ),
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.c?js$/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] }
      }
    ]
  },
  resolve: {
    fallback: {
      querystring: require.resolve( "querystring-es3" )
    }
  }
};

module.exports = config;
