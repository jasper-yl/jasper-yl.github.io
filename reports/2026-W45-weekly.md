# Agent & Agent Context 周报 · 2026-W45（2026-11-02 ~ 2026-11-08）

> 生成于 2026-11-09 09:32 PST

## 本周要点
- [morluto/rea](https://github.com/morluto/rea)（逆向一切的 agent）周增 +25,102，仍居榜首，⭐442,904；近 7 日日均 4,905，近 28 日日均 14,896，10-12 峰值单日 +54,038，热度明显回落。
- 官方背书的 Skills/工具是本周主力：[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) 周增 +13,187，[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 周增 +10,443，[google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) 周增 +5,943。
- 上下文层的新爆点是 [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)（语义层/本体），周增 +9,417，HN 290 分 / 139 评论；11-04 见顶后连续回落。
- 记忆成为 HN 话题：Anthropic 的《The Components of Agent Memory》和《Agent memory needs its OpenTelemetry moment》先后上榜；[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) 周增 +5,977，同时出现隐私争议 issue。
- 论文主线是 harness 自动演化和上下文压缩/任务切换：Switch-SWE 测得任务切换让 7 个 coding agent 平均少解决 11.5 个百分点。

## 本周 Agent Context 特性趋势

### Skills / 插件（最大流量池，持续升温）
本周榜上大半是 skill 类：官方仓库提速，设计类「反 AI slop」skill 稳定占位，「用代码做视频」类 skill 也在榜。

- [mattpocock/skills](https://github.com/mattpocock/skills) · ⭐318,289 · 周增 +9,256 · 作者个人 .agents 目录里的 skills（/grill-me 先追问需求、tdd、handoff 等），强调给 agent「加摩擦」。
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐66,524 · 周增 +10,443 · 六阶段安全审计（梳理、挖掘、质疑、记录、验证、报告），发现与验证由不同 agent 完成，输出带 JSON schema 校验。
- [pbakaus/impeccable](https://github.com/pbakaus/impeccable) · ⭐105,994 · 周增 +6,950 · 给 agent 一套设计词汇，带非 LLM 的规则检测器。
- [Nutlope/hallmark](https://github.com/Nutlope/hallmark) · ⭐50,728 · 周增 +6,185 · 反 AI 味设计 skill，覆盖 Claude Code、Cursor、Codex。
- [anthropics/skills](https://github.com/anthropics/skills) · ⭐189,317 · 周增 +3,121 · 官方参考实现，此前日增约 280，11-06 起升到 500+。[google/skills](https://github.com/google/skills) 同期日增从二三十涨到 +475~+500（见 11-07、11-08 日报；不在周榜，无周增数）。

降温信号：HN 上有《"AI Skills" are worthless in 2026》（53 分 / 26 评论，10-27，[链接](https://news.ycombinator.com/item?id=50255346)）。

### 记忆（升温，同时出现隐私争议）
[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) 近 4 天日增从约 300 跳到 975 → 1,630 → 1,524 → 1,764，11-06 日报里回落到 909 → 595。HN 上有两篇记忆长帖。

- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · ⭐114,760 · 周增 +5,977 · 自动记录会话，经 AI 压缩后注入后续会话。
- [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · ⭐59,859 · 周增 +2,320 · 「会学习的 agent 记忆」。

争议：HN 帖《Installing claude-mem uploads your last 30 days of prompts to cmem.ai, no opt-in》对应 [issue #5176](https://github.com/thedotmack/claude-mem/issues/5176)（3 分，10-29，[HN](https://news.ycombinator.com/item?id=50289137)），11-02 日报也记录了这一指称。有用户在 issue 中提出此事，我们未用仓库代码核实。

相关讨论：
- Anthropic《The Components of Agent Memory》，105 分 / 60 评论，11-07，[HN](https://news.ycombinator.com/item?id=50402212)。
- 《Agent memory needs its OpenTelemetry moment》，119 分 / 87 评论，11-08，[HN](https://news.ycombinator.com/item?id=50411467)。

相关论文：[EvoMemState](https://arxiv.org/abs/2611.03743)（👍20）、[Cognitive Symbionts](https://arxiv.org/abs/2611.05376)（👍114）。

### 语义层 / 代码库索引与检索（新爆点，已见顶）
auto-ontology 11-03 起量，11-04 见顶（日增约 2,4xx），之后 11-05 +2,491 → 11-06 +1,829 → 11-07 +1,062，连续降温。

- [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) · ⭐10,108 · 周增 +9,417 · 从 Databricks、Postgres、Snowflake 等元数据自动生成本体和知识图谱，校验 LLM 生成的 SQL，通过 MCP（9 个只读工具）给 agent 提供上下文。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐144,333 · 周增 +3,936 · 把代码库、文档、SQL schema 变成可查询知识图谱，本地 AST 解析，不用向量库。

社区反应：[Show HN: Alternative to Nvidia Auto-Ontology](https://news.ycombinator.com/item?id=50363667)（GetCassis/ontology-skills，仅 29 ⭐）。

### 上下文压缩与成本（论文端最活跃，项目端分散）
论文端出现几条压缩路线：把推理历史改写成紧凑状态记录，把工具输出压成 latent token，在潜空间传 KV。项目端是 token 节省网关和调度。

- [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) · ⭐85,617 · 周增 +2,125 · 免费 AI 网关，宣称 RTK+Caveman 压缩可省 15-95% token（项目自述）。
- [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) · 11-02 日报称创建不到 3 周、近 7 日 +4,179（未进周榜，无总星数）。

相关论文：
- [Why Pay for Long Reasoning When Rewrite Do Trick?](https://arxiv.org/abs/2611.03852) · 👍13
- [Coca-Cola](https://arxiv.org/abs/2611.06500) · 工具输出压成 latent token，token 降 70.01%–89.24%（见 11-08 日报）
- [TAO](https://arxiv.org/abs/2610.37230) · 👍95，工具感知的 agent 调度与 cache 复用

### 电脑 / 浏览器操作（无障碍树路线，本周最强的单点事件）
agent-desktop 10-31 起量；agent-browser 11-08 日增 +794，此前每天 55–153。

- [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · ⭐19,454 · 周增 +13,187 · Rust CLI，读系统无障碍树而非截图像素来操作桌面。
- [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) · ⭐47,378 · 周增 +2,270 · 浏览器自动化 CLI，用可访问性树快照加 @e1 式 ref 定位。
- [wangzan101/Mika](https://github.com/wangzan101/Mika) · ⭐7,559 · 周增 +4,089 · 安卓端侧 agent，在后台虚拟屏幕上操作任意 App，作者 10-29 自推。

相关论文：[CUA-Master](https://arxiv.org/abs/2611.03126)（👍97，OSWorld Verified 80.2，见 11-04 日报）、[Hybrid Computer Use](https://arxiv.org/abs/2610.41432)（👍15，编程、无障碍、视觉三通道）。

### 免费模型 / 模型路由（持续高位，增长来源不明）
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) · ⭐66,073 · 周增 +10,482 · DeepSeek Harness 插件，号称免登录免 Key 使用 DeepSeek V4.1 Flash、Kimi K3 等。
- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) · ⭐276,319 · 周增 +8,158 · 「一切皆插件」的 DeepSeek 官方开源 harness，已连续 21 天上榜。
- [yetone/magpie](https://github.com/yetone/magpie) · ⭐32,176 · 周增 +4,679 · 菜单栏统一选择各 coding agent 使用的模型（Codex 接 DeepSeek、Claude Code 接 Kimi）；10-07 作者发布的 v0.1.1107 可检查每个 agent 的 context window 占用。
- [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) · ⭐49,159 · 周增 +3,625 · 把多家免费 LLM 接口聚合成一个 /v1 端点。

相关论文：[Route Anything](https://arxiv.org/abs/2611.05275)（👍82，模型与策略路由）。

### Harness / 编排（论文主线，项目端稳定）
- [stablyai/orca](https://github.com/stablyai/orca) · ⭐119,074 · 周增 +6,826 · 用自己的订阅并行运行多个编码 Agent（各自独立 git worktree）。
- [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) · ⭐11,756 · 周增 +2,316 · 面向并行 Agent 的 git worktree CLI。

论文见第四节。持续演化会遗忘：Meta-Harness 在 SWE-Bench 上从 94.0% 掉到 32.0%（见 11-05、11-07 日报，来自 Continual Harness Evolution）。

## 本周最火 Agent 项目 Top 15

| 排名 | 项目 | 类型 | ⭐总数 | 周增 | 上榜天数 | 为什么火 |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | context | 442,904 | +25,102 | 7 | 逆向一切的 agent skill/MCP，KOL 教程加 YouTube 长尾，连续 29 天高增长，已明显回落 |
| 2 | [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | context | 19,454 | +13,187 | 7 | Vercel 作者与两位高管 10-30 同日发帖，用无障碍树操作桌面 |
| 3 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | agent | 66,073 | +10,482 | 7 | 「免费用前沿模型」的 dsh 插件，X 上本周几乎没有真实讨论，增长来源未能确认 |
| 4 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | agent | 66,524 | +10,443 | 7 | Cloudflare 官方 @CloudflareDev 11-04 发帖，六阶段审计 skill |
| 5 | [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | context | 10,108 | +9,417 | 6 | NVIDIA 官方开源，HN 290 分，agent 语义层 |
| 6 | [mattpocock/skills](https://github.com/mattpocock/skills) | context | 318,289 | +9,256 | 7 | 知名作者的个人 skills 目录，日增稳定在 900 上下 |
| 7 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | agent | 276,319 | +8,158 | 7 | DeepSeek 官方 harness，插件生态（含第 3 名）带动 |
| 8 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | context | 99,698 | +8,083 | 7 | 带 MCP server 的网页抓取框架，前几天日增仅 100~200，周末前后突增到 690~810；X 上只有 11-03 @techNmak 一条 KOL 帖，传播来源未能确认 |
| 9 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | agent | 17,927 | +7,616 | 7 | 「Grok Bot 开源替代」，复用已有 Claude/Codex/Grok CLI 订阅，每个 bot 带虚拟机 |
| 10 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | context | 105,994 | +6,950 | 7 | 反 AI slop 设计 skill，已被 Perplexity Computer 集成 |
| 11 | [stablyai/orca](https://github.com/stablyai/orca) | agent | 119,074 | +6,826 | 7 | 并行运行编码 Agent 队伍，已连续 132 天上榜，稳定型 |
| 12 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | agent | 50,728 | +6,185 | 7 | 反 AI 味设计 skill，作者自推加 KOL 清单 |
| 13 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | context | 114,760 | +5,977 | 7 | 跨会话记忆，周初跳涨，同时有隐私 issue |
| 14 | [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | context | 14,605 | +5,943 | 7 | Google 开源，先设计、再让零上下文的新会话挑错，靠 YouTube 起量 |
| 15 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) | agent | 54,474 | +5,733 | 7 | 通过 Wi-Fi ADB 配合 Claude Code 清理 Android TV 预装应用，与 Agent 关联较弱；10-17 创建，日增已从 6,799 峰值降到 1,403 |

榜外：[JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) 周增 ≈+4,087（≈5 天日增累加，⭐4,174）；[KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) 周增 ≈+3,117（≈4 天日增累加，⭐3,918，11-03 创建）。

## 增长归因与推广

本周所有项目的 media_posts、organic_posts 在数据里均为 0，下面的 📢 与 💬 只能按 x_posts 的发帖者角色归类，没有曝光数。

### 1. [morluto/rea](https://github.com/morluto/rea) · 📣有推广
- 为什么关注：让 AI agent 通过 MCP/CLI 在没有源码时逆向 app，支持原生二进制、Electron/JS、.NET、Web，对接 Ghidra、IDA、Hopper，一条 npx 命令安装。
- 增长走势：周增 +25,102，近 7 日日均 4,905，近 28 日日均 14,896，10-12 峰值 +54,038，连续 29 天高增长。
- 📢 自媒体 / KOL：[@milesdeutscher 的《如何用 AI 逆向任何东西（REA 完整指南）》](https://x.com/milesdeutscher/status/2112924796866699336)（10-21）；本周两条文案几乎一样的模板化推广：[@cabbitar 11-03](https://x.com/cabbitar/status/2117651866888606004)、[@monokern 11-04](https://x.com/monokern/status/2118005016380195261)。
- 💬 真实讨论：[@sammy_capital 11-02](https://x.com/sammy_capital/status/2117230989315297317) 把 REA 列为「免费逆向工程学位」7 个仓库的最后一步。
- 日报判断：热度主要来自 10 月初的 YouTube 长尾，单条最高 ▶502,605，介绍视频合计约 138 万播放（见 11-05、11-07 日报）。
- 衍生项目：反向防御的 [qybaihe/bla](https://github.com/qybaihe/bla)（11-08 日增 +828）、视频版 [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video)、目录 [reacher-z/Awesome-REA](https://github.com/reacher-z/Awesome-REA)（11-08 日增 +657）。
- 没有搜到作者或官方账号自己发的推文。

### 2. [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · 🔥强推广（官方）
- 为什么关注：agent-browser 的桌面版，Rust CLI，读系统无障碍树，不靠截图坐标，支持 macOS、Windows、Linux，Apache-2.0。
- 谁在推：Vercel 作者 10-30 同日集中发帖，是本周最清晰的官方推广案例。
  - [@ctatedev](https://x.com/ctatedev/status/2116323148706771302)：「agent-browser, for your whole computer」。
  - [@rauchg](https://x.com/rauchg/status/2116345666108854781)：「An agent on every desktop」。
- 增长走势：10-31 前每天只有 1–4 星，之后连续几天 2,000+，周增 +13,187；11-08 日增降到 +827（见 11-08 日报）。
- 💬 真实讨论：[@yoppy0123 11-01](https://x.com/yoppy0123/status/2116850844813652028)（日文）称它从无障碍树定位按钮，适合没有 API/MCP 的应用。
- 📢 自媒体：搜到媒体和博客报道，X 上无 KOL 带货。HN 无讨论。

### 3. [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · 🔥强推广（官方）
- 为什么关注：Cloudflare 官方背书，发现与验证由不同 agent 完成，对抗式质疑降低误报，输出带 JSON schema 校验。
- 谁在推：官方 [@CloudflareDev 11-04](https://x.com/CloudflareDev/status/2118013149538390253) 称其是 Cloudflare 漏洞发现 harness 的起点，共六个阶段。
- 增长走势：周增 +10,443，日增 11-06 +2,474 → 11-07 +1,922 → 11-08 +1,348，持续回落。
- 📢 自媒体：[@RoundtableSpace 10-19](https://x.com/RoundtableSpace/status/2112125353594401162) 转述六阶段流程。
- 💬 真实讨论：[@thariq_thinks 10-21](https://x.com/thariq_thinks/status/2113119021604422101) 称「可在免费模型上运行」是今年基础设施巨头对 agent 安全最聪明的贡献。HN 无讨论。

### 4. [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) · 📣有推广（官方 + HN + KOL）
- 为什么关注：agent 即使查对了数据库，也可能用错业务口径（如 revenue 在不同表含义不同）；它从元数据建本体并校验 SQL。官方称本体构建时间减少 90%（项目自述，未独立验证）。
- 💬 真实讨论：HN [Nvidia – open-source auto-ontology](https://news.ycombinator.com/item?id=50348962)，290 分 / 139 评论，11-03。
- 📢 自媒体 / KOL：[@DataChaz 11-03](https://x.com/DataChaz/status/2117621667669389684)、[@Sumanth_077 11-04](https://x.com/Sumanth_077/status/2117968195793650056)，都是「NVIDIA 刚开源」式推文。
- 走势：11-04 见顶，之后降温。

### 5. [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) · 增长来源未能从公开渠道确认
- 为什么关注：免登录免 Key 使用 DeepSeek V4.1 Flash、Kimi K3 等，号称不限量。
- 增长走势：周增 +10,482，日增长期稳定在 1,700~3,300，已连续 29 天，没有明显的单日爆发。
- X 上只找到本周之前的帖子：
  - [@xiangxiang103 10-14](https://x.com/xiangxiang103/status/2110543016138248305)，中文「白嫖」教程式。
  - [@mdaman010 10-22](https://x.com/mdaman010/status/2113359596035485929)，介绍安装并提醒先审查第三方插件代码。
  - [@opensourcelab9 10-16](https://x.com/opensourcelab9/status/2111060434585612404)（日文）称 V4.1 Flash / Kimi K3 需 GitHub 登录并点 star 才能解锁，由作者出资，随时可能缩减。这是该推文的说法，未用仓库核实。
- 判断：借 DeepSeek Harness 生态的热度，本周 X/HN 几乎没有真实讨论（见 11-07 日报）。针对项目名的联网搜索也未找到 TikTok/YouTube 等短视频来源。

### 6. [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) · 📣有推广
- 为什么关注：「Grok Bot 开源替代」，复用已有 Claude/Codex/Grok CLI 订阅，每个 bot 有独立虚拟机、模型和记忆，集成 500+ 应用。
- 增长走势：10-29 前日增约 50~90，之后跳到 1,000+，周增 +7,616；11-06 日报称其为当天 Agent 类里反弹最猛的。
- 📢 KOL：[@voidJan 11-04](https://x.com/voidJan/status/2118240276473147484)（中文长推，称前身 OpenGrokBot 已超 1.1 万星，可替代官方每月 30 美元订阅）、[@0xCheshire 10-29](https://x.com/0xCheshire/status/2115720642641141922)。
- 作者自推：[@BuildwithOmkarr 9-22](https://x.com/BuildwithOmkarr/status/2102603427297755264)。
- 💬 HN：三条小帖（1~3 分），影响很小。

### 7. [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) · 🔥强推广（官方 + 视频放大）
- 为什么关注：要求 agent 先写出并经得起质疑的设计文档，再由没有上下文的新会话（Goldfish）评审。Apache 2.0，Google 内部使用。
- 增长走势：周增 +5,943，连续 12 天，日增 11-02 +1,656、11-06 +686。
- 谁在推：@GoogleOSS 官宣；YouTube 单条 ▶252,339（11-08 日报），11-02 日报另记 AI LABS 单条 ▶213,154。
- 📢 KOL 帖：[@RoundtableSpace 11-01](https://x.com/RoundtableSpace/status/2116798646591091029)、[@free_ai_guides 11-02](https://x.com/free_ai_guides/status/2117210188340228339)。
- 💬 真实讨论：日文用户 [@superdoccimo 10-29](https://x.com/superdoccimo/status/2115739225874366922) 提到它不是官方支持产品，属于早期版本。HN 三条各 1~2 分。

### 本周自媒体曝光榜

| 项目 | 自媒体帖数 | 曝光 👁 | 代表账号 | 真实讨论 👁 | 判断 |
|---|---|---|---|---|---|
| [morluto/rea](https://github.com/morluto/rea) | 数据 0（X 上有 KOL 帖 3 条） | 数据 0 | @milesdeutscher、@monokern、@cabbitar | 数据 0 | 📣 KOL 教程加 YouTube 长尾，热度回落中 |
| [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | 数据 0（KOL 帖 2 条） | 数据 0；YouTube 单条 ▶252,339 | @RoundtableSpace、@free_ai_guides | 数据 0 | 🔥 官方加视频放大 |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | 数据 0（KOL 帖 2 条） | 数据 0 | @DataChaz、@Sumanth_077 | 数据 0；HN 290 分 / 139 评论 | 📣 HN 为主、KOL 为辅 |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | 数据 0（本周 KOL 帖 1 条） | 数据 0 | @voidJan、@0xCheshire | 数据 0 | 📣 KOL 加作者自推 |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | 数据 0（KOL 帖 1 条，11-05） | 数据 0 | @AmirMushich（把它列入 10 个设计仓库清单） | 数据 0 | 📣 作者自推加清单贴 |

## 本周论文精选

### Agent Context 方向（8 篇）
1. [CoworkOS: Scaling Agent Coworkers for Real-world Automation](https://arxiv.org/abs/2611.03178) · 👍96 · 代码 [RUC-NLPIR/CoworkOS](https://github.com/RUC-NLPIR/CoworkOS) 104★。提出通用长程工作 harness，把任务策略（模型决定动作、委派、验收）和执行管理（运行时维护状态与反馈）拆开；三层架构可直接执行，也可委派给 subagent。
2. [Harness-S](https://arxiv.org/abs/2611.04277) · 👍60 · 代码 55★。从同一基座演化出沿不同修复方向的「兄弟 harness」池，训练时只在基础 harness 失败时调用，再把能力迁移进单个策略。思路是不追求一个通用最优 harness。
3. [ToolSpace](https://arxiv.org/abs/2611.05036) · 👍37 · 代码 31★。以工具为中心合成环境：用确定性规则从真实 MCP 服务的执行轨迹里挖出数据、状态、重试依赖，再生成长程任务。
4. [EvoMemState](https://arxiv.org/abs/2611.03743) · 👍20 · 代码 3★。把记忆从独立事实改成「事实加关系状态/适用状态」，用来处理新旧事实的更新与冲突。
5. [Why Pay for Long Reasoning When Rewrite Do Trick?](https://arxiv.org/abs/2611.03852) · 👍13。在工具结果返回前，把已有推理改写成紧凑状态记录，并比较后续生成与 agent 总成本，不需要重新训练。
6. [Switch-SWE](https://arxiv.org/abs/2611.02017) · 数据未给点赞数。交错未完成的任务使 7 个 coding agent 平均少解决 11.5 个百分点；论文给出上下文管理插件，在 OpenCode 上完成率提升 5.5–15.5 个百分点（见 11-08 日报）。
7. [ParetoSaddler](https://arxiv.org/abs/2611.02079) · 👍18。同时优化 agent harness 的质量与成本，并把中间候选的晋升和最终部署的选择分开。
8. [From Autonomous Agents to Cognitive Symbionts](https://arxiv.org/abs/2611.05376) · 👍114（11-07 为 40，涨幅最大）。愿景论文，主张「AI 增强的人」，没有实验结果（见 11-07 日报）。

### 其他 Agent 方向（5 篇）
- [Advances in Agentic Computer Graphics](https://arxiv.org/abs/2611.01860) · 👍127，agentic 图形学综述，本周点赞最高。
- [Embodied Agent Arena](https://arxiv.org/abs/2610.00854) · 👍104，评估 10 个前沿 VLM agent 作为机器人通才，闭源模型在五个领域全面领先。
- [CUA-Master](https://arxiv.org/abs/2611.03126) · 👍97，电脑操作 agent 的嵌套双循环递归改进框架，OSWorld Verified 80.2（见 11-04 日报）。
- [TAO](https://arxiv.org/abs/2610.37230) · 👍95，工具感知的 agent 联合调度，涨幅明显（10-29 首次出现时 👍15）。
- [Route Anything](https://arxiv.org/abs/2611.05275) · 👍82，模型与策略路由的统一研究框架。

## 社区讨论焦点

### 被反复提及、不在增长榜前列的 5 个项目
本周 community_repos 的来源几乎全是 HN。

1. [qufei1993/skills-hub](https://github.com/qufei1993/skills-hub) · ⭐1,864 · 提及 6 天 · 桌面应用，在一处管理 agent skills，并同步到多个 AI 编码工具的全局 skills 目录（Show HN，10 分，[链接](https://news.ycombinator.com/item?id=50050732)）。
2. [AgenticResourceRegistry/AgenticResourceRegistry](https://github.com/AgenticResourceRegistry/AgenticResourceRegistry) · ⭐4,328 · 提及 6 天 · 自托管，团队内分享和发现 coding agent 资源，Apache 2.0（[HN](https://news.ycombinator.com/item?id=50303291)）。
3. [choam2426/herdr-paddock](https://github.com/choam2426/herdr-paddock) · ⭐3 · 提及 5 天 · 给 herdr 做的 Orca 风格项目侧栏（[HN](https://news.ycombinator.com/item?id=50335894)），体量很小，只能当作 Orca/herdr 生态的信号。
4. [GetCassis/ontology-skills](https://github.com/GetCassis/ontology-skills) · ⭐29 · 提及 4 天 · 从 schema、dbt、看板、文档生成分析本体的 skills，由 auto-ontology 话题衍生（[HN](https://news.ycombinator.com/item?id=50363667)）。
5. [rivet-dev/rivet](https://github.com/rivet-dev/rivet) · ⭐6,749 · 提及 1 天 · 「Launch HN: Rivet (YC W23)」，面向 agent 工作负载的编排器，115 分 / 58 评论（[HN](https://news.ycombinator.com/item?id=50381687)）。

备选：[Muvon/octomind](https://github.com/Muvon/octomind)（⭐348，Rust 开源 AI harness，宣称省 token，36 分 / 31 评论，[HN](https://news.ycombinator.com/item?id=50352898)）。

### 本周 X / HN 最热话题
本周没有 Reddit 数据。

1. Claude Code 的安全与隐私问题（HN 最大话题）
   - [Claude Code sends your email address to websites](https://news.ycombinator.com/item?id=50385272)，1457 分 / 453 评论，11-05（[issue](https://github.com/anthropics/claude-code/issues/107757)）。
   - [Claude Code's "Don't Ask Again" exposes passwords in 1,122 public GitHub files](https://news.ycombinator.com/item?id=50407882)，497 分 / 356 评论，11-07。
   - [OpenAI seems to be silently re-enabling model training on Codex chats](https://news.ycombinator.com/item?id=50352757)，66 分 / 28 评论，11-03。
2. 离开 Claude、换 harness
   - [Goodbye Claude, hello Pi](https://news.ycombinator.com/item?id=50410107)，537 分 / 343 评论，11-08。
   - [Ripple-65B Preview: U.S. Open-Weight SOTA on Agentic Coding](https://news.ycombinator.com/item?id=50369925)，327 分 / 116 评论，11-04。
3. Agent 记忆
   - 《The Components of Agent Memory》，105 分 / 60 评论，[HN](https://news.ycombinator.com/item?id=50402212)。
   - 《Agent memory needs its OpenTelemetry moment》，119 分 / 87 评论，[HN](https://news.ycombinator.com/item?id=50411467)。
   - [Memorilla: Latent Semantic Memory for LLMs](https://news.ycombinator.com/item?id=50395919)，112 分，11-06。
4. Agent 的企业产品与应用
   - [Launch HN: Momentic (YC W24) – Agents that catch bugs by using your app](https://news.ycombinator.com/item?id=50339913)，158 分 / 108 评论。
   - [Skill to Create Product Videos](https://news.ycombinator.com/item?id=50340992)，113 分 / 35 评论（[aaitor/skill-video-studio](https://github.com/aaitor/skill-video-studio)，⭐321）。
   - [Perplexity launches AI agents for work](https://news.ycombinator.com/item?id=50395866)，61 分。
5. 对 LLM 编码的反思
   - [Why I will not be using LLMs in my coding](https://news.ycombinator.com/item?id=50412591)，89 分 / 175 评论，评论数多于点赞。
   - [You'll need nerves of steel to work with AI agents](https://news.ycombinator.com/item?id=50373149)，56 分 / 77 评论。

## 下周值得关注
1. 官方发布驱动的项目正在回落，下周看谁守得住。[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)、[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)、[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) 都在峰值后下滑（auto-ontology 11-07 日增 +1,062，security-audit-skill 11-08 +1,348，agent-desktop 11-08 +827）。[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) 11-08 日增 +794（此前 55–153）、[google/skills](https://github.com/google/skills) 日增 +475~+488（此前二三十）仍在上行，要看能否延续。
2. [morluto/rea](https://github.com/morluto/rea) 增速回落，衍生项目放量。rea 11-08 日增 +2,767，近 28 日日均 12,980，仍领跑但持续降温；同时 [reacher-z/Awesome-REA](https://github.com/reacher-z/Awesome-REA) +657、[JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) +623、[qybaihe/bla](https://github.com/qybaihe/bla) +828，需要观察这些衍生项目是不是一次性跟风。bla 的 162x–2532x 防御成本数字来自项目自己的基准，未见独立验证。
3. 记忆与上下文管理正从论文走向工程。论文端有 Switch-SWE（+5.5–15.5 个百分点）、Coca-Cola（token 降 70–89%）、Cognitive Symbionts（愿景，无实验），HN 端有两篇记忆长帖。[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) 的隐私 issue #5176 要等项目方回应再下判断；[Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) 周增 +10,482 但增长来源不明，需要更多公开信息。
