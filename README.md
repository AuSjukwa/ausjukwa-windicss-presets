# ausjukwa-windicss-presets
windicss.config.ts presets
windicss配置预设

### 安装
```
npm install @ausjukwa/windicss-presets -D
```
```
yarn add @ausjukwa/windicss-presets -D
```
```
pnpm add @ausjukwa/windicss-presets -D
```

## 使用
```
// windicss.config.ts

import { defineConfig } from 'windicss/helpers'
import basePresets from '@ausjukwa/windicss-presets'

export default defineConfig({
    presets: [basePresets]
})
```