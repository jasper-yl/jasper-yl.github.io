# Agent & Agent Context 周报 · 2026-W44（2026-10-26 ~ 2026-11-01）

> 生成于 2026-11-04 18:32 PST

数据覆盖：7/7 天全有数据。

## 本周要点
- 逆向工程 Agent [morluto/rea](https://github.com/morluto/rea) 周增 +35,209，⭐417,802，仍居榜首，但日增从 10-26 的 +6,962 回落到 11-01 的 +3,311。
- Skills 是本周主要增长形态，分三类：反 AI 味设计（hallmark、impeccable、taste-skill）、大厂方法论与安全（Cloudflare、Google、NVIDIA）、通用工程习惯（mattpocock、superpowers、ECC）。
- 记忆方向出现回头看朴素 RAG 的声音：Memory Tax 和 Raw-RAG 两篇论文都认为，不少专用记忆系统不如对原始历史做朴素检索，omarsar0 的两条推文分别 ❤487、❤896。
- 成本与记忆工具在周末重新冒头：[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) 周增 +3,417，[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) 日增从约 300 升到 1,500+。
- 桌面和手机端 computer use 从零爆发：[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) 前 13 天每天只有 1–4 星，之后日增 +844、+2,270、+2,680（见 11-01 日报）；[wangzan101/Mika](https://github.com/wangzan101/Mika) 创建 3 天，周增 ≈+3,313。

## 本周 Agent Context 特性趋势

**1. 代码库索引/检索（升温）**
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐140,397 · 周增 +5,529：用本地 tree-sitter AST 把代码、文档、SQL、PDF 建成持久知识图，不用向量库，边标 EXTRACTED/INFERRED，口号「map once, not grep forever」。@techNmak（47,950 粉，10-25）一条推文 ❤1,545 👁102,155。
- [xerj-org/xerj](https://github.com/xerj-org/xerj) · ⭐18,614 · 周增 +3,153：单个 Rust 二进制，对代码、文档、日志做 BM25+向量混合检索，带 MCP 和 agent 记忆。@vicky_grok 转述其自家基准：16 个任务两者都解决 16/16，输出 token 从 26,477 降到 9,982（少 2.7 倍）；@himanshu19890 引其自家案例：Claude Code 凭记忆 6/6 解出、花 $1.49，接入 xerj 索引后 5/6、花 $4.40。这些都是项目自报，且案例里索引版更贵。
- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · ⭐107,506 · 周增 +5,204：一个 CLI 读取 X、Reddit、YouTube、B 站、小红书，零 API 费。它是联网读取层，不属于检索。

**2. 长期记忆（升温，有争议）**
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · ⭐108,783 · 周增 +5,767：用生命周期钩子记录会话，AI 压缩成摘要后存入 SQLite+Chroma，新会话自动注入。此前日增约 170–340，10-29 起为 +975、+1,634、+1,527、+1,523（见 11-01 日报）。HN 帖（10-29，3 分）链接 issue #5176，标题称「安装时上传最近 30 天提示词到 cmem.ai」。这是帖子标题的说法，仓库代码未核实。
- [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · ⭐57,539 · 周增 +3,915：Agent Memory That Learns。10-26 官方推文称可通过 Omnigent 元 harness 给多个 agent 统一接入记忆。
- 反向信号来自论文：[Memory Tax](https://arxiv.org/abs/2610.34073)、[Raw-RAG](https://arxiv.org/abs/2610.30755)（详见论文精选）。

**3. Skills / 插件（最大增长来源，持续升温）**
- 反 AI 味设计类：[pbakaus/impeccable](https://github.com/pbakaus/impeccable) ⭐99,044 · 周增 +12,031（Trending 本周口径）；[Nutlope/hallmark](https://github.com/Nutlope/hallmark) ⭐44,543 · 周增 +11,379；[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) ⭐107,541 · 周增 +5,238。impeccable 在 14 天序列里从约 400 升到约 1,470/天，7 日均值 1,018，28 日均值 669，仍在加速。
- 大厂方法论与安全类：
  - [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) ⭐56,081 · 周增 +9,918：多阶段审计，发现与验证 agent 分离。
  - [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) ⭐8,662 · 周增 +7,607：大象 agent 持有全上下文写设计，金鱼 agent 无记忆重新审查。
  - [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) ⭐23,292 · 周增 +2,273：扫描 skill 的安全风险。
- 通用工程习惯类：[mattpocock/skills](https://github.com/mattpocock/skills) 周增 +6,040；[obra/superpowers](https://github.com/obra/superpowers) 周增 +5,581；[affaan-m/ECC](https://github.com/affaan-m/ECC) 周增 +6,007；[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) 周增 +6,016。
- 论文：[Socratic Skill Learning](https://arxiv.org/abs/2610.17860)；[2610.33024](https://arxiv.org/abs/2610.33024) 发现同一 skill 对强模型有益、对弱模型有害（103 个任务-skill 对，GPT-5.6-luna +31.1 分，Gemma-4-E4B −8.8 分）。

**4. 缓存与成本（升温）**
- [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) · ⭐3,643 · 周增 +3,417（创建于 10-13）：不改模型和 agent，外挂插件做「经验驱动的黑盒成本控制」。据联网搜索摘要，SWE-Bench 上平均成本降约 18–31%，来自 Microsoft Research 与 UC Berkeley（数据内的项目说明）。日增 +205（10-28）→ +1,368（10-31）→ +931（11-01）。
- [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) · 周增 +2,490：描述称 RTK+Caveman 压缩可省 15–95% token（项目自述）。
- 论文：[2610.34241](https://arxiv.org/abs/2610.34241)（见 10-31 日报）实测冷前缀首 token 约 69.4 s，高复用约 2.8 s；[TAO](https://arxiv.org/abs/2610.37230) 把 cache 复用和工具返回时机纳入调度；[2610.34491](https://arxiv.org/abs/2610.34491) 称最高 effort 最多比最低档贵 42 倍，却未必更准。

**5. Computer use / 桌面与手机 Agent（本周新爆点）**
- [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · ⭐6,267 · 周增 ≈+4,435（2 天累加）：读 OS 无障碍树而非截图，ref 稳定，动作可安全重试。官方 @ctatedev（Chris Tate）10-30 发布，称「整台电脑版 agent-browser」。
- [wangzan101/Mika](https://github.com/wangzan101/Mika) · ⭐3,626 · 周增 ≈+3,313：安卓手机端 Phone Agent，后台操作 App。作者 10-29 自推。

**6. MCP（背景型，无单项爆发）**
- [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)、[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)、[morluto/rea](https://github.com/morluto/rea) 都带 MCP，本周没有以 MCP 为卖点的单项爆发。
- 「harness 自进化」是论文热点，不是项目热点（见论文精选）。

## 本周最火 Agent 项目 Top 15

按周增排序。已剔除与 Agent 无关的项目：无。cleanyourtv 保留，因其以 Claude Code 等 agent 通过 ADB 执行为卖点。

| 排名 | 项目 | 类型 | ⭐总数 | 周增 | 上榜天数 | 为什么火 |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | context | 417,802 | +35,209 | 7 | 让 agent 经 MCP/CLI 逆向应用和原生二进制；7 个自媒体帖 👁491,616，YouTube 7 视频合计 ▶1,314,906（见 10-31 日报） |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | agent | 55,591 | +12,946 | 7 | DeepSeek Harness 插件，「免登录免 Key 免费用 DeepSeek V4.1 Flash/Kimi K3」，靠教程式推文传播 |
| 3 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | context | 99,044 | +12,031（Trending 本周） | 5 | 给编码 agent 一套设计词汇（polish、critique、audit） |
| 4 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) | agent | 48,741 | ≈+11,398 | 6 | 通过 Wi-Fi/ADB 让 AI 助手给安卓电视去预装广告；创建于 10-17，日增峰值 10-20 的 6,818 |
| 5 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | agent | 44,543 | +11,379 | 7 | 反 AI 味设计 skill |
| 6 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | agent | 56,081 | +9,918 | 7 | 多阶段审计，发现与验证分离 |
| 7 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | context | 53,496 | ≈+8,187 | 5 | 个性化 AI 家教，长期记忆加教材问答；日增 10-26 起 1,478 → 2,254 |
| 8 | [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | context | 8,662 | +7,607 | 7 | 谷歌「设计先于代码」的双 agent 审查 |
| 9 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | agent | 268,161 | +6,938 | 7 | 「Everything is a Plugin」，dsh 插件生态的底座 |
| 10 | [stablyai/orca](https://github.com/stablyai/orca) | agent | 112,248 | +6,770 | 7 | 多 Agent 并行工作台（worktree、桌面/手机远程） |
| 11 | [yetone/magpie](https://github.com/yetone/magpie) | agent | 27,497 | +6,181 | 7 | 在菜单栏里给各 agent 换模型（Codex 接 DeepSeek 等） |
| 12 | [mattpocock/skills](https://github.com/mattpocock/skills) | context | 309,033 | +6,040 | 7 | 作者自用的工程习惯拆成小 skill |
| 13 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | context | 181,951 | +6,016 | 7 | 「最懒的资深开发」少写代码；入选 20 项清单帖（@maixbt 转述其自家基准「少 53% 代码、少 45% token」） |
| 14 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | context | 294,558 | +6,007 | 7 | skills、记忆、安全一体的 harness 优化系统 |
| 15 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | context | 108,783 | +5,767 | 7 | 跨会话持久记忆 |

Orkas、Mika、agent-desktop 等新项目因上榜天数少，没进前 15；[obra/superpowers](https://github.com/obra/superpowers)（+5,581）和 [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)（+5,529）紧随其后。

## 增长归因与推广

**1. [morluto/rea](https://github.com/morluto/rea)（周增 +35,209）· 🔥强推广**
- 特性：让 agent 在没有源码时逆向应用和二进制，对接 Ghidra、Hopper、IDA。
- 谁在推：以 KOL 和清单号为主。
- 📢 自媒体曝光：7 帖 👁491,616，11 个账号，含 @0xDeniAi、@Zara__Ai、@rakib_hossen_ai、@so_ainsight 等。
- 💬 真实讨论：17 帖 👁1,709,879。
- 代表：[@0xDeniAi](https://x.com/0xDeniAi/status/2114847015091794206)（1,811 粉，10-26）「REA creator just dropped 20 GitHub repos…」❤2,783 👁164,814。HN 发布帖 [REA Reverse – Engineer Anything](https://news.ycombinator.com/item?id=50028275)（10-10，814 分/340 评）。
- 趋势：日增逐日下降，10 月 12 日单日峰值 +54k（见 10-30 日报）。
- 数据内另有一条 @realaunchfun 推文，@EirikSpike 回复称其「与真正的 REA 无关」，属名称混淆事件，不展开。

**2. [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model)（周增 +12,946）· 📣有推广（用户教程式）**
- 特性：免登录、免 Key，在 DeepSeek Harness 里用前沿模型。
- 📢 自媒体曝光：2 帖 👁106，几乎为零（仅 @buildpicks、@JivaniVartan 的榜单帖）。
- 💬 真实讨论：28 帖 👁326,683。
- 代表：[@NFT_Chen](https://x.com/NFT_Chen/status/2114639505861022076)（24,939 粉，10-26）教程 ❤337 👁53,064；[@itsjdraven](https://x.com/itsjdraven/status/2114331404708491304)（8,076 粉，10-25）❤303 👁20,253。
- 事实边界：@superdoccimo（10-28）据 README 写，免费通道来自 OpenCode Zen 网关和 Kilo 公开网关等第三方免费额度，可用性、数据处理和变更风险需自行承担；@MatinSenPai 提醒该插件发布在非官方社区 hub，未做安全核实。
- 有日报提到 issue 里出现一封「律师函」，直接打开 issue #576 返回 404，未能核实，不写入报告。

**3. [Nutlope/hallmark](https://github.com/Nutlope/hallmark)（周增 +11,379）· 📣有推广**
- 特性：反 AI 味，22 套主题、65 条发布前检查，一条命令装进 Claude Code、Cursor、Codex（据联网摘要，未逐条核实）。
- 📢 自媒体曝光：7 帖 👁27,334。
- 💬 真实讨论：32 帖 👁118,653。
- 代表：[@designertom](https://x.com/designertom/status/2114786186250379759)（19,900 粉，10-26）「Nutlope/hallmark, made by Together AI」❤82 👁4,124。
- HN 帖只有 4 分，没有出圈。传播主要靠 GitHub Trending 榜单转发和小号搬运。

**4. [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)（周增 +9,918）· 📣有推广**
- 特性：发现与验证 agent 分离以压低误报，输出机器可读的 findings。
- 📢 自媒体曝光：6 帖 👁312,476，主要是 [@fram3o](https://x.com/fram3o/status/2115266516056977556)（4,804 粉，10-27）一条「Download these before the internet gets restricted…」大杂烩清单，❤6,666 👁253,182，该仓库只是其中一项。
- 💬 真实讨论：19 帖 👁604,099，其中 10-26 日报里 @jurbed 一条占 👁594,554，约 99.8%（见 10-26 日报）。
- 未见 Cloudflare 官方 X 推文。

**5. [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)（周增 ≈+8,187）· 🌱自然增长为主，偏中文 KOL**
- 特性：围绕自己的教材讲题、出题，带长期记忆，可对 B 站/YouTube 视频按秒提问。
- 📢 自媒体曝光：3 帖 👁104。
- 💬 真实讨论：18 帖 👁67,892。
- 代表：[@AIExplorerTim](https://x.com/AIExplorerTim/status/2115266330475815245)（45,950 粉，10-27）❤1,002 👁60,150。
- 此前日增 60–300，10-26 起升到 1,478、2,254，触发点未能从数据确认。

**6. [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model)（周增 +7,607）· 🌱自然增长**
- 特性：设计先于代码，金鱼 agent 无上下文复审。
- 📢 自媒体曝光：0。
- 💬 真实讨论：26 帖 👁81,968。
- 代表：[@awe0_io](https://x.com/awe0_io/status/2114666959786983759)（4,857 粉，10-26）中文解读 ❤1,397 👁75,957。11-01 日增 +1,547，曝光还来自 YouTube（AI LABS 一条 ▶201,074，见 11-01 日报）。
- 搜索未见谷歌官方 X 推广，可见谷歌开源博客发布和 gihyo.jp 报道。

**7. [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv)（周增 ≈+11,398）· 🌱自然增长（作者自推起势）**
- 特性：电视去广告，不用 root，可还原。
- 📢 自媒体曝光：1 帖 👁86。
- 💬 真实讨论：16 帖 👁4,342（本周推文很少，峰值在 10-20，已过）。
- 代表：[@Cybernews](https://x.com/Cybernews/status/2115101823442813320)（73,078 粉，10-27）称「不到 10 天超 41,000 星」。
- 来源核验：联网摘要称主要靠作者 @gathint 自己发推带起，之后 Cybernews 等媒体跟进（未打开原推核验，来源为搜索摘要）。

**8. [pbakaus/impeccable](https://github.com/pbakaus/impeccable)（周增 +12,031）· 📣有推广**
- 📢 自媒体曝光：9 帖 👁108,615，13 个账号，含 @wanerfu（121,586 粉）、@6AW0RON0k。
- 💬 真实讨论：18 帖 👁117,953。
- 代表：[@gkxspace](https://x.com/gkxspace/status/2115408503133307157)（59,620 粉，10-28）❤721 👁39,270。
- 联网搜索摘要称作者 Paul Bakaus 是 jQuery UI 的创建者（来源为搜索摘要，未打开原页核验）。

### 本周自媒体曝光榜

| 项目 | 自媒体帖数 | 曝光 👁 | 代表账号 | 真实讨论 👁 | 判断 |
|---|---|---|---|---|---|
| [morluto/rea](https://github.com/morluto/rea) | 7 | 491,616 | @0xDeniAi、@Zara__Ai | 1,709,879 | 曝光与真实讨论都大，KOL 带货 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | 6 | 312,476 | @fram3o | 604,099 | 单条大杂烩清单撑起曝光，真实讨论里又有单条占绝大多数 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 10 | 221,180 | @so_ainsight、@thegreatest_sv | 27,998 | 清单贴为主 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 5 | 170,369 | @maixbt、@0xPontiuz | 54,988 | 20 项清单搬运 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 5 | 170,962 | @choopyplug1、@csaba_kissi | 51,758 | 同一批 20 项清单 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 5 | 156,778 | @rakib_hossen_ai、@Zara__Ai | 697,591 | 真实讨论占主导 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 9 | 108,615 | @wanerfu、@6AW0RON0k | 117,953 | 清单与真实各半 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 2 | 95,415 | @choopyplug1 | 4,247 | 曝光远大于真实讨论 |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | 3 | 243,271 | @Greshamtrade、@milindlabs | 420 | 曝光主要来自 @Greshamtrade 的 20 项 repo 清单，真实讨论极少 |
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 1 | 39,345 | @xiaomovps | 54,547 | 以自然讨论为主 |

社区榜里 Opus 5.5 视频类清单项目的曝光很大：[lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 19 帖 👁1,366,953，[yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) 16 帖 👁1,314,978，真实讨论近乎为零（👁18,759 / 👁9）。这是曝光榜里最失衡的一组。

## 本周论文精选

**Agent Context 方向**
1. [Memory Tax: Dissecting the Net Value of Agent Memory](https://arxiv.org/abs/2610.34073) · 👍149 · 许多专用记忆系统在多数设置里不如朴素 RAG。论文把净价值拆成 memory benefit 和 memory tax，简单修复是同时从原始历史和记忆里检索，再统一重排。@omarsar0（325,934 粉）[推文](https://x.com/omarsar0/status/2115098954799169970) ❤487。
2. [Is Complex Agentic Memory Always Needed? Naive RAG Is Stronger Than We Thought](https://arxiv.org/abs/2610.30755) · 👍38 · Raw-RAG（稠密检索加重排）在 7 个基准-模型设置中 6 个排第一，领先最强记忆系统 0.13–5.53 分；在 BEAM-1M 上摄入 0.3 小时，对比 3.2–27 小时。[推文](https://x.com/omarsar0/status/2113635562578178147) ❤896。
3. [Self-Evolving Agent Harness](https://arxiv.org/abs/2610.18813) · 👍99 · 形式化「harness 自进化」，即权重不变时对提示、记忆、工作流、插件做反馈修订，给出泛化界和保持界。
4. [Evolving to Match Capabilities: Harness Self-Evolution via Skill Adaptation](https://arxiv.org/abs/2610.33024) · 👍32 · 同一 skill 让强模型提升 31.1 分、让弱模型下降 8.8 分。弱模型失败里 86% 违反的要求其实已写在 skill 里，所以按模型能力适配 skill。
5. [Socratic Skill Learning](https://arxiv.org/abs/2610.17860) · 👍49 · 教师与学生交替学习 skill，并构建 SkillTransferBench（35 个任务族、408 个可执行用例）测试复用。
6. [Mosaic: Multi-Session Agentic RL](https://arxiv.org/abs/2610.22174) · 👍63 · 针对上下文压缩和子 agent 分叉产生的多会话轨迹，改进信用分配，避免训练与推理不匹配。
7. [DeLoop](https://arxiv.org/abs/2610.19376) · 👍33 · 用 agent 自己的重复动作作负样本；历史被压缩后，循环行为更常见。
8. [Trial by Trace: TraceTrial-Bench](https://arxiv.org/abs/2610.32285) · 👍291 · 评测 harness 自身的可靠性，覆盖上下文、执行、治理、生命周期等 7 个组件，共 95 个任务。

**其他 Agent 方向**
- [The Trinity](https://arxiv.org/abs/2610.36077) · 👍543 · 把世界生成与 harness 进化耦合的递归自改进框架（Creator/Explorer/Evolver）。
- [Multiscale Policy Optimization](https://arxiv.org/abs/2610.35013) · 👍379 · 在 turn 粒度做优势估计和重要性采样，面向长程 agent RL。
- [Trajectory2Gym](https://arxiv.org/abs/2610.33568) · 👍359 · 为工具使用 agent 合成「有决策依据」的监督轨迹。
- [DynaFlow](https://arxiv.org/abs/2610.34467) · 👍200 · 让主 agent 生成可执行工作流来协调子 agent。
- [Focused Omni-Modal GUI Agents](https://arxiv.org/abs/2610.26203) · 👍230 · FocusGUI 适配器只暴露每一步需要的上下文，防止顺序干扰。

## 社区讨论焦点

**本周反复被提及、但不在增长榜前列的 5 个项目**
1. [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) · ⭐12,766 · 提及 5 天 · 设计师 Elaya 开源的 landing-page 设计 skill，原推 ❤10,173 👁645,417；社区榜 score 最高 3,429.4。
2. [EpicGames/unreal-engine-skills-for-claude-code-plugin](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin) · ⭐1,724 · 提及 4 天 · Epic 官方的 Unreal Engine skills；11 个真实账号，👁323,147。
3. [wshobson/agents](https://github.com/wshobson/agents) · ⭐42,003 · 提及 3 天 · 多 harness 插件市场；曝光来自 4 条清单帖，共 👁306,155。
4. [xingjian-bai/opal](https://github.com/xingjian-bai/opal) · ⭐225 · 提及 2 天 · 「训练时由编码 agent 改写优化器」；一条推文 ❤1,561 👁199,306。
5. [SouravBeraAkaSpeed/xiryn](https://github.com/SouravBeraAkaSpeed/xiryn) · ⭐380 · 提及 3 天 · 开源个人 agent，每个 agent 一个 Docker Linux 桌面；一条推文 👁190,055。

**本周 X / HN / Reddit 热门话题**（Reddit 无数据）

1. Agent 记忆是否敌不过朴素 RAG
   - [@omarsar0 Memory Tax 推文](https://x.com/omarsar0/status/2115098954799169970)
   - [@omarsar0 Raw-RAG 推文](https://x.com/omarsar0/status/2113635562578178147)
   - [HN: The State of Context Engineering](https://news.ycombinator.com/item?id=50235780)（247 分/62 评）
2. Claude Code 生态的供应链与隐私事件
   - [HN: Backdoors in official Claude Code extensions](https://news.ycombinator.com/item?id=50302334)（641 分/17 评）
   - [HN: Claude Code VS Code extension with backdoor on Cursor marketplace](https://news.ycombinator.com/item?id=50301983)（393 分）
   - [HN: Backdoor in Claude Code for VS Code extension on the Cursor Marketplace](https://news.ycombinator.com/item?id=50300683)（235 分/328 评）
   - [HN: Claude Code 把后台 agent 转录发给模型](https://news.ycombinator.com/item?id=50284255)（518 分/210 评）
   - 以上是帖子标题所述事件，细节未逐一核验。
3. harness 工程与多 Agent 并行
   - [@miu21590 Octopus OS](https://x.com/miu21590/status/2114095879632375944)（4,010 粉）❤2,091 👁158,814
   - [@_avichawla HarnessRouter](https://x.com/_avichawla/status/2113954302901256597) ❤1,105
   - [HN: JetBrains Thinkrail](https://news.ycombinator.com/item?id=50233294)（242 分/174 评）
   - [HN: Prospero 编码 harness](https://news.ycombinator.com/item?id=50315226)（90 分/60 评）
   - [HN: Minecraft agent 集群](https://news.ycombinator.com/item?id=50296486)（361 分/145 评）
4. 成本与用量限制
   - [HN: OpenAI 和 Anthropic 降价最多 80%](https://news.ycombinator.com/item?id=50236102)（399 分/406 评）
   - [HN: ChatGPT 与 Codex 用量限制合并](https://news.ycombinator.com/item?id=50320588)（201 分/140 评）
   - [@DanKulkov 终端提示 agent 讨论](https://x.com/DanKulkov/status/2115765346816926003) ❤1,222 👁338,146
5. Skills 本身的价值与质量
   - [@addyosmani 长文](https://x.com/addyosmani/status/2114604912520921136) ❤12,128 👁2,148,171（正文是链接，内容未知，只能写热度）
   - [HN: "AI Skills" are worthless in 2026](https://news.ycombinator.com/item?id=50255346)（53 分/25 评）
   - [@angeldot_ skills 清单](https://x.com/angeldot_/status/2114374287549157402) ❤1,743

## 下周值得关注
1. agent-desktop 和 Mika 这类 computer use 项目：[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) 从日增个位数升到 +2,680，[wangzan101/Mika](https://github.com/wangzan101/Mika) 创建三天。前者几乎没有 X 推广，后者靠作者自推，要看下周日增能否保持，还是 Trending 一过就回落。
2. 成本控制与记忆工具出现分化：[microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer)（日增 +931，连续 4 天）和 [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)（日增 1,500+）在升，但 claude-mem 的隐私 issue 和两篇「记忆不如 RAG」的论文构成反向压力。上述自报的节省数字还需要独立复测来验证。
3. rea 与设计类 skill 的接力：[morluto/rea](https://github.com/morluto/rea) 周增 +35k，日增已降到 3,000 级，大概率继续回落；设计类 skill 更可能延续，[pbakaus/impeccable](https://github.com/pbakaus/impeccable) 的 7 日均值 1,018 仍高于 28 日均值 669。需要验证这是否只是清单贴放大，而非持续使用。
