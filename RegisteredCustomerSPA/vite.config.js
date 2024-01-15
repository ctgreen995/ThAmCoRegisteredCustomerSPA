import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import plugin from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

const baseFolder =
  process.env.APPDATA !== undefined && process.env.APPDATA !== ""
    ? `${process.env.APPDATA}/ASP.NET/https`
    : `${process.env.HOME}/.aspnet/https`;

const certificateArg = process.argv
  .map((arg) => arg.match(/--name=(?<value>.+)/i))
  .filter(Boolean)[0];
const certificateName = certificateArg
  ? certificateArg.groups.value
  : "RegisteredCustomerSpa";

if (!certificateName) {
  console.error(
    "Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly."
  );
  process.exit(-1);
}

const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const apiUrl = process.env.VITE_API_URL;
  const isSecureProxy = process.env.VITE_SECURE_PROXY === "true";

  return defineConfig({
    plugins: [plugin()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "^/customerManagement": {
          target: apiUrl,
          secure: isSecureProxy,
          changeOrigin: true,
          logLevel: "debug",
        },
        "^/products": {
          target: apiUrl,
          secure: isSecureProxy,
          changeOrigin: true,
          logLevel: "debug",
        },
        "^/orders": {
          target: apiUrl,
          secure: isSecureProxy,
          changeOrigin: true,
          logLevel: "debug",
        },
      },
      https:
        process.env.NODE_ENV === "development"
          ? {
              key: fs.readFileSync(keyFilePath),
              cert: fs.readFileSync(certFilePath),
            }
          : undefined,
    },
    base: "./",
  });
};
