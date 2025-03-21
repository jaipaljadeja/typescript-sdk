import { defineConfig } from "apibara/config";

export default defineConfig({
  runtimeConfig: {
    evm: {
      startingBlock: 215_30_000n,
    },
    starknet: {
      startingBlock: 10_30_000n,
    },
    connectionString: process.env["POSTGRES_CONNECTION_STRING"] ?? "memory://",
  },
  presets: {
    dev: {
      runtimeConfig: {
        connectionString: "memory://",
      },
    },
  },
});
