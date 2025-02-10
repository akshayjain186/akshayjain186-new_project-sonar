module.exports = {
  apps: [
    {
      name: "turnkey-frontend", // Change this to your app name
      script: "npm",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
