const path = require("path");

module.exports = {
  entry: "./client/src/index.js", // Update this path if your entry point is different
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    filename: "bundle.js", // Name of the output bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply Babel to both .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use Babel for transpilation
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing .js and .jsx files without specifying extensions
  },
  devtool: "source-map", // Generate source maps for easier debugging (optional)
  mode: "development", // Set mode to development; can be changed to 'production' for optimized builds
};
