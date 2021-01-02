const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return {
      ...config,
      node: {
        ...config.node,
        __dirname: true,
        fs: 'empty',
      },
      module: {
        ...config.module,
        rules: [
          ...(config.module.rules || []),
          {
            test: /\.(graphql|gql)$/,
            use: ['graphql-tag/loader'],
          },
        ],
      },
    }
  },
  reactStrictMode: true,
}

module.exports = nextConfig
