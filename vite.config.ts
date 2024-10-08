import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { templateCompilerOptions } from '@tresjs/core'

// https://vitejs.dev/config/
export default (env: ConfigEnv) => {
  return defineConfig({
    base: env.mode === 'production' ? '/planets/' : '/',
    build: {
      minify: false
    },
    plugins: [
      vue({
        ...templateCompilerOptions
      }),
      vueDevTools()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
