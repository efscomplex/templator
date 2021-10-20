const getMatchedRepos = require('./repositories')
const shell = require('shelljs')

const generateRepoFilter = (strToInclude: string) => (repo: string) =>
   repo.includes(strToInclude)

const getFilters = ({ minimal, typescript }) => {
   let filters: any = []
   minimal && filters.push(generateRepoFilter('minimal'))
   typescript === 'ts' && filters.push(generateRepoFilter('ts'))

   return filters
}

module.exports = (answers) => {
   const { path, framework, typescript, styles } = answers
   const matchers = [framework, typescript]
   styles.toLowerCase() !== 'css' && matchers.push(styles)
   const matchedRepos = getMatchedRepos(matchers)
   const filters = getFilters(answers)

   const repo = matchedRepos.filter((repo: string) =>
      filters.every((filter) => filter(repo))
   )[0]

   const appName = path.split('/').slice(-1)
   shell.exec(`npx degit ${repo} ${path}`)
   shell.echo(`Your app '${appName}' is ready to go.
      Next steps:
      ▶️ cd ${appName}
      ▶️ npm install
      ▶️ npm start
   `)
}
