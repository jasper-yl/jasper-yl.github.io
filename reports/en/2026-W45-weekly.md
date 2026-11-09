# Agent Weekly · 2026-W45 (2026-11-02 ~ 2026-11-08)

> Generated at 2026-11-09 09:32 PST

## This week's highlights

- [morluto/rea](https://github.com/morluto/rea) (an agent that reverse-engineers anything) is still #1 at +25,102 this week, ⭐442,904, but it is cooling. The last 7 days averaged 4,905/day against 14,896/day over 28 days, and the peak was +54,038 on 10-12.
- Official skills and tools carried the week: [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) +13,187 this week, [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) +10,443, [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) +5,943.
- The new context-layer hit is [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) (a semantic layer built on ontologies), +9,417 this week, 290 points / 139 comments on HN. It peaked on 11-04 and fell every day after.
- Memory became an HN topic. Anthropic's "The Components of Agent Memory" and "Agent memory needs its OpenTelemetry moment" both hit the front page. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) gained +5,977 this week and drew a privacy issue.
- The papers center on automatic harness evolution and on context compression and task switching. Switch-SWE found that task switching cost 7 coding agents 11.5 percentage points on average.

## Agent Context feature trends

### Skills / plugins (biggest traffic pool, still heating up)
- What happened: most of the list is skill repos. Official repos sped up, design-focused "anti-AI-slop" skills held steady, and "make video with code" skills made the list.
- Representative projects:
  - [mattpocock/skills](https://github.com/mattpocock/skills) · ⭐318,289 · +9,256 this week · The author's personal .agents directory (/grill-me to interrogate requirements first, tdd, handoff and others), built around adding friction for the agent.
  - [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐66,524 · +10,443 this week · Six-phase security audit (map, hunt, challenge, record, verify, report). Different agents do discovery and verification, and output is validated against a JSON schema.
  - [pbakaus/impeccable](https://github.com/pbakaus/impeccable) · ⭐105,994 · +6,950 this week · Gives the agent a design vocabulary, with a non-LLM rule-based detector.
  - [Nutlope/hallmark](https://github.com/Nutlope/hallmark) · ⭐50,728 · +6,185 this week · Anti-AI-look design skill for Claude Code, Cursor and Codex.
  - [anthropics/skills](https://github.com/anthropics/skills) · ⭐189,317 · +3,121 this week · Official reference implementation. It ran at about +280/day, then rose to 500+/day from 11-06. [google/skills](https://github.com/google/skills) went from 20-30/day to +475~+500/day over the same stretch (see the 11-07 and 11-08 reports; not on the weekly list, so no weekly figure).
- Cooling signal: an HN post, ["AI Skills" are worthless in 2026](https://news.ycombinator.com/item?id=50255346) (53 points / 26 comments, 10-27).

### Memory (heating up, with a privacy dispute)
- What happened: [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) jumped from about +300/day to 975, 1,630, 1,524 and 1,764 over four days, then fell back in the 11-06 report (909, then 595). HN ran two long memory posts.
- Representative projects:
  - [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · ⭐114,760 · +5,977 this week · Records sessions automatically, compresses them with AI and injects them into later sessions.
  - [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · ⭐59,859 · +2,320 this week · "Agent memory that learns."
- The dispute: an HN post titled "Installing claude-mem uploads your last 30 days of prompts to cmem.ai, no opt-in" points to [issue #5176](https://github.com/thedotmack/claude-mem/issues/5176) (3 points, 10-29, [HN](https://news.ycombinator.com/item?id=50289137)). The 11-02 report also recorded this claim from the issue. We did not check it against the repo code. A user raised it in the issue; that is all we can say.
- Related discussion:
  - Anthropic, "The Components of Agent Memory," 105 points / 60 comments, 11-07, [HN](https://news.ycombinator.com/item?id=50402212).
  - "Agent memory needs its OpenTelemetry moment," 119 points / 87 comments, 11-08, [HN](https://news.ycombinator.com/item?id=50411467).
- Related papers: [EvoMemState](https://arxiv.org/abs/2611.03743) (👍20), [Cognitive Symbionts](https://arxiv.org/abs/2611.05376) (👍114).

### Semantic layer / codebase indexing and retrieval (new hit, already peaked)
- What happened: auto-ontology took off on 11-03 and peaked on 11-04 (about +2,4xx/day). Then +2,491 on 11-05, +1,829 on 11-06, +1,062 on 11-07, falling every day.
- Representative projects:
  - [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) · ⭐10,108 · +9,417 this week · Generates ontologies and knowledge graphs from Databricks/Postgres/Snowflake metadata, validates LLM-generated SQL, and gives agents context through MCP (9 read-only tools).
  - [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐144,333 · +3,936 this week · Turns codebases, docs and SQL schemas into a queryable knowledge graph. Local AST parsing, no vector store.
- Related HN: [Show HN: Alternative to Nvidia Auto-Ontology](https://news.ycombinator.com/item?id=50363667) (GetCassis/ontology-skills, only 29 ⭐, a minor community reaction).

### Context compression and cost (most active in papers, scattered in projects)
- What happened: papers showed several compression routes: rewriting reasoning history into compact state records, compressing tool output into latent tokens, and passing KV in latent space. On the project side there are token-saving gateways and schedulers.
- Representative projects:
  - [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) · ⭐85,617 · +2,125 this week · Free AI gateway that claims RTK+Caveman compression saves 15-95% of tokens (the project's own claim).
  - [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) · The 11-02 report said it was under 3 weeks old and had gained +4,179 over 7 days (not on the weekly list, no total star count).
- Related papers:
  - [Why Pay for Long Reasoning When Rewrite Do Trick?](https://arxiv.org/abs/2611.03852) · 👍13
  - [Coca-Cola](https://arxiv.org/abs/2611.06500) · Compresses tool output into latent tokens, cutting tokens by 70.01%-89.24% (see the 11-08 report)
  - [TAO](https://arxiv.org/abs/2610.37230) · 👍95, tool-aware agent scheduling with cache reuse

### Computer / browser use (accessibility-tree approach, the week's strongest single event)
- What happened: agent-desktop took off on 10-31. agent-browser hit +794 on 11-08, up from 55-153/day.
- Representative projects:
  - [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · ⭐19,454 · +13,187 this week · Rust CLI that drives the desktop by reading the OS accessibility tree rather than screenshot pixels.
  - [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) · ⭐47,378 · +2,270 this week · Browser automation CLI using accessibility-tree snapshots and @e1-style refs.
  - [wangzan101/Mika](https://github.com/wangzan101/Mika) · ⭐7,559 · +4,089 this week · On-device Android agent that operates any app on a background virtual screen. The author promoted it themself on 10-29.
- Related papers: [CUA-Master](https://arxiv.org/abs/2611.03126) (👍97, OSWorld Verified 80.2, see the 11-04 report), [Hybrid Computer Use](https://arxiv.org/abs/2610.41432) (👍15, coding + accessibility + vision channels).

### Free models / model routing (staying high, growth source unclear)
- Representative projects:
  - [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) · ⭐66,073 · +10,482 this week · DeepSeek Harness plugin that claims login-free, key-free access to DeepSeek V4.1 Flash, Kimi K3 and others.
  - [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) · ⭐276,319 · +8,158 this week · DeepSeek's official open-source "everything is a plugin" harness, on the list 21 days running.
  - [yetone/magpie](https://github.com/yetone/magpie) · ⭐32,176 · +4,679 this week · Menu-bar app to pick the model for each coding agent (Codex on DeepSeek, Claude Code on Kimi). The author's v0.1.1107, released 10-07, can check each agent's context window usage.
  - [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) · ⭐49,159 · +3,625 this week · Aggregates several free LLM APIs behind one /v1 endpoint.
- Related paper: [Route Anything](https://arxiv.org/abs/2611.05275) (👍82, model and policy routing).

### Harness / orchestration (main paper theme, steady in projects)
- Projects: [stablyai/orca](https://github.com/stablyai/orca) (⭐119,074 · +6,826 this week · runs a team of coding agents in parallel on your own subscriptions, each in its own git worktree), [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) (⭐11,756 · +2,316 this week · git worktree CLI for parallel agents).
- Papers: see the papers section. Continual evolution forgets: Meta-Harness fell from 94.0% to 32.0% on SWE-Bench (see the 11-05 and 11-07 reports, from Continual Harness Evolution).

## Top 15 agent projects this week

Sorted by weekly star growth; all figures are measured 7-day gains except rea-video. #15 cleanyourtv has only a loose link to agents: it uses Claude Code over ADB to clean up a TV.

| Rank | Project | Type | ⭐ Total | Growth | Days on list | Why it's hot |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | context | 442,904 | +25,102 this week | 7 | Agent skill/MCP that reverse-engineers anything. KOL tutorials plus a YouTube long tail; 29 straight days of high growth, but clearly cooling. |
| 2 | [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | context | 19,454 | +13,187 this week | 7 | A Vercel author and two executives posted the same day (10-30). Drives the desktop through the accessibility tree. |
| 3 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | agent | 66,073 | +10,482 this week | 7 | dsh plugin for "free frontier models." Almost no organic discussion on X this week; growth source not confirmed. |
| 4 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | agent | 66,524 | +10,443 this week | 7 | Six-phase audit skill, announced by @CloudflareDev on 11-04. |
| 5 | [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | context | 10,108 | +9,417 this week | 6 | Open-sourced by NVIDIA, 290 points on HN, a semantic layer for agents. |
| 6 | [mattpocock/skills](https://github.com/mattpocock/skills) | context | 318,289 | +9,256 this week | 7 | Personal skills directory from a well-known author, steady at about 900/day. |
| 7 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | agent | 276,319 | +8,158 this week | 7 | DeepSeek's official harness, lifted by its plugin ecosystem (including #3). |
| 8 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | context | 99,698 | +8,083 this week | 7 | Web scraping framework with an MCP server. Ran 100-200/day early in the week, then jumped to 690-810 around the weekend. Only one KOL post on X (@techNmak, 11-03); spread source not confirmed. |
| 9 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | agent | 17,927 | +7,616 this week | 7 | Open-source alternative to Grok Bot. Reuses existing Claude/Codex/Grok CLI subscriptions, one VM per bot. |
| 10 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | context | 105,994 | +6,950 this week | 7 | Anti-AI-slop design skill, already integrated into Perplexity Computer. |
| 11 | [stablyai/orca](https://github.com/stablyai/orca) | agent | 119,074 | +6,826 this week | 7 | Runs a team of coding agents in parallel. On the list 132 days; a steady performer. |
| 12 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | agent | 50,728 | +6,185 this week | 7 | Anti-AI-look design skill; author self-promotion plus a KOL list post. |
| 13 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | context | 114,760 | +5,977 this week | 7 | Cross-session memory. Jumped early in the week, alongside a privacy issue. |
| 14 | [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | context | 14,605 | +5,943 this week | 7 | Google open source: design first, then have a zero-context fresh session pick holes. Took off via YouTube. |
| 15 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) | agent | 54,474 | +5,733 this week | 7 | Uses Claude Code over Wi-Fi ADB to remove preinstalled apps from Android TVs (weak agent link). Created 10-17; daily gain fell from a 6,799 peak to 1,403. |

Off the list: [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) gained ≈+4,087 this week (summed from about 5 days of daily gains, ⭐4,174), and [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop) gained ≈+3,117 (about 4 days summed, ⭐3,918, created 11-03).

## Growth attribution and promotion

The data records zero media_posts and zero organic_posts for every project, so the 📢 and 💬 labels below come only from the role of each X post, and no exposure counts are available.

### 1. morluto/rea · 📣 Some promotion
- Why people care: lets an AI agent reverse-engineer apps without source through MCP/CLI. Supports native binaries, Electron/JS, .NET and the web, connects to Ghidra/IDA/Hopper, installs with one npx command.
- Trajectory: +25,102 this week, 4,905/day over the last 7 days, 14,896/day over 28 days, peak +54,038 on 10-12, 29 straight days of high growth.
- 📢 Influencer exposure:
  - [@milesdeutscher's "How to reverse engineer anything with AI (the complete REA guide)"](https://x.com/milesdeutscher/status/2112924796866699336) (10-21).
  - Two near-identical templated posts this week: [@cabbitar 11-03](https://x.com/cabbitar/status/2117651866888606004) and [@monokern 11-04](https://x.com/monokern/status/2118005016380195261).
- 💬 Organic discussion: [@sammy_capital 11-02](https://x.com/sammy_capital/status/2117230989315297317) lists REA as the last step in a seven-repo "free reverse engineering degree."
- Report verdict: the heat mostly comes from the early-October YouTube long tail (top single video ▶502,605; intro videos total about 1.38M views, see the 11-05 and 11-07 reports).
- Spin-offs: defensive counterpart [qybaihe/bla](https://github.com/qybaihe/bla) (+828 on 11-08), the video version rea-video, and the directory [reacher-z/Awesome-REA](https://github.com/reacher-z/Awesome-REA) (+657 on 11-08).
- We found no tweets from the author or an official account.

### 2. vercel-labs/agent-desktop · 🔥 Heavy promotion (official)
- Why people care: the desktop version of agent-browser. A Rust CLI that reads the OS accessibility tree instead of screenshot coordinates. macOS/Windows/Linux, Apache-2.0.
- Who's pushing: Vercel authors posted in a burst on 10-30, the clearest official promotion case this week.
  - [@ctatedev](https://x.com/ctatedev/status/2116323148706771302): "agent-browser, for your whole computer."
  - [@rauchg](https://x.com/rauchg/status/2116345666108854781): "An agent on every desktop."
- Trajectory: 1-4 stars/day before 10-31, then several days above 2,000, +13,187 this week. Daily gain fell to +827 on 11-08 (see the 11-08 report).
- 💬 Organic discussion: [@yoppy0123 11-01](https://x.com/yoppy0123/status/2116850844813652028) (Japanese) says it finds buttons through the accessibility tree, which suits apps with no API or MCP.
- 🏢 Official / author, HN, press: we found press and blog coverage. No KOL posts on X, no HN discussion.

### 3. cloudflare/security-audit-skill · 🔥 Heavy promotion (official)
- Why people care: backed by Cloudflare. Different agents handle discovery and verification, adversarial challenge cuts false positives, and output is checked against a JSON schema.
- Who's pushing: the official [@CloudflareDev 11-04](https://x.com/CloudflareDev/status/2118013149538390253) called it the starting point of Cloudflare's vulnerability-discovery harness, six phases in all.
- Trajectory: +10,443 this week. Daily gains fell from +2,474 on 11-06 to +1,922 on 11-07 and +1,348 on 11-08.
- 📢 Influencer exposure: [@RoundtableSpace 10-19](https://x.com/RoundtableSpace/status/2112125353594401162) recaps the six-phase flow.
- 💬 Organic discussion: [@thariq_thinks 10-21](https://x.com/thariq_thinks/status/2113119021604422101) calls "runs on free models" the smartest infrastructure-giant contribution to agent security this year. No HN discussion.

### 4. NVIDIA/auto-ontology · 📣 Some promotion (official + HN + KOLs)
- Why people care: an agent can query the right database and still use the wrong business definition (revenue means different things in different tables). This tool builds an ontology from metadata and validates SQL. NVIDIA says it cuts ontology build time by 90% (the project's own claim, not independently verified).
- 💬 Organic discussion: HN [Nvidia – open-source auto-ontology](https://news.ycombinator.com/item?id=50348962), 290 points / 139 comments, 11-03.
- 📢 Influencer exposure: [@DataChaz 11-03](https://x.com/DataChaz/status/2117621667669389684) and [@Sumanth_077 11-04](https://x.com/Sumanth_077/status/2117968195793650056), both "NVIDIA just open-sourced" style posts.
- Trajectory: peaked 11-04, cooled afterward.

### 5. Ebony-Vinyl/dsh-our-free-model · growth source not confirmed from public channels
- Why people care: login-free, key-free access to DeepSeek V4.1 Flash, Kimi K3 and others, advertised as unlimited.
- Trajectory: +10,482 this week. Daily gains held at 1,700-3,300 for 29 straight days, with no single-day spike.
- On X we only found posts from before this week:
  - [@xiangxiang103 10-14](https://x.com/xiangxiang103/status/2110543016138248305), a Chinese "freebie" tutorial.
  - [@mdaman010 10-22](https://x.com/mdaman010/status/2113359596035485929), walks through installing and warns to review third-party plugin code first.
  - [@opensourcelab9 10-16](https://x.com/opensourcelab9/status/2111060434585612404) (Japanese) says V4.1 Flash / Kimi K3 require a GitHub login and a star to unlock, are paid for by the author, and could be cut at any time. That is the tweet's claim; we did not check it against the repo.
- Verdict: it rides the DeepSeek Harness ecosystem's popularity, with almost no organic X/HN discussion this week (see the 11-07 report). A web search on the project name also found no TikTok/YouTube short-video source. The conclusion is that the growth source could not be confirmed from public channels.
- Do not attribute other dsh plugins' or DeepSeek Harness's own numbers to this project.

### 6. milind-soni/OpenMausBot · 📣 Some promotion
- Why people care: an open-source alternative to Grok Bot. Reuses existing Claude/Codex/Grok CLI subscriptions; each bot has its own VM, model and memory, with 500+ app integrations.
- Trajectory: about 50-90/day before 10-29, then 1,000+/day. +7,616 this week. The 11-06 report called it the sharpest rebound among agent projects that day.
- 📢 Influencer exposure: [@voidJan 11-04](https://x.com/voidJan/status/2118240276473147484) (long Chinese post saying its predecessor OpenGrokBot passed 11k stars and can replace the official $30/month subscription), [@0xCheshire 10-29](https://x.com/0xCheshire/status/2115720642641141922).
- Author self-promotion: [@BuildwithOmkarr 9-22](https://x.com/BuildwithOmkarr/status/2102603427297755264).
- 💬 HN: three small posts (1-3 points), little impact.

### 7. google/elephant-goldfish-model · 🔥 Heavy promotion (official + video amplification)
- Why people care: the agent first writes a design doc and defends it under challenge, then a fresh session with no context (the "Goldfish") reviews it. Apache 2.0, used inside Google.
- Trajectory: +5,943 this week, 12 straight days on the list. Daily gains: +1,656 on 11-02, +686 on 11-06.
- Who's pushing: announced by @GoogleOSS. One YouTube video has ▶252,339 views (11-08 report; the 11-02 report separately logged an AI LABS video at ▶213,154).
- 📢 Influencer exposure: [@RoundtableSpace 11-01](https://x.com/RoundtableSpace/status/2116798646591091029), [@free_ai_guides 11-02](https://x.com/free_ai_guides/status/2117210188340228339).
- 💬 Organic discussion: Japanese user [@superdoccimo 10-29](https://x.com/superdoccimo/status/2115739225874366922) notes it is not an officially supported product and is an early version. Three HN posts at 1-2 points each.

### Influencer exposure board

| Project | Influencer posts | Exposure 👁 | Representative accounts | Organic discussion 👁 | Verdict |
|---|---|---|---|---|---|
| morluto/rea | Data: 0 (3 KOL posts on X) | Data: 0 | @milesdeutscher, @monokern, @cabbitar | Data: 0 | 📣 KOL tutorials + YouTube long tail, cooling |
| google/elephant-goldfish-model | Data: 0 (2 KOL posts) | Data: 0; one YouTube video ▶252,339 | @RoundtableSpace, @free_ai_guides | Data: 0 | 🔥 Official + video amplification |
| NVIDIA/auto-ontology | Data: 0 (2 KOL posts) | Data: 0 | @DataChaz, @Sumanth_077 | Data: 0; HN 290 points / 139 comments | 📣 Mostly HN, KOLs in support |
| milind-soni/OpenMausBot | Data: 0 (1 KOL post this week) | Data: 0 | @voidJan, @0xCheshire | Data: 0 | 📣 KOL + author self-promotion |
| Nutlope/hallmark | Data: 0 (1 KOL post, 11-05) | Data: 0 | @AmirMushich (listed it among 10 design repos) | Data: 0 | 📣 Author self-promotion + list post |

## Paper picks

### Agent Context (8 papers)
1. [CoworkOS: Scaling Agent Coworkers for Real-world Automation](https://arxiv.org/abs/2611.03178) · 👍96 · Code: [RUC-NLPIR/CoworkOS](https://github.com/RUC-NLPIR/CoworkOS), 104★. Proposes a general long-horizon work harness that separates task strategy (the model decides actions, delegation and acceptance) from execution management (the runtime keeps state and feedback). Its three-layer design can execute directly or delegate to subagents.
2. [Harness-S](https://arxiv.org/abs/2611.04277) · 👍60 · Code: 55★. Evolves a pool of "sibling harnesses" from one base, each fixing a different failure direction. During training they are called only when the base harness fails, and the abilities are then distilled into a single policy. The argument is against chasing one universally best harness.
3. [ToolSpace](https://arxiv.org/abs/2611.05036) · 👍37 · Code: 31★. Builds environments around tools instead: deterministic rules mine data, state and retry dependencies from real MCP service traces, then generate long-horizon tasks.
4. [EvoMemState](https://arxiv.org/abs/2611.03743) · 👍20 · Code: 3★. Changes memory from isolated facts to "fact + relational/applicability state," to handle updates and conflicts between old and new facts.
5. [Why Pay for Long Reasoning When Rewrite Do Trick?](https://arxiv.org/abs/2611.03852) · 👍13. Rewrites existing reasoning into a compact state record before tool results return, then compares downstream generation and total agent cost. No retraining needed.
6. [Switch-SWE](https://arxiv.org/abs/2611.02017) · upvotes not in the data. Interleaving unfinished tasks made 7 coding agents solve 11.5 percentage points fewer on average. It offers a context-management plugin that raised completion rates by 5.5-15.5 points on OpenCode (see the 11-08 report).
7. [ParetoSaddler](https://arxiv.org/abs/2611.02079) · 👍18. Optimizes agent harness quality and cost jointly, separating intermediate candidate promotion from final deployment choice.
8. [From Autonomous Agents to Cognitive Symbionts](https://arxiv.org/abs/2611.05376) · 👍114 (40 on 11-07, the biggest rise). A vision paper arguing for "AI-augmented humans." It has no experimental results (see the 11-07 report).

### Other agent topics (5 papers)
- [Advances in Agentic Computer Graphics](https://arxiv.org/abs/2611.01860) · 👍127, survey of agentic graphics, most upvoted this week.
- [Embodied Agent Arena](https://arxiv.org/abs/2610.00854) · 👍104, evaluates 10 frontier VLM agents as robot generalists; closed models lead in all five domains.
- [CUA-Master](https://arxiv.org/abs/2611.03126) · 👍97, nested dual-loop recursive improvement framework for computer-use agents, OSWorld Verified 80.2 (see the 11-04 report).
- [TAO](https://arxiv.org/abs/2610.37230) · 👍95, tool-aware joint agent scheduling; sharp rise (👍15 when first seen on 10-29).
- [Route Anything](https://arxiv.org/abs/2611.05275) · 👍82, unified research framework for model and policy routing.

## Community discussion

### Five projects mentioned repeatedly but not near the top of the growth list
(Nearly all community_repos sources in the data are HN.)
1. [qufei1993/skills-hub](https://github.com/qufei1993/skills-hub) · ⭐1,864 · mentioned 6 days · Desktop app that manages agent skills in one place and syncs them to the global skills directories of several AI coding tools (Show HN, 10 points, [link](https://news.ycombinator.com/item?id=50050732)).
2. [AgenticResourceRegistry/AgenticResourceRegistry](https://github.com/AgenticResourceRegistry/AgenticResourceRegistry) · ⭐4,328 · mentioned 6 days · Self-hosted registry for sharing and discovering coding-agent resources within a team, Apache 2.0 ([HN](https://news.ycombinator.com/item?id=50303291)).
3. [choam2426/herdr-paddock](https://github.com/choam2426/herdr-paddock) · ⭐3 · mentioned 5 days · An Orca-style project sidebar for herdr ([HN](https://news.ycombinator.com/item?id=50335894)). The community is tiny; it only signals activity in the Orca/herdr ecosystem.
4. [GetCassis/ontology-skills](https://github.com/GetCassis/ontology-skills) · ⭐29 · mentioned 4 days · Skills that generate analytics ontologies from schemas, dbt, dashboards and docs, a spin-off of the auto-ontology topic ([HN](https://news.ycombinator.com/item?id=50363667)).
5. [rivet-dev/rivet](https://github.com/rivet-dev/rivet) · ⭐6,749 · mentioned 1 day · "Launch HN: Rivet (YC W23)," an orchestrator for agent workloads, 115 points / 58 comments ([HN](https://news.ycombinator.com/item?id=50381687)).
- Runner-up: [Muvon/octomind](https://github.com/Muvon/octomind) (⭐348, an open-source AI harness in Rust that claims to save tokens, 36 points / 31 comments, [HN](https://news.ycombinator.com/item?id=50352898)).

### Hottest topics on X / HN / Reddit this week
There is no Reddit data. X activity this week shows up in the project posts above; the two x_topics entries are old posts and are not used.

1. Claude Code security and privacy (the biggest HN topic)
   - [Claude Code sends your email address to websites](https://news.ycombinator.com/item?id=50385272), 1457 points / 453 comments, 11-05 ([issue](https://github.com/anthropics/claude-code/issues/107757)).
   - [Claude Code's "Don't Ask Again" exposes passwords in 1,122 public GitHub files](https://news.ycombinator.com/item?id=50407882), 497 points / 356 comments, 11-07.
   - [OpenAI seems to be silently re-enabling model training on Codex chats](https://news.ycombinator.com/item?id=50352757), 66 points / 28 comments, 11-03.
2. Leaving Claude / switching harness
   - [Goodbye Claude, hello Pi](https://news.ycombinator.com/item?id=50410107), 537 points / 343 comments, 11-08.
   - Also [Ripple-65B Preview: U.S. Open-Weight SOTA on Agentic Coding](https://news.ycombinator.com/item?id=50369925), 327 points / 116 comments, 11-04.
3. Agent memory
   - "The Components of Agent Memory," [HN](https://news.ycombinator.com/item?id=50402212), 105 points / 60 comments.
   - "Agent memory needs its OpenTelemetry moment," [HN](https://news.ycombinator.com/item?id=50411467), 119 points / 87 comments.
   - [Memorilla: Latent Semantic Memory for LLMs](https://news.ycombinator.com/item?id=50395919), 112 points, 11-06.
4. Enterprise agent products and uses
   - [Launch HN: Momentic (YC W24) – Agents that catch bugs by using your app](https://news.ycombinator.com/item?id=50339913), 158 points / 108 comments.
   - [Skill to Create Product Videos](https://news.ycombinator.com/item?id=50340992), 113 points / 35 comments ([aaitor/skill-video-studio](https://github.com/aaitor/skill-video-studio), ⭐321).
   - [Perplexity launches AI agents for work](https://news.ycombinator.com/item?id=50395866), 61 points.
5. Second thoughts on LLM coding
   - [Why I will not be using LLMs in my coding](https://news.ycombinator.com/item?id=50412591), 89 points / 175 comments (more comments than points).
   - [You'll need nerves of steel to work with AI agents](https://news.ycombinator.com/item?id=50373149), 56 points / 77 comments.

## What to watch next week

1. Launch-driven projects are cooling, so the test is which ones hold. agent-desktop, security-audit-skill and auto-ontology all fell off their peaks (auto-ontology +1,062 on 11-07, security-audit-skill +1,348 on 11-08, agent-desktop +827 on 11-08). Two official-family signals are still rising: [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) at +794 on 11-08 (up from 55-153) and [google/skills](https://github.com/google/skills) at +475~+488/day (up from 20-30). Check whether they keep going.
2. rea is slowing while its spin-offs grow. Its 11-08 gain was +2,767 and its 28-day average is 12,980/day. It still leads but keeps cooling, while [Awesome-REA](https://github.com/reacher-z/Awesome-REA) (+657), rea-video (+623) and [bla](https://github.com/qybaihe/bla) (+828) picked up. Watch whether the spin-offs are a one-time pile-on. bla's 162x-2532x defense-cost figures come from the project's own benchmark and have not been independently verified.
3. Memory and context management are moving from papers to engineering. Papers: Switch-SWE (+5.5-15.5 points), Coca-Cola (tokens down 70-89%), Cognitive Symbionts (a vision with no experiments). HN: two long memory posts. claude-mem's privacy issue #5176 needs a response from the maintainers and verification before any judgment. [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) gained +10,482 this week with no known growth source, so wait for more public information.
