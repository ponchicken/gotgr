module.exports = {
  baseUrl:process.env.NODE_ENV === 'production'
  ? 'https://ponchicken.github.io/gotgr'
  : '/',
  productionSourceMap: false
}