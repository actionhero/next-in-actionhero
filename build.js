const nexe = require('nexe')
const packageJSON = require(`${__dirname}/package.json`)

nexe.compile({
  output: `${packageJSON.name}-${packageJSON.version}`,
  input: `./node_modules/actionhero/bin/actionhero`,
  name: packageJSON.name,
  cwd: __dirname,
  build: true,
  silent: false,
  resources: [
    './actions/**/*.js',
    './cli/**/*.js',
    './config/**/*.js',
    './initializers/**/*.js',
    './locales/**/*.js',
    './servers/**/*.js',
    './public/**/*.js',
    './tasks/**/*.js'
  ]
})
