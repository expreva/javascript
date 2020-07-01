module.exports = {
  build: [
    {
      task: 'js',
      src: 'src/quickjs/window.js',
      dest: 'build/quickjs.min.js',
      watch: 'src/quickjs/**/*.js',
      map: true
    },
    {
      task: 'babel',
      src: 'src/babel/**/*.js',
      dest: 'build/babel',
      watch: 'src/babel/**/*.js'
    },
    {
      task: 'js',
      src: 'src/babel/window.js',
      dest: 'build/babel.min.js',
      watch: 'src/babel/**/*.js',
      map: true
    },
  ],
  serve: {
    src: '.',
    port: 3000
  }
}