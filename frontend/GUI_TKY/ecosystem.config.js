module.exports = {
    apps: [
      {
        name: "turnkey-frontend",
        script: "npm",
        args: "run dev", // or "run build" for production
        watch: true,
        env: {
          NODE_ENV: "development",
          PORT: 7000, // Specify the port here
        },
        env_staging: {
          NODE_ENV: "staging",
          PORT: 7000, // Port for staging
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 7000, // Port for production
        },
      },
    ],
  };
  