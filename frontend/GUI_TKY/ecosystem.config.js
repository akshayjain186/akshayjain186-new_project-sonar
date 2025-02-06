module.exports = {
    apps: [
      {
        name: "turnkey-frontend",
        script: "npm",
        args: "run dev", // or "run build" for production
        watch: true,
        env: {
          NODE_ENV: "development",
          PORT: 7001, // Specify the port here
        },
        env_staging: {
          NODE_ENV: "staging",
          PORT: 7002, // Port for staging
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 7003, // Port for production
        },
      },
    ],
  };
  