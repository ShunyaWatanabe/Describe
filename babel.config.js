module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            src: './src',
          },
          extensions: [
            '.js',
            '.jsx',
            'json',
            '.es',
            '.es6',
            '.mjs',
            '.ts',
            '.tsx',
          ],
        },
      ],
    ],
  };
};
