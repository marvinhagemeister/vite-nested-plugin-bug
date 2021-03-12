import { defineConfig } from "vite";

function PluginInner() {
  return {
    name: "inner",
    transform(code, id) {
      if (/\.[tj]sx?$/.test(id)) {
        return `
        document.getElementById("app")!.textContent = "It works!";
        `;
      }
    },
  };
}

function PluginOuter() {
  return {
    name: "outer",
    config() {
      return {
        plugins: [PluginInner()],
      };
    },
  };
}

export default defineConfig({
  plugins: [PluginOuter()],
});
