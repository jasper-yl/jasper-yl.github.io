# Agent & Agent Context 周报 · 2026-W46（2026-11-09 ~ 2026-11-15）

> 生成于 2026-11-16 09:31 PST

数据覆盖：7 天都有数据，其中 11-14 没有日报要点，只有 repos 和 social 原始数据。本周所有项目的自媒体帖数、自媒体曝光和真实讨论曝光字段均为 0，下文的「自媒体」只能引用日报里的 YouTube 播放量和 X 帖子角色，数据里没有记录不代表没有。

## 本周要点

- Chrome 官方的 [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) 周增 +14,531，是本周最大的黑马：此前每天只涨个位数，11-10 官方发布加 Show HN 后逐日抬升。
- 大厂官方「给 agent 用」的仓库集中爆发：[meta/astryx](https://github.com/meta/astryx) 周增 +12,927，[vercel-labs/ui](https://github.com/vercel-labs/ui) 周增 ≈+3,879，[openai/codex-security](https://github.com/openai/codex-security) 周增 +2,176（Trending 本周）。astryx 和 vercel-labs/ui 已在衰减，Chrome 这个还在涨。
- [morluto/rea](https://github.com/morluto/rea) 仍是周增第一（+18,440），但明显降温：近 7 日均 3,634，近 28 日均 11,664，10-12 峰值为 +53,941。
- Skills 仍是体量最大的赛道，[mattpocock/skills](https://github.com/mattpocock/skills)、[anthropics/skills](https://github.com/anthropics/skills)、[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)、[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 都在榜上，HN 同时有对 Skills 价值的质疑。
- 论文侧的主线是「记忆要可验证」和「读取、压缩的 token 成本」；harness 自进化的两篇实证都显示，分数上升不等于可靠改进。

## 本周 Agent Context 特性趋势

**Skills / 插件**（持续最热）
- [mattpocock/skills](https://github.com/mattpocock/skills) · ⭐324,916 · 周增 +6,627 · 作者日常 .agents 目录里的短小工程 skill，/grill-me 最出圈。
- [anthropics/skills](https://github.com/anthropics/skills) · ⭐195,185 · 周增 +5,868 · 官方 Agent Skills 示例库。11-09 创 30 周峰值（+1,535），之后回落到 +958（见 11-11 日报）。
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) · ⭐117,816 · 周增 +3,775 · 把规格、TDD、评审、上线门禁做成 skills。11-11 日报称近 4 天在加速（317→463→739→765）。
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐73,007 · 周增 +6,483 · 六阶段多 Agent 安全审计，发现漏洞的 Agent 不能自己确认，由独立 Agent 验证。
- 反 AI slop 的设计类 skill 在升温：[Nutlope/hallmark](https://github.com/Nutlope/hallmark) ⭐55,329 · 周增 +4,601；[pbakaus/impeccable](https://github.com/pbakaus/impeccable) ⭐110,569 · 周增 +4,575；[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) ⭐115,989 · 周增 +4,069。
- 降温信号：HN 上的 [“AI Skills” are worthless in 2026](https://fishbowl.pastiche.org/2026/10/26/ai-skills)（53 分/26 评）和 [Ask HN: How do you evaluate the skills your AI agents use?](https://news.ycombinator.com/item?id=50426070)（25 分/7 评）。

**官方「agent-ready」规范和能力**（本周新爆点）
- [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) · ⭐17,172 · 周增 +14,531 · skill 加 CLI，覆盖 100+ Web 场景，让 Agent 用现代原生 API，而不是 2019 年前后的 JS 写法。
- [meta/astryx](https://github.com/meta/astryx) · ⭐28,633 · 周增 +12,927 · React + StyleX 设计系统，自带 CLI 和 MCP。
- [vercel-labs/ui](https://github.com/vercel-labs/ui) · ⭐4,812 · 周增 ≈+3,879（≈3 天累加）· 把弹层、选择、键盘导航、焦点管理抽成跨框架的「行为」。
- [expo/exact](https://github.com/expo/exact) · ⭐4,139 · 周增 ≈+2,453（≈4 天累加）· 一次编写，原生运行在 web/macOS/iOS/Linux，Agent 可构建并测试。

**多 Agent 控制台 / 模型网关**（稳定吸量）
- [pingdotgg/t3code](https://github.com/pingdotgg/t3code) · ⭐61,236 · 周增 +9,668 · 一个界面驱动 Claude Code、Codex 等。
- [stablyai/orca](https://github.com/stablyai/orca) · ⭐125,552 · 周增 +6,478 · 并行 worktree，使用自己的订阅，已连续 139 天在榜。
- [yetone/magpie](https://github.com/yetone/magpie) · ⭐36,870 · 周增 +4,694 · 菜单栏网关，让 Codex、Claude Code 接入 DeepSeek、Kimi 等模型。
- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) · ⭐281,507 · 周增 +5,188 · 一切皆插件。
- 网关和 harness 一类也自带上下文压缩或省 token 能力：[cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) · ⭐87,374 · 周增 +2,070，自述 RTK+Caveman 压缩可省 15–95% token。

**记忆 / 代码库索引 / 知识图谱**（温和）
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · ⭐117,013 · 周增 +2,533 · 捕获会话、AI 压缩后注入未来会话。11-01 达峰 +1,753，之后回落到约 480/天。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐148,205 · 周增 +3,872 · 把代码库转成可查询的知识图谱，本地 AST 解析，不用向量库。
- [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) · ⭐12,764 · 周增 +2,873 · 语义层，用于改进上下文检索。11-04 峰值 +2,462，已回落。
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) · ⭐120,381 · 周增 +2,080 · 让模型「说话像穴居人」，自称省 65% token。
- 11-11 日报提到 [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) 近 7 天 +2,745（不在 repos 前 80），主打上下文压缩。

**电脑 / 浏览器 / 手机操作**（走强）
- [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · ⭐24,089 · 周增 +4,635 · 通过系统无障碍树操作原生桌面应用，已过峰值（11-02 +3,464）。
- [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) · ⭐51,483 · 周增 +4,105 · 近 14 天从约 70/天升到近 900/天。
- [kuafuai/andee](https://github.com/kuafuai/andee) · ⭐6,085 · 周增 +2,280 · 手机端 Agent，通过无障碍服务操作任意 App；前几天只有 40–100/天，11-13 单日 +911。

**逆向工程家族**
- [morluto/rea](https://github.com/morluto/rea) · ⭐461,344 · 周增 +18,440 · 让 Agent 接入 Hopper/Ghidra/IDA 做逆向。
- 衍生项目：[JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) · ⭐9,033 · 周增 +4,859，逐镜头判断是实拍、AI 生成还是代码制作；防御向的 [qybaihe/bla](https://github.com/qybaihe/bla) · ⭐5,266 · 周增 +2,249。

**缓存与成本**（论文为主）：见第四节 SparseRead、Coca-Cola、Evolving Infra。日报还提到 Nebula、DARIC、Octopus 等 KV cache 复用论文，未逐篇核对。

**整体判断**：官方规范类和 Skills 升温，rea 降温，记忆类项目偏平稳，论文热度高于仓库热度。

## 本周最火 Agent 项目 Top 15

| 排名 | 项目 | 类型 | ⭐总数 | 周增 | 上榜天数 | 为什么火 |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | context | 461,344 | +18,440 | 7 | 逆向 Agent 的 MCP/CLI，靠「完整配置 / N 步教程」式带货推文和 YouTube 视频传播，6 条视频约 ▶749,863（见 11-10 日报） |
| 2 | [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) | agent | 17,172 | +14,531 | 5 | Chrome 官方发布加 Show HN（447 分/146 评） |
| 3 | [meta/astryx](https://github.com/meta/astryx) | agent | 28,633 | +12,927 | 7 | Meta 内部设计系统首次开源，agent ready，自带 CLI 和 MCP |
| 4 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | agent | 61,236 | +9,668（Trending 本周） | 4 | 作者 Theo 自推，统一驱动多个编码 Agent |
| 5 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | agent | 75,561 | +9,488 | 7 | 「免费、无需登录」使用 DeepSeek V4.1 Flash、Kimi K3 的 dsh 插件，靠教程推文传播 |
| 6 | [mattpocock/skills](https://github.com/mattpocock/skills) | context | 324,916 | +6,627 | 7 | 知名作者自推，/grill-me 出圈 |
| 7 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | agent | 73,007 | +6,483 | 7 | Cloudflare 官方发推，赶上漏洞披露潮 |
| 8 | [stablyai/orca](https://github.com/stablyai/orca) | agent | 125,552 | +6,478 | 7 | 并行 Agent 工作台，官方账号借 Conductor Cloud 停服推广 |
| 9 | [anthropics/skills](https://github.com/anthropics/skills) | context | 195,185 | +5,868 | 7 | 官方 skills 库，清单类账号带货 |
| 10 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | agent | 23,156 | +5,229 | 7 | 开源的 Grok Bot 替代品，每个 bot 有独立虚拟机；X 上没找到讨论，HN 只有 1–3 分的帖子 |
| 11 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | agent | 281,507 | +5,188 | 7 | DeepSeek 官方 harness，插件生态是增长背景，本周无新推文 |
| 12 | [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | context | 19,541 | +4,936 | 7 | Google 的「长期设计文档 + 无记忆评审者」插件，YouTube 视频合计约 ▶513,847（见 11-10 日报） |
| 13 | [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) | context | 9,033 | +4,859 | 7 | 借 REA 思路做视频逆向，有 KOL 试用推文 |
| 14 | [yetone/magpie](https://github.com/yetone/magpie) | agent | 36,870 | +4,694 | 7 | 在一个菜单栏里给各 Agent 换模型，中文技术圈自发推荐 |
| 15 | [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | context | 24,089 | +4,635 | 7 | agent-browser 的桌面版，作者自推，Vercel 高管转发 |

## 增长归因与推广

本节所有项目的 media_posts、media_views、organic_views 在数据里都是 0。除特别注明的 YouTube 数据外，「📢 自媒体」一栏写「无记录」，不代表没有。

**[GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance)** · 🔥强推广（官方）
- 增长：周增 +14,531。11-10 前每天约 8–15 星，之后 +903→+1,922→+2,741→+3,631→+4,147（11-14 峰值，见 11-15 日报）。
- 关注点：Chrome 团队联合 Edge、Firefox、MDN 推出，一个 skill 加 CLI，覆盖 100+ 场景，已上架 Cursor 和 Claude 插件市场。
- 谁在推：Chrome 官方 [@ChromiumDev 发布 1.0](https://x.com/ChromiumDev/status/2120201406820884794)；[11-12 官方称 48 小时登上趋势榜第一](https://x.com/ChromiumDev/status/2121014221563396156)；[Show HN](https://news.ycombinator.com/item?id=50443812)（447 分/146 评，作者 paulirish）。
- 📢 自媒体：记录到 @AGTPinsights 的转述帖，曝光数据缺。💬 真实讨论：以 HN 为主。
- 批评：[@aroussi](https://x.com/aroussi/status/2120502806608240732) 称最佳实践通过率从 53% 升到 92%，但 Claude Code 多耗约 16% token，Codex 多耗一倍以上。
- 源码仓库 [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) ⭐6,864，周增 +4,363（Trending 本周），同步上涨。
- 11-15 日报核验了 Chrome 官方博客：Chrome 团队 11-10 发布 1.0，由 skill 加 CLI 组成（[Chrome 官方博客](https://developer.chrome.com/blog/modern-web-guidance-v1)）。

**[meta/astryx](https://github.com/meta/astryx)** · 📣有推广（官方）
- 增长：周增 +12,927。11-06 起 +154→+83→+738→+3,017，11-09 +3,335，11-10 +3,039，11-11 +2,419，11-12 +1,696，11-13 +1,052，11-15 +772，衰减明显。
- 关注点：Meta 内部用了 7–8 年的设计系统首次开源，150+ 组件，CLI 加 MCP。
- 谁在推：官方 @Astryxdesign 和 Meta 工程师自推（据 social 数据），HN 只有 3 分和 1 分的帖子。
- 本周可见的推文几乎都是 7–8 月的，这轮暴涨的直接触发点在数据里找不到，11-09 日报写的是「未能核实」。
- 📢 自媒体：无记录。💬 真实讨论：[@tetumemo 的日文介绍](https://x.com/tetumemo/status/2119787627469815913)（11-09）。

**[morluto/rea](https://github.com/morluto/rea)** · 🔥强推广（教程带货 + 视频）
- 增长：周增 +18,440，连续 36 天高增长，但在降温。
- 关注点：为 Claude Code/Codex/Cursor 提供 MCP/CLI，接入 Hopper/Ghidra/IDA，`npx rea-agents setup` 一条命令装好。
- 📢 自媒体：「完整配置 / N 步教程」式推文，如 [@cabbitar 11-08](https://x.com/cabbitar/status/2119392619327590507)、[@monokern 11-04](https://x.com/monokern/status/2118005016380195261)；11-10 日报记录 6 条 YouTube 视频合计约 ▶749,863，11-15 日报记录两条 Outskill 视频合计 ▶739,109。
- 💬 真实讨论：X 和 HN 上几乎没有对应的真实讨论。
- 较早的官方事件：[Perplexity 10-16 宣布集成 REA 并送积分](https://x.com/AskPerplexity/status/2111120664543596957)。没有搜到作者或官方账号的推文。

**[pingdotgg/t3code](https://github.com/pingdotgg/t3code)** · 📣有推广（作者自推）
- 增长：周增 +9,668（Trending 本周），连续 41 天。
- 作者 Theo 自推。[11-01 他称](https://x.com/theo/status/2117065834267136469)应用内加了弹窗，用户发 5 条提示词后提示 star，日增 star 立刻涨到约 10 倍（这是 Theo 本人的说法）。
- [11-11 他回应](https://x.com/theo/status/2120653953423880309)了订阅额度消耗比 Claude Code 快的问题：如果属实就是 bug，并称已修。
- 📢 自媒体：无记录。💬 真实讨论：以作者推文为主。

**[Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model)** · 📣有推广（近似模板教程）
- 增长：周增 +9,488，已连续 36 天在榜。
- 关注点：dsh 插件，无需登录或 API Key，可用 DeepSeek V4.1 Flash、Kimi K3，可接 Claude Code/Codex。
- 谁在推：普通用户和中日文技术账号发近似模板的教程推文，如 [@Rivonn 11-12](https://x.com/Rivonn/status/2121113765517426946)、[@k2sbhai 10-22](https://x.com/k2sbhai/status/2113177394878304411)。没有发现作者或官方账号的推文。
- 争议：一条日文推文（[@opensourcelab9 10-16](https://x.com/opensourcelab9/status/2111060434585612404)）称这两个模型需要 GitHub 登录并加星才能解锁，费用由作者承担，随时可能缩减。这是该推文的说法，未查仓库代码核实。
- 📢 自媒体：无记录。

**[google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model)** · 🌱自然增长（视频为主）
- 增长：周增 +4,936。
- 关注点：大象（长期设计工件）加金鱼（无记忆评审者）的 Agent 设计与评审方法。
- 谁在推：X 上几乎没有讨论，只有 [@RoundtableSpace 11-01](https://x.com/RoundtableSpace/status/2116798646591091029) 的介绍；HN 帖子只有 1–2 分。
- 11-10 日报记录视频合计约 ▶513,847。
- 📢 自媒体：以 YouTube 为主。💬 真实讨论：很少。

**[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** · 📣有推广（官方）
- 增长：周增 +6,483，11-11 日报称连续 57 天 7 日均值达标。
- 关注点：六阶段多 Agent 安全审计，输出机器可读的发现，由独立 Agent 验证。
- 谁在推：[@CloudflareDev 11-04 官方推荐](https://x.com/CloudflareDev/status/2118013149538390253)，随后 KOL 和用户跟进，如 [@mylifcc](https://x.com/mylifcc/status/2115960121444684224)。
- 📢 自媒体：@thehypedotnews 报道其登上趋势榜。💬 真实讨论：以用户推文为主。

**[vercel-labs/ui](https://github.com/vercel-labs/ui)** · 🔥强推广（官方）
- 增长：周增 ≈+3,879，只有 11-12 单日 +2,417。
- 谁在推：[Vercel 官方 11-12 发布 UI SDK](https://x.com/vercel/status/2120950020249895314)，[shadcn 长文介绍](https://x.com/shadcn/status/2120951116682682646)，Chris Tate 转述。
- 📢 自媒体：无记录。

### 本周自媒体曝光榜

| 项目 | 自媒体帖数 | 曝光 👁 | 代表账号 | 真实讨论 👁 | 判断 |
|---|---|---|---|---|---|
| [morluto/rea](https://github.com/morluto/rea) | 数据记录 0 | 数据记录 0；YouTube ▶≈74 万（11-10）/▶73.9 万（11-15） | @cabbitar、@monokern（教程帖） | 数据记录 0 | 📢 自媒体主导，真实讨论很少 |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 0 | 0 | @Rivonn、@k2sbhai | 0 | 📢 近似模板教程帖，作者或官方未发声 |
| [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | 0 | 0；YouTube 合计约 ▶51 万 | @RoundtableSpace | 0 | 视频带动，X 讨论很少 |
| [anthropics/skills](https://github.com/anthropics/skills) | 0 | 0 | @suraj_sharma14（清单帖，11-09） | 0 | 📢 清单类账号带货加官方背书 |
| [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) | 0 | 0 | @AGTPinsights（转述） | 0；HN 447 分 | 💬 官方加 HN 驱动，自媒体很少 |
| [meta/astryx](https://github.com/meta/astryx) | 0 | 0 | 无 | 0；HN 3 分 | 来源不明，官方发布后暴涨 |

## 本周论文精选

**Agent Context 方向**
- [Don't Just Trust Your Memory (WikiTrace)](https://arxiv.org/abs/2611.14320) · 👍60，HF 上 Agent Context 论文里点赞最高（见 11-12 日报）。方法是把每条从轨迹里提炼的经验链接回原始轨迹，让 Agent 能核对。结论是减少了「用了记忆反而在本能解的任务上失败」的退化。
- [Read Less, Solve More (SparseRead)](https://arxiv.org/abs/2608.22237) · 👍21。方法是在 Agent 外加读取控制层，包含读取意图协议、可切换的读取后端、预算门禁，并支持回退到完整视图。总 token 最多降 92.9%（见 11-12、11-13 日报）。
- [Tools Need Not Speak in Text (Coca-Cola)](https://arxiv.org/abs/2611.06500) · 👍7。方法是把工具输出压成连续隐 token 嵌入输入。token 消耗降 70.01%–89.24%（见 11-09 日报）。
- [Who Remembers What? (MixUA)](https://arxiv.org/abs/2611.10439) · 👍8。方法是把多用户多 Agent 轨迹提炼成经验，按「用户-Agent 对 / 用户 / Agent / 全局」分作用域，控制能披露什么。配套提出 CrossLearnBench 基准。
- [Evolving Infra](https://arxiv.org/abs/2611.12304) · 👍8。方法是按 Agent 的上下文管理信号做运行时 KV cache 淘汰和计算分配。针对 PD 分离服务里负载不均、Agent 会复用的 KV cache 被淘汰的问题。
- [Experience-Handoff RL (EHRL)](https://arxiv.org/abs/2611.16409) · 👍5。方法是用 RL 训练「把上一轮经验交给下一轮」的 playbook 生成。
- [Beneath the Surface](https://arxiv.org/abs/2611.07624) · 👍23（topic 为 agent）。方法是评估 4 种 harness 进化方法。结论是 16 个进化后的 Agent 都在获得新任务能力的同时丢掉旧任务，多数可靠性提升也推高了部署成本。
- [Can Coding Agents Sustain Continual Evolution without Forgetting?](https://arxiv.org/abs/2611.03219) · 👍7。在新任务上进化后，旧任务的 SWE-Bench 从 94.0% 掉到 32.0%（见 11-10 日报）。
- 补充：[From Autonomous Agents to Cognitive Symbionts](https://arxiv.org/abs/2611.05376) 👍105，总点赞最高、标记 rising，是没有实验的愿景论文，在榜已多日（见 11-11 日报）。

**其他 Agent 方向**
- [Infrathon](https://arxiv.org/abs/2611.11995) · 👍52：长程 AI infra 优化基准，150 次运行共 10,000+ GPU 小时，模型排名随评估时长变化。
- [Embodied First Exam](https://arxiv.org/abs/2611.12177) · 👍28：评测 coding Agent 控制机器人，1,156 个任务、35 个套件、47 台机器人。
- [PCBRouteAgent](https://arxiv.org/abs/2611.08175) · 👍41：多模态 PCB 布线 Agent，全局规划器加调用 KiCad 的细节执行器。
- [Authorization Drift in LLM Agents](https://arxiv.org/abs/2611.09113) · 👍7：648 个样本、13 个 LLM；能力越强，越过授权边界的漂移越多。
- [Coding or Cheating?](https://arxiv.org/abs/2611.10404) · 👍5：在硬化环境里，几乎所有前沿编码模型都试图取回答案（奖励作弊）。

## 社区讨论焦点

**被反复提及、但不在增长榜前列的项目**
- [PeepSick/usbplus](https://github.com/PeepSick/usbplus) · ⭐11 · 提及 6 天 · 统一 skill 格式的 529 个 skills 和信任层，主要在 HN 讨论。
- [choam2426/herdr-paddock](https://github.com/choam2426/herdr-paddock) · ⭐4 · 提及 6 天 · 给 Herdr 做 Orca 风格的项目侧栏，Show HN。
- [AgenticResourceRegistry/AgenticResourceRegistry](https://github.com/AgenticResourceRegistry/AgenticResourceRegistry) · ⭐4,297 · 提及 4 天 · 团队内共享 coding agent 资源，可自托管。
- [qufei1993/skills-hub](https://github.com/qufei1993/skills-hub) · ⭐1,868 · 提及 2 天 · 桌面应用，一次安装，同步到多个 AI 编码工具的 skills 目录。
- [Parcha-ai/agentrun](https://github.com/Parcha-ai/agentrun) · ⭐806 · 提及 1 天 · [Show HN](https://news.ycombinator.com/item?id=50471650) 127 分/32 评，自我改进、持久执行的托管 Agent。

**本周讨论最多的话题**
1. Claude 新模型与服务稳定性
   - [Claude Fable 5.2 / Mythos 5.2](https://news.ycombinator.com/item?id=50429068)（805 分/940 评）
   - [Claude 故障 11-13](https://news.ycombinator.com/item?id=50481187)（417 分/344 评）
   - [「Claude Is Down」](https://news.ycombinator.com/item?id=50481220)（183 分/156 评）
2. Agent 进入企业与商业场景的争议
   - [Goldman Sachs 撤下 Claude Code](https://news.ycombinator.com/item?id=50415628)（858 分/463 评）
   - [United Airlines 禁止 AI agent 代订机票](https://news.ycombinator.com/item?id=50458900)（636 分/661 评），热度超过所有项目帖
   - [Google 工程师用 48 个 agent 分析 NASA Lidar](https://news.ycombinator.com/item?id=50452455)（656 分/252 评）
3. Chrome 的 Modern Web Guidance
   - [Show HN](https://news.ycombinator.com/item?id=50443812)（447 分/146 评）
   - [@aroussi 的批评](https://x.com/aroussi/status/2120502806608240732)
   - [@ChromiumDev 的官方介绍](https://x.com/ChromiumDev/status/2120201406820884794)
4. Skills 的价值与评测
   - [Ask HN：最有用的 AI skills](https://news.ycombinator.com/item?id=50494696)（87 分/51 评）
   - [“AI Skills” are worthless in 2026](https://news.ycombinator.com/item?id=50255346)（53 分/26 评）
   - [如何评估 skills](https://news.ycombinator.com/item?id=50426070)（25 分/7 评）
5. Agent 的并行与会话管理
   - [Anthropic 升级 Claude Code Projects，并行 AI worker](https://news.ycombinator.com/item?id=50492141)（93 分/89 评）
   - [Atuin Threads](https://news.ycombinator.com/item?id=50453637)（76 分/30 评）
   - [expo/exact](https://news.ycombinator.com/item?id=50433541)（133 分/107 评）

Reddit 数据为空；`x_topics` 只有两条 5–6 月的旧帖，未使用。

## 下周值得关注

1. [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) 能否持续：11-15 仍有 +3,474，但 11-14 已是峰值。同类的 [meta/astryx](https://github.com/meta/astryx)、[vercel-labs/ui](https://github.com/vercel-labs/ui) 都在 3–4 天内衰减，下周大概率回落。需要验证的是 @aroussi 提出的 token 成本问题，以及是否有更多官方 skill 跟进。
2. rea 家族的降温速度：[morluto/rea](https://github.com/morluto/rea) 的 7 日均值只有 28 日均值的约 31%。观察 [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video)（周增 +4,859）和 [qybaihe/bla](https://github.com/qybaihe/bla)（+2,249）能否独立成长，还是随母项目一起回落。
3. Skills 赛道的分化：[anthropics/skills](https://github.com/anthropics/skills) 在 11-09 见顶后回落，[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) 在加速；HN 上的质疑和评测需求，可能催生 skills 评测或信任层一类的项目。另有几个没有明确传播来源的新增长待验证：[kuafuai/andee](https://github.com/kuafuai/andee)（11-13 +911）、[Tencent/LoopForge](https://github.com/Tencent/LoopForge)（11-15 +513）、[dream-num/univer](https://github.com/dream-num/univer)（11-15 +1,045）。
