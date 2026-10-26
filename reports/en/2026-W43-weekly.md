# Agent & Agent Context Weekly · 2026-W43 (2026-10-17 ~ 2026-10-23)

> Generated at 2026-10-23 00:59 PDT

> Data coverage: only two days this week, 2026-10-22 and 10-23, have data; the other 5 days are missing. The "weekly growth" figures below mostly use the Trending weekly metric, and those marked with ≈ are estimates summed from 2 days of daily growth. Social data is mainly from X; there is no Reddit data.

## Weekly highlights
- The reverse-engineering Agent **morluto/rea** gained +106,341 this week, with 368,637 stars, making it the fastest-growing project of the week. The REA post on HN has 814 points, but it was posted on 10-10.
- Skills remain the biggest source of traffic: **cloudflare/security-audit-skill** gained ≈+4,040 this week, and a single recommendation tweet got 7,010 likes. **anthropics/claude-plugins-official** gained +5,649 this week, and Epic's Unreal plugin tweet got 5,186 likes.
- Context infrastructure keeps heating up: code knowledge graphs (graphify), tool output compression (context-mode, headroom), cross-Agent memory (ai-memory, agent-beacon), and local retrieval (xerj) are all on the charts.
- On the paper side, the KV cache is becoming a controllable resource for Agents (Cache Engineering for Agents), and memory is becoming "native" (MemT-1.0). Harness self-evolution is the hottest term.
- The DeepSeek Harness (dsh) plugin ecosystem is taking shape, with free models and context visualization plugins on the charts. Multi-Agent parallel management (Orca, +9,401 this week) and Agent security runtimes (NVIDIA OpenShell, 377 points on HN) are also drawing attention.

## 1. This week's Agent Context feature trends

