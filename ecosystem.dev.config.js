module.exports = {
  apps: [
    {
      name: "test-click-store",
      exec_mode: "cluster",
      instances: 1,
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env_dev: {
        NODE_ENV: "development",
        PORT: 3004,
      },
    },
  ],
};
