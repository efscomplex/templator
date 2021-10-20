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
    var appName = path.split('/').slice(-1);
    shell.exec("npx degit " + repo + " " + path);
    shell.echo("Your app '" + appName + "' is ready to go.\n      Next steps:\n      \u25B6\uFE0F cd " + appName + "\n      \u25B6\uFE0F npm install\n      \u25B6\uFE0F npm start\n   ");
};
