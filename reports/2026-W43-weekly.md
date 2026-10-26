# Agent & Agent Context 周报 · 2026-W43（2026-10-19 ~ 2026-10-25）

> 生成于 2026-10-26 09:32 PDT

数据覆盖：本周只有 4 天有日报数据（10-22 ~ 10-25），10-19 ~ 10-21 没有日报。社交数据含少量 10-17 ~ 10-21 的推文，均按真实发帖日期标注。Reddit 本周无数据。周增多为 Trending 本周口径，包含无日报的三天，所以比 4 天日增累加大。

## 本周要点

- [morluto/rea](https://github.com/morluto/rea) 位居第一，⭐382,593，Trending 本周 +88,243，4 天日增约 +5.5k/天。「Anthropic 给 Claude 加了逆向限制」的说法带来大量真实讨论，但只是网友转述，没有官方确认。
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 是本周最干净的自然增长：周增 +12,680，日增逐日走高（+2,979 → +2,038 → +2,177 → +2,744），自媒体曝光几乎为 0，真实讨论 👁1,027,652。
- 多 Agent 编排与 harness 生态成了赛道：[stablyai/orca](https://github.com/stablyai/orca) 周增 +9,828，[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) 的 dsh 插件生态成形，HarnessRouter 和 Google Harness² 同期出现。
- 检索/记忆类项目开始分化：[xerj-org/xerj](https://github.com/xerj-org/xerj) 周增 +8,080，但日增从 +1,180 掉到 +255；[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) 稳在 +573 ~ +632/天。论文 Raw-RAG 提出朴素 RAG 就能胜过复杂记忆系统，给这类项目施压。
- 「免费模型」和 Opus 5.5 视频类项目靠传播拉动：[Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) 周增 ≈+7,286，伴随隐私和合规质疑；[lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 一类项目自媒体曝光 👁750,397，真实使用反馈远少于曝光。

## 本周 Agent Context 特性趋势

**1. 代码库索引 / 检索（升温，内部开始分化）**
- [xerj-org/xerj](https://github.com/xerj-org/xerj) · ⭐15,461 · 周增 +8,080（Trending 本周）· Rust 单二进制，本地索引代码、文档、日志和 PDF，BM25+向量混合检索，提供 MCP server，自带 agent memory。日增 10-23 +938、10-24 +1,180、10-25 +255，冲高回落（见 10-25 日报）。
  - 官方 benchmark（经 @vicky_grok 转述）：16/16 任务两边都做对，输出 token 从 26,477 降到 9,982（少 2.7×）。
  - 项目自己的案例研究里，Claude Code 凭记忆答 valkey/memcached 任务 6/6，花 $1.49；接入 xerj 索引后 5/6，花 $4.40，反而更贵。来源是 [@himanshu19890](https://x.com/himanshu19890/status/2113108227458318809)（37 粉，读 README 所得）。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐134,868 · 周增 +6,868 · 用本地确定性 AST（tree-sitter）解析，把代码、SQL、配置、PDF 变成可查询的知识图谱，不用向量库，以 /graphify skill 形式使用。日增 10-22 +1,407、10-23 +858、10-24 +573、10-25 +632，缓降后企稳。
  - 10-21 进入 Perplexity Computer 技能市场，10-31 前免费（[@AskPerplexity](https://x.com/AskPerplexity/status/2113022451840122886)，387,602 粉，❤102 👁40,190）。
  - HN 上出现 Rust 重写版 [Graphicle](https://news.ycombinator.com/item?id=50088713)（48 分/15 评，10-14）。
- 对照论文：[Raw-RAG](https://arxiv.org/abs/2610.30755) 用原始聊天记录加稠密检索加重排，在 7 个基准/模型设置里 6 个排第一。[RAG Compositionality](https://arxiv.org/abs/2610.29722) 发现单点有效的技术叠加后收益缩水（预测 +47%，实测 +17%）。检索/索引工具需要拿朴素基线说话，这个方向热度还在，但开始被质疑。

**2. 记忆（升温，从「存得多」转向「存得有用」）**
- [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) · ⭐13,438 · 周增 +3,541 · Rust 实现，给编码 Agent CLI 做长期记忆，支持在不同 Agent 厂商之间交接。
- [Asymptote-Labs/agent-beacon](https://github.com/Asymptote-Labs/agent-beacon) · ⭐2,601 · 周增 +920（仅上榜 1 天）· 跨 harness 的自改进记忆层，持续捕获各 harness 的会话并存入共享索引。[@_avichawla](https://x.com/_avichawla/status/2112862391268688291)（79,311 粉，10-21，❤633 👁61,080）推荐，带营销腔。
- 论文：MemT-1.0 把记忆放进模型内部，MCCL 按「能否改善未来行动」评价记忆（详见论文精选）。
- 记忆项目的增长集中在「跨 harness 交接」这个卖点，数据里真实用户反馈很少。

**3. 上下文压缩 / 缓存与成本（持续热，卖点是省 token）**
- [mksglu/context-mode](https://github.com/mksglu/context-mode) · ⭐32,087 · 周增 +2,271 · 沙箱化工具输出（宣称减少 98%），持久化会话记忆，经 MCP+hooks 接入 17 个平台。
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) · ⭐114,956 · 周增 +2,419 · 用「穴居人语气」的 skill 加代理，宣称省 65% token。
- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) · ⭐175,935 · 周增 ≈+4,644 · 让 Agent 先复用仓库、标准库、浏览器已有的能力，少写代码。作者自测：代码 -53%，成本 -26%，高风险逻辑带测试的比例 98% 对 68%。数字经 [@TheoVanceln](https://x.com/TheoVanceln/status/2113340653983646187) 转述，是项目自己的测试，不是第三方。
- 论文：[Cache Engineering for Agents](https://arxiv.org/abs/2610.28577) 让 Agent 直接控制活跃 KV cache，不改前缀就不触发重新 prefill；[CarryOn](https://arxiv.org/abs/2610.18784) 围绕可复用的任务对象组织上下文。
- HN：[Skyvern「删掉 RAG 后 Agent 快 2.3×」](https://news.ycombinator.com/item?id=50222826)（19 分/2 评）。
- 论文侧的卖点已转向「不破坏缓存、按进展组织上下文」，工具侧还停在「省 98%/65%」这类自报数字。

**4. Skills / 插件（最主流的分发形态，安全审计是本周最强主题）**
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐46,163 · 周增 +12,680 · 多阶段安全审计 skill，发现项经独立验证，输出机器可读。
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) · ⭐44,480 · 周增 +3,232 · Anthropic 官方插件目录。同时上榜的有 [cursor/plugins](https://github.com/cursor/plugins)（⭐13,870 · 周增 +1,729）和 [vercel-labs/skills](https://github.com/vercel-labs/skills)（⭐36,494 · 周增 +1,077）。
- 反向力量是 skill 供应链安全：[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)（⭐21,206）专门扫描 skill。@RoundtableSpace 引用的统计称 31,132 个 skill 中 26.1% 含漏洞、5.2% 疑似恶意（出自该推文，未独立核对）。
- 论文：[Socratic Skill Learning](https://arxiv.org/abs/2610.17860)（👍47）让 Student 在专家引导下边练边写 skill。

**5. MCP / 运行时 / 多 Agent 编排（编排升温，沙箱组降温）**
- [stablyai/orca](https://github.com/stablyai/orca) · ⭐105,478 · 周增 +9,828 · 并行运行多个编码 Agent（Codex、Claude Code、OpenCode、Pi），各自使用独立 git worktree 和自己的订阅，带手机端。日增 10-22 +1,694、10-23 +848、10-24 +1,122。
- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) · ⭐261,223 · 周增 ≈+3,125 · 主打「一切皆插件」，dsh 插件生态成形（rea、archify、ruflo 等都打了 dsh-plugin 标签）。
- [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) · ⭐19,780 · 周增 +3,189 · 自治 Agent 的安全私有运行时，由 HN 驱动；日增 +978 → +779 → +556，持续下降。[anthropics/sandbox-runtime](https://github.com/anthropics/sandbox-runtime)（⭐6,581）10-24 的 Trending 今日值 +592，10-25 掉到 +208。

**6. 模型接入 / 免费网关（热，但风险高）**
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model)、[tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)（⭐41,361 · 周增 +4,402）、[yetone/magpie](https://github.com/yetone/magpie)（⭐21,316 · 周增 ≈+2,501，本机网关，让 Codex 用 DeepSeek、Claude Code 用 Kimi）。详见增长归因一节。

## 本周最火 Agent 项目 Top 15

已剔除与 Agent 关系弱的项目：free-my-tv（电视桌面）、MoneyPrinterTurbo（短视频生成）、vllm 和 ollama（推理引擎）。排名按周增。

| # | 项目 | 类型 | ⭐总数 | 周增 | 上榜天数 | 为什么火 |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | context（MCP 逆向） | 382,593 | +88,243（Trending 本周，见注） | 4 | 用 Agent 接 Ghidra/Hopper 逆向任意应用；「Claude 被限制逆向」的争议在 X 上带来 👁1.7M 真实讨论，HN 10-10 帖 814 分/340 评 |
| 2 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | agent（skill） | 46,163 | +12,680 | 4 | Cloudflare 出品的审计 skill，@jurbed 一条推荐 👁594,554，几乎全靠真实讨论 |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | agent（编排） | 105,478 | +9,828 | 4 | 多编码 Agent 并行加 worktree 隔离，用自己的订阅 |
| 4 | [xerj-org/xerj](https://github.com/xerj-org/xerj) | context（检索/MCP） | 15,461 | +8,080 | 4 | 本地单二进制搜索，宣称省 2.7× 输出 token；Corpus Hub 贡献者自发宣传 |
| 5 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | agent（模型插件） | 42,645 | ≈+7,286 | 4 | 免登录免 Key 使用 DeepSeek V4.1 Flash、Kimi K3，「免费」是钩子 |
| 6 | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | context（知识图谱） | 134,868 | +6,868 | 4 | 代码库转知识图谱的 skill；清单贴 👁515,964，另入驻 Perplexity Computer |
| 7 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | agent | 221,420 | +6,857 | 4 | 开源编码 Agent，被各类 harness 和网关当作默认目标；本周无专属社交热帖 |
| 8 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | context（视频） | 71,916 | +5,633 | 4 | 「写 HTML 渲染视频，为 Agent 而建」；9 条清单贴 👁210,391 |
| 9 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | context（skill） | 175,935 | ≈+4,644 | 4 | 「少写代码」的 skill，自测代码 -53%；清单贴带动 |
| 10 | [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | context（网关） | 41,361 | +4,402 | 4 | 把 34 家免费 LLM 汇成一个 /v1 端点，号称每月 7.4B token |
| 11 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | context（记忆） | 13,438 | +3,541 | 4 | 编码 CLI 的长期记忆，跨厂商交接 |
| 12 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | context（swarm） | 79,198 | +3,241 | 4 | 多 Agent swarm harness，带自适应记忆和向量 RAG |
| 13 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | agent（插件目录） | 44,480 | +3,232 | 4 | 官方插件目录；Epic 的 Unreal 插件经它分发（@RoundtableSpace ❤5,186 👁314,658） |
| 14 | [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | agent（运行时） | 19,780 | +3,189 | 4 | HN 458 分/205 评（10-22）驱动 |
| 15 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | agent（harness） | 261,223 | ≈+3,125 | 3 | dsh 插件生态的底座，日增约 +1,000 ~ 1,127 |

注（rea）：Trending 本周口径 +88,243，与日增累加不符，以日增趋势为准。10-23、10-24、10-25 日增分别为 +5,853、+5,465、+5,896，⭐从 10-23 的 371,232 到 10-25 的 382,593 只涨了约 11k，按日增推算一周约 2 万 ~ 3 万。未能联网核实。

## 增长归因与推广

**1. [morluto/rea](https://github.com/morluto/rea)** · ⭐382,593 · 周增 +88,243（口径见上）
- 关注点：让 Agent 逆向任意应用和二进制，MCP 接 Ghidra/Hopper，`npx rea-agents setup` 一行安装。
- 📢 自媒体：7 帖 / 👁162,344，账号 @88n77n @DanielZambrini @ch3nweiii @rakib_hossen_ai @sammy_capital @wquguru。代表：[@sammy_capital](https://x.com/sammy_capital/status/2113733817596834151) 的学习路线清单（2,739 粉，10-23，❤3,790 👁122,946）。
- 💬 真实讨论：17 帖 / 👁1,709,879。代表：[@0x0SojalSec](https://x.com/0x0SojalSec/status/2113751276320399694)（63,013 粉，10-23）称「Anthropic killed REA」，同账号还有一条引三星电视被 root 事件的推文，❤11,831 👁799,288；[@Pirat_Nation](https://x.com/Pirat_Nation/status/2114069664875557083)（369,752 粉，10-24，❤4,934 👁267,842）称有用户报告 Claude 用 REA 做逆向时触发安全检查。
- 🌱 自然增长（事件驱动），真实讨论曝光约为自媒体的 10 倍。「Anthropic 限制」一说来自用户转述，属传闻，数据里没有官方确认。10-24 日报曾判断「曝光全部来自清单贴」，本周完整数据不支持这一判断。

**2. [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** · ⭐46,163 · 周增 +12,680
- 关注点：Cloudflare 内部使用的多阶段审计 skill，发现项独立验证，可在任意 harness、任意模型（含免费模型）上跑。
- 📢 自媒体：2 帖 / 👁35，几乎为零。💬 真实讨论：19 帖 / 👁1,027,652。
- 推广方：KOL 自发推荐。代表：[@jurbed](https://x.com/jurbed/status/2112973191157252103)（14,620 粉，10-21，❤8,721 👁594,554）：「Run it on all your software… Run it with the free models.」
- 🌱 自然增长，本周最干净的案例。日增 +2,979、+2,038、+2,177、+2,744，逐日走高（10-24 日报当时为 +2,177）。

**3. [stablyai/orca](https://github.com/stablyai/orca)** · ⭐105,478 · 周增 +9,828
- 关注点：多编码 Agent 并行、worktree 隔离、手机端跟进、SSH 远程、diff 批注回传。
- 📢 自媒体：2 帖 / 👁5,742（@Joyingeth、@TheoVanceln）。💬 真实讨论：17 帖 / 👁9,995。
- X 声量很小，解释不了 +9,828。代表：[@xoyif63862452](https://x.com/xoyif63862452/status/2113940136903762416)（6,284 粉，10-24，👁377）的中文长评。HN 只有零星小帖（[Orca + Oh My Pi 配置](https://news.ycombinator.com/item?id=49916232)，6 分）。
- 🌱 自然增长，来源在数据里看不出，可能是站外渠道。

**4. [xerj-org/xerj](https://github.com/xerj-org/xerj)** · ⭐15,461 · 周增 +8,080
- 关注点：本地检索，省 token（官方称 2.7×），Corpus Hub 提供上百个参考记忆语料。
- 📢 自媒体：1 帖 / 👁638（[@vicky_grok](https://x.com/vicky_grok/status/2113624864368349269)，11,419 粉，营销腔）。💬 真实讨论：18 帖 / 👁2,124。
- 被选进 Corpus Hub 的开源贡献者会自发发推（如 [@Nancysingh251](https://x.com/Nancysingh251/status/2112623930246914496) ❤13），HN 上也有多条「X on the XERJ Corpus Hub」小帖（1 ~ 2 分）。这个「贡献者署名、自我宣传」的回路属于推断，数据没有直接说明它是增长主因。
- 📣 有推广（贡献者回路加单条营销腔推文）。X 总曝光很低，增长大概率来自 Trending 本身。10-25 日增掉到 +255，冲高已回落。

**5. [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model)** · ⭐42,645 · 周增 ≈+7,286
- 关注点：给 DeepSeek 的 dsh 装插件，免登录、免 Key、不限量使用 DeepSeek V4.1 Flash、GLM 5.3 Flash、Kimi K3。
- 📢 自媒体：0。💬 真实讨论：17 帖 / 👁190,828。代表：[@WojakTheDev](https://x.com/WojakTheDev/status/2113200900412223530)（4,091 粉，10-22，❤95 👁7,882）；[@Fourpqwq](https://x.com/Fourpqwq/status/2113548229396611556)（4,186 粉，10-23）提醒额度来自上游、可能限速，免费池里的对话可能被记录。
- 风险（均为第三方说法，未核实）：
  - [yoDEV 的文章推文](https://x.com/dev_yodev61400/status/2112341389451157875)（3 粉，👁7）称读代码发现它加载 2.9MB bundle、操作账号池、领取 13 个 AI 工具的积分。
  - [@Channing_AI_X](https://x.com/Channing_AI_X/status/2113180377045147938) 称 [issue #576](https://github.com/Ebony-Vinyl/dsh-our-free-model/issues/576) 里有一封两万字的「律师函」。10-25 日报称其疑似伪造，并指控该项目逆向腾讯 WorkBuddy。
- 🌱 自然增长，「免费」是钩子；日增 +2,089、+2,120、+1,767。合规与隐私风险存在，目前没有定论。

**6. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** · ⭐134,868 · 周增 +6,868
- 关注点：本地确定性 AST，每条边可解释，无向量库；可在多种 Agent 里通用的 skill。
- 📢 自媒体：5 帖 / 👁515,964，账号 @ArchiveExplorer @Bober_smart @TheoVanceln @thegreatest_sv @tim_tom34325。💬 真实讨论：33 帖 / 👁82,176。
- 官方侧：[@AskPerplexity](https://x.com/AskPerplexity/status/2113022451840122886) 发布上架通知；[@Sumanth_077](https://x.com/Sumanth_077/status/2111824469006360864)（77,621 粉，10-18，❤667 👁35,965）做了介绍。
- 🔥 自媒体曝光占主导（约为真实讨论的 6 倍），另有官方分发渠道。数据不支持断言为付费推广。

**7. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)** · ⭐71,916 · 周增 +5,633
- 关注点：HeyGen 出品，写 HTML 渲染 MP4，对 Agent 友好，带 /figma skill。
- 📢 自媒体：9 帖 / 👁210,391，账号 @AIonfire0 @CoderDaMing @DanielZambrini @He1s_Sammy @RoundtableSpace @damkina7 @kocer_eth @naldzyul。代表：[@RoundtableSpace](https://x.com/RoundtableSpace/status/2113975041763516842)（269,645 粉，10-24，👁48,120）。💬 真实讨论：18 帖 / 👁11,676。
- 🔥 曝光集中在清单贴（约为真实讨论的 18 倍），有公司背书，真实使用反馈少。

**8. [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** · ⭐175,935 · 周增 ≈+4,644
- 关注点：让 Agent 先复用再写代码；作者自测代码 -53%。
- 📢 自媒体：4 帖 / 👁7,086（[@KanikaBK](https://x.com/KanikaBK/status/2113230397740065222)，37,352 粉，👁6,765 占大头）。💬 真实讨论：19 帖 / 👁1,007，几乎无人看。
- 📣 有推广（以清单贴为主）。X 声量与 +4,644 对不上，增长主因看不出（Trending 日增 10-22 约 +1,949，10-23 +1,292）。

### 本周自媒体曝光榜

| 项目 | 自媒体帖数 | 曝光 👁 | 代表账号 | 真实讨论 👁 | 判断 |
|---|---|---|---|---|---|
| [lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar)（⭐7,121 · 周增 ≈+1,828） | 4 | 750,397 | @KinGao476942 @RoundtableSpace @remoteugur | 86,614 | 🔥 曝光约为讨论的 9 倍；同一批 Opus 5.5 视频类仓库被打包推 |
| [Graphify](https://github.com/Graphify-Labs/graphify) | 5 | 515,964 | @ArchiveExplorer @thegreatest_sv @TheoVanceln | 82,176 | 🔥 清单贴主导，有 Perplexity 官方分发 |
| [mattpocock/skills](https://github.com/mattpocock/skills)（⭐302,993 · 周增 ≈+1,438） | 22 | 475,152 | @RoundtableSpace @_avichawla @Fluyeporlaweb | 1,094,505 | 数据有噪声：该条目下混入了 oh-my-hermes、HarnessRouter、Harness² 等无关推文，不下结论 |
| [ECC](https://github.com/affaan-m/ECC)（⭐288,551 · 周增 ≈+2,139） | 6 | 164,736 | @Fluyeporlaweb @KanikaBK @RoundtableSpace | 42,632 | 📣 清单贴反复收录，老牌项目 |
| [rea](https://github.com/morluto/rea) | 7 | 162,344 | @sammy_capital @wquguru @ch3nweiii | 1,709,879 | 🌱 真实讨论远大于曝光 |
| [hyperframes](https://github.com/heygen-com/hyperframes) | 9 | 210,391 | @RoundtableSpace @CoderDaMing @kocer_eth | 11,676 | 🔥 清单贴主导 |
| [freellmapi](https://github.com/tashfeenahmed/freellmapi) | 2 | 7,894 | @Fluyeporlaweb @HongyeMain | 89,259 | 🌱 [@Rifat_EE](https://x.com/Rifat_EE/status/2113136966552494178)（33,025 粉，❤321 👁47,451）带来质疑式讨论：7.4B 是项目自估，官网与仓库数字对不上 |
| [ponytail](https://github.com/DietrichGebert/ponytail) | 4 | 7,086 | @KanikaBK @TheoVanceln @benou_irl | 1,007 | 📣 只有清单贴，几乎无真实讨论 |

## 本周论文精选

**Agent Context 方向**
1. [Cache Engineering for Agents](https://arxiv.org/abs/2610.28577) · 👍130 · 代码 [thu-nics/AKV](https://github.com/thu-nics/AKV) 48★。长轨迹里 KV cache 的 I/O 和存储成为主要成本，改写前缀会让后续缓存失效并触发重新 prefill。论文提出 cache engineering，让 Agent 直接控制活跃 KV，相比阈值触发的摘要方案，平均成本降 27.7%（见 10-23 日报）。
2. [MemT-1.0: Towards Memory-Native Evolution](https://arxiv.org/abs/2610.26825) · 👍134 · [MemTensor/MemT-1.0](https://github.com/MemTensor/MemT-1.0) 361★。把记忆做成模型计算的一部分：Gated DeltaNet-2 做 token 级记忆更新，Mixture-of-Storage 扩容量，34B token 两阶段训练。128K 历史下，持久存储比全上下文 KV cache 少 66 倍（见 10-23 日报）。
3. [Pack Light, CarryOn](https://arxiv.org/abs/2610.18784) · 👍122 · [Ethannju/carryon](https://github.com/Ethannju/carryon) 5★。围绕可复用的任务对象而非历史组织上下文，视图由延续载体、补充执行上下文和近期尾部构成。OSWorld 2.0 +5.8%，BrowseComp-Plus +7.0%，token 分别少 51.9% 和 22.9%（见 10-24 日报）。
4. [Mosaic: Multi-Session Agentic RL](https://arxiv.org/abs/2610.22174) · 👍63 · [LARK-AI-Lab/Mosaic](https://github.com/LARK-AI-Lab/Mosaic) 37★。上下文压缩和子 Agent 分叉会产生多会话轨迹，与单会话训练的假设错配。论文提出多会话 Agentic RL 设定，避免把轨迹级优势平均广播给所有会话。
5. [Memory-Centric Continual Learning (MCCL)](https://arxiv.org/abs/2610.29357) · 👍42。主张评价记忆应看能否改善未来行动，而不是能否召回事实，并给出三轴记忆分类。
6. [Is Complex Agentic Memory Always Needed? (Raw-RAG)](https://arxiv.org/abs/2610.30755)（不在论文榜，来自推文 [@omarsar0](https://x.com/omarsar0/status/2113635562578178147)，325,934 粉，10-23，❤896 👁47,893）。Raw-RAG 在 LoCoMo、LongMemEval、MEME、MemoryAgentBench 上 6/7 设置排第一，领先最强 Agent 记忆系统 0.13 ~ 5.53 分；BEAM-1M 摄入耗时 0.3 小时，Mem0、MemOS 等需要 3.2 ~ 27 小时。
7. [Retrieval Augmented Generation Compositionality](https://arxiv.org/abs/2610.29722) · 👍54 · [dolev31/lasagna](https://github.com/dolev31/lasagna) 18★。LASAGNA 框架测了 450 种配置、8 个基准、5K ~ 200K 文档语料。叠加技术的收益远低于单点之和（预测 +47%，实测 +17%，见 10-25 日报）。
8. [Self-Evolving Agent Harness](https://arxiv.org/abs/2610.18813) · 👍99 · [zgcagi/Harness-RSI](https://github.com/zgcagi/Harness-RSI) 387★。固定权重，让 prompt、记忆、工作流、插件等脚手架自我演化。论文给出反馈驱动过程的形式化，并用持续 PAC 学习分析可靠性。

**其他 Agent 方向**
- [BizBench](https://arxiv.org/abs/2610.20424) · 👍494：支付业务长程 Agent 基准，强调中间执行合规，只看终局成功会掩盖违规（[BizAgentBench](https://github.com/ant-intl/BizAgentBench) 48★）。
- [Into the Unknown](https://arxiv.org/abs/2610.19159) · 👍158：让 9 个前沿 Agent 为 DOE 国家实验室的科学家撰写后续论文，用专家条件做 rubric 评估。
- [MAI-Gym](https://arxiv.org/abs/2610.20939) · 👍150：GUI Agent 的评测、数据采集和在线 RL 一体平台，支持 10 个基准、2 万并行环境。
- [OpenGCUA](https://arxiv.org/abs/2610.22200) · 👍103：开放的通用电脑使用 Agent 全栈（[Tongyi-MAI/OpenGCUA](https://github.com/Tongyi-MAI/OpenGCUA) 441★）。
- [Self-HPO](https://arxiv.org/abs/2610.22791) · 👍55：编码 Agent 交替优化 harness 与策略，用演化中的策略自己充当 harness 提议者。

## 社区讨论焦点

**被反复提及但不在增长榜前列的 5 个项目**
- [EpicGames/unreal-engine-skills-for-claude-code-plugin](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin) · ⭐1,657 · 提及 3 天 · Epic 官方插件，让 Claude Code 控制 Unreal 编辑器（30+ 工具集），经 Anthropic 官方市场安装。[@RoundtableSpace](https://x.com/RoundtableSpace/status/2111702567449424226)（10-18，❤5,186 👁314,658）。
- [xingjian-bai/opal](https://github.com/xingjian-bai/opal) · ⭐200 · 提及 3 天 · 「反应式优化器」：训练时让编码 Agent 实时改写优化器源码。[@SimulatedAnneal](https://x.com/SimulatedAnneal/status/2112936831398375800)（1,243 粉，10-21，❤1,354 👁152,225）称在没有调优配方的设置下，效果匹配或超过一次性最佳配方。
- [google/mantis](https://github.com/google/mantis) · ⭐2,530 · 提及 3 天 · 模块化工具包，让编码 Agent 自主发现、复现并修补漏洞。[@RoundtableSpace](https://x.com/RoundtableSpace/status/2112397145412091969) ❤802 👁95,636。
- [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) · ⭐21,206 · 提及 2 天 · skill 安全扫描器，覆盖 71 种攻击模式、17 类，给出 0 ~ 100 风险分。[@RoundtableSpace](https://x.com/RoundtableSpace/status/2113114370406293672)（10-21，❤539 👁65,587）。
- [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) · ⭐4,981 · 提及 1 天 · 录一次屏幕操作，用 GitHub Copilot SDK 生成可复用 skill 或定时自动化。[@RoundtableSpace](https://x.com/RoundtableSpace/status/2113891994128822631)（10-24，❤1,005 👁95,326）。

另有一组 Opus 5.5 视频类仓库被打包推广，如 [awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos)（⭐10,865）、[mg-styles-15](https://github.com/Vincentwei1021/mg-styles-15)（⭐2,097）、[PDoomVideo](https://github.com/JohnHeibel/PDoomVideo)（⭐2,575），由同一条自媒体帖带起，👁639,392。

**X / HN / Reddit 讨论最多的话题**（Reddit 本周无数据）

1. Agent 与安全：审计 skill、skill 供应链、事件响应
   - [@jurbed 推荐 Cloudflare 审计 skill](https://x.com/jurbed/status/2112973191157252103)（❤8,721 👁594,554）。
   - [@OpenAI 发布 Codex 检查 skill php2shell-checker](https://x.com/OpenAI/status/2112945805686604033)（5,464,574 粉，10-21，❤9,171 👁1,364,604）。
   - [@AM09_21 用 Coding Agent 检查 eMudhra 中间 CA 密钥泄露对设备的影响](https://x.com/AM09_21/status/2112897200531640416)（40,025 粉，10-21，❤1,770 👁1,482,859）。
   - HN：[OpenShell](https://news.ycombinator.com/item?id=50198675)（458 分/205 评，10-22）。

2. rea 与「AI 逆向被限制」之争
   - [@0x0SojalSec](https://x.com/0x0SojalSec/status/2113751276320399694)（❤11,831 👁799,288）。
   - [@Pirat_Nation](https://x.com/Pirat_Nation/status/2114069664875557083)（❤4,934 👁267,842）。
   - HN：[REA 原帖](https://news.ycombinator.com/item?id=50028275)（814 分/340 评，10-10）。
   - 限制一说无官方确认。

3. 个人 Agent 平台与多 harness 编排
   - [1Password for Agents](https://x.com/1Password/status/2113276767582498943)（146,693 粉，10-22，❤10,513 👁1,743,086）：Agent 请求凭据，经用户批准后由 1Password 自动填入，Agent 看不到密码。
   - [HarnessRouter 让 Grok Bot 调度 Codex/Hermes/Claude Code/DeepSeek Harness](https://x.com/_avichawla/status/2113954302901256597)（❤1,105 👁105,097，营销腔）。
   - [Google Harness²](https://x.com/Sumanth_077/status/2113948384113598588)（❤326 👁15,772）：固定权重，递归改进 harness（Propose→Probe→Compose）。
   - [@AlexFinn 称 Anthropic 将发布个人 Agent「Duet」](https://x.com/AlexFinn/status/2112990775202185437)（485,393 粉，❤1,513）：传闻，未证实。
   - HN：[Corgi agent/terminal 多路复用器](https://news.ycombinator.com/item?id=50214373)（113 分/31 评）。

4. 记忆、RAG 与缓存成本
   - [Raw-RAG 推文](https://x.com/omarsar0/status/2113635562578178147)（❤896 👁47,893）。
   - [@akshay_pachaar 讲 4 类 LLM 缓存](https://x.com/akshay_pachaar/status/2113617883456766031)（291,760 粉，10-23，❤325 👁16,641）。
   - HN：[Skyvern progressive disclosure](https://news.ycombinator.com/item?id=50222826)（19 分）。

5. HN 上的大议题：形式化验证与对 AI 的限制
   - [Anthropic：LLM 让大规模形式化验证可行](https://news.ycombinator.com/item?id=50202217)（394 分/241 评）。
   - [瑞典政府办公室拟禁用 ChatGPT 和 Claude](https://news.ycombinator.com/item?id=50207405)（271 分/93 评）。
   - [r/opensource 禁止单人项目和使用 LLM 的项目](https://news.ycombinator.com/item?id=50231722)（55 分/61 评，10-25）。

## 下周值得关注

1. [morluto/rea](https://github.com/morluto/rea)：日增稳定在 +5.5k 左右，要看「Claude 限制逆向」是否被官方确认或辟谣；确认的话，替代方案和本地模型可能升温。+88,243 的周增口径与日增不符，需要验证。
2. 安全审计 skill 与 skill 供应链安全：[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 日增逐日走高（10-25 达 +2,744），[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)、[google/mantis](https://github.com/google/mantis) 和 OpenAI 的检查 skill 同期被讨论，大概率继续走高。「无误报」这类说法目前只来自小号转述，需要验证。
3. 检索/记忆项目能否扛住朴素基线：[xerj-org/xerj](https://github.com/xerj-org/xerj) 已从 +1,180 掉到 +255，[NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) 和 [anthropics/sandbox-runtime](https://github.com/anthropics/sandbox-runtime) 同步降温；Raw-RAG 与 RAG 组合评测让 [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)、xerj、[akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) 面临基线对比。另需留意 [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) 的合规与隐私争议是否发酵，以及 hallmark（日增 +1,477）和 cindy（日增 +719）这两个几乎没有可见 X 讨论的项目，增长来自哪里。
