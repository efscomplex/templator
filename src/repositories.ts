const repos = [
   'efscomplex/snowpack-react',
   'Uninen/vite-ts-tailwind-starter',
   'solidjs/templates/ts-minimal',
   'solidjs/templates/ts',
   'efscomplex/templates/vite-vue-router-tailwind',
   'efscomplex/templates/vite-vue-router-tailwind-minimal',
   'efscomplex/templates/vite-vue-tailwind',
   'efscomplex/templates/vite-vue-tailwind-minimal',
   'efscomplex/templates/vite-vue-ts-tailwind-cypress-minimal'
]

function getRegexp(matchers: string[]) {
   const matcher = matchers.map((p) => `(?=.*?${p})`).reduce((p, n) => p + n)
   return new RegExp(matcher, 'is')
}

module.exports = (matchers: string[]) => {
   const regexp = getRegexp(matchers)

   return repos.filter((repo) => regexp.test(repo))
}
