# Agent Weekly · 2026-W43 (2026-10-19 ~ 2026-10-25)

> Generated at 2026-10-26 09:32 PDT

Data coverage: only 4 days have daily reports (10-22 to 10-25). 10-19 to 10-21 have none. A few tweets from 10-17 to 10-21 are included and dated by actual post date. Reddit data is empty this week. Most weekly gains are GitHub Trending's weekly figure, which includes 10-19 to 10-21, so they run higher than four days of daily gains added up.

## This week's highlights

- [morluto/rea](https://github.com/morluto/rea) stays #1 with ⭐382,593 and +88,243 this week (Trending's weekly figure), about +5.5k/day over the 4 days. Claims on X that Anthropic added reverse-engineering restrictions to Claude drove heavy organic discussion, but they are user retellings with no official confirmation.
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) is the cleanest organic growth: +12,680 this week, daily gains rising (+2,979 → +2,038 → +2,177 → +2,744), near-zero influencer exposure, 👁1,027,652 of organic discussion.
- Multi-agent orchestration and harnesses became a category: Orca +9,828 this week, the dsh plugin ecosystem around DeepSeek Harness, HarnessRouter letting a Grok bot dispatch to other vendors' harnesses, and Google's Harness² all appeared together.
- Retrieval and memory projects are diverging. xerj has +8,080 this week but its daily gain fell from +1,180 to +255, while graphify holds at +573 to +632/day. The Raw-RAG paper argues plain RAG beats complex memory systems, which puts pressure on this group.
- "Free model" projects and Opus 5.5 video repos grew on distribution, with risks. dsh-our-free-model has ≈+7,286 this week amid privacy and compliance questions. lemo-opuscar and similar repos drew 👁750,397 of influencer exposure with far less real usage feedback.

## Context feature trends

