module.exports = {
  apps: [
    {
      name: "click-store",
      exec_mode: "cluster",
      instances: "1", // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env_dev: {
        NODE_ENV: "development", // APP_ENV=dev
        PORT: 3004,
      },
    },
  ],
};
