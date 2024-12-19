import { defineConfig } from "tsup";

export default defineConfig({
  target: "es2020",
  entry: ["src/index.ts"],
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: true,
});
