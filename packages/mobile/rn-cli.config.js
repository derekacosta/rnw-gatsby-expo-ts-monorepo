const {
  createReactNativeConfiguration
} = require('./scripts/expo-yarn-workspaces')

const { getDefaultConfig } = require('metro-config')
const reactNativeConfig = createReactNativeConfiguration(__dirname)

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig()

  return merge(reactNativeConfig, {
    transformer: merge(reactNativeConfig.transformer, {
      babelTransformerPath: require.resolve('react-native-svg-transformer')
    }),
    resolver: merge(reactNativeConfig.resolver, {
      assetExts: reactNativeConfig.resolver.assetExts.filter(
        ext => ext !== 'svg'
      ),
      sourceExts: [...sourceExts, 'svg']
    })
  })
})()

function merge (a, b) {
  return Object.assign({}, a, b)
}
