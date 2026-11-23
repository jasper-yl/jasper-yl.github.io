# Agent & Agent Context 周报 · 2026-W47（2026-11-16 ~ 2026-11-22）

> 生成于 2026-11-23 09:31 PST

本周 7 天数据齐全。社交数据有三处缺口：`social_repos` 的自媒体与真实讨论字段全为 0，自媒体曝光只能用日报里人工摘录的 YouTube ▶ 数；Reddit 本周无数据；`x_topics` 十条里只有两条是本周的。增速一律用「周增 +N」，带 ≈ 的是日增累加估算。

## 本周要点

- 多 Agent 编排和统一控制台是最稳的增长线：[pingdotgg/t3code](https://github.com/pingdotgg/t3code) 周增 +9,886，[stablyai/orca](https://github.com/stablyai/orca) 周增 +7,155，[mdiri-ai/SoduWork](https://github.com/mdiri-ai/SoduWork) 和 [Tencent/LoopForge](https://github.com/Tencent/LoopForge) 同期起量。
- Skills 和领域知识包仍是增长主体，[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) 周增 +11,155，日增从约 10 涨到 1,000+，是本周最大的黑马。
- 逆向热潮降温但仍居首：[morluto/rea](https://github.com/morluto/rea) 周增 +12,380，7 日均值 2,647，低于 28 日均值 4,937；同模式的 [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) 周增 ≈+7,265，日增已逐日回落。
- 官方和大厂的 agent 配套仓库密集上榜：Chrome 的 [modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance)、Google 的 [paper-orchestra](https://github.com/google-research/paper-orchestra)、NVIDIA 的 [SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)、Cloudflare 的 [security-audit-skill](https://github.com/cloudflare/security-audit-skill)、腾讯的 [LoopForge](https://github.com/Tencent/LoopForge)。
- 论文侧有两条主线：记忆和经验不一定有益，上下文管理要算成本。HN 上讨论最多的是 Windows 11 收集编码 Agent 遥测，以及编码 Agent 把瓶颈挪到代码评审。

## 本周 Agent Context 特性趋势

### 多 Agent 编排 / 统一控制台（升温，最稳）

共同做法是用自己已有的订阅驱动 Claude Code、Codex 等多个编码 Agent，再加审批、验收和审计。

- [pingdotgg/t3code](https://github.com/pingdotgg/t3code) · ⭐71,122 · 周增 +9,886 · 连续 45 天达标。Web/手机远程控制多台开发机上 Agent 的图形界面。
- [stablyai/orca](https://github.com/stablyai/orca) · ⭐132,707 · 周增 +7,155 · 连续 134 天。每个 Agent 跑在独立 git worktree，可并排对比后合并最优结果。
- [mdiri-ai/SoduWork](https://github.com/mdiri-ai/SoduWork) · ⭐6,788 · 周增 +5,847。自托管的多 harness 团队引擎，Agent 要出示证据才算验收通过（HN 标题「agents must show evidence before a task passes」）。
- [Tencent/LoopForge](https://github.com/Tencent/LoopForge) · ⭐5,467 · 周增 +4,329。把 CodeBuddy/Codex/Claude Code 编排成 SOP 流程，退出码判定，人工批准才上线，每次运行打 0–100 分。

「产出可验证」成为共同叙事，SoduWork、LoopForge、rust-anything 都在讲。11-21 日报显示 SoduWork 增速在回落。

### Skills / 领域知识包（升温，内部分化）

- [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) · ⭐17,202 · 周增 +11,155。安全赏金技能包，82 个 skill、15 个斜杠命令，基于 681 份已披露报告的模式。11-12 前日增仅 9–13，11-17 峰值 +2,185，之后缓降（+1,615、+1,446、+1,753、+1,729），11-22 日增 +1,692。
- 老牌 skill 仓库继续稳定增长：[obra/superpowers](https://github.com/obra/superpowers) ⭐323,962 · 周增 +6,019；[mattpocock/skills](https://github.com/mattpocock/skills) ⭐330,244 · 周增 +5,328；[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) ⭐196,743 · 周增 +5,474；[affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐308,775 · 周增 +5,137。
- 「反 AI 味 / 设计品味」类：[pbakaus/impeccable](https://github.com/pbakaus/impeccable) 周增 +4,299，[Nutlope/hallmark](https://github.com/Nutlope/hallmark) 周增 +4,051，[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) 周增 +3,990。
- 「用代码做视频」类：[nexu-io/openmotion](https://github.com/nexu-io/openmotion) 周增 +5,146，同类还有 hyperframes、rea-video、lemo-opuscar。
- Skills 评测：[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) · ⭐4,041 · 周增 +2,953，在沙箱里让 Agent 有/无技能各跑一遍，量化 Skill Lift。HN 同周有「How do you evaluate the skills your AI agents use?」（26 分），此前还有「AI Skills are worthless in 2026」（53 分，10-27）。
- 相关论文：[EfficientSkill](https://arxiv.org/abs/2611.19823) 剪枝 skill 指令，输出 token 最多降 80%（11-17 日报）；[SkillBuffBench](https://arxiv.org/abs/2611.22017) 评测 skill 的实际贡献；[When Agent Skills Go Stale](https://arxiv.org/abs/2611.22525) 研究环境变化后 skill 过期的问题。

### 官方 / 厂商给 coding agent 喂最佳实践（升温后快速回落）

- [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) · ⭐24,923 · 周增 +7,751。Chrome 官方 skill，引导 Agent 使用现代 Web 原生 API。11-14 峰值日增 +4,142，11-22 降到约 +548。源码仓库 [modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) ⭐10,127 · 周增 +3,263。
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐76,956 · 周增 +3,949。六阶段安全审计，发现由独立 Agent 验证。
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · ⭐57,984 · 周增 +2,061，只在榜 2 天。

### 逆向 / 渐进迁移（热潮降温，模式在复制）

- [morluto/rea](https://github.com/morluto/rea) · ⭐473,724 · 周增 +12,380。通过 MCP 让 Agent 调用 Hopper/Ghidra/IDA，逆向二进制、Electron、.NET 和 Web 应用。
- [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) · ⭐7,841 · 周增 ≈+7,265。先录制原应用行为，Agent 逐块改写成 Rust，再用 diff/bench/shadow/gate 校验行为一致。
- 同模式新项目：[EL4CTEO/fast-anything](https://github.com/EL4CTEO/fast-anything)（创建 1 天）；[shinyobjectz/raea](https://github.com/shinyobjectz/raea) 日增从约 +25 跳到 +694，再到 +1,096（11-22 日报）。

### 记忆（论文端升温，开始出现负面证据）

- [MIRIX-2.0](https://arxiv.org/abs/2611.12068)：多 Agent 记忆系统，LoCoMo 91.4%，LongMemEval-S 72.6%。仓库 [Mirix-AI/MIRIX](https://github.com/Mirix-AI/MIRIX) ⭐3,488。
- 负面证据：[Experience Rot](https://arxiv.org/abs/2611.20922) 发现工具接口被静默修改后，带经验的 Agent 多数任务失败，无经验的大多成功。[Continual-ARC](https://arxiv.org/abs/2611.14505) 发现带持久记忆的 harness 学到的比「只缓存示例」的基线还少。
- 删除与安全：[LinEra](https://arxiv.org/abs/2611.18133)（可证明的记忆擦除）、[MemoryDojo](https://arxiv.org/abs/2611.09721)（记忆投毒）。
- 工程侧：ClickHouse 开源 Loom，一套 Agent 记忆系统，把 Agent 学到的内容与实时代码索引关联，见 [@ClickHouseDB 11-13 的推文](https://x.com/ClickHouseDB/status/2121300937859834205)。

### 上下文压缩 / 检索 / 缓存与成本（论文集中，项目侧较弱）

- 压缩有两条相反的路线：
  - [Folio](https://arxiv.org/abs/2611.16627) 做可恢复的多分辨率折叠，LOCA-bench 75 题解 66 题，模型写摘要的对照组为 54 题。
  - GrepMem（[2611.25123](https://arxiv.org/abs/2611.25123)）完全不压缩，只留纯文本日志加 grep。
- 成本：[Context Has a Price](https://arxiv.org/abs/2611.22238) 在 prefix cache 折扣下实测，删旧观察可能反而更贵。[Beyond Plain MCP](https://arxiv.org/abs/2611.19123) 测得 code mode 比普通 MCP 省 70–90% token。
- KV cache 服务类论文本周集中出现：TripleKV、Aggron、FrontierReplay（见 11-20 日报）。
- 检索：[Embeddings vs. Grep](https://arxiv.org/abs/2611.20455) 指出稠密检索对 BM25 的优势大半来自评测设置。
- 代码知识图谱：[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐151,887 · 周增 +3,682。本地确定性 AST 解析，每条边可解释，无向量库。7 日连续稳定，没有爆发。
- 成本工具：[localixai/tokendoctor](https://github.com/localixai/tokendoctor) ⭐131，回放自己的历史会话，称同一个 Claude Code 最多省 38%。[HN 30 分](https://news.ycombinator.com/item?id=50526584)。
- HN 数据点：[「In 27,280 coding agent runs, 64% of inference spend went to runs that failed」](https://news.ycombinator.com/item?id=50532191)，87 分。

### MCP / Harness 强制校验（平稳）

- [SilentGuard](https://arxiv.org/abs/2611.20595)（👍5）把校验从模型挪到 harness。静默 API 失败下，错误回答从 74.0% 降到 1.7%，只发警告时仍有 70.1% 错误。
- HN「Llms.txt and MCP didn't move the needle」27 分，是对 MCP 的冷评。

## 本周最火 Agent 项目 Top 15

已剔除：minimind（训练小模型，Trending 口径）、cleanyourtv（电视去广告）、phonebox（手机面板）、freellmapi（免费 LLM 网关，偏模型路由）、blender-ai-mcp 系（疑似批量复制，见 11-16、11-18 日报）。

| # | 项目 | 类型 | ⭐总数 | 周增 | 上榜天数 | 为什么火 |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | 逆向 MCP/skill | 473,724 | +12,380 | 7 | 逆向教程类内容撑着，日报记录单条 YouTube ▶ 约 46–49 万；本周 X 推文都不是本周发的；7 日均 2,647 对 28 日均 4,937，降温中 |
| 2 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | 安全 skill 包 | 17,202 | +11,155 | 7 | 基于 681 份真实 HackerOne 报告模式；X 只有第三方账号介绍，最高曝光 YouTube ▶1,911（11-20 日报） |
| 3 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | Agent 控制台 | 71,122 | +9,886 | 7 | Theo 自推加更新日志，Claude Code/Codex 统一界面，手机远程 |
| 4 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | dsh 免费模型插件 | 83,841 | +8,280 | 7 | 「无需登录/Key 使用 DeepSeek V4.1 Flash、Kimi K3」的教程式转发，中英日账号都有 |
| 5 | [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) | 官方 skill | 24,923 | +7,751 | 7 | Chrome 官方 1.0 发布，HN Show HN 448 分/146 评论 |
| 6 | [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) | 迁移 skill | 7,841 | ≈+7,265 | 5 | 11-16 创建，「录制行为再逐块重写成 Rust」，中文 KOL 转述 |
| 7 | [stablyai/orca](https://github.com/stablyai/orca) | Agent 控制台 | 132,707 | +7,155 | 7 | 官方 @orca_build 持续自推；日报记录清单视频 ▶102,777 |
| 8 | [obra/superpowers](https://github.com/obra/superpowers) | skill 框架 | 323,962 | +6,019 | 7 | 先设计再写代码的纪律化流程；11-18 单日 +1,999，来源未能确认 |
| 9 | [dream-num/univer](https://github.com/dream-num/univer) | AI Office SDK | 30,881 | +5,848 | 5 | 日增从 6–21 涨到 1,548（11-15 峰值）；只见官方账号推文，无外部讨论 |
| 10 | [mdiri-ai/SoduWork](https://github.com/mdiri-ai/SoduWork) | 多 Agent 团队引擎 | 6,788 | +5,847 | 6 | 要求 Agent 出示证据才算验收通过，官方号加第三方转述 |
| 11 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | skill | 196,743 | +5,474 | 7 | 「日期选择器 293 行变 1 行」式带货，KOL 转述 |
| 12 | [mattpocock/skills](https://github.com/mattpocock/skills) | skill 集 | 330,244 | +5,328 | 7 | /grill-me 先追问再动手，作者自推加口碑 |
| 13 | [nexu-io/openmotion](https://github.com/nexu-io/openmotion) | 视频 skill | 15,134 | +5,146 | 6 | 11-17 开源，Claude Motion/剪映平替，团队自推 |
| 14 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | harness 配置集 | 308,775 | +5,137 | 7 | 「黑客松冠军免费放出配置」的套路，日报记录 YouTube 合集 ▶84,082 |
| 15 | [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | 论文写作多 Agent | 5,879 | ≈+4,984 | 7 | Google 开源，11-16/17 有 KOL 转述（@RoundtableSpace） |

备选：[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) 周增 +4,799，[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) 周增 +4,768。

## 增长归因与推广

`social_repos` 里自媒体和真实讨论字段全为 0，下文的 📢 数字只来自日报人工摘录的 YouTube ▶，不是完整统计，也不断言付费推广。

### 1. [morluto/rea](https://github.com/morluto/rea) 📣有推广

- **为什么关注**：让 Claude Code/Codex 在没有源码时，通过 MCP 调用 Hopper/Ghidra/IDA 逆向原生二进制、Electron、.NET、Web 应用，并给出带证据的结论。
- **📢 自媒体**：日报记录的 YouTube 教程有 ▶464,580（Outskill，11-16）、▶200,705（CyberFlow，11-19）、单条 ▶492,968（11-21）、▶464,087（11-22），可能有重复，不能相加。X 上能查到的是 KOL 带货式引用，且都是 10 月的帖：[@milesdeutscher 10-21 完整教程](https://x.com/milesdeutscher/status/2112924796866699336)；[@AskPerplexity 10-16 宣布成为 Computer 的 /reverse-engineer 技能](https://x.com/AskPerplexity/status/2111120664543596957)。
- **💬 真实讨论**：X 上很少。HN 相关帖是[「LLM assisted reverse engineering」](https://news.ycombinator.com/item?id=50553225)，289 分/72 评论，讨论的不是 rea 本身。
- **趋势**：日增从 14 天前约 4,254 降到 11-22 约 1,294。⭐总数 473,724，10-12 峰值日增 53,870。

### 2. [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) 🌱自然增长（传播来源偏弱）

- **为什么关注**：基于 681 份真实披露报告，覆盖 24 类漏洞，从侦察、验证到报告全流程，不套通用 OWASP 清单。
- **谁在推**：没有作者或官方自推。第三方账号 [@hqmank 11-15](https://x.com/hqmank/status/2122227724890624001) 称其 hunt 技能基于 681 份已披露的 HackerOne 报告；早期有 [@GithubProjects 5-26](https://x.com/GithubProjects/status/2059172145453019389)。
- **📢 自媒体**：日报只记录到 YouTube 最高 ▶1,911，规模小。**💬 真实讨论**：X 上本周无讨论。
- **趋势**：11-12 前日增 9–13，随后陡升，是本周最陡的一条曲线。
- 第三方评测（Tessl）提示安装时会拉取远程技能内容，需先审查。

### 3. [pingdotgg/t3code](https://github.com/pingdotgg/t3code) 🔥强推广（作者高频自推）

- **为什么关注**：开源（MIT）的 Claude Code/Codex 图形界面，支持手机/Web 远程，收件箱式线程侧边栏，可让 Agent 改界面，迭代快（两周 250+ PR）。
- **谁在推**：作者 Theo，[@theo 10-29 回答「为什么用 T3 Code 而不是 Claude Code 或 Codex」](https://x.com/theo/status/2115911518663647662)；第三方转述有 [@AGTPinsights 11-13](https://x.com/AGTPinsights/status/2121513186448818195)。
- **📢 自媒体**：日报记录一条 YouTube 教程 ▶59,808（11-22）。**💬 真实讨论**：用户好评，如 [@elie2222 11-01](https://x.com/elie2222/status/2117013138071847071)；HN 仅 3 分。
- 11-22 日报写日增 +2,033，但仓库 14 日序列末值是 1,096，两个单日数字对不上，这里只用周增 +9,886 和「连续 45 天」。

### 4. [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) 📣有推广（教程式转发）

- **为什么关注**：在 dsh 里装插件，号称无需登录、注册或 API Key，即可用 DeepSeek V4.1 Flash、Kimi K3 等。
- **谁在推**：[@Rivonn 11-12](https://x.com/Rivonn/status/2121113765517426946)，[@xiangxiang103 10-14](https://x.com/xiangxiang103/status/2110543016138248305)（3 步安装教程）。
- 条件说明来自推文原话：[@opensourcelab9 10-16](https://x.com/opensourcelab9/status/2111060434585612404) 称免登录的只是 OpenCode/Kilo 的免费额度，V4.1 Flash 和 Kimi K3 要 GitHub 登录并 star，由作者出钱，随时可能缩减。
- **📢/💬**：本周数据里没有结构化曝光。日增稳定在 +1,400 到 +1,750。

### 5. [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) 🔥强推广（官方）

- **为什么关注**：给 coding agent 提供最新 Web 平台技能和 Baseline 兼容数据，让 Agent 不再默认写旧的 JS workaround。1.0 获得 Firefox 和 Edge 支持。
- **谁在推**：Chrome 开发者博客 1.0 公告（11-10）；[HN Show HN](https://news.ycombinator.com/item?id=50443812) 448 分/146 评论，作者 paulirish。官方称遵循最佳实践的比例提升约 37 个百分点，属厂商自报，未经独立验证。
- **📢 自媒体**：0。**💬 真实讨论**：集中在 HN。
- **趋势**：11-14 峰值日增 +4,142，11-22 降到 +548，典型的发布型脉冲。

### 6. [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) 📣有推广（中文 KOL 转述）

- **为什么关注**：渐进迁移工具，先录制行为，再逐块重写，最后对照校验。支持 TS/Python/C/Go/Ruby/Java，也可作为 Claude Code 插件。
- **谁在推**：没有作者自推。[@GitHub_Daily 11-18](https://x.com/GitHub_Daily/status/2123317868188287190)；[@aigclink 11-17](https://x.com/aigclink/status/2122891105754841403) 称性能最高提速约 20 倍（转述 README）。HN 仅 1 分。
- **📢 自媒体**：日报记录 YouTube 周榜合集 ▶7,552，规模小。**💬 真实讨论**：几条用户好评，无批评。
- **趋势**：11-16 创建，日增 +1,967 → +1,910 → +1,781 → +1,515 → +912 → +635，逐日回落。

### 7. [mdiri-ai/SoduWork](https://github.com/mdiri-ai/SoduWork) 📣有推广

- **为什么关注**：把 Claude Code、Codex、OpenCode、DeepSeek、Kimi Code 等约 9 种 Agent 统一到自托管工作台，带验收标准、独立 AI 评审、人工签字和审计记录。MIT。
- **谁在推**：官方 [@SoduWork 11-16](https://x.com/SoduWork/status/2122579739651252653)。HN 有两条 Show HN（4 分；2 分/4 评论），见[其一](https://news.ycombinator.com/item?id=50574413)。
- **趋势**：11-19 峰值 +1,563，11-20 +1,778，11-21 +625，11-22 +437。

### 8. [Tencent/LoopForge](https://github.com/Tencent/LoopForge) 🔥强推广（官方）

- **为什么关注**：自托管，角色分离（规划/编码/评审/测试），退出码判定，人工批准才上线，支持 10 种 CLI。MIT。
- **谁在推**：腾讯 AI 官方号 [@TencentAI_News 11-16](https://x.com/TencentAI_News/status/2122300566869365035)，仅此一条。无 KOL，无批评。
- **趋势**：日增 11-15 +904，11-20 +1,211，仍在加速。

### 本周自媒体曝光榜

`social_repos` 的自媒体字段全为 0。下表曝光数全部来自日报里的 YouTube ▶ 摘录，不代表完整统计。

| 项目 | 自媒体帖数 | 曝光 👁 | 代表账号 | 真实讨论 👁 | 判断 |
|---|---|---|---|---|---|
| [morluto/rea](https://github.com/morluto/rea) | 日报未给帖数；YouTube 视频至少 3 条 | 单条 ▶200,705 – 492,968（可能重复，勿相加） | Outskill、CyberFlow、Maitis、Nuno Tavares（日报点名） | X 本周无讨论 | 自媒体曝光是主要渠道，真实讨论少 |
| [stablyai/orca](https://github.com/stablyai/orca) | 清单视频至少 2 条 | ▶102,777（Beau Johnson）、▶78,911（Rob Shocks） | Beau Johnson、Rob Shocks | 官方自推为主 | 官方加清单视频 |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 1 条 YouTube | ▶59,808 | 未给账号 | 用户好评、作者自推 | 作者自推为主，自媒体次之 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 清单视频 1 条 | ▶84,082（同一合集） | Beau Johnson | 无本周数据 | 靠合集视频，X 帖多为 5–6 月旧帖 |
| [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) | 周榜合集 1 条 | ▶7,552 | 未给账号 | 几条用户转述，HN 1 分 | 规模小，转述为主 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | YouTube 若干 | 最高 ▶1,911 | 未给账号 | X 本周仅 1 条 | 曝光很小，增长来源未能从公开渠道确认 |

## 本周论文精选

### Agent Context 方向

- [MIRIX-2.0: Multi-Agent Memory System](https://arxiv.org/abs/2611.12068) · 👍52（11-16 日报时为 26，翻倍）· 仓库 ⭐3,488。多 Agent 分工的记忆系统，LoCoMo 91.4%、LongMemEval-S 72.6%，领先最强基线 14.3 个点，五个 QA 基准中四个最准。
- [The Resolution Hypothesis](https://arxiv.org/abs/2611.23068) · 👍36。覆盖 7 种进化方法、6 个模型、超 1000 万次调用，发现 Agent 自我进化停滞，原因是带噪评估分不清好坏，而不在于提不出更好的 artifact。方法之间几个百分点的差距，小于同一方法两次运行的差距。
- [Self-Improvement Memory](https://arxiv.org/abs/2611.18856) · 👍31。给 harness 优化器（而非任务 Agent）加记忆，按反复出现的问题归并改动，记录理由、预测和实际结果，用于跨基准、跨模型的持续优化。
- [Context Has a Price](https://arxiv.org/abs/2611.22238) · 本周数据无点赞数（见 11-18 日报）。在 prefix cache 折扣下实测，删旧观察可能不省钱，反而更贵。
- [Folio](https://arxiv.org/abs/2611.16627) · 本周数据无点赞数。用程序化折叠取代模型写摘要，LOCA-bench 75 题解 66 题，对照组 54 题。
- [Experience Rot](https://arxiv.org/abs/2611.20922) · 本周数据无点赞数。工具被静默变更后，带经验的 Agent 多数任务失败，无经验的大多成功。
- [Embeddings vs. Grep](https://arxiv.org/abs/2611.20455) · 👍8。自建 Repo-Premium 基准（91 个仓库），稠密检索的优势主要来自评测选择（如给 BM25 切块）。让 LLM 生成标识符再 grep 之后，BM25 在每个 Python 评测池上追平稠密检索。
- [SilentGuard](https://arxiv.org/abs/2611.20595) · 👍5。把「API 静默失败」的判断从模型挪到 harness，用不变量检查拦截。在 15 个公共研究 API 中的 11 个发现静默失败，错误回答从 74.0% 降到 1.7%。

### 其他 Agent 方向

- [TeleChat to Xing4](https://arxiv.org/abs/2611.22115) · 👍158：在昇腾上训练的 Agent 模型系列技术报告，含 Agent 训练平台。
- [Gamer](https://arxiv.org/abs/2611.18397) · 👍116：长程实时游戏 Agent 的 VLA 基础模型，内含记忆管理，[仓库](https://github.com/RainBowLuoCS/Gamer) ⭐243。
- [K2-Horizon](https://arxiv.org/abs/2611.21003) · 👍80：六个全开源模型（0.9B 到 375B-A23B），面向 Agent 和编码。
- [SWE-CoWork](https://arxiv.org/abs/2611.20218) · 👍51：101 个任务、模拟 26 位同事的工程组织，编码 Agent 完整交付率不到 8%（11-18 日报）。
- [Infrathon](https://arxiv.org/abs/2611.11995) · 👍56：150 次 24 小时长程 AI 基础设施优化，135 次在后半程仍有改进，模型排名随评估时长变化。

## 社区讨论焦点

### 被反复提及但不在增长榜前列的 5 个项目

`community_repos` 里这几个项目的 score 都很低，基本是 HN 单帖，热度有限。

- [choam2426/herdr-paddock](https://github.com/choam2426/herdr-paddock) · ⭐6 · 提及 7 天：Herdr 的 Spaces 侧边栏，按项目分组，借鉴 Orca 风格。[HN Show HN](https://news.ycombinator.com/item?id=50335894) 仅 4 分。
- [brainfish-ai/webcrawl-anything](https://github.com/brainfish-ai/webcrawl-anything) · ⭐14 · 提及 4 天：免费本地、无需 API Key 的搜索/抓取/监控，供 Claude Code/Cursor/Codex 调用。
- [PeepSick/usbplus](https://github.com/PeepSick/usbplus) · ⭐12 · 提及 3 天：一种 skill 格式适配各 Agent 运行时，529 个 skill、16 种目标格式，附扫描信任层。
- [AgenticResourceRegistry/AgenticResourceRegistry](https://github.com/AgenticResourceRegistry/AgenticResourceRegistry) · ⭐4,168 · 提及 2 天：团队内共享和发现 coding agent 资源，自托管，Apache 2.0。
- [withcoral/coral](https://github.com/withcoral/coral) · ⭐4,982 · 提及 1 天：让 Agent 自己写工具的网关，给 Agent 精确权限。[HN](https://news.ycombinator.com/item?id=50517803) 46 分/21 评论。

### 本周 X / HN / Reddit 话题

Reddit 本周无数据。X 的 `x_topics` 里只有两条是本周的：ClickHouse 开源 Loom 记忆系统（见上文），以及 [@ClaudeDevs 11-16 Claude Code 桌面版支持 iPhone Duo 模拟器测试](https://x.com/ClaudeDevs/status/2122439098740674839)。其余话题以 HN 为主。

1. Windows 11 收集编码 Agent 使用遥测：685 分/550 评论，本周 HN Agent 话题第一。
   - [文章](https://xusheng.dev/posts/windows-coding-agent-telemetry/)
   - [HN 讨论](https://news.ycombinator.com/item?id=50524736)
2. 编码 Agent 把瓶颈挪到代码评审：293 分/377 评论，来自哈佛研究者的结论。
   - [文章](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/)
   - [HN 讨论](https://news.ycombinator.com/item?id=50538303)
   - 关联：alibaba/open-code-review 周增 +3,489；[StarSling](https://news.ycombinator.com/item?id=50536468)（Launch HN，85 分，自改进 CI）
3. 验证与凭证安全：
   - [Claude Code 团队谈验证](https://news.ycombinator.com/item?id=50529612)：137 分/135 评论
   - [不把凭证交给编码 Agent](https://news.ycombinator.com/item?id=50526152)：124 分/105 评论
   - [Microsoft agent-framework 的 PyPI 包被报告植入凭证窃取代码](https://news.ycombinator.com/item?id=50542084)：23 分，来源 socket.dev
4. LLM 辅助逆向：[289 分/72 评论](https://news.ycombinator.com/item?id=50553225)，与 rea 热度同期，但帖子本身不讨论 rea。
5. FBI 通报 ARTEX：
   - FBI 于 11-13 发布 Flash 通报 [CSA 261113](https://www.ic3.gov/CSA/2026/261113.pdf)。TechCrunch 报道标题称 FBI 说 ARTEX 被用于入侵网络，[HN](https://news.ycombinator.com/item?id=50520796) 50 分/15 评论。
   - Unit 42 在 [11-02 的推文](https://x.com/Unit42_Intel/status/2117314565973184687)里称观察到使用 ARTEX 的入侵尝试。
   - 增长榜上的 [BaaRai/ARTEX](https://github.com/BaaRai/ARTEX) 仓库描述为「English translation; upstream: Autumn-27/ARTEX, AGPL-3.0」，⭐15,869，周增 ≈+2,630，只在榜 2 天，11-18 日增峰值 2,513 后回落。HN 上无产品推广。

其他单帖：「DreamCoder」258 分、「ClawDOS」127 分、「Pandex（欧洲法律 over MCP）」125 分。它们都不在增长榜，社区讨论和 GitHub 增长各走各的。

## 下周值得关注

- 多 Agent 控制台继续走高，[pingdotgg/t3code](https://github.com/pingdotgg/t3code) 是首选观察对象：连续 45 天达标，[stablyai/orca](https://github.com/stablyai/orca) 连续 134 天（11-22 日报的口径是 140 天）。[mdiri-ai/SoduWork](https://github.com/mdiri-ai/SoduWork) 和 [Tencent/LoopForge](https://github.com/Tencent/LoopForge) 增速分化，待验证的是 SoduWork 日增 +1,778 → +437 是否继续回落，以及 LoopForge 的官方推广能否转成持续增长。
- 爆发型项目看回落斜率，同模式新品是下一批候选。[modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) 已从 +4,130 回落到 +548，[rust-anything](https://github.com/erkamyaman/rust-anything) 从 +1,966 降到 +635。新出现的 [fast-anything](https://github.com/EL4CTEO/fast-anything) 和 [raea](https://github.com/shinyobjectz/raea) 是否复制同一曲线，值得看。[rea](https://github.com/morluto/rea) 的 7 日均值（2,647）低于 28 日均值（4,937），预计继续降温。[Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) 目前是缓降，需要验证它是否真的稳住。
- 来源未明的尖峰要核实后再下结论，有三个：[obra/superpowers](https://github.com/obra/superpowers) 11-18 单日 +1,999（前 13 天为 442–786）、[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) 11-19/20 日增 +976 至 +1,160（28 日均值 360）、[dream-num/univer](https://github.com/dream-num/univer) 日增涨到 1,548。firecrawl 在 11-18 有官方推文 [Firecrawl Local](https://x.com/firecrawl/status/2123096169630912637)（称比自托管快 37 倍），时间上吻合，因果未经确认。论文侧继续看「记忆有无副作用」和「上下文成本」两条线，Experience Rot、Continual-ARC 这类负面证据可能推动记忆写入加闸门。