**1. Codebase indexing / retrieval (still heating up, but splitting)**
- [xerj-org/xerj](https://github.com/xerj-org/xerj) · ⭐15,461 · +8,080 this week (Trending) · Single Rust binary that indexes code, docs, logs and PDFs locally, with hybrid BM25 + vector search, an MCP server and agent memory. Daily gains: 10-23 +938, 10-24 +1,180, 10-25 +255, a spike and pullback (see the 10-25 report).
  - Official benchmark (relayed by @vicky_grok): both sides got 16/16 tasks right; output tokens fell from 26,477 to 9,982 (2.7× fewer).
  - In its own case study, Claude Code answering valkey/memcached tasks from memory got 6/6 for $1.49. With the xerj index it got 5/6 for $4.40, which is more expensive. Source: [@himanshu19890](https://x.com/himanshu19890/status/2113108227458318809) (37 followers, based on reading the README).
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐134,868 · +6,868 this week · Local deterministic AST parsing (tree-sitter) turns code, SQL, config and PDFs into a queryable knowledge graph with no vector store, shipped as a /graphify skill. Daily gains: 10-22 +1,407, 10-23 +858, 10-24 +573, 10-25 +632, a gradual decline that then levels off.
  - Joined the Perplexity Computer skill marketplace on 10-21, free until 10-31 ([@AskPerplexity](https://x.com/AskPerplexity/status/2113022451840122886), 387,602 followers, ❤102 👁40,190).
  - A Rust rewrite, [Graphicle](https://news.ycombinator.com/item?id=50088713), appeared on HN (48 points / 15 comments, 10-14).
- Related papers: [Raw-RAG](https://arxiv.org/abs/2610.30755) finds raw chat logs + dense retrieval + reranking ranks first in 6 of 7 benchmark/model settings. [RAG Compositionality](https://arxiv.org/abs/2610.29722) finds techniques that work alone give shrunken gains when stacked (predicted +47%, measured +17%). Retrieval and indexing tools now need to beat a plain baseline. The direction is hot but increasingly questioned.

**2. Memory (heating up, shifting from "store more" to "store usefully")**
- [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) · ⭐13,438 · +3,541 this week · Rust long-term memory for coding agent CLIs, with handoff between different agent vendors.
- [Asymptote-Labs/agent-beacon](https://github.com/Asymptote-Labs/agent-beacon) · ⭐2,601 · +920 this week (on the list 1 day) · Self-improving memory layer across harnesses; it captures sessions from each harness into a shared index. Recommended by [@_avichawla](https://x.com/_avichawla/status/2112862391268688291) (79,311 followers, 10-21, ❤633 👁61,080) in a promotional tone.
- Papers: MemT-1.0 and MCCL put memory inside the model or judge it by whether it improves future actions (see Paper picks).
- Growth here clusters around cross-harness handoff. Real user feedback is scarce in the data.

**3. Context compression / caching and cost (still hot, selling on token savings)**
- [mksglu/context-mode](https://github.com/mksglu/context-mode) · ⭐32,087 · +2,271 this week · Sandboxes tool output (claims a 98% reduction), persists session memory, connects to 17 platforms via MCP + hooks.
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) · ⭐114,956 · +2,419 this week · Skill + proxy that makes the model talk like a caveman, claiming 65% fewer tokens.
- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) · ⭐175,935 · ≈+4,644 this week · Makes the agent reuse what the repo, standard library or browser already provides before writing code. The author's own test: code -53%, cost -26%, high-risk logic shipped with tests 98% vs 68% (relayed by [@TheoVanceln](https://x.com/TheoVanceln/status/2113340653983646187); the project's own test, not third-party).
- Papers: [Cache Engineering for Agents](https://arxiv.org/abs/2610.28577) lets the agent control the live KV cache directly, so unchanged prefixes don't trigger re-prefill. [CarryOn](https://arxiv.org/abs/2610.18784) organizes context around reusable task objects.
- HN: [Skyvern, "agent 2.3× faster after removing RAG"](https://news.ycombinator.com/item?id=50222826) (19 points / 2 comments).
- Research is moving from "compress history" to "don't break the cache / organize by progress". Tools are still quoting self-reported numbers like "98% / 65% savings".

**4. Skills / plugins (the dominant distribution format; security auditing is the strongest theme)**
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐46,163 · +12,680 this week · Multi-stage security audit skill; findings are independently verified and machine-readable.
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) · ⭐44,480 · +3,232 this week · Anthropic's official plugin directory. [cursor/plugins](https://github.com/cursor/plugins) (⭐13,870 · +1,729 this week) and [vercel-labs/skills](https://github.com/vercel-labs/skills) (⭐36,494 · +1,077 this week) also charted.
- Counterforce, skill supply-chain security: [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) (⭐21,206) scans skills. A stat quoted by @RoundtableSpace says 26.1% of 31,132 skills contain vulnerabilities and 5.2% look malicious (from that tweet, not independently checked).
- Paper: [Socratic Skill Learning](https://arxiv.org/abs/2610.17860) (👍47) has a Student write skills while practicing under expert guidance.

**5. MCP / runtime / multi-agent orchestration (heating up, but sandboxes cooling)**
- [stablyai/orca](https://github.com/stablyai/orca) · ⭐105,478 · +9,828 this week · Runs several coding agents in parallel (Codex, Claude Code, OpenCode, Pi), each in its own git worktree, on your own subscriptions, with a mobile client. Daily gains: 10-22 +1,694, 10-23 +848, 10-24 +1,122.
- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) · ⭐261,223 · ≈+3,125 this week · "Everything is a plugin"; the dsh plugin ecosystem is forming (rea, archify, ruflo and others carry a dsh-plugin tag).
- [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) · ⭐19,780 · +3,189 this week · Secure private runtime for autonomous agents, driven by HN; daily gains +978 → +779 → +556, declining. [anthropics/sandbox-runtime](https://github.com/anthropics/sandbox-runtime) (⭐6,581) had a Trending daily value of +592 on 10-24 and +208 on 10-25.
- Orchestration tools are rising. Sandboxes/runtimes fell back after the HN event.

**6. Model access / free gateways (hot, high risk)**
- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model), [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) (⭐41,361 · +4,402 this week), [yetone/magpie](https://github.com/yetone/magpie) (⭐21,316 · ≈+2,501 this week; a local gateway that lets Codex use DeepSeek and Claude Code use Kimi). Details in the growth section.

## Top 15 Agent projects this week

Dropped as weakly related to agents: free-my-tv (TV desktop), MoneyPrinterTurbo (short-video generation), vllm and ollama (inference engines). Ranked by weekly gain.

| # | Project | Type | ⭐ Total | This week | Days on list | Why it's hot |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | context (MCP reverse engineering) | 382,593 | +88,243 (Trending weekly, see note) | 4 | Agent drives Ghidra/Hopper to reverse any app. The "Claude restricted from reverse engineering" dispute produced 👁1.7M of organic discussion on X; the 10-10 HN post has 814 points / 340 comments |
| 2 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | agent (skill) | 46,163 | +12,680 | 4 | Audit skill from Cloudflare; one @jurbed recommendation got 👁594,554, almost all organic |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | agent (orchestration) | 105,478 | +9,828 | 4 | Parallel coding agents with worktree isolation, on your own subscriptions |
| 4 | [xerj-org/xerj](https://github.com/xerj-org/xerj) | context (retrieval/MCP) | 15,461 | +8,080 | 4 | Local single-binary search, claims 2.7× fewer output tokens; Corpus Hub contributors promote it on their own |
| 5 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | agent (model plugin) | 42,645 | ≈+7,286 | 4 | No login, no API key for DeepSeek V4.1 Flash and Kimi K3; "free" is the hook |
| 6 | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | context (knowledge graph) | 134,868 | +6,868 | 4 | Codebase-to-knowledge-graph skill; roundup posts drew 👁515,964, plus a Perplexity Computer listing |
| 7 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | agent | 221,420 | +6,857 | 4 | Open-source coding agent, the default target for many harnesses and gateways; no dedicated social post this week |
| 8 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | context (video) | 71,916 | +5,633 | 4 | "Write HTML, render video, built for agents"; 9 roundup posts, 👁210,391 |
| 9 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | context (skill) | 175,935 | ≈+4,644 | 4 | "Write less code" skill, self-tested -53% code; pushed by roundup posts |
| 10 | [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | context (gateway) | 41,361 | +4,402 | 4 | Merges 34 free LLM providers into one /v1 endpoint, claims 7.4B tokens a month |
| 11 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | context (memory) | 13,438 | +3,541 | 4 | Long-term memory for coding CLIs, handoff across vendors |
| 12 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | context (swarm) | 79,198 | +3,241 | 4 | Multi-agent swarm harness with adaptive memory and vector RAG |
| 13 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | agent (plugin directory) | 44,480 | +3,232 | 4 | Official plugin directory; Epic's Unreal plugin ships through it (@RoundtableSpace ❤5,186 👁314,658) |
| 14 | [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | agent (runtime) | 19,780 | +3,189 | 4 | Driven by an HN post (458 points / 205 comments, 10-22) |
| 15 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | agent (harness) | 261,223 | ≈+3,125 | 3 | Base of the dsh plugin ecosystem, about +1,000 to +1,127/day |

Note on rea: the +88,243 figure is Trending's weekly number and does not match the daily gains. Daily gains on 10-23, 10-24 and 10-25 were +5,853, +5,465 and +5,896, and stars rose only about 11k, from 371,232 on 10-23 to 382,593 on 10-25. Summing daily gains puts the week at roughly 20k to 30k, so go by the daily trend. Not verified online.

## Growth attribution and promotion

**1. [morluto/rea](https://github.com/morluto/rea)** · ⭐382,593 · +88,243 this week (basis above)
- Why people care: an agent reverse-engineers any app or binary via MCP + Ghidra/Hopper, installed with one line, `npx rea-agents setup`.
- 📢 Influencer exposure: 7 posts / 👁162,344. Accounts: @88n77n @DanielZambrini @ch3nweiii @rakib_hossen_ai @sammy_capital @wquguru. Representative: [@sammy_capital](https://x.com/sammy_capital/status/2113733817596834151), a learning-path roundup (2,739 followers, 10-23, ❤3,790 👁122,946).
- 💬 Organic discussion: 17 posts / 👁1,709,879. Representative: [@0x0SojalSec](https://x.com/0x0SojalSec/status/2113751276320399694) saying "Anthropic killed REA" (63,013 followers, 10-23). [Another post](https://x.com/0x0SojalSec/status/2113751276320399694) from the same account cited a Samsung TV being rooted, ❤11,831 👁799,288. [@Pirat_Nation](https://x.com/Pirat_Nation/status/2114069664875557083) (369,752 followers, 10-24, ❤4,934 👁267,842) said users report Claude triggering safety checks while doing reverse engineering with REA.
- 🌱 Organic growth (event-driven). Organic exposure is about 10× the influencer exposure. The "Anthropic restriction" claim is a rumor passed along by users, with no official confirmation in the data. The 10-24 report judged that all exposure came from roundup posts; the full-week data overturns that.

**2. [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** · ⭐46,163 · +12,680 this week
- Why people care: a multi-stage audit skill Cloudflare uses internally. Findings are independently verified, and it runs on any harness and any model, including free ones.
- 📢 Influencer exposure: 2 posts / 👁35, essentially zero. 💬 Organic discussion: 19 posts / 👁1,027,652.
- Who's pushing: KOLs recommending it unprompted. Representative: [@jurbed](https://x.com/jurbed/status/2112973191157252103) (14,620 followers, 10-21, ❤8,721 👁594,554): "Run it on all your software… Run it with the free models."
- 🌱 Organic growth, the cleanest case this week. Daily gains of +2,979, +2,038, +2,177, +2,744 rose day by day (the 10-24 report had +2,177 at the time).

**3. [stablyai/orca](https://github.com/stablyai/orca)** · ⭐105,478 · +9,828 this week
- Why people care: parallel coding agents, worktree isolation, mobile follow-up, SSH remote, diff annotations sent back to the agent.
- 📢 Influencer exposure: 2 posts / 👁5,742 (@Joyingeth, @TheoVanceln). 💬 Organic discussion: 17 posts / 👁9,995.
- X volume is too small to explain +9,828. Representative: [@xoyif63862452](https://x.com/xoyif63862452/status/2113940136903762416) (6,284 followers, 10-24, 👁377), a long Chinese-language review. HN has only a few small posts ([Orca + Oh My Pi setup](https://news.ycombinator.com/item?id=49916232), 6 points).
- 🌱 Organic growth. The source can't be seen in the data (possibly off-platform channels).

**4. [xerj-org/xerj](https://github.com/xerj-org/xerj)** · ⭐15,461 · +8,080 this week
- Why people care: local retrieval, token savings (officially 2.7×), and a Corpus Hub with a hundred-plus reference memory corpora.
- 📢 Influencer exposure: 1 post / 👁638 ([@vicky_grok](https://x.com/vicky_grok/status/2113624864368349269), 11,419 followers, promotional tone). 💬 Organic discussion: 18 posts / 👁2,124.
- Unusual mechanism: open-source contributors picked for the Corpus Hub tweet about it themselves (e.g. [@Nancysingh251](https://x.com/Nancysingh251/status/2112623930246914496), ❤13), and HN has several small "X on the XERJ Corpus Hub" posts (1 to 2 points). This contributor-credit-to-self-promotion loop is an inference; the data doesn't say it is the main driver.
- 📣 Some promotion (contributor loop plus one promotional-toned tweet). Total X exposure is very low, so growth most likely came from Trending itself. The 10-25 daily gain fell to +255, so the spike has faded.

**5. [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model)** · ⭐42,645 · ≈+7,286 this week
- Why people care: a plugin for DeepSeek's dsh that gives unlimited use of DeepSeek V4.1 Flash, GLM 5.3 Flash and Kimi K3 with no login and no key.
- 📢 Influencer exposure: 0. 💬 Organic discussion: 17 posts / 👁190,828. Representative: [@WojakTheDev](https://x.com/WojakTheDev/status/2113200900412223530) (4,091 followers, 10-22, ❤95 👁7,882). [@Fourpqwq](https://x.com/Fourpqwq/status/2113548229396611556) (4,186 followers, 10-23) warns that the quota comes from upstream, may be rate-limited, and that conversations in the free pool may be logged.
- Risks (all third-party claims, unverified):
  - [A tweet linking a yoDEV article](https://x.com/dev_yodev61400/status/2112341389451157875) (3 followers, 👁7) says that reading the code showed it loads a 2.9MB bundle, operates an account pool, and claims credits from 13 AI tools.
  - [@Channing_AI_X](https://x.com/Channing_AI_X/status/2113180377045147938) says [issue #576](https://github.com/Ebony-Vinyl/dsh-our-free-model/issues/576) contains a 20,000-character "lawyer's letter". The 10-25 report calls it likely forged and says it accuses the project of reverse engineering Tencent's WorkBuddy.
- 🌱 Organic growth, with "free" as the hook. Daily gains: +2,089, +2,120, +1,767. Flag the compliance and privacy risk without drawing a conclusion.

**6. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** · ⭐134,868 · +6,868 this week
- Why people care: local deterministic AST, every edge explainable, no vector store; a skill that works across agents.
- 📢 Influencer exposure: 5 posts / 👁515,964. Accounts: @ArchiveExplorer @Bober_smart @TheoVanceln @thegreatest_sv @tim_tom34325. 💬 Organic discussion: 33 posts / 👁82,176.
- Official side: the [@AskPerplexity](https://x.com/AskPerplexity/status/2113022451840122886) listing notice; an intro from [@Sumanth_077](https://x.com/Sumanth_077/status/2111824469006360864) (77,621 followers, 10-18, ❤667 👁35,965).
- 🔥 Heavy promotion: influencer exposure dominates (about 6× organic), backed by an official distribution channel. We don't assert paid promotion.

**7. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)** · ⭐71,916 · +5,633 this week
- Why people care: from HeyGen; write HTML, render MP4, agent-friendly, ships a /figma skill.
- 📢 Influencer exposure: 9 posts / 👁210,391. Accounts: @AIonfire0 @CoderDaMing @DanielZambrini @He1s_Sammy @RoundtableSpace @damkina7 @kocer_eth @naldzyul. Representative: [@RoundtableSpace](https://x.com/RoundtableSpace/status/2113975041763516842) (269,645 followers, 10-24, 👁48,120). 💬 Organic discussion: 18 posts / 👁11,676.
- 🔥 Heavy promotion: exposure is concentrated in roundup posts (about 18× organic). A company stands behind it, and there's little real usage feedback.

**8. [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** · ⭐175,935 · ≈+4,644 this week
- Why people care: the agent reuses before it writes code; the author's own test shows -53% code.
- 📢 Influencer exposure: 4 posts / 👁7,086 ([@KanikaBK](https://x.com/KanikaBK/status/2113230397740065222), 37,352 followers, accounts for 👁6,765 of it). 💬 Organic discussion: 19 posts / 👁1,007, barely seen.
- 📣 Some promotion (mostly roundup posts). X volume doesn't match +4,644, and the main driver isn't visible (Trending daily gains: 10-22 about +1,949, 10-23 +1,292).

### Influencer exposure ranking this week

| Project | Influencer posts | Exposure 👁 | Representative accounts | Organic 👁 | Verdict |
|---|---|---|---|---|---|
| [lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) (⭐7,121 · ≈+1,828 this week) | 4 | 750,397 | @KinGao476942 @RoundtableSpace @remoteugur | 86,614 | 🔥 Exposure about 9× discussion; one batch of Opus 5.5 video repos was pushed as a bundle (see Community discussion) |
| [Graphify](https://github.com/Graphify-Labs/graphify) | 5 | 515,964 | @ArchiveExplorer @thegreatest_sv @TheoVanceln | 82,176 | 🔥 Roundup posts dominate, with official Perplexity distribution |
| [mattpocock/skills](https://github.com/mattpocock/skills) (⭐302,993 · ≈+1,438 this week) | 22 | 475,152 | @RoundtableSpace @_avichawla @Fluyeporlaweb | 1,094,505 | Noisy data: unrelated tweets about oh-my-hermes, HarnessRouter and Harness² got mixed into this entry, so draw no conclusion |
| [ECC](https://github.com/affaan-m/ECC) (⭐288,551 · ≈+2,139 this week) | 6 | 164,736 | @Fluyeporlaweb @KanikaBK @RoundtableSpace | 42,632 | 📣 Repeatedly included in roundup posts; an established project |
| [rea](https://github.com/morluto/rea) | 7 | 162,344 | @sammy_capital @wquguru @ch3nweiii | 1,709,879 | 🌱 Organic discussion far exceeds exposure |
| [hyperframes](https://github.com/heygen-com/hyperframes) | 9 | 210,391 | @RoundtableSpace @CoderDaMing @kocer_eth | 11,676 | 🔥 Roundup posts dominate |
| [freellmapi](https://github.com/tashfeenahmed/freellmapi) | 2 | 7,894 | @Fluyeporlaweb @HongyeMain | 89,259 | 🌱 [@Rifat_EE](https://x.com/Rifat_EE/status/2113136966552494178) (33,025 followers, ❤321 👁47,451) led skeptical discussion: 7.4B is the project's own estimate, and the website and repo don't match |
| [ponytail](https://github.com/DietrichGebert/ponytail) | 4 | 7,086 | @KanikaBK @TheoVanceln @benou_irl | 1,007 | 📣 Roundup posts only, almost no organic discussion |

## Paper picks

**Agent Context**
1. [Cache Engineering for Agents](https://arxiv.org/abs/2610.28577) · 👍130 · code: [thu-nics/AKV](https://github.com/thu-nics/AKV) 48★. In long trajectories, KV cache I/O and storage become the main cost, and rewriting a prefix invalidates later cache and forces re-prefill. The paper proposes "cache engineering", where the agent controls the live KV directly. Average cost drops 27.7% versus threshold-triggered summarization (see the 10-23 report).
2. [MemT-1.0: Towards Memory-Native Evolution](https://arxiv.org/abs/2610.26825) · 👍134 · [MemTensor/MemT-1.0](https://github.com/MemTensor/MemT-1.0) 361★. Makes memory part of the model's computation: Gated DeltaNet-2 for token-level memory updates, Mixture-of-Storage for capacity, two-stage training on 34B tokens. At 128K history, persistent storage is 66× smaller than a full-context KV cache (see the 10-23 report).
3. [Pack Light, CarryOn](https://arxiv.org/abs/2610.18784) · 👍122 · [Ethannju/carryon](https://github.com/Ethannju/carryon) 5★. Organizes context around reusable task objects rather than history; the view is built from a continuation carrier, supplementary execution context and a recent tail. OSWorld 2.0 +5.8% and BrowseComp-Plus +7.0%, with 51.9% and 22.9% fewer tokens (see the 10-24 report).
4. [Mosaic: Multi-Session Agentic RL](https://arxiv.org/abs/2610.22174) · 👍63 · [LARK-AI-Lab/Mosaic](https://github.com/LARK-AI-Lab/Mosaic) 37★. Context compression and sub-agent forking produce multi-session trajectories that break the single-session assumption in training. It sets up a multi-session agentic RL formulation that avoids broadcasting a trajectory-level advantage evenly across all sessions.
5. [Memory-Centric Continual Learning (MCCL)](https://arxiv.org/abs/2610.29357) · 👍42. Argues memory should be judged by whether it improves future actions, not whether it can recall facts, and gives a three-axis memory taxonomy.
6. [Is Complex Agentic Memory Always Needed? (Raw-RAG)](https://arxiv.org/abs/2610.30755) (not on the paper list; found via the tweet from [@omarsar0](https://x.com/omarsar0/status/2113635562578178147), 325,934 followers, 10-23, ❤896 👁47,893). Raw-RAG ranks first in 6 of 7 settings across LoCoMo, LongMemEval, MEME and MemoryAgentBench, beating the strongest agent memory system by 0.13 to 5.53 points. On BEAM-1M, ingestion takes 0.3 hours versus 3.2 to 27 hours for Mem0, MemOS and others.
7. [Retrieval Augmented Generation Compositionality](https://arxiv.org/abs/2610.29722) · 👍54 · [dolev31/lasagna](https://github.com/dolev31/lasagna) 18★. The LASAGNA framework tests 450 configurations across 8 benchmarks and corpora of 5K to 200K documents. Stacked techniques gain far less than the sum of their parts (predicted +47%, measured +17%, see the 10-25 report).
8. [Self-Evolving Agent Harness](https://arxiv.org/abs/2610.18813) · 👍99 · [zgcagi/Harness-RSI](https://github.com/zgcagi/Harness-RSI) 387★. Keeps weights fixed and lets the scaffolding (prompts, memory, workflows, plugins) evolve itself. It formalizes the feedback-driven process and analyzes reliability with continual PAC learning.

**Other agent topics**
- [BizBench](https://arxiv.org/abs/2610.20424) · 👍494: benchmark for long-horizon agents in payments, stressing compliance of intermediate steps, since final-outcome scoring hides violations ([BizAgentBench](https://github.com/ant-intl/BizAgentBench) 48★).
- [Into the Unknown](https://arxiv.org/abs/2610.19159) · 👍158: nine frontier agents write follow-up papers for DOE national lab scientists, graded with expert-conditioned rubrics.
- [MAI-Gym](https://arxiv.org/abs/2610.20939) · 👍150: one platform for GUI-agent evaluation, data collection and online RL, with 10 benchmarks and 20,000 parallel environments.
- [OpenGCUA](https://arxiv.org/abs/2610.22200) · 👍103: open full stack for general computer-use agents ([Tongyi-MAI/OpenGCUA](https://github.com/Tongyi-MAI/OpenGCUA) 441★).
- [Self-HPO](https://arxiv.org/abs/2610.22791) · 👍55: a coding agent alternates between optimizing its harness and its policy, using the evolving policy itself as the harness proposer.

## Community discussion

**Five projects mentioned repeatedly but not near the top of the growth chart**
- [EpicGames/unreal-engine-skills-for-claude-code-plugin](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin) · ⭐1,657 · mentioned 3 days · Epic's official plugin that lets Claude Code drive the Unreal editor (30+ toolsets), installed through Anthropic's official marketplace. [@RoundtableSpace](https://x.com/RoundtableSpace/status/2111702567449424226) (10-18, ❤5,186 👁314,658).
- [xingjian-bai/opal](https://github.com/xingjian-bai/opal) · ⭐200 · mentioned 3 days · A "reactive optimizer": during training, a coding agent rewrites the optimizer's source in real time. [@SimulatedAnneal](https://x.com/SimulatedAnneal/status/2112936831398375800) (1,243 followers, 10-21, ❤1,354 👁152,225) says that with no tuned recipe it matches or beats the best one-shot recipe.
- [google/mantis](https://github.com/google/mantis) · ⭐2,530 · mentioned 3 days · Modular toolkit for coding agents to find, reproduce and patch vulnerabilities on their own. [@RoundtableSpace](https://x.com/RoundtableSpace/status/2112397145412091969) ❤802 👁95,636.
- [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) · ⭐21,206 · mentioned 2 days · Skill security scanner with 71 attack patterns in 17 categories and a 0 to 100 risk score. [@RoundtableSpace](https://x.com/RoundtableSpace/status/2113114370406293672) (10-21, ❤539 👁65,587).
- [microsoft/skill-recorder](https://github.com/microsoft/skill-recorder) · ⭐4,981 · mentioned 1 day · Record a screen operation once and the GitHub Copilot SDK turns it into a reusable skill or scheduled automation. [@RoundtableSpace](https://x.com/RoundtableSpace/status/2113891994128822631) (10-24, ❤1,005 👁95,326).
- Also pushed as a bundle: Opus 5.5 video repos ([awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) ⭐10,865, [mg-styles-15](https://github.com/Vincentwei1021/mg-styles-15) ⭐2,097, [PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) ⭐2,575 and others), lifted by a single influencer post with 👁639,392.

**Most-discussed topics on X / HN / Reddit** (no Reddit data this week)

1. **Agents and security: audit skills, skill supply chain, incident response**
   - [@jurbed recommends Cloudflare's audit skill](https://x.com/jurbed/status/2112973191157252103) (❤8,721 👁594,554).
   - [@OpenAI posts a Codex skill, php2shell-checker](https://x.com/OpenAI/status/2112945805686604033) (5,464,574 followers, 10-21, ❤9,171 👁1,364,604).
   - [@AM09_21 uses a coding agent to check how the eMudhra intermediate CA key leak affects devices](https://x.com/AM09_21/status/2112897200531640416) (40,025 followers, 10-21, ❤1,770 👁1,482,859).
   - HN: [OpenShell](https://news.ycombinator.com/item?id=50198675) (458 points / 205 comments, 10-22).

2. **rea and the "AI reverse engineering is being restricted" dispute**
   - [@0x0SojalSec](https://x.com/0x0SojalSec/status/2113751276320399694) (❤11,831 👁799,288).
   - [@Pirat_Nation](https://x.com/Pirat_Nation/status/2114069664875557083) (❤4,934 👁267,842).
   - HN: [original REA post](https://news.ycombinator.com/item?id=50028275) (814 points / 340 comments, 10-10).
   - The restriction claim has no official confirmation.

3. **Personal agent platforms and multi-harness orchestration**
   - [1Password for Agents](https://x.com/1Password/status/2113276767582498943) (146,693 followers, 10-22, ❤10,513 👁1,743,086): the agent requests a credential, and after the user approves, 1Password fills it in without the agent seeing the password.
   - [HarnessRouter lets a Grok bot dispatch to Codex/Hermes/Claude Code/DeepSeek Harness](https://x.com/_avichawla/status/2113954302901256597) (❤1,105 👁105,097, promotional tone).
   - [Google Harness²](https://x.com/Sumanth_077/status/2113948384113598588) (❤326 👁15,772): recursively improves the harness with weights fixed (Propose → Probe → Compose).
   - [@AlexFinn says Anthropic will ship a personal agent called "Duet"](https://x.com/AlexFinn/status/2112990775202185437) (485,393 followers, ❤1,513): a rumor, unconfirmed.
   - HN: [Corgi, an agent/terminal multiplexer](https://news.ycombinator.com/item?id=50214373) (113 points / 31 comments).

4. **Memory, RAG and caching cost**
   - [Raw-RAG tweet](https://x.com/omarsar0/status/2113635562578178147) (❤896 👁47,893).
   - [@akshay_pachaar on 4 kinds of LLM caching](https://x.com/akshay_pachaar/status/2113617883456766031) (291,760 followers, 10-23, ❤325 👁16,641).
   - HN: [Skyvern progressive disclosure](https://news.ycombinator.com/item?id=50222826) (19 points).

5. **Big HN threads: formal verification and restrictions on AI**
   - [Anthropic: LLMs make large-scale formal verification feasible](https://news.ycombinator.com/item?id=50202217) (394 points / 241 comments).
   - [Swedish government offices plan to ban ChatGPT and Claude](https://news.ycombinator.com/item?id=50207405) (271 points / 93 comments).
   - [r/opensource bans solo projects and projects that use LLMs](https://news.ycombinator.com/item?id=50231722) (55 points / 61 comments, 10-25).

## What to watch next week

1. rea: daily gains hold around +5.5k. Watch whether the "Claude restricts reverse engineering" claim is confirmed or denied officially. Confirmation could lift interest in alternatives and local models. The +88,243 weekly figure also doesn't match the daily gains and needs checking.
2. Security audit skills and skill supply-chain security: security-audit-skill's daily gain rose each day (+2,744 on 10-25), and SkillSpector, mantis and OpenAI's checker skill were discussed in the same window, so this likely keeps rising. Claims such as "no false positives" come only from small accounts and need verifying.
3. Whether retrieval and memory projects survive plain baselines: xerj fell from +1,180 to +255, and OpenShell and sandbox-runtime cooled at the same time. Raw-RAG and the RAG compositionality study put graphify, xerj and ai-memory up against baseline comparisons. Also watch whether the compliance and privacy dispute around dsh-our-free-model grows, and where growth comes from for hallmark (+1,477/day) and cindy (+719/day), neither of which has visible X discussion.
