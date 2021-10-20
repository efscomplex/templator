"use strict";
var repos = [
    'efscomplex/snowpack-react',
    'Uninen/vite-ts-tailwind-starter',
    'solidjs/templates/ts-minimal',
    'solidjs/templates/ts',
    'efscomplex/templates/vite-vue-router-tailwind',
    'efscomplex/templates/vite-vue-router-tailwind-minimal',
    'efscomplex/templates/vite-vue-tailwind',
    'efscomplex/templates/vite-vue-tailwind-minimal',
    'efscomplex/templates/vite-vue-ts-tailwind-cypress-minimal'
];
function getRegexp(matchers) {
    var matcher = matchers.map(function (p) { return "(?=.*?" + p + ")"; }).reduce(function (p, n) { return p + n; });
    return new RegExp(matcher, 'is');
}
module.exports = function (matchers) {
    var regexp = getRegexp(matchers);
    return repos.filter(function (repo) { return regexp.test(repo); });
};
