export default {
  title: 'VSCBridge',
  mode: 'site',
  exportStatic: {},
  hash: true,
  locales: [['zh-CN', '中文'], ['en-US', '英文']],
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
  base: '/VSCBridge',
  publicPath: '/VSCBridge/',
}
