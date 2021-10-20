"use strict";
var getMatchedRepos = require('./repositories');
var shell = require('shelljs');
var generateRepoFilter = function (strToInclude) { return function (repo) {
    return repo.includes(strToInclude);
}; };
var getFilters = function (_a) {
    var minimal = _a.minimal, typescript = _a.typescript;
    var filters = [];
    minimal && filters.push(generateRepoFilter('minimal'));
    typescript === 'ts' && filters.push(generateRepoFilter('ts'));
    return filters;
};
module.exports = function (answers) {
    var path = answers.path, framework = answers.framework, typescript = answers.typescript, styles = answers.styles;
    var matchers = [framework, typescript];
    styles.toLowerCase() !== 'css' && matchers.push(styles);
    var matchedRepos = getMatchedRepos(matchers);
    var filters = getFilters(answers);
    var repo = matchedRepos.filter(function (repo) {
        return filters.every(function (filter) { return filter(repo); });
    })[0];
    shell.exec("npx degit " + repo + " " + path);
};
