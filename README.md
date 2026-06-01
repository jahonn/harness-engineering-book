# Harness Engineering

<p align="center">
  <strong>一本关于 AI 智能体运行基底工程的中文专业书</strong>
</p>

<p align="center">
  <a href="https://jahonn.github.io/harness-engineering-book/">在线阅读</a>
  ·
  <a href="SUMMARY.md">目录</a>
  ·
  <a href="publication-inquiry.md">出版合作</a>
</p>

<p align="center">
  <img alt="status" src="https://img.shields.io/badge/status-public_preview-0f766e">
  <img alt="chapters" src="https://img.shields.io/badge/chapters-42-334155">
  <img alt="language" src="https://img.shields.io/badge/language-中文-b91c1c">
  <img alt="site" src="https://img.shields.io/badge/site-VitePress-646cff">
  <img alt="gitbook" src="https://img.shields.io/badge/GitBook-sync_ready-111827">
</p>

## 这是什么

《Harness Engineering》是一部面向 AI 智能体、coding-agent 产品和企业内部智能体平台建设的中文专业书稿。

本书讨论的 harness，不是单个 prompt，也不是某个模型外层的简单脚本，而是基础模型与真实任务环境之间的运行基底。它负责把上下文、工具、权限、状态、观测、评测和反馈机制组织起来，让模型能力转化为可验证、可治理、可恢复的系统行为。

当前仓库是公开预览版，包含前言、全书目录、七编四十二章正文、注释与参考文献转换稿，以及 42 张工程图。正文约 53 万中文字符，适合作为选题沟通、技术审稿和在线阅读入口。

## 为什么值得看

多数关于智能体的讨论停留在模型能力、提示词技巧或单点工具调用。本书把问题往工程系统层面推进：当智能体开始读写文件、调用工具、修改代码、进入企业流程、处理长期任务时，真正决定成败的是运行基底，而不是某一次漂亮的回答。

你可以把这本书当作一份系统化地图：

- 如何定义模型、harness、工具和真实环境之间的边界。
- 如何设计上下文装配、agent loop、工具系统、工作区和长期记忆。
- 如何把权限、沙箱、人工审批、guardrail 和事故恢复纳入同一治理框架。
- 如何从 trace、日志、评测、成本和质量门禁中持续改进智能体系统。
- 如何把单个 coding agent 演进为面向企业的 Agent OS 和平台能力。

## 适合谁读

- 正在构建 coding agent、数据分析 agent、知识库 agent 或企业内部智能体平台的工程师。
- 负责 AI 产品架构、安全治理、研发效能或平台工程的技术负责人。
- 想从 prompt engineering 过渡到系统工程视角的研究者和产品设计者。
- 正在评估智能体落地风险、质量门禁和组织学习机制的团队。

## 在线阅读

- GitHub Pages: <https://jahonn.github.io/harness-engineering-book/>
- 目录入口: [SUMMARY.md](SUMMARY.md)
- 出版合作边界: [publication-inquiry.md](publication-inquiry.md)

## 全书结构

| 编次 | 主题 | 关注点 |
| --- | --- | --- |
| 第一编 | 为什么需要 Harness Engineering | 概念边界、系统责任、失败模式 |
| 第二编 | Harness 的核心结构 | 模型契约、上下文、循环、工具、工作区、记忆 |
| 第三编 | 安全、权限与治理 | 权限模型、沙箱、审批、guardrail、事故恢复 |
| 第四编 | 可观测性与评测 | trace、系统评测、成本、延迟、质量门禁 |
| 第五编 | 产品化 Agent OS | 终端式 coding agent、多智能体、插件、企业集成 |
| 第六编 | Harness 的持续演化 | 观测驱动改进、规则沉淀、版本迁移、组织学习 |
| 第七编 | 案例与成熟度模型 | 典型场景、平台案例、安全推演、建设路线图 |

完整章节请看 [SUMMARY.md](SUMMARY.md)。

## 本地预览

这个仓库同时兼容 GitBook Git Sync 与 VitePress。

```bash
npm install
npm run docs:dev
```

生产构建：

```bash
npm run docs:build
npm run docs:preview
```

更多发布说明见 [WEB.md](WEB.md)。

## 仓库结构

```text
.
├── README.md                  # GitHub 与 GitBook 导读
├── SUMMARY.md                 # GitBook 目录
├── manuscript/                # 正文、前言、注释与参考文献转换稿
├── assets/figures/            # 工程图
├── .vitepress/                # VitePress 站点配置与主题
├── .github/workflows/         # GitHub Pages 自动部署
├── WEB.md                     # 本地预览与发布说明
└── publication-inquiry.md     # 出版合作说明
```

## 当前状态

| 项目 | 状态 |
| --- | --- |
| 书稿正文 | 公开预览版 |
| 章节数量 | 42 章 |
| 工程图 | 42 张 |
| 在线站点 | GitHub Pages 已配置 |
| GitBook | 支持 Git Sync |
| 出版状态 | 未替代正式出版定稿 |

## 反馈与合作

这个公开版本主要用于阅读、审稿和选题沟通。欢迎围绕以下问题提出 issue：

- 术语不一致或定义不清。
- 章节结构、论证顺序或案例选择的问题。
- 图表表达不准确。
- 公开预览版中不适合公开传播的内容。
- 适合补充到正式出版稿中的参考文献和案例。

出版合作、版权授权、样章审读和正式引用，请先阅读 [出版合作说明](publication-inquiry.md)。

## 版权说明

当前仓库没有开放源代码许可证。书稿、图表和结构设计默认保留版权，公开预览不等于允许复制、再出版或商业使用。正式授权以作者或出版合同的书面确认为准。
