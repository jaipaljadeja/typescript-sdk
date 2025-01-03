import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "./src/index.ts",
    "./src/testing/index.ts",
    "./src/vcr/index.ts",
    "./src/plugins/index.ts",
    "./src/internal/testing.ts",
  ],
  clean: true,
  outDir: "./dist",
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});
