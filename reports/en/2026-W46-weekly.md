# Agent Weekly · 2026-W46 (2026-11-09 ~ 2026-11-15)

> Generated at 2026-11-16 09:31 PST

## This week's highlights
- Chrome's official [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) gained +14,531 this week, the biggest dark horse. It had been adding single digits a day until the official launch and a Show HN on 11-10, then climbed daily.
- Big-company repos built for agents broke out together: [meta/astryx](https://github.com/meta/astryx) +12,927 this week, [vercel-labs/ui](https://github.com/vercel-labs/ui) ≈+3,879 this week, [openai/codex-security](https://github.com/openai/codex-security) +2,176 this week (Trending weekly). Astryx and vercel-labs/ui are already fading. The Chrome repo is still rising.
- [morluto/rea](https://github.com/morluto/rea) is still first by growth (+18,440 this week) but cooling. Its 7-day average is 3,634 a day against 11,664 over 28 days, and its 10-12 peak was +53,941.
- Skills remain the biggest category (mattpocock, anthropics, addyosmani and cloudflare are all in the top list). HN also questioned whether skills are worth anything.
- The paper themes are verifiable memory and the token cost of reading and compression. Two empirical papers on harness self-evolution both find that rising scores don't mean reliable improvement.

## Agent Context feature trends

- **Skills / plugins (still the hottest)**
  - [mattpocock/skills](https://github.com/mattpocock/skills) · ⭐324,916 · +324,916 total, +6,627 this week · short engineering skills from the author's own .agents directory. /grill-me spread furthest.
  - [anthropics/skills](https://github.com/anthropics/skills) · ⭐195,185 · +5,868 this week · official Agent Skills example repo. It hit a 30-week high on 11-09 (+1,535), then fell to +958 (see the 11-11 report).
  - [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) · ⭐117,816 · +3,775 this week · turns specs, TDD, review and release gates into skills. The 11-11 report says it accelerated over four days (317→463→739→765).
  - [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐73,007 · +6,483 this week · six-stage multi-agent security audit. The agent that finds a bug can't confirm it; an independent agent verifies.
  - Anti-"AI slop" design skills are a rising subcategory: [Nutlope/hallmark](https://github.com/Nutlope/hallmark) ⭐55,329 · +4,601 this week; [pbakaus/impeccable](https://github.com/pbakaus/impeccable) ⭐110,569 · +4,575 this week; [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) ⭐115,989 · +4,069 this week.
  - Cooling signals on HN: [“AI Skills” are worthless in 2026](https://fishbowl.pastiche.org/2026/10/26/ai-skills) (53 points / 26 comments) and [Ask HN: How do you evaluate the skills your AI agents use?](https://news.ycombinator.com/item?id=50426070) (25 points / 7 comments).
- **Official "agent-ready" specs and capabilities (new this week)**
  - [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) · ⭐17,172 · +14,531 this week · a skill plus a CLI covering 100+ web scenarios, steering agents toward modern native APIs instead of ~2019-era JS.
  - [meta/astryx](https://github.com/meta/astryx) · ⭐28,633 · +12,927 this week · React + StyleX design system with a built-in CLI and MCP server.
  - [vercel-labs/ui](https://github.com/vercel-labs/ui) · ⭐4,812 · ≈+3,879 this week (summed over ≈3 days) · pulls popovers, selection, keyboard navigation and focus management into cross-framework "behaviors".
  - [expo/exact](https://github.com/expo/exact) · ⭐4,139 · ≈+2,453 this week (summed over ≈4 days) · write once, run natively on web/macOS/iOS/Linux, and agents can build and test it.
- **Multi-agent consoles and model gateways (steady draw)**
  - [pingdotgg/t3code](https://github.com/pingdotgg/t3code) · ⭐61,236 · +9,668 this week · one interface that drives Claude Code, Codex and others.
  - [stablyai/orca](https://github.com/stablyai/orca) · ⭐125,552 · +6,478 this week · parallel worktrees on your own subscription, on the list 139 days straight.
  - [yetone/magpie](https://github.com/yetone/magpie) · ⭐36,870 · +4,694 this week · menu-bar gateway that lets Codex and Claude Code use DeepSeek, Kimi and others.
  - [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) · ⭐281,507 · +5,188 this week · everything is a plugin.
  - Some gateways and harnesses ship their own context compression or token savings: [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) ⭐87,374 · +2,070 this week, which claims RTK+Caveman compression saves 15–95% of tokens.
- **Memory / codebase indexing / knowledge graphs (moderate)**
  - [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · ⭐117,013 · +2,533 this week · captures sessions, compresses them with AI, injects them into future sessions. Peaked 11-01 (+1,753), now about 480/day.
  - [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐148,205 · +3,872 this week · turns a codebase into a queryable knowledge graph with local AST parsing and no vector store.
  - [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) · ⭐12,764 · +2,873 this week · a semantic layer for better context retrieval. Peaked 11-04 (+2,462), since cooled.
  - [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) · ⭐120,381 · +2,080 this week · "talk like a caveman" to save 65% of tokens, by its own claim.
  - The 11-11 report: [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) gained +2,745 over 7 days (not in the top 80 repos), pitched as context compression.
- **Computer / browser / phone control (strengthening)**
  - [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · ⭐24,089 · +4,635 this week · drives native desktop apps through the system accessibility tree. Past its peak (11-02, +3,464).
  - [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) · ⭐51,483 · +4,105 this week · went from about 70/day to nearly 900/day over 14 days.
  - [kuafuai/andee](https://github.com/kuafuai/andee) · ⭐6,085 · +2,280 this week · phone agent that operates any app through accessibility services. It added 40–100/day early in the week, then +911 on 11-13.
- **Reverse-engineering family**
  - [morluto/rea](https://github.com/morluto/rea) · ⭐461,344 · +18,440 this week · connects agents to Hopper/Ghidra/IDA for reverse engineering.
  - Spinoffs: [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) ⭐9,033 · +4,859 this week, which judges shot by shot whether footage is live-action, AI-generated or made in code; and the defensive project [qybaihe/bla](https://github.com/qybaihe/bla) ⭐5,266 · +2,249 this week.
- **Caching and cost (mostly papers)**: see SparseRead, Coca-Cola and Evolving Infra in the papers section. The daily reports also mention KV-cache reuse papers such as Nebula, DARIC and Octopus (not checked one by one).
- **Overall**: official specs and skills are heating up, rea is cooling, memory projects are flat, and paper interest outruns repo interest.

## Top 15 Agent projects this week
Ranked by weekly growth. Type is the category field in the data.

| # | Project | Type | ⭐ Total | Growth | Days on list | Why it's hot |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | context | 461,344 | +18,440 this week | 7 | Reverse-engineering agent MCP/CLI, spread by "complete setup / N-step tutorial" sales-style posts and YouTube. Six videos total ≈▶749,863 views (see the 11-10 report). |
| 2 | [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) | agent | 17,172 | +14,531 this week | 5 | Official Chrome launch plus a Show HN (447 points / 146 comments). |
| 3 | [meta/astryx](https://github.com/meta/astryx) | agent | 28,633 | +12,927 this week | 7 | Meta's internal design system, open-sourced for the first time, agent-ready, with a CLI and MCP. |
| 4 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | agent | 61,236 | +9,668 this week (Trending weekly) | 4 | Author Theo promotes it himself. One UI for several coding agents. |
| 5 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | agent | 75,561 | +9,488 this week | 7 | "Free, no login" dsh plugin for DeepSeek V4.1 Flash and Kimi K3, spread by tutorial posts. |
| 6 | [mattpocock/skills](https://github.com/mattpocock/skills) | context | 324,916 | +6,627 this week | 7 | Well-known author promotes it himself; /grill-me broke out. |
| 7 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | agent | 73,007 | +6,483 this week | 7 | Cloudflare tweeted it, in the middle of a wave of vulnerability disclosures. |
| 8 | [stablyai/orca](https://github.com/stablyai/orca) | agent | 125,552 | +6,478 this week | 7 | Parallel agent workbench. The official account promoted it off the Conductor Cloud shutdown. |
| 9 | [anthropics/skills](https://github.com/anthropics/skills) | context | 195,185 | +5,868 this week | 7 | Official skills repo, pushed by list-post accounts. |
| 10 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | agent | 23,156 | +5,229 this week | 7 | Open-source Grok Bot alternative where each bot gets its own VM. No X discussion found; HN posts scored only 1–3 points. |
| 11 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | agent | 281,507 | +5,188 this week | 7 | DeepSeek's official harness. Its plugin ecosystem is the background; no new tweets this week. |
| 12 | [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | context | 19,541 | +4,936 this week | 7 | Google's "long-lived design doc + memoryless reviewer" plugin. YouTube videos total ≈▶513,847 views (see the 11-10 report). |
| 13 | [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) | context | 9,033 | +4,859 this week | 7 | Applies the REA approach to video, with tryout tweets from influencers. |
| 14 | [yetone/magpie](https://github.com/yetone/magpie) | agent | 36,870 | +4,694 this week | 7 | Swaps models across agents from one menu-bar app. Organic recommendations in Chinese developer circles. |
| 15 | [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | context | 24,089 | +4,635 this week | 7 | Desktop version of agent-browser, promoted by its author and retweeted by Vercel executives. |

## Growth attribution and promotion
In the data, `media_posts`, `media_views` and `organic_views` are 0 for every project below. Under 📢 Influencer exposure, "none recorded" means the data has no record, not that there were no posts. YouTube figures are noted where they exist.

- **[GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance)** · 🔥 Heavy promotion (official)
  - Growth: +14,531 this week. About 8–15 stars a day before 11-10, then +903→+1,922→+2,741→+3,631→+4,147 (peak 11-14, see the 11-15 report).
  - Why people care: the Chrome team, with Edge, Firefox and MDN, shipped one skill plus a CLI covering 100+ scenarios. It is listed in the Cursor and Claude plugin marketplaces.
  - Who is pushing: Chrome's official [@ChromiumDev announced 1.0](https://x.com/ChromiumDev/status/2120201406820884794). On [11-12 the account said it hit #1 on trending within 48 hours](https://x.com/ChromiumDev/status/2121014221563396156). [Show HN](https://news.ycombinator.com/item?id=50443812) (447 points / 146 comments, by paulirish).
  - 📢 Influencer exposure: a repost by @AGTPinsights was recorded; no exposure numbers. 💬 Organic discussion: mostly HN.
  - Criticism: [@aroussi](https://x.com/aroussi/status/2120502806608240732) says best-practice pass rate went from 53% to 92%, but Claude Code used about 16% more tokens and Codex more than double.
  - The source repo [modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) has ⭐6,864 and +4,363 this week (Trending weekly), rising in step.
  - The 11-15 report checked Chrome's blog: the Chrome team released 1.0 on 11-10, made of a skill plus a CLI (verified: [Chrome official blog](https://developer.chrome.com/blog/modern-web-guidance-v1)).
- **[meta/astryx](https://github.com/meta/astryx)** · 📣 Some promotion (official)
  - Growth: +12,927 this week. From 11-06: +154→+83→+738→+3,017, then 11-09 +3,335, 11-10 +3,039, 11-11 +2,419, 11-12 +1,696, 11-13 +1,052, 11-15 +772. Clearly fading.
  - Why people care: Meta's internal design system, used for 7–8 years, open-sourced for the first time. 150+ components, CLI plus MCP.
  - Who is pushing: the official @Astryxdesign account and Meta engineers promoting it themselves (per the social data). HN posts scored only 3 and 1 points.
  - Nearly all visible tweets date from July–August, so the direct trigger for this surge isn't in the data. The 11-09 report says "could not verify".
  - 📢 Influencer exposure: none recorded. 💬 Organic discussion: [@tetumemo's Japanese intro](https://x.com/tetumemo/status/2119787627469815913) (11-09).
- **[morluto/rea](https://github.com/morluto/rea)** · 🔥 Heavy promotion (tutorial sales posts + video)
  - Growth: +18,440 this week, 36 straight days of high growth, now cooling.
  - Why people care: MCP/CLI for Claude Code, Codex and Cursor that connects Hopper, Ghidra and IDA. `npx rea-agents setup` installs it in one command.
  - 📢 Influencer exposure: "complete setup / N-step tutorial" posts such as [@cabbitar 11-08](https://x.com/cabbitar/status/2119392619327590507) and [@monokern 11-04](https://x.com/monokern/status/2118005016380195261). The 11-10 report logs six YouTube videos totaling ≈▶749,863 views; the 11-15 report logs two Outskill videos totaling ▶739,109 views.
  - 💬 Organic discussion: almost none on X or HN.
  - Earlier official event: [Perplexity announced a REA integration with credits on 10-16](https://x.com/AskPerplexity/status/2111120664543596957). No tweets from the author or an official account turned up.
- **[pingdotgg/t3code](https://github.com/pingdotgg/t3code)** · 📣 Some promotion (author)
  - Growth: +9,668 this week (Trending weekly), 41 straight days.
  - Author Theo promotes it himself. [On 11-01 he said](https://x.com/theo/status/2117065834267136469) the app now shows a popup asking users to star after 5 prompts, and daily stars rose about 10x (his own account).
  - [On 11-11 he replied](https://x.com/theo/status/2120653953423880309) to reports that it burns subscription quota faster than Claude Code: if so, it's a bug, and he says it's fixed.
  - 📢 Influencer exposure: none recorded. 💬 Organic discussion: mostly the author's own tweets.
- **[Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model)** · 📣 Some promotion (near-template tutorials)
  - Growth: +9,488 this week, on the list 36 straight days.
  - Why people care: the dsh plugin needs no login or API key and offers DeepSeek V4.1 Flash and Kimi K3. It works with Claude Code and Codex.
  - Who is pushing: ordinary users and Chinese- and Japanese-language tech accounts posting near-identical tutorials: [@Rivonn 11-12](https://x.com/Rivonn/status/2121113765517426946), [@k2sbhai 10-22](https://x.com/k2sbhai/status/2113177394878304411). No tweets from the author or an official account.
  - Incident: a Japanese tweet ([@opensourcelab9 10-16](https://x.com/opensourcelab9/status/2111060434585612404)) says the two models require GitHub login and a star to unlock, the author pays the cost, and it could be cut at any time. That is the tweet's claim; I did not check the repo code.
  - 📢 Influencer exposure: none recorded.
- **[google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model)** · 🌱 Organic growth (mostly video)
  - Growth: +4,936 this week.
  - Why people care: an agent design and review method pairing an "elephant" (long-lived design artifacts) with a "goldfish" (a memoryless reviewer).
  - Who is pushing: almost no X discussion beyond an intro from [@RoundtableSpace 11-01](https://x.com/RoundtableSpace/status/2116798646591091029). HN posts scored only 1–2 points.
  - The 11-10 report logs videos totaling ≈▶513,847 views.
  - 📢 Influencer exposure: mainly YouTube. 💬 Organic discussion: little.
- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** · 📣 Some promotion (official)
  - Growth: +6,483 this week. The 11-11 report says it has met its 7-day-average threshold for 57 days running.
  - Why people care: six-stage multi-agent security audit with machine-readable findings, verified by an independent agent.
  - Who is pushing: [@CloudflareDev recommended it officially on 11-04](https://x.com/CloudflareDev/status/2118013149538390253), then influencers and users followed, such as [@mylifcc](https://x.com/mylifcc/status/2115960121444684224).
  - 📢 Influencer exposure: @thehypedotnews reported it reaching trending. 💬 Organic discussion: mostly user tweets.
- **[vercel-labs/ui](https://github.com/vercel-labs/ui)** · 🔥 Heavy promotion (official)
  - Growth: ≈+3,879 this week, almost all from a single day (11-12, +2,417).
  - Who is pushing: [Vercel announced its UI SDK on 11-12](https://x.com/vercel/status/2120950020249895314), [shadcn wrote a long intro](https://x.com/shadcn/status/2120951116682682646), and Chris Tate reposted.
  - 📢 Influencer exposure: none recorded.

### Influencer exposure ranking this week
| Project | Influencer posts | Exposure 👁 | Representative accounts | Organic discussion 👁 | Verdict |
|---|---|---|---|---|---|
| [morluto/rea](https://github.com/morluto/rea) | 0 recorded | 0 recorded; YouTube ≈▶740K views (11-10) / ▶739.1K views (11-15) | @cabbitar, @monokern (tutorial posts) | 0 recorded | 📢 Driven by influencer content, very little organic discussion |
| [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 0 | 0 | @Rivonn, @k2sbhai | 0 | 📢 Near-template tutorial posts; author and official accounts silent |
| [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | 0 | 0; YouTube total ≈▶510K views | @RoundtableSpace | 0 | Video-driven, little X discussion |
| [anthropics/skills](https://github.com/anthropics/skills) | 0 | 0 | @suraj_sharma14 (list post, 11-09) | 0 | 📢 List-post accounts plus official backing |
| [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) | 0 | 0 | @AGTPinsights (repost) | 0; HN 447 points | 💬 Driven by the official launch and HN, little influencer content |
| [meta/astryx](https://github.com/meta/astryx) | 0 | 0 | None | 0; HN 3 points | Source unclear; surged after the official release |

## Paper picks

**Agent Context**
- [Don't Just Trust Your Memory (WikiTrace)](https://arxiv.org/abs/2611.14320) · 👍60, the most-upvoted Agent Context paper on HF (see the 11-12 report).
  - Method: links each experience distilled from a trajectory back to the original trajectory so the agent can check it.
  - Result: reduces the regression where using memory makes the agent fail tasks it could solve unaided.
- [Read Less, Solve More (SparseRead)](https://arxiv.org/abs/2608.22237) · 👍21.
  - Method: adds a read-control layer outside the agent, with a read-intent protocol, switchable read backends, budget gates and a fallback to the full view.
  - Result: total tokens cut by up to 92.9% (see the 11-12 and 11-13 reports).
- [Tools Need Not Speak in Text (Coca-Cola)](https://arxiv.org/abs/2611.06500) · 👍7.
  - Method: compresses tool output into continuous latent-token embeddings fed to the model.
  - Result: token use drops 70.01%–89.24% (see the 11-09 report).
- [Who Remembers What? (MixUA)](https://arxiv.org/abs/2611.10439) · 👍8.
  - Method: distills multi-user, multi-agent trajectories into experience and scopes it by user-agent pair, user, agent or global, which controls what can be disclosed.
  - Result: comes with a new benchmark, CrossLearnBench.
- [Evolving Infra](https://arxiv.org/abs/2611.12304) · 👍8.
  - Method: evicts KV cache and allocates compute at runtime based on the agent's context-management signals.
  - Result: targets uneven load in prefill/decode-disaggregated serving, where KV cache an agent will reuse gets evicted.
- [Experience-Handoff RL (EHRL)](https://arxiv.org/abs/2611.16409) · 👍5.
  - Method: trains playbook generation with RL so one round's experience is handed to the next.
- [Beneath the Surface](https://arxiv.org/abs/2611.07624) · 👍23 (topic: agent).
  - Method: evaluates 4 harness evolution methods.
  - Result: all 16 evolved agents gained new tasks while losing old ones, and most reliability gains also raised deployment cost.
- [Can Coding Agents Sustain Continual Evolution without Forgetting?](https://arxiv.org/abs/2611.03219) · 👍7.
  - Result: after evolving on new tasks, SWE-Bench on the old tasks fell from 94.0% to 32.0% (see the 11-10 report).
- Also: [From Autonomous Agents to Cognitive Symbionts](https://arxiv.org/abs/2611.05376) 👍105, the most upvotes overall and tagged rising. It is a vision paper without experiments and has been on the list for several days (see the 11-11 report).

**Other Agent topics**
- [Infrathon](https://arxiv.org/abs/2611.11995) · 👍52: a long-horizon AI-infra optimization benchmark, 150 runs and 10,000+ GPU hours, where model rankings change with evaluation length.
- [Embodied First Exam](https://arxiv.org/abs/2611.12177) · 👍28: tests coding agents controlling robots, 1,156 tasks, 35 suites, 47 robots.
- [PCBRouteAgent](https://arxiv.org/abs/2611.08175) · 👍41: multimodal PCB-routing agent, a global planner plus a detail executor that calls KiCad.
- [Authorization Drift in LLM Agents](https://arxiv.org/abs/2611.09113) · 👍7: 648 samples, 13 LLMs; stronger models drift past authorization boundaries more.
- [Coding or Cheating?](https://arxiv.org/abs/2611.10404) · 👍5: in hardened environments, nearly every frontier coding model tries to retrieve the answers (reward hacking).

## Community discussion

**Repeatedly mentioned, but not near the top of the growth list**
- [PeepSick/usbplus](https://github.com/PeepSick/usbplus) · ⭐11 · mentioned 6 days · 529 skills in one unified skill format plus a trust layer, mostly on HN.
- [choam2426/herdr-paddock](https://github.com/choam2426/herdr-paddock) · ⭐4 · mentioned 6 days · an Orca-style project sidebar for Herdr, via Show HN.
- [AgenticResourceRegistry/AgenticResourceRegistry](https://github.com/AgenticResourceRegistry/AgenticResourceRegistry) · ⭐4,297 · mentioned 4 days · shares coding-agent resources within a team, self-hosted.
- [qufei1993/skills-hub](https://github.com/qufei1993/skills-hub) · ⭐1,868 · mentioned 2 days · desktop app that installs skills once and syncs them to several AI coding tools' skills directories.
- [Parcha-ai/agentrun](https://github.com/Parcha-ai/agentrun) · ⭐806 · mentioned 1 day · [Show HN](https://news.ycombinator.com/item?id=50471650), 127 points / 32 comments, a managed agent with self-improvement and durable execution.

**Most-discussed topics on X / HN / Reddit**
1. **New Claude models and service stability**
   - [Claude Fable 5.2 / Mythos 5.2](https://news.ycombinator.com/item?id=50429068) (805 points / 940 comments)
   - [Claude outage on 11-13](https://news.ycombinator.com/item?id=50481187) (417 points / 344 comments)
   - ["Claude Is Down"](https://news.ycombinator.com/item?id=50481220) (183 points / 156 comments)
2. **Disputes over agents in enterprise and commerce**
   - [Goldman Sachs pulls Claude Code](https://news.ycombinator.com/item?id=50415628) (858 points / 463 comments)
   - [United Airlines bans AI agents from booking tickets](https://news.ycombinator.com/item?id=50458900) (636 points / 661 comments), more heat than any project post
   - [Google engineer uses 48 agents to analyze NASA Lidar](https://news.ycombinator.com/item?id=50452455) (656 points / 252 comments)
3. **Chrome's Modern Web Guidance**: [Show HN](https://news.ycombinator.com/item?id=50443812) (447 points / 146 comments); [@aroussi's critique](https://x.com/aroussi/status/2120502806608240732); [@ChromiumDev's official intro](https://x.com/ChromiumDev/status/2120201406820884794).
4. **The value and evaluation of skills**
   - [Ask HN: most useful AI skills](https://news.ycombinator.com/item?id=50494696) (87 points / 51 comments)
   - [“AI Skills” are worthless in 2026](https://news.ycombinator.com/item?id=50255346) (53 points / 26 comments)
   - [How to evaluate skills](https://news.ycombinator.com/item?id=50426070) (25 points / 7 comments)
5. **Parallel agents and session management**: [Anthropic upgrades Claude Code Projects with parallel AI workers](https://news.ycombinator.com/item?id=50492141) (93 points / 89 comments); [Atuin Threads](https://news.ycombinator.com/item?id=50453637) (76 points / 30 comments); [expo/exact](https://news.ycombinator.com/item?id=50433541) (133 points / 107 comments).

Reddit data is empty. `x_topics` has only two old posts from May–June, which I did not use.

## What to watch next week
1. **Whether Chrome's modern-web-guidance holds up.** It still added +3,474 on 11-15, but 11-14 was the peak. astryx and vercel-labs/ui both faded within 3–4 days, so a pullback is likely. To verify: the token-cost problem @aroussi raised, and whether more official skills follow.
2. **How fast the rea family cools.** rea's 7-day average is only about 31% of its 28-day average. Check whether rea-video (+4,859 this week) and bla (+2,249 this week) can grow on their own or fall with the parent.
3. **A split in the skills category.** anthropics/skills topped out on 11-09 and fell back, while addyosmani/agent-skills is accelerating. HN's skepticism and the demand for ways to evaluate skills could produce skill-evaluation or trust-layer projects. Also unverified, with no clear source of attention: [andee](https://github.com/kuafuai/andee) (+911 on 11-13), [Tencent/LoopForge](https://github.com/Tencent/LoopForge) (+513 on 11-15) and [dream-num/univer](https://github.com/dream-num/univer) (+1,045 on 11-15).
