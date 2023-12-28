module.exports = {
  apps: [
    {
      name: "click-store",
      exec_mode: "cluster",
      instances: "3", // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      watch: false,
      args: "start",
      env_local: {
        APP_ENV: "local", // APP_ENV=local
      },
      env_dev: {
        APP_ENV: "dev", // APP_ENV=dev
      },
      env_prod: {
        APP_ENV: "prod", // APP_ENV=prod
      },
    },
  ],
};
