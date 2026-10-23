# Agent & Agent Context 周报 · 2026-W43（2026-10-17 ~ 2026-10-23）

> 生成于 2026-10-23 00:59 PDT

> 数据覆盖：本周只有 2026-10-22、10-23 两天有数据，其余 5 天缺失。下文「周增」多为 Trending 本周口径，带 ≈ 的是按 2 天日增累加的估算。社交数据以 X 为主，Reddit 无数据。

## 本周要点
- 逆向工程 Agent **morluto/rea** 周增 +106,341，总星 368,637，是本周增速最高的项目。HN 上的 REA 帖子有 814 分，但发帖日期是 10-10。
- Skills 仍是最大流量入口：**cloudflare/security-audit-skill** 周增 ≈+4,040，单条推荐推文 7,010 赞。**anthropics/claude-plugins-official** 周增 +5,649，Epic 的 Unreal 插件推文有 5,186 赞。
- 上下文基础设施继续升温：代码知识图谱（graphify）、工具输出压缩（context-mode、headroom）、跨 Agent 记忆（ai-memory、agent-beacon）、本地检索（xerj）都在榜上。
- 论文侧，KV cache 成为 Agent 的可控资源（Cache Engineering for Agents），记忆开始「原生化」（MemT-1.0）。Harness 自进化是最热的词。
- DeepSeek Harness（dsh）插件生态成形，免费模型和上下文可视化插件上榜。多 Agent 并行管理（Orca 周增 +9,401）和 Agent 安全运行时（NVIDIA OpenShell，HN 377 分）同步受关注。

## 一、本周 Agent Context 特性趋势

### 1. 工具输出压缩 / Token 节省（升温）
本周的主线。多个项目从「少输出、少读取」切入，社区把它们当作降成本手段。
- [mksglu/context-mode](https://github.com/mksglu/context-mode) · ⭐31,888 · 周增 +2,271 · 沙箱化工具输出（宣称降 98%），持久化会话记忆，通过 MCP + hooks 覆盖 17 个平台。
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · ⭐77,595 · 周增 ≈+602 · 在工具输出、日志、RAG 片段进入 LLM 前压缩，以库、代理、MCP 三种形态提供。
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) · ⭐114,478 · 周增 +2,173 · 用「穴居人说话」风格的 skill + 代理削减约 65% token。
- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) · ⭐174,041 · 周增 ≈+2,750 · 让 Agent 先查仓库和标准库再写新代码。推文称代码量 -53%、成本 -26%，这些数字来自推文自述，未经验证。
- [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) · ⭐2,435 · dsh 上下文压缩插件，面向月级长会话，宣称省 5 倍 token（仓库自述）。
- 相关论文：Cache Engineering for Agents、DLite（见第四节）。

