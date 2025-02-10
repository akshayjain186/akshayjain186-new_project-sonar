module.exports = {
  apps: [
    {
      name: "turnKeyUsers", // Change this to your app name
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
