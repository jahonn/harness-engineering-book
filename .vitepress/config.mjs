import { defineConfig } from 'vitepress'

const sidebar = [
  {
    "text": "入口",
    "items": [
      {
        "text": "导读",
        "link": "/"
      },
      {
        "text": "出版合作说明",
        "link": "/publication-inquiry"
      }
    ]
  },
  {
    "text": "前置材料",
    "items": [
      {
        "text": "前言",
        "link": "/manuscript/00-preface"
      },
      {
        "text": "全书目录",
        "link": "/manuscript/outline"
      }
    ]
  },
  {
    "text": "第一编 为什么需要 Harness Engineering",
    "items": [
      {
        "text": "第一章 为什么需要 Harness Engineering",
        "link": "/manuscript/part-01/01-why-harness-engineering"
      },
      {
        "text": "第二章 模型、Harness 与环境的系统边界",
        "link": "/manuscript/part-01/02-system-boundary"
      },
      {
        "text": "第三章 从 Prompt Engineering 到 Harness Engineering",
        "link": "/manuscript/part-01/03-from-prompt-to-harness"
      },
      {
        "text": "第四章 智能体系统的失败模式",
        "link": "/manuscript/part-01/04-failure-modes"
      }
    ]
  },
  {
    "text": "第二编 Harness 的核心结构",
    "items": [
      {
        "text": "第五章 模型契约与能力边界",
        "link": "/manuscript/part-02/05-model-contract"
      },
      {
        "text": "第六章 上下文装配",
        "link": "/manuscript/part-02/06-context-assembly"
      },
      {
        "text": "第七章 Agent Loop",
        "link": "/manuscript/part-02/07-agent-loop"
      },
      {
        "text": "第八章 工具系统",
        "link": "/manuscript/part-02/08-tool-system"
      },
      {
        "text": "第九章 文件系统与工作区",
        "link": "/manuscript/part-02/09-filesystem-workspace"
      },
      {
        "text": "第十章 记忆与长期上下文",
        "link": "/manuscript/part-02/10-memory-long-term-context"
      }
    ]
  },
  {
    "text": "第三编 安全、权限与治理",
    "items": [
      {
        "text": "第十一章 权限模型",
        "link": "/manuscript/part-03/11-permission-model"
      },
      {
        "text": "第十二章 Sandbox 与隔离",
        "link": "/manuscript/part-03/12-sandbox-isolation"
      },
      {
        "text": "第十三章 人工审批与交互设计",
        "link": "/manuscript/part-03/13-human-approval-interaction"
      },
      {
        "text": "第十四章 Guardrail",
        "link": "/manuscript/part-03/14-guardrails"
      },
      {
        "text": "第十五章 回滚、恢复与事故处理",
        "link": "/manuscript/part-03/15-rollback-recovery-incident"
      }
    ]
  },
  {
    "text": "第四编 可观测性与评测",
    "items": [
      {
        "text": "第十六章 Trace 与日志",
        "link": "/manuscript/part-04/16-trace-logging"
      },
      {
        "text": "第十七章 评测对象从模型到系统",
        "link": "/manuscript/part-04/17-system-evaluation"
      },
      {
        "text": "第十八章 软件工程智能体评测",
        "link": "/manuscript/part-04/18-software-engineering-agent-eval"
      },
      {
        "text": "第十九章 成本、延迟与容量",
        "link": "/manuscript/part-04/19-cost-latency-capacity"
      },
      {
        "text": "第二十章 质量门禁",
        "link": "/manuscript/part-04/20-quality-gates"
      }
    ]
  },
  {
    "text": "第五编 产品化 Agent OS",
    "items": [
      {
        "text": "第二十一章 从 Harness Core 到 Agent OS",
        "link": "/manuscript/part-05/21-harness-core-to-agent-os"
      },
      {
        "text": "第二十二章 终端式 Coding Agent",
        "link": "/manuscript/part-05/22-terminal-coding-agent"
      },
      {
        "text": "第二十三章 多智能体调度",
        "link": "/manuscript/part-05/23-multi-agent-scheduling"
      },
      {
        "text": "第二十四章 插件与协议",
        "link": "/manuscript/part-05/24-plugins-protocols"
      },
      {
        "text": "第二十五章 企业集成",
        "link": "/manuscript/part-05/25-enterprise-integration"
      }
    ]
  },
  {
    "text": "第六编 Harness 的持续演化",
    "items": [
      {
        "text": "第二十六章 观测驱动的演化",
        "link": "/manuscript/part-06/26-observation-driven-evolution"
      },
      {
        "text": "第二十七章 自动化 Harness 改进",
        "link": "/manuscript/part-06/27-automated-harness-improvement"
      },
      {
        "text": "第二十八章 经验沉淀为规则、技能与测试",
        "link": "/manuscript/part-06/28-rules-skills-tests"
      },
      {
        "text": "第二十九章 版本管理与迁移",
        "link": "/manuscript/part-06/29-versioning-migration"
      },
      {
        "text": "第三十章 组织学习",
        "link": "/manuscript/part-06/30-organizational-learning"
      }
    ]
  },
  {
    "text": "第七编 案例与成熟度模型",
    "items": [
      {
        "text": "第三十一章 薄 API CLI 的边界",
        "link": "/manuscript/part-07/31-thin-api-cli-boundary"
      },
      {
        "text": "第三十二章 单供应商 Coding-Agent Harness",
        "link": "/manuscript/part-07/32-single-provider-coding-agent-harness"
      },
      {
        "text": "第三十三章 多模态预处理 Harness",
        "link": "/manuscript/part-07/33-multimodal-preprocessing-harness"
      },
      {
        "text": "第三十四章 MCP 工具生态 Harness",
        "link": "/manuscript/part-07/34-mcp-tool-ecosystem-harness"
      },
      {
        "text": "第三十五章 企业内部智能体平台",
        "link": "/manuscript/part-07/35-internal-agent-platform"
      },
      {
        "text": "第三十六章 研发效能场景",
        "link": "/manuscript/part-07/36-engineering-productivity-scenario"
      },
      {
        "text": "第三十七章 数据分析场景",
        "link": "/manuscript/part-07/37-data-analysis-scenario"
      },
      {
        "text": "第三十八章 文档与知识库场景",
        "link": "/manuscript/part-07/38-docs-knowledge-base-scenario"
      },
      {
        "text": "第三十九章 安全事故推演",
        "link": "/manuscript/part-07/39-security-incident-simulation"
      },
      {
        "text": "第四十章 Harness 成熟度模型",
        "link": "/manuscript/part-07/40-harness-maturity-model"
      },
      {
        "text": "第四十一章 建设路线图",
        "link": "/manuscript/part-07/41-roadmap"
      },
      {
        "text": "第四十二章 未来：模型、工具与软件工程的新边界",
        "link": "/manuscript/part-07/42-future-boundaries"
      }
    ]
  },
  {
    "text": "后置材料",
    "items": [
      {
        "text": "注释与参考文献转换稿",
        "link": "/manuscript/endnotes"
      }
    ]
  }
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'Harness Engineering',
  description: 'AI 智能体运行基底工程中文专业书',
  base: '/harness-engineering-book/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  markdown: {
    image: { lazyLoading: true },
    toc: { level: [2, 3] }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#7f1d1d' }],
    ['meta', { property: 'og:title', content: 'Harness Engineering' }],
    ['meta', { property: 'og:description', content: 'AI 智能体运行基底工程中文专业书' }]
  ],
  themeConfig: {
    nav: [
      { text: '导读', link: '/' },
      { text: '目录', link: '/manuscript/outline' },
      { text: '出版合作', link: '/publication-inquiry' }
    ],
    sidebar,
    search: { provider: 'local' },
    outline: { level: 'deep', label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'medium', timeStyle: 'short' } },
    footer: {
      message: '公开预览版用于选题沟通与在线阅读，不替代正式出版定稿。',
      copyright: 'Copyright © 2026 Harness Engineering'
    }
  }
})
