import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";



export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "**/*.feature",
    baseUrl: 'http://localhost:5173',
    video: true,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      return config;
    }
  }
});
