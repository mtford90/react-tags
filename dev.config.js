/*
 dev.config.js
 -------------
 This config contains configuration items that relate to configuration of the development environment
 e.g webpack & compilation.
 */

module.exports = {
    // Location of js/jsx files.
    scripts: 'scripts',
    // The main point of entry for the app. This will be used by webpack to construct bundles.
    entry: './scripts/index',
    // Location of stylesheets.
    styles: {
        scss: 'styles/scss',
        sass: 'styles/sass',
        less: 'styles/less',
        css: 'styles/css'
    },
    // Location of specs.
    tests: 'tests',
    // Folder to output bundle when running gulp compile
    bin: 'bin',
    // File extensions to look for.
    ext: {
        // File extensions for js
        js: ['js', 'jsx', 'react'],
        // File extensions for tests
        spec: ['js', 'jsx', 'react']
    },
    // Port on which we will serve the dev server (along with intermediate files generated by webpack)
    port: 3000,
    webPack: {
        // (this is the actual port that runs the dev server, but webpack sort of hijacks it to serve intermediate files)
        port: 3001,
        // stfu webpack, you're noisy
        silent: true
    },
    // Open browser on watch?
    open: false,
    compilation: {
        // Name of uglifed bundle as generated by gulp compile
        name: 'bundle.min.js',
        // Where to place compiled bundles.
        dir: 'bin'
    },
    // Add transitions to everything to make live editing look nice and smooth (has performance implications)
    // NOTE: This will only be performed in dev. Compilation step excludes this.
    devStyles: true
};