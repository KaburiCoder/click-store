module.exports = {
  apps: [
    {
      name: "click-store",
      exec_mode: "cluster",
      instances: "2", // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env_local: {
        NODE_ENV: "local", // APP_ENV=local
      },
      env_dev: {
        NODE_ENV: "development", // APP_ENV=dev
      },
      env_prod: {
        NODE_ENV: "production", // APP_ENV=prod
        PORT: 3003,
      },
    },
  ],
};
