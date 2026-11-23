# Agent Weekly · 2026-W47 (2026-11-16 ~ 2026-11-22)

> Generated at 2026-11-23 09:31 PST

## Today's highlights
- Multi-agent orchestration and unified consoles are the steadiest growth line: [pingdotgg/t3code](https://github.com/pingdotgg/t3code) +9,886 this week, [stablyai/orca](https://github.com/stablyai/orca) +7,155, with SoduWork and Tencent's LoopForge picking up.
- Skills and domain knowledge packs still make up most of the growth. [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) (+11,155 this week) went from about 10 stars/day to 1,000+, the biggest dark horse of the week.
- The reverse-engineering wave is cooling but still ranks first. [morluto/rea](https://github.com/morluto/rea) is at +12,380 this week, with a 7-day average of 2,647 against a 28-day average of 4,937. The same-pattern [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) is at ≈+7,265 this week, but its daily gains are already falling.
- Official and big-company agent repos crowd the list: Chrome's modern-web-guidance, Google's paper-orchestra, NVIDIA's SkillEvaluator, Cloudflare's security-audit-skill, Tencent's LoopForge.
- Two paper themes: memory and experience don't always help, and context management has to account for cost. On HN, the biggest threads were Windows 11 collecting coding-agent telemetry and coding agents moving the bottleneck to code review.

## Agent context feature trends

### Multi-agent orchestration / unified consoles (heating up, steadiest)
- Common thread: drive Claude Code, Codex and other coding agents from subscriptions you already have, then add approval, acceptance checks and audit.
- [pingdotgg/t3code](https://github.com/pingdotgg/t3code) · ⭐71,122 · +9,886 this week · on the list 45 days running. A GUI for agents, controllable from web or phone across several dev machines.
- [stablyai/orca](https://github.com/stablyai/orca) · ⭐132,707 · +7,155 this week · 134 days running. Each agent runs in its own git worktree; compare side by side and merge the best result.
- [mdiri-ai/SoduWork](https://github.com/mdiri-ai/SoduWork) · ⭐6,788 · +5,847 this week. Self-hosted multi-harness team engine where agents must show evidence before a task passes (HN title: "agents must show evidence before a task passes").
- [Tencent/LoopForge](https://github.com/Tencent/LoopForge) · ⭐5,467 · +4,329 this week. Orchestrates CodeBuddy/Codex/Claude Code into SOP workflows: exit-code verdicts, human approval before release, a 0–100 score per run.
- Trend: "verifiable output" is the shared pitch (SoduWork, LoopForge and rust-anything all lean on it). The 11-21 report says SoduWork's growth is slowing (see the 11-21 report).

### Skills / domain knowledge packs (heating up, diverging inside)
- [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) · ⭐17,202 · +11,155 this week. Bug-bounty skill pack: 82 skills, 15 slash commands, built on patterns from 681 disclosed reports. Daily gains were only 9–13 before 11-12, peaked at +2,185 on 11-17, then eased (+1,615, +1,446, +1,753, +1,729) to +1,692 on 11-22 (see the 11-22 report).
- Established skill repos keep growing steadily: [obra/superpowers](https://github.com/obra/superpowers) ⭐323,962 · +6,019 this week; [mattpocock/skills](https://github.com/mattpocock/skills) ⭐330,244 · +5,328; [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) ⭐196,743 · +5,474; [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐308,775 · +5,137.
- "Anti-AI-slop / design taste" skills: [pbakaus/impeccable](https://github.com/pbakaus/impeccable) +4,299 this week, [Nutlope/hallmark](https://github.com/Nutlope/hallmark) +4,051, [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) +3,990.
- "Make video with code" skills: [nexu-io/openmotion](https://github.com/nexu-io/openmotion) +5,146 this week; others include hyperframes, rea-video and lemo-opuscar.
- Skill evaluation and trust: [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) · ⭐4,041 · +2,953 this week. It runs an agent in a sandbox with and without a skill and quantifies the "Skill Lift". HN had "How do you evaluate the skills your AI agents use?" (26 points) this week, and "AI Skills are worthless in 2026" (53 points, 10-27).
- Related papers: [EfficientSkill](https://arxiv.org/abs/2611.19823) prunes skill instructions and cuts output tokens by up to 80% (see the 11-17 report). [SkillBuffBench](https://arxiv.org/abs/2611.22017) measures what a skill actually contributes. [When Agent Skills Go Stale](https://arxiv.org/abs/2611.22525) studies skills going out of date after the environment changes.

### Vendors feeding best practices to coding agents (hot, then fading fast)
- [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) · ⭐24,923 · +7,751 this week. Official Chrome skill that gets agents to use modern native web APIs. Daily gain peaked at +4,142 on 11-14 and fell to about +548 on 11-22. Its source repo [-src](https://github.com/GoogleChrome/modern-web-guidance-src) has ⭐10,127 · +3,263 this week.
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) · ⭐76,956 · +3,949 this week. Six-stage security audit, with findings verified by a separate agent.
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · ⭐57,984 · +2,061 this week, on the list only 2 days.

### Reverse engineering / incremental migration (wave cooling, pattern spreading)
- [morluto/rea](https://github.com/morluto/rea) · ⭐473,724 · +12,380 this week. Lets agents call Hopper/Ghidra/IDA over MCP to reverse binaries, Electron, .NET and web apps.
- [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) · ⭐7,841 · ≈+7,265 this week. Records the original app's behavior first, then an agent rewrites it in Rust piece by piece, checked with diff/bench/shadow/gate for matching behavior.
- New projects on the same pattern: [EL4CTEO/fast-anything](https://github.com/EL4CTEO/fast-anything) (created 1 day ago) and [shinyobjectz/raea](https://github.com/shinyobjectz/raea) (daily gain jumped from about +25 to +694, then +1,096, see the 11-22 report).

### Memory (heating up in papers, with the first negative evidence)
- [MIRIX-2.0](https://arxiv.org/abs/2611.12068): multi-agent memory system, 91.4% on LoCoMo, 72.6% on LongMemEval-S. Repo: [Mirix-AI/MIRIX](https://github.com/Mirix-AI/MIRIX) ⭐3,488.
- Negative evidence: [Experience Rot](https://arxiv.org/abs/2611.20922) finds that when a tool interface is silently changed, agents with experience fail most tasks while agents without it mostly succeed. [Continual-ARC](https://arxiv.org/abs/2611.14505) finds a harness with persistent memory learns less than a baseline that just caches examples.
- Deletion and safety: [LinEra](https://arxiv.org/abs/2611.18133) (provable memory erasure), [MemoryDojo](https://arxiv.org/abs/2611.09721) (memory poisoning).
- Engineering: ClickHouse open-sourced Loom, an agent memory system that ties what the agent learns to a live code index. Tweet: [@ClickHouseDB 11-13](https://x.com/ClickHouseDB/status/2121300937859834205).

### Context compression / retrieval / cache and cost (papers cluster here, few projects)
- Two opposite approaches to compression:
  - [Folio](https://arxiv.org/abs/2611.16627) does recoverable multi-resolution folding, solving 66 of 75 LOCA-bench tasks versus 54 for a model-written-summary baseline.
  - GrepMem ([2611.25123](https://arxiv.org/abs/2611.25123)) skips compression entirely: plain-text logs plus grep.
- Cost: [Context Has a Price](https://arxiv.org/abs/2611.22238) measures under prefix-cache discounts and finds that deleting old observations can cost more. [Beyond Plain MCP](https://arxiv.org/abs/2611.19123) measures code mode saving 70–90% of tokens versus plain MCP.
- KV-cache serving papers clustered this week: TripleKV, Aggron, FrontierReplay (see the 11-20 report).
- Retrieval: [Embeddings vs. Grep](https://arxiv.org/abs/2611.20455) argues most of dense retrieval's edge over BM25 comes from evaluation setup.
- Code knowledge graph: [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · ⭐151,887 · +3,682 this week. Local deterministic AST parsing, every edge explainable, no vector store. Steady across 7 days, no spike.
- Cost tooling: [localixai/tokendoctor](https://github.com/localixai/tokendoctor) ⭐131 replays your own past sessions and claims up to 38% savings on the same Claude Code. HN 30 points: [thread](https://news.ycombinator.com/item?id=50526584).
- HN data point: "In 27,280 coding agent runs, 64% of inference spend went to runs that failed", 87 points: [thread](https://news.ycombinator.com/item?id=50532191).

### MCP / harness-enforced validation (flat)
- [SilentGuard](https://arxiv.org/abs/2611.20595) (👍5) moves validation from the model into the harness. Under silent API failures, wrong answers drop from 74.0% to 1.7%; warnings alone leave 70.1% wrong.
- HN "Llms.txt and MCP didn't move the needle" (27 points) is a cold take on MCP.

## Top 15 agent projects this week
Excluded: minimind (small-model training, Trending basis), cleanyourtv (TV ad removal), phonebox (phone panel), freellmapi (free LLM gateway, closer to model routing), and the blender-ai-mcp family (suspected bulk copies, see the 11-16 and 11-18 reports).

| # | Project | Type | ⭐ total | Growth | Days on list | Why it's hot |
|---|---|---|---|---|---|---|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse-engineering MCP/skill | 473,724 | +12,380 this week | 7 | Carried by tutorial content; the reports log single YouTube videos at about 460–490K ▶. Its X posts are all from before this week. 7-day average 2,647 vs 28-day 4,937: cooling |
| 2 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Security skill pack | 17,202 | +11,155 this week | 7 | Built on 681 real HackerOne report patterns; only third-party accounts on X, top exposure a YouTube ▶1,911 (11-20 report) |
| 3 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | Agent console | 71,122 | +9,886 this week | 7 | Theo promotes it himself plus changelogs; one UI for Claude Code/Codex, phone remote |
| 4 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | dsh free-model plugin | 83,841 | +8,280 this week | 7 | Tutorial-style reposts of "use DeepSeek V4.1 Flash and Kimi K3 with no login or key", from Chinese, English and Japanese accounts |
| 5 | [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) | Official skill | 24,923 | +7,751 this week | 7 | Chrome's official 1.0 release; Show HN 448 points/146 comments |
| 6 | [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) | Migration skill | 7,841 | ≈+7,265 this week | 5 | Created 11-16; "record behavior, rewrite to Rust piece by piece"; relayed by Chinese-language influencers |
| 7 | [stablyai/orca](https://github.com/stablyai/orca) | Agent console | 132,707 | +7,155 this week | 7 | Steady self-promotion from official @orca_build; the reports log a list-style video at ▶102,777 |
| 8 | [obra/superpowers](https://github.com/obra/superpowers) | Skill framework | 323,962 | +6,019 this week | 7 | Disciplined design-before-code workflow; +1,999 on 11-18 alone, source unconfirmed |
| 9 | [dream-num/univer](https://github.com/dream-num/univer) | AI Office SDK | 30,881 | +5,848 this week | 5 | Daily gain rose from 6–21 to 1,548 (peak 11-15); only official-account tweets, no outside discussion |
| 10 | [mdiri-ai/SoduWork](https://github.com/mdiri-ai/SoduWork) | Multi-agent team engine | 6,788 | +5,847 this week | 6 | Agents must show evidence to pass; official account plus third-party relays |
| 11 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Skill | 196,743 | +5,474 this week | 7 | Sales-style pitch ("a 293-line date picker becomes 1 line"), relayed by influencers |
| 12 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skill collection | 330,244 | +5,328 this week | 7 | /grill-me asks questions before acting; author promotion plus word of mouth |
| 13 | [nexu-io/openmotion](https://github.com/nexu-io/openmotion) | Video skill | 15,134 | +5,146 this week | 6 | Open-sourced 11-17 as a Claude Motion / CapCut (剪映) alternative; team's own posts |
| 14 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | Harness config collection | 308,775 | +5,137 this week | 7 | The "hackathon winner releases their config free" formula; the reports log a YouTube roundup at ▶84,082 |
| 15 | [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Paper-writing multi-agent | 5,879 | ≈+4,984 this week | 7 | Open-sourced by Google; relayed 11-16/17 by @RoundtableSpace |

Alternates if any need replacing: [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) +4,799 this week, [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) +4,768.

## Growth attribution and promotion

`social_repos` has zero in every influencer and organic field this week, so there are no ready-made influencer stats. Influencer exposure below comes only from YouTube ▶ counts that the daily reports mention in text, hand-extracted rather than structured data. It is not a complete count and does not assert paid promotion.

### [morluto/rea](https://github.com/morluto/rea) · 📣 Some promotion
- Why people look: lets Claude Code/Codex call Hopper/Ghidra/IDA over MCP to reverse native binaries, Electron, .NET and web apps without source, and returns evidence-backed conclusions.
- 📢 Influencer exposure: the daily reports log YouTube tutorials at ▶464,580 (Outskill, 11-16), ▶200,705 (CyberFlow, 11-19), a single ▶492,968 (11-21) and ▶464,087 (11-22). These may overlap, so don't add them up.
- On X, the findable posts are influencer-style pitches, all from October: [@milesdeutscher 10-21 full tutorial](https://x.com/milesdeutscher/status/2112924796866699336); [@AskPerplexity 10-16, announcing it as a /reverse-engineer skill for Computer](https://x.com/AskPerplexity/status/2111120664543596957).
- 💬 Organic discussion: little on X. The related HN post is "LLM assisted reverse engineering" (289 points/72 comments, [thread](https://news.ycombinator.com/item?id=50553225)), which is not about rea itself.
- Trend: daily gain fell from about 4,254 fourteen days ago to about 1,294 on 11-22. ⭐473,724 total; peak was +53,870 in a day on 10-12.

### [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) · 🌱 Organic growth (weak visible source of traffic)
- Why people look: built on 681 real disclosed reports instead of a generic OWASP checklist, covering 24 vulnerability classes from recon through validation to reporting.
- Who's pushing: no author or official promotion. Third-party accounts only: [@hqmank 11-15](https://x.com/hqmank/status/2122227724890624001) says its hunt skill is based on 681 disclosed HackerOne reports. Earlier: [@GithubProjects 5-26](https://x.com/GithubProjects/status/2059172145453019389).
- 📢 Influencer exposure: the daily reports log only a top YouTube ▶1,911, small. 💬 Organic discussion: none on X this week.
- Growth curve: 9–13/day before 11-12, then a steep climb, the steepest of the week.
- Caveat: a third-party review (Tessl) notes that installing it pulls remote skill content, so review it first.

### [pingdotgg/t3code](https://github.com/pingdotgg/t3code) · 🔥 Heavy promotion (author posts often)
- Why people look: open-source (MIT) GUI for Claude Code/Codex with phone/web remote, an inbox-style thread sidebar, agents that can modify the UI, and fast iteration (250+ PRs in two weeks).
- Who's pushing: author Theo. [@theo 10-29 answering "why use T3 Code instead of Claude Code or Codex"](https://x.com/theo/status/2115911518663647662). Third-party relay: [@AGTPinsights 11-13](https://x.com/AGTPinsights/status/2121513186448818195).
- 📢 Influencer exposure: the reports log one YouTube tutorial at ▶59,808 (11-22). 💬 Organic discussion: user praise, e.g. [@elie2222 11-01](https://x.com/elie2222/status/2117013138071847071). HN: only 3 points.
- Data note: the 11-22 report says +2,033 for the day, but the repo's 14-day series ends at 1,096. This report uses +9,886 this week and "45 days running" instead.

### [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) · 📣 Some promotion (tutorial-style reposts)
- Why people look: install a plugin in dsh and, as advertised, use DeepSeek V4.1 Flash, Kimi K3 and others with no login, signup or API key.
- Who's pushing: [@Rivonn 11-12](https://x.com/Rivonn/status/2121113765517426946), [@xiangxiang103 10-14](https://x.com/xiangxiang103/status/2110543016138248305) (3-step install guide).
- A caveat, attributed to the tweet and not our own judgment: [@opensourcelab9 10-16](https://x.com/opensourcelab9/status/2111060434585612404) says the no-login part is only the OpenCode/Kilo free quota; V4.1 Flash and Kimi K3 require a GitHub login and a star, are paid for by the author, and could be cut at any time.
- 📢/💬: no structured exposure data this week. Daily gain steady at +1,400 to +1,750.

### [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) · 🔥 Heavy promotion (official)
- Why people look: gives coding agents current web-platform skills and Baseline compatibility data so they stop defaulting to old JS workarounds. 1.0 added Firefox and Edge support.
- Who's pushing: Chrome developer blog 1.0 announcement (11-10); Show HN, 448 points/146 comments, by paulirish ([thread](https://news.ycombinator.com/item?id=50443812)). The official claim is a rise of about 37 percentage points in best-practice adherence (vendor-reported, not independently verified).
- 📢 Influencer exposure: 0. 💬 Organic discussion: concentrated on HN.
- Trend: peak +4,142 on 11-14, down to +548 on 11-22, a typical launch pulse.

### [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) · 📣 Some promotion (Chinese-language influencer relays)
- Why people look: a progressive migration (record first, write piece by piece, compare) rather than a transpiler. Supports TS/Python/C/Go/Ruby/Java and also works as a Claude Code plugin.
- Who's pushing: no author promotion. [@GitHub_Daily 11-18](https://x.com/GitHub_Daily/status/2123317868188287190); [@aigclink 11-17](https://x.com/aigclink/status/2122891105754841403), who cites up to about 20x speedup (repeating the README). HN: 1 point.
- 📢 Influencer exposure: the reports log a YouTube weekly-roundup at ▶7,552, small. 💬 Organic discussion: a few positive user comments, no criticism.
- Trend: created 11-16; daily gains +1,967 → +1,910 → +1,781 → +1,515 → +912 → +635, falling each day.

### [mdiri-ai/SoduWork](https://github.com/mdiri-ai/SoduWork) · 📣 Some promotion
- Why people look: puts about 9 agents (Claude Code, Codex, OpenCode, DeepSeek, Kimi Code and others) into one self-hosted workbench with acceptance criteria, independent AI review, human sign-off and audit records. MIT.
- Who's pushing: official [@SoduWork 11-16](https://x.com/SoduWork/status/2122579739651252653). Two Show HN posts on HN (4 points; 2 points/4 comments), [thread](https://news.ycombinator.com/item?id=50574413).
- Trend: peak +1,563 on 11-19, +1,778 on 11-20, +625 on 11-21, +437 on 11-22.

### [Tencent/LoopForge](https://github.com/Tencent/LoopForge) · 🔥 Heavy promotion (official)
- Why people look: self-hosted, separated roles (plan/code/review/test), exit-code verdicts, human approval before release, 10 supported CLIs. MIT.
- Who's pushing: Tencent's AI account [@TencentAI_News 11-16](https://x.com/TencentAI_News/status/2122300566869365035), one tweet only. No influencers, no criticism.
- Trend: daily gain +904 on 11-15, +1,211 on 11-20, still accelerating.

### Influencer exposure ranking this week
All exposure figures come from YouTube ▶ counts mentioned in the daily reports. They are not a complete tally and do not assert paid promotion.

| Project | Influencer posts | Views 👁 | Representative accounts | Organic views 👁 | Verdict |
|---|---|---|---|---|---|
| [morluto/rea](https://github.com/morluto/rea) | Count not given; at least 3 YouTube videos | Single videos ▶200,705 – 492,968 (may overlap, don't add) | Outskill, CyberFlow, Maitis, Nuno Tavares (named in the reports) | No X discussion this week | Influencer exposure is the main channel; little organic discussion |
| [stablyai/orca](https://github.com/stablyai/orca) | At least 2 list-style videos | ▶102,777 (Beau Johnson), ▶78,911 (Rob Shocks) | Beau Johnson, Rob Shocks | Mostly official self-promotion | Official posts plus list videos |
| [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | 1 YouTube video | ▶59,808 | No account given | User praise, author's own posts | Mostly author self-promotion, influencers second |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 1 list-style video | ▶84,082 (the same roundup) | Beau Johnson | No data this week | Rides on roundup videos; its X posts are mostly old (May–June) |
| [erkamyaman/rust-anything](https://github.com/erkamyaman/rust-anything) | 1 weekly-roundup | ▶7,552 | No account given | A few user relays, HN 1 point | Small scale, mostly relays |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Several YouTube videos | Top ▶1,911 | No account given | Only 1 X post this week | Very small exposure; the growth source could not be confirmed from public channels |

## Paper picks

### Agent context
- [MIRIX-2.0: Multi-Agent Memory System](https://arxiv.org/abs/2611.12068) · 👍52 (26 at the 11-16 report, doubled) · repo ⭐3,488. Memory system split across cooperating agents: 91.4% on LoCoMo, 72.6% on LongMemEval-S, 14.3 points ahead of the strongest baseline and best on four of five QA benchmarks.
- [The Resolution Hypothesis](https://arxiv.org/abs/2611.23068) · 👍36. Across 7 evolution methods, 6 models and over 10 million calls, agent self-evolution stalls because noisy evaluation can't tell better from worse, not because better artifacts can't be proposed. Gaps of a few points between methods are smaller than the gap between two runs of the same method.
- [Self-Improvement Memory](https://arxiv.org/abs/2611.18856) · 👍31. Adds memory to the harness optimizer (not the task agent), merging changes by recurring problem and recording rationale, prediction and actual result. Used for continuous optimization across benchmarks and models.
- [Context Has a Price](https://arxiv.org/abs/2611.22238) · no upvote count this week (see the 11-18 report). Measured under prefix-cache discounts, deleting old observations may not save money and can cost more.
- [Folio](https://arxiv.org/abs/2611.16627) · no upvote count this week. Replaces model-written summaries with programmatic folding: 66 of 75 LOCA-bench tasks solved versus 54 for the baseline.
- [Experience Rot](https://arxiv.org/abs/2611.20922) · no upvote count this week. After a silent tool change, agents with experience fail most tasks while agents without it mostly succeed.
- [Embeddings vs. Grep](https://arxiv.org/abs/2611.20455) · 👍8. Builds its own Repo-Premium benchmark (91 repos). Dense retrieval's advantage comes mainly from evaluation choices such as how BM25 is chunked. With "LLM generates identifiers, then grep", BM25 matches dense retrieval on every Python evaluation pool.
- [SilentGuard](https://arxiv.org/abs/2611.20595) · 👍5. Moves the "API failed silently" judgment from the model to the harness, using invariant checks. It found silent failures in 11 of 15 public research APIs and cut wrong answers from 74.0% to 1.7%.

### Other agent topics
- [TeleChat to Xing4](https://arxiv.org/abs/2611.22115) · 👍158: technical report for an agent model family trained on Ascend chips, including an agent training platform.
- [Gamer](https://arxiv.org/abs/2611.18397) · 👍116: a VLA foundation model for long-horizon real-time game agents, with memory management; [repo](https://github.com/RainBowLuoCS/Gamer) ⭐243.
- [K2-Horizon](https://arxiv.org/abs/2611.21003) · 👍80: six fully open models (0.9B to 375B-A23B) for agents and coding.
- [SWE-CoWork](https://arxiv.org/abs/2611.20218) · 👍51: 101 tasks in a simulated engineering org of 26 colleagues; coding agents fully deliver under 8% (see the 11-18 report).
- [Infrathon](https://arxiv.org/abs/2611.11995) · 👍56: 150 runs of 24-hour AI infrastructure optimization; 135 still improved in the second half, and model rankings shifted with evaluation length.

## Community discussion

### Five repos mentioned repeatedly but not near the top of the growth list
Their `community_repos` scores are all low and most are single HN posts, so none of these should be read as hot.
- [choam2426/herdr-paddock](https://github.com/choam2426/herdr-paddock) · ⭐6 · mentioned 7 days: a Spaces sidebar for Herdr that groups by project, borrowing Orca's style. Show HN got only 4 points: [thread](https://news.ycombinator.com/item?id=50335894).
- [brainfish-ai/webcrawl-anything](https://github.com/brainfish-ai/webcrawl-anything) · ⭐14 · mentioned 4 days: free, local, no-API-key search/crawl/monitoring for Claude Code/Cursor/Codex to call.
- [PeepSick/usbplus](https://github.com/PeepSick/usbplus) · ⭐12 · mentioned 3 days: one skill format adapted to each agent runtime; 529 skills, 16 target formats, with a scanning trust layer.
- [AgenticResourceRegistry/AgenticResourceRegistry](https://github.com/AgenticResourceRegistry/AgenticResourceRegistry) · ⭐4,168 · mentioned 2 days: share and discover coding-agent resources inside a team; self-hosted, Apache 2.0.
- [withcoral/coral](https://github.com/withcoral/coral) · ⭐4,982 · mentioned 1 day: a gateway that lets agents write their own tools, with precise permissions. HN 46 points/21 comments: [thread](https://news.ycombinator.com/item?id=50517803).

### Top topics on X / HN / Reddit
Reddit had no data this week. Only two of the ten `x_topics` entries are from this week: ClickHouse open-sourcing the Loom memory system (see the trends section), and [@ClaudeDevs 11-16: Claude Code desktop supports testing on the iPhone Duo simulator](https://x.com/ClaudeDevs/status/2122439098740674839). The rest is mostly HN.

1. Windows 11 collecting coding-agent usage telemetry: 685 points/550 comments, the top HN agent topic of the week.
   - Article: https://xusheng.dev/posts/windows-coding-agent-telemetry/
   - Discussion: https://news.ycombinator.com/item?id=50524736
2. Coding agents moving the bottleneck to code review: 293 points/377 comments, attributed to Harvard researchers.
   - Article: https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/
   - Discussion: https://news.ycombinator.com/item?id=50538303
   - Related: alibaba/open-code-review at +3,489 this week; StarSling (Launch HN, 85 points, self-improving CI): https://news.ycombinator.com/item?id=50536468
3. Verification and credential safety:
   - Claude Code team on verification: 137 points/135 comments, https://news.ycombinator.com/item?id=50529612
   - Not handing credentials to coding agents: 124 points/105 comments, https://news.ycombinator.com/item?id=50526152
   - Microsoft agent-framework PyPI package reported to contain credential-stealing code: 23 points, https://news.ycombinator.com/item?id=50542084 (source: socket.dev)
4. LLM-assisted reverse engineering: 289 points/72 comments, same timing as rea's surge, but the post doesn't discuss rea. https://news.ycombinator.com/item?id=50553225
5. FBI advisory on ARTEX (events only):
   - The FBI issued Flash alert CSA 261113 on 11-13: https://www.ic3.gov/CSA/2026/261113.pdf. TechCrunch's headline says the FBI states ARTEX was used to break into networks; HN 50 points/15 comments: https://news.ycombinator.com/item?id=50520796.
   - Unit 42 said in a [tweet on 11-02](https://x.com/Unit42_Intel/status/2117314565973184687) that it had observed intrusion attempts using ARTEX.
   - On the growth list, the [BaaRai/ARTEX](https://github.com/BaaRai/ARTEX) repo describes itself as "English translation; upstream: Autumn-27/ARTEX, AGPL-3.0". It has ⭐15,869 and ≈+2,630 this week, was on the list only 2 days, and peaked at +2,513 on 11-18 before falling. No product promotion on HN. This report makes no judgment about the translation repo itself.
- Other single posts: "DreamCoder" 258 points, "ClawDOS" 127, "Pandex (European law over MCP)" 125. None are on the growth list; community discussion and GitHub growth went separate ways.

## Next week
- **Multi-agent consoles should keep climbing; t3code is the first to watch.** t3code has qualified 45 days running, orca 134 (the 11-22 report counts 140 days), while SoduWork and LoopForge diverge. To verify: whether SoduWork's daily gain keeps falling (+1,778 → +437), and whether LoopForge's official promotion turns into sustained growth.
- **Spike projects: watch the slope of the decline; same-pattern newcomers are the next candidates.** modern-web-guidance has fallen from +4,130 to +548 and rust-anything from +1,966 to +635. Whether the new fast-anything and raea copy the same curve is worth checking. rea's 7-day average (2,647) is below its 28-day average (4,937), so expect further cooling. BugHunter is easing gradually; whether it truly holds is unverified.
- **Verify spikes with unknown sources before writing them up.** Three: superpowers +1,999 on 11-18 alone (previous 13 days: 442–786), firecrawl +976 to +1,160/day on 11-19/20 (28-day average 360), and univer rising to 1,548/day. firecrawl had an official tweet on 11-18, [Firecrawl Local](https://x.com/firecrawl/status/2123096169630912637) (claims 37x faster than self-hosting), which fits the timing, but causation is unconfirmed. On the paper side, keep watching memory side effects and context cost. Negative evidence such as Experience Rot and Continual-ARC may push memory writes behind gates.