### 2. 记忆层（升温）
方向是跨 harness 共享和自我改进，学术上则转向「该存什么、该忘什么」。
- [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) · ⭐12,862 · 周增 +3,322 · 面向编码 CLI 的长期记忆，方便在不同 Agent 厂商之间交接。
- [Asymptote-Labs/agent-beacon](https://github.com/Asymptote-Labs/agent-beacon) · ⭐2,656 · 周增 ≈+281 · 跨 harness、自我改进的记忆层，捕获会话轨迹并存入共享索引。@_avichawla（79k 粉丝）的推文有 633 赞。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) · ⭐286,740 · 周增 ≈+328 · skills、memory、hooks 和安全扫描一体的 harness 优化层，被多条合集贴提到。
- 相关论文：MemT-1.0、FlowState、Memory-Centric Continual Learning、MemPilot。日报还提到 REM、TokenWorth 等研究在质疑「记得越多越好」，这些论文不在本数据的论文列表中。

### 3. 代码库索引 / 检索（升温）
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐133,364 · 周增 ≈+1,966 · 本地 tree-sitter AST 解析，把代码、SQL、文档、PDF 做成可查询知识图谱，无向量库。已上架 Perplexity Computer 的技能市场。
- [xerj-org/xerj](https://github.com/xerj-org/xerj) · ⭐13,217 · 周增 +8,064 · 单一 Rust 二进制，提供 BM25 + 向量混合检索的本地搜索引擎和 MCP server，兼容 Elasticsearch API，同时覆盖代码搜索、记忆和 RAG。
- 竞品动向：HN 上有 Rust 移植版 Graphicle（48 分）和宣称对比 Graphify 的 DaidDocs（4 分），说明这一方向正在被复刻。
- 相关论文：Retrieval Augmented Generation Compositionality（450 种 RAG 配置的组合评测）。

### 4. Skills / 插件生态（持续高位，安全成为新议题）
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) · ⭐43,978 · 周增 +5,649 · Anthropic 官方插件目录。
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐40,265 · 周增 ≈+4,040 · 多阶段安全审计，由不同 agent 独立验证每个发现。
- [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) · ⭐53,997 · 周增 +3,967 · 177 个科学类 skill 和 100+ 科学数据库。
- [cursor/plugins](https://github.com/cursor/plugins) · ⭐13,670 · 周增 +2,046 · Cursor 插件规范和官方插件。
- [vercel-labs/skills](https://github.com/vercel-labs/skills) · ⭐36,202 · 周增 +1,073 · `npx skills` 开放 skill 工具。
- 安全面：NVIDIA/SkillSpector 被 @RoundtableSpace 推荐，推文称对 31,132 个 skill 的分析里 26.1% 含漏洞，该数字来自推文。

### 5. MCP（稳定，作为通用接入层）
- 多个新项目把 MCP 作为接入方式，如 [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft)（⭐9,439 · 周增 ≈+784 · Rust 参数化 CAD，经 MCP 自动化）、[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)（⭐56,371 · 周增 +3,275 · 让软件对 Agent 原生可用）。
- 社交上：Supabase 推出「给你的应用自带 MCP server」，Nous Research 的 Hermes Agent 经 MCP 接入 Meshy。
- 论文：WildAWM 合成同时支持 GUI、MCP 服务和 CLI 的环境。

### 6. 缓存与成本（升温，偏学术）
- [Cache Engineering for Agents](https://arxiv.org/abs/2610.28577)（热度 123）主张直接控制活跃 KV，而不是改写前缀。
- 服务侧与成本侧：DLite、EdgeWise、SpecAgent、HarnessPro 都围绕「少调用大模型、省 prefill」。
- 工程侧：[yetone/magpie](https://github.com/yetone/magpie)（⭐19,836 · 周增 ≈+1,021）让 Codex 跑在 DeepSeek 上、Claude Code 跑在 Kimi 上，从模型切换角度降成本。

### 7. 多 Agent 并行与运行时（升温）
- [stablyai/orca](https://github.com/stablyai/orca) · ⭐103,156 · 周增 +9,401 · 用 git worktree 并行运行多个编码 Agent，覆盖桌面、移动和远程。
- 新仓库 [harp](https://github.com/dominikmartn/harp)（⭐578 · 周增 ≈+289）和 [coucou](https://github.com/Louis-CFM/coucou)（⭐6,212 · 周增 ≈+248）在做多 Agent 统一面板。
- [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) · ⭐18,086 · 周增 ≈+840 · 自治 Agent 的安全私有运行时。

## 二、本周最火 Agent 项目 Top 15

按周增数值排序，估算值带 ≈。已剔除非 Agent 项目：ollama、vllm、MoneyPrinterTurbo、freellmapi（LLM 网关）、NSFW 出图 skill 等。

| 排名 | 项目 | 类型 | ⭐总数 | 周增 | 上榜天数 | 为什么火 |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 逆向工程 Agent / skill | 368,637 | +106,341 | 2 | 把 Ghidra、Hopper 接进 Codex/Cursor；@wquguru 的攻击链合集推文有 494 赞，HN 帖 814 分 |
| 2 | [stablyai/orca](https://github.com/stablyai/orca) | 多 Agent 并行 IDE | 103,156 | +9,401 | 2 | 并行运行 Claude Code、Codex 等，被多条合集推文和官方账号推广 |
| 3 | [xerj-org/xerj](https://github.com/xerj-org/xerj) | 本地搜索 / MCP | 13,217 | +8,064 | 2 | 一个 Rust 二进制覆盖代码搜索、记忆和 RAG；日文合集推文提及 |
| 4 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | 开源编码 Agent | 220,340 | +6,750 | 2 | 常驻热门，数据中没有专门的本周推广帖 |
| 5 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 视频生成框架 | 70,234 | +5,669 | 2 | 「写 HTML 渲染视频」，被多条动效合集贴带起 |
| 6 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 插件目录 | 43,978 | +5,649 | 2 | Epic 的 Unreal 官方插件通过它分发，相关推文 5,186 赞 |
| 7 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | 安全审计 skill | 40,265 | ≈+4,040 | 2 | Cloudflare 官方开源；@jurbed 推荐推文 7,010 赞 |
| 8 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 科学 skill 库 | 53,997 | +3,967 | 2 | 177 个 skill + 100+ 数据库；数据中没有社交帖 |
| 9 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | Agent harness / 多智能体 | 78,577 | +3,708 | 2 | swarm、自适应记忆和 RAG；带 `dsh-plugin` 标签 |
| 10 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | 记忆层 | 12,862 | +3,322 | 2 | 编码 CLI 长期记忆，支持跨厂商交接 |
| 11 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Agent 原生 CLI | 56,371 | +3,275 | 2 | 「让所有软件对 Agent 原生可用」；入选 @Fluyeporlaweb 的 10 月增长榜 |
| 12 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | skill / 省代码 | 174,041 | ≈+2,750 | 2 | 「最懒的资深开发」风格，宣称代码量 -53%；@KanikaBK（37k 粉丝）推荐 |
| 13 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | dsh 插件 / 免费模型 | 37,681 | ≈+2,322 | 2 | 无需登录和 API Key 即可用 DeepSeek V4.1 Flash、Kimi K3；@WojakTheDev 推文 63 赞 |
| 14 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | 上下文优化 | 31,888 | +2,271 | 2 | 「工具输出降 98%」，被点名为「先试这个」 |
| 15 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | token 节省 skill | 114,478 | +2,173 | 2 | 梗式 skill，称省 65% token |

## 三、增长归因与推广

1. **morluto/rea**（周增 +106,341）· 📣有推广
   - 因为：把逆向工具链接进编码 Agent，输出伪代码和调用链。
   - 谁在推：KOL @wquguru（25k 粉丝）的攻击链合集推文，494 赞、2.8 万浏览；@sammy_capital 的工具图谱推文，65 赞。HN 上 REA 帖 814 分、340 评论，日期是 10-10，早于本周。
   - 链接：[X](https://x.com/wquguru/status/2113181135522214168) · [HN](https://news.ycombinator.com/item?id=50028275)
   - 说明：周增数值异常大，且两条推文的互动量远不及这个量级，建议核实口径。
2. **cloudflare/security-audit-skill**（周增 ≈+4,040）· 🔥强推广
   - 因为：官方出品，多阶段审计，每个漏洞由新 agent 独立验证。
   - 谁在推：@jurbed 推荐推文 7,010 赞、46.5 万浏览；社区统计共 12 条提及、11 位作者、约 96 万浏览。
   - 链接：[X](https://x.com/jurbed/status/2112973191157252103)
3. **anthropics/claude-plugins-official**（周增 +5,649）· 🔥强推广
   - 因为：官方插件目录，Epic 官方 Unreal 插件通过它安装。
   - 谁在推：@RoundtableSpace（27 万粉丝）推文 5,186 赞、31 万浏览。
   - 链接：[X](https://x.com/RoundtableSpace/status/2111702567449424226)
4. **stablyai/orca**（周增 +9,401）· 📣有推广
   - 因为：并行运行多个编码 Agent，不互相覆盖。
   - 谁在推：官方账号 @orca_build（2 万粉丝），10-22 推文称 SWE-2 Max 限时免费，Opus 5.5 编排子 Agent；另有多条合集贴。
   - 链接：[X](https://x.com/orca_build/status/2113290782916423938)
5. **Graphify-Labs/graphify**（周增 ≈+1,966）· 📣有推广
   - 因为：Agent 读知识图谱而不是 grep 全仓库，本地、确定性解析。
   - 谁在推：@AskPerplexity（38 万粉丝）宣布上架 Computer 技能市场，102 赞；@Sumanth_077 推文 667 赞；@grok 也有介绍。
   - 链接：[X](https://x.com/AskPerplexity/status/2113022451840122886) · [X](https://x.com/Sumanth_077/status/2111824469006360864)
6. **Ebony-Vinyl/dsh-our-free-model**（周增 ≈+2,322）· 📣有推广
   - 因为：免费、免登录的前沿模型插件。
   - 谁在推：@WojakTheDev 推文 63 赞，附安装步骤。
   - 链接：[X](https://x.com/WojakTheDev/status/2113200900412223530)
7. **heygen-com/hyperframes**（周增 +5,669）· 📣有推广
   - 因为：HTML 转视频，适合 Agent 调用。
   - 谁在推：多条「Claude Code 做视频/动效」合集贴，如 @Asteri_eth 的 324 仓库图谱（42 赞）。
   - 链接：[X](https://x.com/Asteri_eth/status/2113213410078843154)
8. **xerj-org/xerj**（周增 +8,064）· 🌱自然增长
   - 因为：本地搜索 + MCP，一个二进制搞定。
   - 推广情况：数据中没有专门的社交帖，只出现在一条日文合集贴里。
   - 链接：[X](https://x.com/ClaudeCodeBase/status/2113264112092541251)

## 四、本周论文精选

### Agent Context 方向
- [Cache Engineering for Agents](https://arxiv.org/abs/2610.28577) · 热度 123。长轨迹下 KV cache 的 I/O 和存储成为主要成本，而裁剪或摘要历史会使后续缓存失效、触发重新 prefill。作者提出让 Agent 直接控制活跃 KV 的 cache engineering。
- [MemT-1.0: Towards Memory-Native Evolution](https://arxiv.org/abs/2610.26825) · 热度 133。把记忆做成模型计算的一部分：基于 Gated DeltaNet-2 做 token 级更新，并用 Mixture-of-Storage 扩容，配两阶段训练。日报称 128K 历史下存储降低 66 倍。
- [Pack Light, CarryOn](https://arxiv.org/abs/2610.18784) · 热度 120。围绕可复用的任务对象而不是历史来组织长程上下文：由延续载体、补充执行上下文和最近交互组成上下文视图。
- [Mosaic: Multi-Session Agentic RL](https://arxiv.org/abs/2610.22174) · 热度 63。上下文压缩和子 Agent 分叉会让一条轨迹跨多个会话，而单会话训练与此不匹配。论文提出多会话 Agent 强化学习，区分各会话的贡献。
- [FlowState](https://arxiv.org/abs/2609.34565) · 热度 21。把执行状态当作可保留、可回访的记忆：保留带类型的状态节点、关系和原始工具观测的引用，把持久保留与按需读取分开。
- [Memory-Centric Continual Learning](https://arxiv.org/abs/2610.29357) · 热度 20。认为记忆应以能否改善未来行动来评判，而非能否召回事实；给出三轴分类法。
- [Self-Evolving Agent Harness](https://arxiv.org/abs/2610.18813) · 热度 99。形式化 harness 自进化（提示、记忆、工作流、可执行组件），模型权重不变，并给出泛化界与保留界。
- [Socratic Skill Learning](https://arxiv.org/abs/2610.17860) · 热度 32。Educator 与 Student 交替教学和练习来学习可迁移 skill，并构建 SkillTransferBench（35 个任务族、408 个可执行用例）。

### 其他 Agent 方向
- [BizBench](https://arxiv.org/abs/2610.20424)（热度 492）：基于支付公司真实流程的长程 Agent 基准，关注中间步骤的合规性。
- [Into the Unknown](https://arxiv.org/abs/2610.19159)（热度 157）：让 9 个前沿 Agent 为开放科学问题写后续论文，用科学家给的条件做评分量表。
- [MAI-Gym](https://arxiv.org/abs/2610.20939)（热度 150）：统一 GUI Agent 评测与在线 RL 训练平台，可扩展到 2 万个并行环境。
- [CoEvo-RSI](https://arxiv.org/abs/2610.25078)（热度 118）：研究 harness 与模型共同进化时的「脑体不匹配」，用共享进化档案做双向继承。
- [OpenGCUA](https://arxiv.org/abs/2610.22200)（热度 103）：开放通用计算机使用 Agent 的完整技术栈，首次发布。

## 五、社区讨论焦点

### 被反复提及、但不在增长榜前列的 5 个项目
所有项目被提及天数均为 1 天（数据仅覆盖 2 天）。
1. [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) · ⭐21,032 · 提及 1 天 · skill 安全扫描器，覆盖 71 种攻击模式，给 skill 打 0–100 风险分。
2. [EpicGames/unreal-engine-skills-for-claude-code-plugin](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin) · ⭐1,598 · 提及 1 天 · Epic 官方插件，让 Claude Code 控制 Unreal Editor。社区热度分第三，仅次于 cloudflare 和 claude-plugins-official。
3. [xingjian-bai/opal](https://github.com/xingjian-bai/opal) · ⭐167 · 提及 1 天 · 反应式优化器：编码 Agent 在训练过程中重写优化器源码。作者推文 1,354 赞。
4. [google/mantis](https://github.com/google/mantis) · ⭐2,515 · 提及 1 天 · 让 AI 编码 Agent 自主发现、复现并修复漏洞的模块化工具包。
5. [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) · ⭐2,435 · 提及 1 天 · dsh 上下文压缩插件，面向月级长会话。

### 讨论最多的话题
1. **Agent 安全与审计**：既有用 Agent 做审计（Cloudflare skill、rea 的攻击链合集），也有对 skill 本身的扫描和运行时隔离。
   - [OpenShell HN（377 分 / 187 评论）](https://news.ycombinator.com/item?id=50198675)
   - [SkillSpector 推文](https://x.com/RoundtableSpace/status/2113114370406293672)
   - [OpenAI 发布 Codex 检查 skill（9,171 赞）](https://x.com/OpenAI/status/2112945805686604033)
2. **免费模型与 token 经济**：freellmapi 称每月 7.4B 免费 token，@Rifat_EE 提醒那是仓库自己的估算而非实测，且免费版新模型晚 30 天。dsh 免费模型插件也在此列。
   - [@Rifat_EE（321 赞）](https://x.com/Rifat_EE/status/2113136966552494178)
   - [@PratikSinhatwt](https://x.com/PratikSinhatwt/status/2112804549602030014)
   - [@WojakTheDev](https://x.com/WojakTheDev/status/2113200900412223530)
3. **DeepSeek Harness 插件生态**：@xiaomovps 列出插件市场、上下文压缩、Windows 命令行增强、免费搜索、侧边栏等插件。
   - [推文](https://x.com/xiaomovps/status/2112840223227089396)
   - [deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)
4. **Harness 自进化与课程**：MIT 开设自进化 AI 课程；@rohanpaul_ai 介绍 Google 的 OO-Harness（为不同任务簇演化专用 harness）。
   - [@pliang279（768 赞）](https://x.com/pliang279/status/2113300326015275424)
   - [@rohanpaul_ai](https://x.com/rohanpaul_ai/status/2113118164586582416)
5. **个人 Agent 与多 Agent 开发环境**：@AlexFinn 称 Anthropic 将发布个人 Agent「Duet」，推文 1,513 赞，属于个人判断，未获证实。Orca、Capy 0.5.0 等多 Agent 工具也有讨论。
   - [@AlexFinn](https://x.com/AlexFinn/status/2112990775202185437)
   - [Capy 0.5.0](https://x.com/capydotai/status/2113326692928548974)

另外，日报指出大量「10 个 GitHub 仓库」式合集贴在刷量，真实使用反馈偏少，榜单噪声较大。

## 六、下周值得关注
1. **上下文基础设施三件套**（graphify 类知识图谱、context-mode/headroom 类输出压缩、ai-memory/agent-beacon 类跨 harness 记忆）可能继续走高，因为它们同时被榜单、KOL 推文和论文支持。需要验证的是，各项目宣称的 98%、65% 等节省数字都出自项目自述，缺少独立评测。
2. **Skill 安全**会从话题变成配套工具：cloudflare 审计 skill 的热度叠加 SkillSpector、OpenShell 的关注，可能带动更多 skill 扫描和沙箱类项目。同时 rea 的周增 +106,341 与社交互动量不成比例，应先核实口径，再判断是否持续。
3. **dsh（DeepSeek Harness）生态**值得观察：deepseek-harness、免费模型插件、dsh-context、billion-context 同时上榜，多个其他项目也加了 `dsh-plugin` 标签。需要看增长是否来自真实使用，还是来自免费模型这类「薅羊毛」效应。本周只有 2 天数据，以上趋势判断都要用下周完整 7 天数据复核。
