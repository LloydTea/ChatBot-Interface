module.exports = {
  apps: [
    {
      name: "webpack",
      script: "npx",
      args: "webpack --config webpack.config.js --watch",
      watch: true,
      autorestart: false,
      max_restarts: 1,
      log_file: "/root/.pm2/logs",
    },
  ],
};
