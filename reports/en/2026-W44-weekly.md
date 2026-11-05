# Agent & Agent Context Weekly · 2026-W44 (2026-10-26 ~ 2026-11-01)

> Generated at 2026-11-04 18:32 PST

Data covers all 7 days (2026-10-26 ~ 11-01). Growth figures are "+N this week"; a leading ≈ marks an estimate summed from daily gains.

## Today's highlights
- Reverse-engineering agent [morluto/rea](https://github.com/morluto/rea) is still first: ⭐417,802, +35,209 this week. Daily gains fell every day, from +6,962 (10-26) to +3,311 (11-01).
- Skills drove most of the growth, in three groups: anti-"AI look" design ([Nutlope/hallmark](https://github.com/Nutlope/hallmark), [pbakaus/impeccable](https://github.com/pbakaus/impeccable), [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)), big-company methodology and security (Cloudflare, Google, NVIDIA), and general engineering habits ([mattpocock/skills](https://github.com/mattpocock/skills), [obra/superpowers](https://github.com/obra/superpowers), [affaan-m/ECC](https://github.com/affaan-m/ECC)).
- Memory research turned back toward plain RAG. Two papers ([Memory Tax](https://arxiv.org/abs/2610.34073), [Raw-RAG](https://arxiv.org/abs/2610.30755)) find that many purpose-built memory systems lose to naive retrieval over raw history. omarsar0's two posts on them got ❤487 and ❤896.
- Cost and memory tools resurfaced over the weekend: [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) +3,417 this week, and [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) went from about 300/day to 1,500+/day.
- Desktop and phone computer use appeared from nothing. [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) gained 1–4 stars a day for its first 13 days, then +844, +2,270 and +2,680/day (see the 11-01 report). [wangzan101/Mika](https://github.com/wangzan101/Mika) is 3 days old with ≈+3,313 this week.

## 1. Agent Context feature trends

**1. Codebase indexing / retrieval (heating up)**
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐140,397 · +5,529 this week
  - Approach: a local tree-sitter AST builds a persistent knowledge graph from code, docs, SQL and PDFs. No vector store; edges are labeled EXTRACTED or INFERRED. Tagline: "map once, not grep forever."
  - Evidence: one post by @techNmak (47,950 followers, 10-25) got ❤1,545 👁102,155.
- [xerj-org/xerj](https://github.com/xerj-org/xerj) · ⭐18,614 · +3,153 this week
  - Approach: a single Rust binary doing hybrid BM25 + vector search over code, docs and logs, with MCP and agent memory.
  - Caveat: X posts relay the project's own numbers. @vicky_grok cites a 16-task benchmark where both setups solved 16/16 and output tokens fell from 26,477 to 9,982 (2.7× fewer). @himanshu19890 cites a case where Claude Code solved 6/6 from memory for $1.49, versus 5/6 for $4.40 with the xerj index. All self-reported, and in that case the indexed run cost more.
- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · ⭐107,506 · +5,204 this week: one CLI that reads X, Reddit, YouTube, Bilibili and Xiaohongshu with no API fees. It is a web-reading layer, not retrieval.

**2. Long-term memory (heating up, contested)**
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · ⭐108,783 · +5,767 this week
  - Approach: lifecycle hooks record each session, an AI compresses it into a summary, it is stored in SQLite + Chroma, and new sessions get it injected automatically.
  - Trend: daily gains were about 170–340 before, then +975, +1,634, +1,527, +1,523 from 10-29 (see the 11-01 report).
  - Incident: an HN post (10-29, 3 points) links issue #5176, and its title says the install uploads the last 30 days of prompts to cmem.ai. That is the post title's claim. I did not check the repo code.
- [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · ⭐57,539 · +3,915 this week: "Agent Memory That Learns." An official post on 10-26 said multiple agents can share memory through the Omnigent meta-harness.
- Counter-signal papers (see section 4): [Memory Tax](https://arxiv.org/abs/2610.34073), [Raw-RAG](https://arxiv.org/abs/2610.30755).

**3. Skills / plugins (biggest source of growth, still heating up)**
- Anti-"AI look" design: [pbakaus/impeccable](https://github.com/pbakaus/impeccable) ⭐99,044, +12,031 this week (Trending weekly basis); [Nutlope/hallmark](https://github.com/Nutlope/hallmark) ⭐44,543, +11,379 this week; [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) ⭐107,541, +5,238 this week.
  - In a 14-day series, impeccable rose from about 400 to about 1,470/day. Its 7-day average is 1,018 and its 28-day average 669, so it is still accelerating.
- Big-company methodology and security:
  - [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) ⭐56,081, +9,918 this week: multi-stage audit with separate finding and verification agents.
  - [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) ⭐8,662, +7,607 this week: an "elephant" agent holds the full context and writes the design; a memoryless "goldfish" agent reviews it fresh.
  - [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) ⭐23,292, +2,273 this week: scans skills for security risk.
- General engineering habits: [mattpocock/skills](https://github.com/mattpocock/skills) +6,040 this week; [obra/superpowers](https://github.com/obra/superpowers) +5,581; [affaan-m/ECC](https://github.com/affaan-m/ECC) +6,007; [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) +6,016.
- Papers: [Socratic Skill Learning](https://arxiv.org/abs/2610.17860); [2610.33024](https://arxiv.org/abs/2610.33024) finds the same skill helps strong models and hurts weak ones (103 task-skill pairs; GPT-5.6-luna +31.1 points, Gemma-4-E4B −8.8 points).

**4. Caching and cost (heating up)**
- [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) · ⭐3,643 · +3,417 this week (created 10-13)
  - Approach: an add-on plugin for "experience-driven black-box cost control" that changes neither the model nor the agent.
  - Result: a web-search summary says average cost on SWE-Bench drops about 18–31%, from Microsoft Research and UC Berkeley (per the project description in the data).
  - Daily gains: +205 (10-28), +1,368 (10-31), +931 (11-01).
- [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) · +2,490 this week: the description claims RTK + Caveman compression saves 15–95% of tokens (the project's own claim).
- Papers: [2610.34241](https://arxiv.org/abs/2610.34241) (see the 10-31 report) measured about 69.4 s to first token on a cold prefix versus about 2.8 s with heavy reuse. [TAO](https://arxiv.org/abs/2610.37230) factors cache reuse and tool-return timing into scheduling. [2610.34491](https://arxiv.org/abs/2610.34491) reports that the highest effort setting can cost up to 42× the lowest without necessarily being more accurate.

**5. Computer use / desktop and phone agents (new this week)**
- [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · ⭐6,267 · ≈+4,435 this week (two days summed). It reads the OS accessibility tree instead of screenshots, so refs are stable and actions can be retried safely.
  - Official account @ctatedev (Chris Tate) announced it on 10-30 as "agent-browser for your whole computer."
- [wangzan101/Mika](https://github.com/wangzan101/Mika) · ⭐3,626 · ≈+3,313 this week: a phone agent for Android that operates apps in the background. The author promoted it on 10-29.

**6. MCP (background, no single breakout)**
- [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo), [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) and [morluto/rea](https://github.com/morluto/rea) all ship MCP. No project broke out this week with MCP as its selling point.
- Harness self-evolution is a paper topic, not a project topic (see section 4).

## 2. Top 15 agent projects of the week
(Ranked by weekly gain. Non-agent items removed: none. cleanyourtv stays because it is sold as Claude Code and other agents driving a TV over ADB.)

| # | Project | Type | ⭐ | This week | Days on list | Why it's hot |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | context | 417,802 | +35,209 | 7 | Lets agents reverse-engineer apps and native binaries via MCP/CLI. 7 influencer posts 👁491,616; 7 YouTube videos total ▶1,314,906 views (see the 10-31 report). |
| 2 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | agent | 55,591 | +12,946 | 7 | DeepSeek Harness plugin: "use DeepSeek V4.1 Flash / Kimi K3 free, no login, no key." Spread by tutorial-style posts. |
| 3 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | context | 99,044 | +12,031 (Trending weekly) | 5 | Gives coding agents a design vocabulary (polish, critique, audit). |
| 4 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) | agent | 48,741 | ≈+11,398 | 6 | Uses Wi-Fi/ADB so an AI assistant can strip ads and preinstalled apps from Android TVs. Created 10-17; daily peak 6,818 on 10-20. |
| 5 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | agent | 44,543 | +11,379 | 7 | Anti-"AI look" design skill. |
| 6 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | agent | 56,081 | +9,918 | 7 | Multi-stage audit with finding and verification split. |
| 7 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | context | 53,496 | ≈+8,187 | 5 | Personalized AI tutor with long-term memory and textbook Q&A. Daily gains 1,478 then 2,254 from 10-26. |
| 8 | [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | context | 8,662 | +7,607 | 7 | Google's "design before code" two-agent review. |
| 9 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | agent | 268,161 | +6,938 | 7 | "Everything is a Plugin"; the base for the dsh plugin ecosystem. |
| 10 | [stablyai/orca](https://github.com/stablyai/orca) | agent | 112,248 | +6,770 | 7 | Runs several coding agents in parallel (worktrees, desktop and phone remote control). |
| 11 | [yetone/magpie](https://github.com/yetone/magpie) | agent | 27,497 | +6,181 | 7 | Menu-bar app that swaps models under each agent (e.g. Codex on DeepSeek). |
| 12 | [mattpocock/skills](https://github.com/mattpocock/skills) | context | 309,033 | +6,040 | 7 | The author's own engineering habits split into small skills. |
| 13 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | context | 181,951 | +6,016 | 7 | "Laziest senior dev": writes less code. Made a 20-item list post; @maixbt relayed its own benchmark of 53% less code and 45% fewer tokens. |
| 14 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | context | 294,558 | +6,007 | 7 | Harness optimization system: skills, memory and security. |
| 15 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | context | 108,783 | +5,767 | 7 | Persistent memory across sessions. |

- Rising stars such as Orkas, Mika and agent-desktop missed the top 15 because they had few days on the list. [obra/superpowers](https://github.com/obra/superpowers) (+5,581) and [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) (+5,529) came right after.

## 3. Growth attribution and promotion

**1. [morluto/rea](https://github.com/morluto/rea) (+35,209 this week): 🔥 Heavy promotion**
- Feature: lets an agent reverse-engineer apps and binaries without source, connecting to Ghidra, Hopper and IDA.
- Who is pushing: mostly influencers and list accounts.
- 📢 Influencer exposure: 7 posts, 👁491,616, from 11 accounts including @0xDeniAi, @Zara__Ai, @rakib_hossen_ai and @so_ainsight.
- 💬 Organic discussion: 17 posts, 👁1,709,879.
- Representative: [@0xDeniAi](https://x.com/0xDeniAi/status/2114847015091794206) (1,811 followers, 10-26), "REA creator just dropped 20 GitHub repos…", ❤2,783 👁164,814. HN launch post: [REA Reverse – Engineer Anything](https://news.ycombinator.com/item?id=50028275) (10-10, 814 points / 340 comments).
- Trend: daily gains fall each day, and the single-day peak was +54k on October 12 (see the 10-30 report).
- Separately, a @realaunchfun post drew a reply from @EirikSpike saying it has nothing to do with the real REA. Noted only as a name mix-up.

**2. [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) (+12,946 this week): 📣 Some promotion (user tutorials)**
- Feature: use frontier models inside DeepSeek Harness with no login or key.
- 📢 Influencer exposure: 2 posts, 👁106, close to zero (only list posts from @buildpicks and @JivaniVartan).
- 💬 Organic discussion: 28 posts, 👁326,683.
- Representative: [@NFT_Chen](https://x.com/NFT_Chen/status/2114639505861022076) (24,939 followers, 10-26), tutorial, ❤337 👁53,064; [@itsjdraven](https://x.com/itsjdraven/status/2114331404708491304) (8,076 followers, 10-25), ❤303 👁20,253.
- Limits: @superdoccimo (10-28), citing the README, wrote that the free access comes from third-party free quotas such as the OpenCode Zen gateway and Kilo's public gateway, so availability, data handling and the risk of changes are on the user. @MatinSenPai warned that the plugin is published on an unofficial community hub and has not been security-checked.
- One daily report mentioned a "legal letter" in the issues. Opening issue #576 directly returned 404, so I could not verify it and left it out.

**3. [Nutlope/hallmark](https://github.com/Nutlope/hallmark) (+11,379 this week): 📣 Some promotion**
- Feature: anti-"AI look" design with 22 themes and 65 pre-release checks, installed into Claude Code, Cursor or Codex with one command (per a web summary, not checked item by item).
- 📢 Influencer exposure: 7 posts, 👁27,334. 💬 Organic discussion: 32 posts, 👁118,653.
- Representative: [@designertom](https://x.com/designertom/status/2114786186250379759) (19,900 followers, 10-26), "Nutlope/hallmark, made by Together AI," ❤82 👁4,124.
- The HN post got only 4 points. Spread came mainly from GitHub Trending roundups and small accounts re-posting.

**4. [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) (+9,918 this week): 📣 Some promotion**
- Feature: separate finding and verification agents to cut false positives, with machine-readable output.
- 📢 Influencer exposure: 6 posts, 👁312,476, mostly one [@fram3o](https://x.com/fram3o/status/2115266516056977556) post (4,804 followers, 10-27), a grab-bag list titled "Download these before the internet gets restricted…", ❤6,666 👁253,182, where the repo is one item among many.
- 💬 Organic discussion: 19 posts, 👁604,099. One @jurbed post in the 10-26 report accounts for 👁594,554 of that, about 99.8% (see the 10-26 report).
- No official Cloudflare X post found.

**5. [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) (≈+8,187 this week): 🌱 Organic growth, mostly Chinese-language influencers**
- Feature: explains and generates problems from your own textbooks, long-term memory, and per-second questions on Bilibili/YouTube videos.
- 📢 Influencer exposure: 3 posts, 👁104. 💬 Organic discussion: 18 posts, 👁67,892.
- Representative: [@AIExplorerTim](https://x.com/AIExplorerTim/status/2115266330475815245) (45,950 followers, 10-27), ❤1,002 👁60,150.
- It took off suddenly (60–300/day before, then 1,478 and 2,254 from 10-26). The trigger could not be confirmed from the data.

**6. [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) (+7,607 this week): 🌱 Organic growth**
- Feature: design before code; a goldfish agent re-reviews without context.
- 📢 Influencer exposure: 0. 💬 Organic discussion: 26 posts, 👁81,968.
- Representative: [@awe0_io](https://x.com/awe0_io/status/2114666959786983759) (4,857 followers, 10-26), a Chinese-language explainer, ❤1,397 👁75,957. Daily gain on 11-01 was +1,547, with more exposure from YouTube (one AI LABS video at ▶201,074 views, see the 11-01 report).
- No official Google X promotion turned up in search. There was a Google open-source blog post and coverage on gihyo.jp (a Japanese developer publication).

**7. [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) (≈+11,398 this week): 🌱 Organic growth (started by the author's own posts)**
- Feature: removes TV ads, no root, reversible.
- 📢 Influencer exposure: 1 post, 👁86. 💬 Organic discussion: 16 posts, 👁4,342 (few posts this week; the peak was 10-20 and is over).
- Representative: [@Cybernews](https://x.com/Cybernews/status/2115101823442813320) (73,078 followers, 10-27) said it passed 41,000 stars in under 10 days.
- Verification: a web-search summary says it was driven mainly by the author @gathint's own posts, followed by outlets such as Cybernews. I did not open the original post; the source is the search summary.

**8. [pbakaus/impeccable](https://github.com/pbakaus/impeccable) (+12,031 this week): 📣 Some promotion**
- 📢 Influencer exposure: 9 posts, 👁108,615, from 13 accounts (including @wanerfu, 121,586 followers, and @6AW0RON0k). 💬 Organic discussion: 18 posts, 👁117,953.
- Representative: [@gkxspace](https://x.com/gkxspace/status/2115408503133307157) (59,620 followers, 10-28), ❤721 👁39,270.
- A web-search summary says the author, Paul Bakaus, created jQuery UI (source: search summary, original page not opened).

### Influencer exposure ranking this week
| Project | Influencer posts | Exposure 👁 | Representative accounts | Organic 👁 | Verdict |
|---|---|---|---|---|---|
| [morluto/rea](https://github.com/morluto/rea) | 7 | 491,616 | @0xDeniAi, @Zara__Ai | 1,709,879 | Large on both; influencer-driven |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | 6 | 312,476 | @fram3o | 604,099 | One grab-bag list post carries the exposure; one post is nearly all the organic views |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 10 | 221,180 | @so_ainsight, @thegreatest_sv | 27,998 | Mostly list posts |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 5 | 170,369 | @maixbt, @0xPontiuz | 54,988 | Re-posts of the 20-item list |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 5 | 170,962 | @choopyplug1, @csaba_kissi | 51,758 | Same 20-item list |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 5 | 156,778 | @rakib_hossen_ai, @Zara__Ai | 697,591 | Organic discussion dominates |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 9 | 108,615 | @wanerfu, @6AW0RON0k | 117,953 | Roughly half list posts, half organic |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 2 | 95,415 | @choopyplug1 | 4,247 | Exposure far above organic discussion |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | 3 | 243,271 | @Greshamtrade, @milindlabs | 420 | Exposure comes mostly from @Greshamtrade's 20-repo list; almost no organic discussion |
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 1 | 39,345 | @xiaomovps | 54,547 | Mostly organic |
- Addendum: in the community ranking, Opus 5.5 video-list projects got very large exposure: [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 19 posts 👁1,366,953 and [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) 16 posts 👁1,314,978, with almost no organic discussion (👁18,759 and 👁9). This is the most lopsided pair on the ranking.

## 4. Paper picks

**Agent Context**
1. [Memory Tax: Dissecting the Net Value of Agent Memory](https://arxiv.org/abs/2610.34073) · 👍149 · Many purpose-built memory systems lose to naive RAG in most settings. The paper splits net value into memory benefit and memory tax; the simple fix is to retrieve from both raw history and memory, then rerank together. [@omarsar0](https://x.com/omarsar0/status/2115098954799169970) (325,934 followers) posted about it, ❤487.
2. [Is Complex Agentic Memory Always Needed? Naive RAG Is Stronger Than We Thought](https://arxiv.org/abs/2610.30755) · 👍38 · Raw-RAG (dense retrieval plus reranking) ranks first in 6 of 7 benchmark-model settings, ahead of the best memory system by 0.13–5.53 points. On BEAM-1M, ingestion takes 0.3 hours versus 3.2–27. [Post](https://x.com/omarsar0/status/2113635562578178147), ❤896.
3. [Self-Evolving Agent Harness](https://arxiv.org/abs/2610.18813) · 👍99 · Formalizes harness self-evolution: feedback-driven revision of prompts, memory, workflows and plugins with weights frozen. It gives generalization and preservation bounds.
4. [Evolving to Match Capabilities: Harness Self-Evolution via Skill Adaptation](https://arxiv.org/abs/2610.33024) · 👍32 · The same skill lifts a strong model by 31.1 points and drags a weak one down by 8.8. In 86% of the weak model's failures, the violated requirement was already written in the skill, so the paper adapts skills to model capability.
5. [Socratic Skill Learning](https://arxiv.org/abs/2610.17860) · 👍49 · A teacher and a student take turns learning skills. The paper also builds SkillTransferBench (35 task families, 408 executable cases) to test reuse.
6. [Mosaic: Multi-Session Agentic RL](https://arxiv.org/abs/2610.22174) · 👍63 · Targets multi-session trajectories produced by context compression and sub-agent forking. It improves credit assignment and avoids training-inference mismatch.
7. [DeLoop](https://arxiv.org/abs/2610.19376) · 👍33 · Uses an agent's own repeated actions as negative samples; loops get more common once history is compressed.
8. [Trial by Trace: TraceTrial-Bench](https://arxiv.org/abs/2610.32285) · 👍291 · Evaluates the reliability of the harness itself across 7 components (context, execution, governance, lifecycle and others) and 95 tasks.

**Other agent topics**
- [The Trinity](https://arxiv.org/abs/2610.36077) · 👍543 · Recursive self-improvement framework that couples world generation with harness evolution (Creator / Explorer / Evolver).
- [Multiscale Policy Optimization](https://arxiv.org/abs/2610.35013) · 👍379 · Advantage estimation and importance sampling at the turn level, for long-horizon agent RL.
- [Trajectory2Gym](https://arxiv.org/abs/2610.33568) · 👍359 · Synthesizes supervision trajectories with decision rationale for tool-using agents.
- [DynaFlow](https://arxiv.org/abs/2610.34467) · 👍200 · Has a main agent generate executable workflows to coordinate sub-agents.
- [Focused Omni-Modal GUI Agents](https://arxiv.org/abs/2610.26203) · 👍230 · FocusGUI adapter exposes only the context each step needs, to prevent sequential interference.

## 5. Community discussion

**Five projects mentioned repeatedly but not near the top of the growth ranking**
1. [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) · ⭐12,766 · mentioned 5 days · A landing-page design skill open-sourced by designer Elaya. The original post got ❤10,173 👁645,417; top community-ranking score 3,429.4.
2. [EpicGames/unreal-engine-skills-for-claude-code-plugin](https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin) · ⭐1,724 · mentioned 4 days · Epic's official Unreal Engine skills. 11 organic accounts, 👁323,147.
3. [wshobson/agents](https://github.com/wshobson/agents) · ⭐42,003 · mentioned 3 days · A plugin marketplace across multiple harnesses. Exposure came from 4 list posts, 👁306,155.
4. [xingjian-bai/opal](https://github.com/xingjian-bai/opal) · ⭐225 · mentioned 2 days · A coding agent rewrites the optimizer during training. One post got ❤1,561 👁199,306.
5. [SouravBeraAkaSpeed/xiryn](https://github.com/SouravBeraAkaSpeed/xiryn) · ⭐380 · mentioned 3 days · Open-source personal agent, one Docker Linux desktop per agent. One post, 👁190,055.

**Top topics on X / HN / Reddit this week** (no Reddit data)
1. **Does agent memory lose to naive RAG?**
   - [@omarsar0 on Memory Tax](https://x.com/omarsar0/status/2115098954799169970)
   - [@omarsar0 on Raw-RAG](https://x.com/omarsar0/status/2113635562578178147)
   - [HN: The State of Context Engineering](https://news.ycombinator.com/item?id=50235780) (247 points / 62 comments)
2. **Supply-chain and privacy incidents in the Claude Code ecosystem**
   - [HN: Backdoors in official Claude Code extensions](https://news.ycombinator.com/item?id=50302334) (641 points / 17 comments)
   - [HN: Claude Code VS Code extension with backdoor on Cursor marketplace](https://news.ycombinator.com/item?id=50301983) (393 points)
   - [HN: Backdoor in Claude Code for VS Code extension on the Cursor Marketplace](https://news.ycombinator.com/item?id=50300683) (235 points / 328 comments)
   - [HN: Claude Code sends background agent transcripts to the model](https://news.ycombinator.com/item?id=50284255) (518 points / 210 comments)
   - These are the events as the post titles describe them; details were not checked one by one.
3. **Harness engineering and parallel multi-agent work**
   - [@miu21590 on Octopus OS](https://x.com/miu21590/status/2114095879632375944) (4,010 followers) ❤2,091 👁158,814
   - [@_avichawla on HarnessRouter](https://x.com/_avichawla/status/2113954302901256597) ❤1,105
   - [HN: JetBrains Thinkrail](https://news.ycombinator.com/item?id=50233294) (242 points / 174 comments)
   - [HN: Prospero coding harness](https://news.ycombinator.com/item?id=50315226) (90 points / 60 comments)
   - [HN: Minecraft agent swarm](https://news.ycombinator.com/item?id=50296486) (361 points / 145 comments)
4. **Cost and usage limits**
   - [HN: OpenAI and Anthropic cut prices by up to 80%](https://news.ycombinator.com/item?id=50236102) (399 points / 406 comments)
   - [HN: ChatGPT and Codex usage limits merged](https://news.ycombinator.com/item?id=50320588) (201 points / 140 comments)
   - [@DanKulkov on terminal-prompt agents](https://x.com/DanKulkov/status/2115765346816926003) ❤1,222 👁338,146
5. **The value and quality of skills**
   - [@addyosmani long post](https://x.com/addyosmani/status/2114604912520921136) ❤12,128 👁2,148,171 (the post body is a link and its content is unknown, so only the reach is reported)
   - [HN: "AI Skills" are worthless in 2026](https://news.ycombinator.com/item?id=50255346) (53 points / 25 comments)
   - [@angeldot_ skills list](https://x.com/angeldot_/status/2114374287549157402) ❤1,743

## 6. What to watch next week
1. **Computer-use projects like agent-desktop and Mika.** agent-desktop went from single-digit daily gains to +2,680. Mika is three days old. The former has almost no X promotion and the latter relies on the author's own posts, so the test is whether daily gains hold next week or fall back once Trending passes.
2. **Cost tools versus memory tools.** TokenEconomizer (+931/day, four days running) and claude-mem (1,500+/day) are rising, but claude-mem's privacy issue and the two "memory loses to RAG" papers push the other way. The self-reported savings figures still need independent retests.
3. **rea versus design skills.** rea gained +35k this week, but daily gains are down to the 3,000 range, so a further decline is likely. Design skills are more likely to continue (impeccable's 7-day average of 1,018 is still above its 28-day average of 669). Whether that growth is only list-post amplification rather than sustained use still needs checking.
