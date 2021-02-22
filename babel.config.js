module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', 'json'],
        alias: {
          components: './src/components',
          hooks: './src/hooks',
          styles: './src/styles',
          '@redux': './src/redux',
          '@types': './src/redux/api/types',
        },
      },
    ],
  ],
};
