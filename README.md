# Module Seed
一个集成了常用工作流的模块开发种子仓库。    

平时喜欢写一些 NPM 模块，写得多了，整理出一套工作流，解放一些重复的搭建工作。    
如果你喜欢，请直接拿去用，也可以参照该项目的一些 Feature ，给你一些提示与帮助。

# Feature
1. 支持ES6语法，依赖于`babel`编译
2. 单元测试，依赖于`mocha`、`should`
3. 测试覆盖率，依赖于`istanbul`
4. npm ignore, 发布npm包时，只发布有用的代码
5. 统一代码风格，依赖于`eslint`、`airbnb code style`

# Npm Script
工作流的入口，以 `npm script` 的方式暴露给开发者。   
请使用 `$npm run [script_name]` 的方式，使用工作流命令。

1. `test`: 执行单元测试
2. `cover`: 执行单元测试覆盖率，测试报告输出于 `test/coverage`
3. `build-pro`: babel编译，从`src`目录编译到`dist`
4. `build-watch`: babel热编译，开发用
5. `code-check`: 代码风格检查
6. `code-fix`: 代码风格修复，会修改代码

# Project Contents

```
.
├── LICENSE
├── README.md
├── dist
│   └── hello.js
├── node_modules
├── package.json
├── src
│   └── hello.js
└── test
    ├── coverage
    └── unit
        └── hello.test.js
```

**`/dist`**: 生产代码目录，最终只会发布该文件夹以及其他必要的文件.

**`/src`**: 源码目录，里面的代码可以使用babel支持ES6语法.

**`/test/coverage`**: 单元测试覆盖率报告.

**`/test/unit`**: 单元测试代码所在，遵循 `xxx.test.js` 的命名原则.

## Todo List

- [ ] 集成TravisCI    
  - [ ] 自动单元测试    
  - [ ] 自动代码风格检测与修复    
- [ ] 集成Coverage    

# LICENSE

[MIT License](./LICENSE)

Copyright (c) 2016 JerryC (huangjerryc@gmail.com)