### 1. Tool output compression / token savings (heating up)
The main thread of the week. Several projects start from "output less, read less", and the community treats them as cost-cutting tools.
- [mksglu/context-mode](https://github.com/mksglu/context-mode) · ⭐31,888 · +2,271 this week · Sandboxes tool output (claims a 98% reduction), persists session memory, and covers 17 platforms through MCP + hooks.
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · ⭐77,595 · ≈+602 this week · Compresses tool output, logs, and RAG snippets before they enter the LLM, offered as a library, a proxy, and an MCP server.
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) · ⭐114,478 · +2,173 this week · Cuts about 65% of tokens with a "caveman speak" style skill + proxy.
- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) · ⭐174,041 · ≈+2,750 this week · Makes the Agent check the repo and standard library before writing new code. The tweet claims code volume -53% and cost -26%; these figures are the tweet's own claims and are unverified.
- [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) · ⭐2,435 · A dsh context compression plugin for month-long sessions, claiming 5x token savings (per the repo's own description).
- Related papers: Cache Engineering for Agents, DLite (see Section 4).

### 2. Memory layer (heating up)
The direction is cross-harness sharing and self-improvement, while academia is shifting to "what to store and what to forget".
- [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) · ⭐12,862 · +3,322 this week · Long-term memory for coding CLIs, making handoffs between different Agent vendors easier.
- [Asymptote-Labs/agent-beacon](https://github.com/Asymptote-Labs/agent-beacon) · ⭐2,656 · ≈+281 this week · A cross-harness, self-improving memory layer that captures session trajectories and stores them in a shared index. A tweet from @_avichawla (79k followers) got 633 likes.
- [affaan-m/ECC](https://github.com/affaan-m/ECC) · ⭐286,740 · ≈+328 this week · A harness optimization layer combining skills, memory, hooks, and security scanning, mentioned in several listicles.
- Related papers: MemT-1.0, FlowState, Memory-Centric Continual Learning, MemPilot. The daily report also mentions studies such as REM and TokenWorth that question whether "remembering more is better"; these papers are not in this data's paper list.

### 3. Codebase indexing / retrieval (heating up)
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐133,364 · ≈+1,966 this week · Local tree-sitter AST parsing that turns code, SQL, docs, and PDFs into a queryable knowledge graph, with no vector store. Now listed in Perplexity Computer's skills marketplace.
- [xerj-org/xerj](https://github.com/xerj-org/xerj) · ⭐13,217 · +8,064 this week · A single Rust binary providing a local search engine and MCP server with BM25 + vector hybrid retrieval, compatible with the Elasticsearch API, covering code search, memory, and RAG.
- Competitor moves: on HN there is a Rust port, Graphicle (48 points), and DaidDocs (4 points), which claims a comparison against Graphify, showing this direction is being replicated.
- Related paper: Retrieval Augmented Generation Compositionality (a compositional evaluation of 450 RAG configurations).

### 4. Skills / plugin ecosystem (sustained high, security becomes a new topic)
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) · ⭐43,978 · +5,649 this week · Anthropic's official plugin directory.
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐40,265 · ≈+4,040 this week · Multi-stage security audit, with different agents independently verifying each finding.
- [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) · ⭐53,997 · +3,967 this week · 177 scientific skills and 100+ scientific databases.
- [cursor/plugins](https://github.com/cursor/plugins) · ⭐13,670 · +2,046 this week · Cursor plugin spec and official plugins.
- [vercel-labs/skills](https://github.com/vercel-labs/skills) · ⭐36,202 · +1,073 this week · `npx skills`, an open skills tool.
- Security angle: NVIDIA/SkillSpector was recommended by @RoundtableSpace; the tweet says 26.1% of the 31,132 skills analyzed contain vulnerabilities, a figure that comes from the tweet.

### 5. MCP (stable, as a universal integration layer)
- Several new projects use MCP as their integration method, such as [tangency-labs/solidcraft](https://github.com/tangency-labs/solidcraft) (⭐9,439 · ≈+784 this week · Rust parametric CAD, automated via MCP) and [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) (⭐56,371 · +3,275 this week · making software natively usable by Agents).
- On social: Supabase launched "bring your own MCP server for your app", and Nous Research's Hermes Agent connects to Meshy via MCP.
- Paper: WildAWM synthesizes environments that support GUI, MCP services, and CLI at the same time.

### 6. Caching and cost (heating up, academic-leaning)
- [Cache Engineering for Agents](https://arxiv.org/abs/2610.28577) (heat 123) argues for directly controlling the active KV rather than rewriting the prefix.
- On the serving and cost side: DLite, EdgeWise, SpecAgent, and HarnessPro all revolve around "call the large model less and save prefill".
- On the engineering side: [yetone/magpie](https://github.com/yetone/magpie) (⭐19,836 · ≈+1,021 this week) runs Codex on DeepSeek and Claude Code on Kimi, cutting costs through model switching.

### 7. Multi-Agent parallelism and runtimes (heating up)
- [stablyai/orca](https://github.com/stablyai/orca) · ⭐103,156 · +9,401 this week · Runs multiple coding Agents in parallel using git worktree, across desktop, mobile, and remote.
- New repos [harp](https://github.com/dominikmartn/harp) (⭐578 · ≈+289 this week) and [coucou](https://github.com/Louis-CFM/coucou) (⭐6,212 · ≈+248 this week) are building unified multi-Agent dashboards.
- [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) · ⭐18,086 · ≈+840 this week · A secure private runtime for autonomous Agents.

## 2. Top 15 hottest Agent projects this week

Sorted by weekly growth; estimates are marked with ≈. Non-Agent projects have been excluded: ollama, vllm, MoneyPrinterTurbo, freellmapi (LLM gateway), NSFW image-generation skills, and others.

| Rank | Project | Type | ⭐ Stars | Weekly growth | Days on chart | Why it's hot |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse-engineering Agent / skill | 368,637 | +106,341 | 2 | Plugs Ghidra and Hopper into Codex/Cursor; @wquguru's attack-chain listicle tweet got 494 likes, HN post 814 points |
| 2 | [stablyai/orca](https://github.com/stablyai/orca) | Multi-Agent parallel IDE | 103,156 | +9,401 | 2 | Runs Claude Code, Codex, and others in parallel; promoted by multiple listicle tweets and the official account |
| 3 | [xerj-org/xerj](https://github.com/xerj-org/xerj) | Local search / MCP | 13,217 | +8,064 | 2 | One Rust binary covering code search, memory, and RAG; mentioned in a Japanese listicle tweet |
| 4 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | Open-source coding Agent | 220,340 | +6,750 | 2 | Perennially popular; no dedicated promotion post this week in the data |
| 5 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Video generation framework | 70,234 | +5,669 | 2 | "Write HTML to render video", lifted by several motion-graphics listicles |
| 6 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Plugin directory | 43,978 | +5,649 | 2 | Epic's official Unreal plugin is distributed through it; the related tweet got 5,186 likes |
| 7 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | Security audit skill | 40,265 | ≈+4,040 | 2 | Open-sourced officially by Cloudflare; @jurbed's recommendation tweet got 7,010 likes |
| 8 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Scientific skill library | 53,997 | +3,967 | 2 | 177 skills + 100+ databases; no social posts in the data |
| 9 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | Agent harness / multi-agent | 78,577 | +3,708 | 2 | Swarm, adaptive memory, and RAG; tagged `dsh-plugin` |
| 10 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Memory layer | 12,862 | +3,322 | 2 | Long-term memory for coding CLIs, supporting cross-vendor handoff |
| 11 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Agent-native CLI | 56,371 | +3,275 | 2 | "Make all software natively usable by Agents"; featured in @Fluyeporlaweb's October growth chart |
| 12 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | skill / code saving | 174,041 | ≈+2,750 | 2 | "Laziest senior dev" style, claims code volume -53%; recommended by @KanikaBK (37k followers) |
| 13 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | dsh plugin / free model | 37,681 | ≈+2,322 | 2 | Use DeepSeek V4.1 Flash and Kimi K3 with no login or API key; @WojakTheDev's tweet got 63 likes |
| 14 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context optimization | 31,888 | +2,271 | 2 | "Tool output down 98%", named as the "try this first" pick |
| 15 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | token-saving skill | 114,478 | +2,173 | 2 | Meme-style skill, claims 65% token savings |

## 3. Growth attribution and promotion

1. **morluto/rea** (+106,341 this week) · 📣 Some promotion
   - Why: links reverse-engineering toolchains into coding Agents, outputting pseudocode and call chains.
   - Who's pushing: KOL @wquguru (25k followers) with an attack-chain listicle tweet, 494 likes and 28k views; @sammy_capital's tool-map tweet, 65 likes. The REA post on HN has 814 points and 340 comments, dated 10-10, before this week.
   - Links: [X](https://x.com/wquguru/status/2113181135522214168) · [HN](https://news.ycombinator.com/item?id=50028275)
   - Note: the weekly growth figure is unusually large, and the engagement on the two tweets is far below that scale; verifying the methodology is recommended.
2. **cloudflare/security-audit-skill** (≈+4,040 this week) · 🔥 Heavy promotion
   - Why: official release, multi-stage audit, with each vulnerability independently verified by a fresh agent.
   - Who's pushing: @jurbed's recommendation tweet has 7,010 likes and 465k views; community stats show 12 mentions in total, 11 authors, and about 960k views.
   - Link: [X](https://x.com/jurbed/status/2112973191157252103)
3. **anthropics/claude-plugins-official** (+5,649 this week) · 🔥 Heavy promotion
   - Why: official plugin directory; Epic's official Unreal plugin is installed through it.
   - Who's pushing: @RoundtableSpace (270k followers) tweet with 5,186 likes and 310k views.
   - Link: [X](https://x.com/RoundtableSpace/status/2111702567449424226)
4. **stablyai/orca** (+9,401 this week) · 📣 Some promotion
   - Why: runs multiple coding Agents in parallel without overwriting each other.
   - Who's pushing: official account @orca_build (20k followers); its 10-22 tweet says SWE-2 Max is free for a limited time, with Opus 5.5 orchestrating sub-Agents; plus several listicles.
   - Link: [X](https://x.com/orca_build/status/2113290782916423938)
5. **Graphify-Labs/graphify** (≈+1,966 this week) · 📣 Some promotion
   - Why: the Agent reads a knowledge graph instead of grepping the whole repo, with local, deterministic parsing.
   - Who's pushing: @AskPerplexity (380k followers) announced its listing in the Computer skills marketplace, 102 likes; @Sumanth_077's tweet got 667 likes; @grok also introduced it.
   - Links: [X](https://x.com/AskPerplexity/status/2113022451840122886) · [X](https://x.com/Sumanth_077/status/2111824469006360864)
6. **Ebony-Vinyl/dsh-our-free-model** (≈+2,322 this week) · 📣 Some promotion
   - Why: a free, no-login plugin for frontier models.
   - Who's pushing: @WojakTheDev's tweet, 63 likes, with installation steps.
   - Link: [X](https://x.com/WojakTheDev/status/2113200900412223530)
7. **heygen-com/hyperframes** (+5,669 this week) · 📣 Some promotion
   - Why: HTML-to-video, well suited to Agent invocation.
   - Who's pushing: multiple "making video/motion graphics with Claude Code" listicles, such as @Asteri_eth's 324-repo map (42 likes).
   - Link: [X](https://x.com/Asteri_eth/status/2113213410078843154)
8. **xerj-org/xerj** (+8,064 this week) · 🌱 Organic growth
   - Why: local search + MCP, handled by one binary.
   - Promotion: no dedicated social posts in the data; it only appears in one Japanese listicle.
   - Link: [X](https://x.com/ClaudeCodeBase/status/2113264112092541251)

## 4. Selected papers of the week

### Agent Context
- [Cache Engineering for Agents](https://arxiv.org/abs/2610.28577) · heat 123. Over long trajectories, KV cache I/O and storage become the main cost, while trimming or summarizing history invalidates later caches and triggers re-prefill. The authors propose cache engineering, letting the Agent directly control the active KV.
- [MemT-1.0: Towards Memory-Native Evolution](https://arxiv.org/abs/2610.26825) · heat 133. Makes memory part of the model's computation: token-level updates based on Gated DeltaNet-2, expanded with Mixture-of-Storage, with two-stage training. The daily report says storage is reduced 66x at 128K history.
- [Pack Light, CarryOn](https://arxiv.org/abs/2610.18784) · heat 120. Organizes long-horizon context around reusable task objects rather than history: the context view consists of a continuation carrier, supplementary execution context, and recent interactions.
- [Mosaic: Multi-Session Agentic RL](https://arxiv.org/abs/2610.22174) · heat 63. Context compression and sub-Agent forking cause a single trajectory to span multiple sessions, which single-session training doesn't match. The paper proposes multi-session Agent reinforcement learning that distinguishes each session's contribution.
- [FlowState](https://arxiv.org/abs/2609.34565) · heat 21. Treats execution state as memory that can be retained and revisited: keeps typed state nodes, relations, and references to raw tool observations, separating persistent retention from on-demand reading.
- [Memory-Centric Continual Learning](https://arxiv.org/abs/2610.29357) · heat 20. Argues memory should be judged by whether it improves future actions, not whether it can recall facts; offers a three-axis taxonomy.
- [Self-Evolving Agent Harness](https://arxiv.org/abs/2610.18813) · heat 99. Formalizes harness self-evolution (prompts, memory, workflows, executable components) with model weights unchanged, and provides generalization and retention bounds.
- [Socratic Skill Learning](https://arxiv.org/abs/2610.17860) · heat 32. An Educator and a Student alternate teaching and practice to learn transferable skills, and build SkillTransferBench (35 task families, 408 executable cases).

### Other Agent topics
- [BizBench](https://arxiv.org/abs/2610.20424) (heat 492): a long-horizon Agent benchmark based on a payment company's real workflows, focusing on compliance of intermediate steps.
- [Into the Unknown](https://arxiv.org/abs/2610.19159) (heat 157): has 9 frontier Agents write follow-up papers for open scientific questions, using conditions given by scientists as the scoring rubric.
- [MAI-Gym](https://arxiv.org/abs/2610.20939) (heat 150): a unified GUI Agent evaluation and online RL training platform, scalable to 20,000 parallel environments.
- [CoEvo-RSI](https://arxiv.org/abs/2610.25078) (heat 118): studies the "brain-body mismatch" when harness and model co-evolve, using a shared evolution archive for bidirectional inheritance.
- [OpenGCUA](https://arxiv.org/abs/2610.22200) (heat 103): the full technology stack for open general computer-use Agents, released for the first time.

## 5. Community discussion focus

### 5 projects mentioned repeatedly but not at the top of the growth chart
All projects were mentioned on only 1 day (the data covers only 2 days).
1. [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) · ⭐21,032 · mentioned 1 day · A skill security scanner covering 71 attack patterns, giving each skill a 0–100 risk score.
2. [EpicGames/unreal-engine-skills-for-claude-code-plugin](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin) · ⭐1,598 · mentioned 1 day · Epic's official plugin that lets Claude Code control the Unreal Editor. Third in community heat score, behind only cloudflare and claude-plugins-official.
3. [xingjian-bai/opal](https://github.com/xingjian-bai/opal) · ⭐167 · mentioned 1 day · A reactive optimizer: the coding Agent rewrites the optimizer's source code during training. The author's tweet got 1,354 likes.
4. [google/mantis](https://github.com/google/mantis) · ⭐2,515 · mentioned 1 day · A modular toolkit that lets AI coding Agents autonomously discover, reproduce, and fix vulnerabilities.
5. [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) · ⭐2,435 · mentioned 1 day · A dsh context compression plugin for month-long sessions.

### Most discussed topics
1. **Agent security and auditing**: both using Agents for auditing (the Cloudflare skill, rea's attack-chain listicle) and scanning of skills themselves and runtime isolation.
   - [OpenShell HN (377 points / 187 comments)](https://news.ycombinator.com/item?id=50198675)
   - [SkillSpector tweet](https://x.com/RoundtableSpace/status/2113114370406293672)
   - [OpenAI releases Codex inspection skill (9,171 likes)](https://x.com/OpenAI/status/2112945805686604033)
2. **Free models and token economics**: freellmapi claims 7.4B free tokens per month; @Rifat_EE points out that this is the repo's own estimate rather than a measurement, and that new models arrive 30 days later on the free tier. The dsh free model plugin is also in this category.
   - [@Rifat_EE (321 likes)](https://x.com/Rifat_EE/status/2113136966552494178)
   - [@PratikSinhatwt](https://x.com/PratikSinhatwt/status/2112804549602030014)
   - [@WojakTheDev](https://x.com/WojakTheDev/status/2113200900412223530)
3. **DeepSeek Harness plugin ecosystem**: @xiaomovps lists plugins for a plugin marketplace, context compression, Windows command-line enhancement, free search, a sidebar, and more.
   - [Tweet](https://x.com/xiaomovps/status/2112840223227089396)
   - [deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)
4. **Harness self-evolution and courses**: MIT is offering a self-evolving AI course; @rohanpaul_ai covers Google's OO-Harness (evolving specialized harnesses for different task clusters).
   - [@pliang279 (768 likes)](https://x.com/pliang279/status/2113300326015275424)
   - [@rohanpaul_ai](https://x.com/rohanpaul_ai/status/2113118164586582416)
5. **Personal Agents and multi-Agent development environments**: @AlexFinn says Anthropic will release a personal Agent, "Duet"; the tweet got 1,513 likes, and this is a personal judgment, unconfirmed. Multi-Agent tools such as Orca and Capy 0.5.0 are also being discussed.
   - [@AlexFinn](https://x.com/AlexFinn/status/2112990775202185437)
   - [Capy 0.5.0](https://x.com/capydotai/status/2113326692928548974)

In addition, the daily report notes that large numbers of "10 GitHub repos"-style listicles are inflating numbers, with little genuine usage feedback, making the charts quite noisy.

## 6. What to watch next week
1. **The context-infrastructure trio** (graphify-style knowledge graphs, context-mode/headroom-style output compression, ai-memory/agent-beacon-style cross-harness memory) may keep climbing, since they are backed at once by the charts, KOL tweets, and papers. What needs verifying is that the savings figures each project claims, such as 98% and 65%, all come from the projects' own descriptions and lack independent evaluation.
2. **Skill security** will move from a topic to supporting tooling: the buzz around the cloudflare audit skill, combined with attention on SkillSpector and OpenShell, may drive more skill-scanning and sandbox projects. Meanwhile, rea's weekly growth of +106,341 is out of proportion to its social engagement, so the methodology should be verified first before judging whether it will last.
3. **The dsh (DeepSeek Harness) ecosystem** is worth watching: deepseek-harness, the free model plugin, dsh-context, and billion-context are all on the charts at once, and several other projects have also added the `dsh-plugin` tag. We need to see whether the growth comes from real usage or from a "freebie-hunting" effect like that of free models. There are only 2 days of data this week, so all of the trend judgments above need to be rechecked against next week's full 7 days of data.
