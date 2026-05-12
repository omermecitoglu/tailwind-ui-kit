import { fixImportsPlugin } from "esbuild-fix-imports-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "dist",
  entry: [
    "src/components/**/*",
    "src/styles/**/*",
    "src/utils/**/*",
    "!src/**/*.test.ts",
  ],
  format: ["esm"],
  dts: true,
  splitting: false,
  bundle: false, // this causes import .js extension problem (https://github.com/egoist/tsup/issues/953)
  clean: true,
  external: [
    "clsx",
    "tailwind-merge",
  ],
  esbuildPlugins: [
    fixImportsPlugin(), // this fixes the problem that was mentioned above (import .js extension)
  ],
  tsconfig: "tsconfig.app.json",
});
