import {
  RecommendedPluginsTheme,
  RecommendedTypePlugins,
  RecommendedVariantPlugins,
} from "@icehouse/universal--web--libraries--guc-recommended-plugins";
import { once } from "../lib/once";

once<RecommendedPluginsTheme>({
  allowArbitraryValue: true,
  darkModeStrategy: { type: "class", fallbackDarkMode: false, on: "html" },
  emitTo: {
    to: "nearSource",
    path: {
      type: "relativePath",
      relativePath: "./output.css",
      onConflict: "error",
    },
  },
  typePlugins: RecommendedTypePlugins,
  variantPlugins: RecommendedVariantPlugins,
  theme: {
    margin: { auto: "auto" },
    media: { dark: "prefers-color-scheme:dark" },
  },
  prefix: "",
  filesToProcessGlobPattern: "**/*.txt",
  filesToClearBeforeStartGlobPattern: "**/*.css",
});
