# Sporty Media — business plan (internal)

**Status:** internal ops note, not a public page.  
**Brand:** Sporty Media  
**One-liner:** Education about sports betting *markets* (prices, fees, information) — not a tipster service.

This document is the working plan for positioning, compliance, distribution, later revenue, and bot operations. Public house rules live in the [style guide](../src/pages/style-guide.astro). Site config (Substack placeholder, Pages URL) lives in [`src/config.ts`](../src/config.ts).

---

## Positioning

Sporty Media teaches how boards work: **closing line value (CLV)**, **juice / overround**, **line moves**, and **board notes**.

| We do | We do not |
| --- | --- |
| Explain prices, fees, and uncertainty | Sell or imply picks, locks, parlays of the week, or guaranteed winners |
| Grade *ticket price* vs the close | Grade a night by who covered |
| Describe *why* a number moved | Tell anyone to bet the move |
| Use hypothetical or labeled historical examples | Pretend a steam move is a character reference |

If a sentence sounds like a lock, it does not ship. A useful piece leaves the reader better at reading a board. It does not leave them with a ticket.

---

## Audience and compliance

**Primary audience:** adults in **Ontario, Canada**. Sports betting is legal here for **19+** through provincially regulated operators. Legal is not risk-free.

**On every public page:**

- Risk of loss
- Legal age 19+ in Ontario
- Responsible play (ConnexOntario · 1-866-531-2600)
- Explicit “not a tipster / no picks / no locks / no guaranteed winners”

Do not hide the disclaimer in the footer only. Short-form (TikTok, YouTube, Substack notes) must carry the same substance: education, 19+, risk of loss — never a wager.

---

## Product (now)

Static site on **GitHub Pages** (this repo). Markdown in `src/content/posts/`. RSS at `/rss.xml`. Newsletter CTA points at `substackUrl` in config (`TODO_SUBSTACK_URL` until live).

Shipped core lessons: CLV, juice, reading a line move, plus an MLB/NFL board-notes template. Cadence after launch is explainers and field notes in that voice — not a daily card.

---

## Distribution

Three channels, one message. Each piece should point back to a lesson or board note on the site (or Substack), never to a pick.

| Channel | Role |
| --- | --- |
| **GitHub Pages** | Canonical archive. SEO, RSS, style guide, disclaimers. |
| **Substack** | Email + longer notes. Same education-only rules. Placeholder URL until published. |
| **TikTok / YouTube** | Short explainers (juice as a fee, CLV vs the scoreboard, how to *read* a move). Scripts end on a concept, not a side. |

Social is distribution for the classroom, not a tout funnel. No “lock of the week” in captions, thumbnails, or pinned comments.

---

## Monetization (later — not tipster)

**Not in scope for launch, and never via picks.** No paid lock lists, unit tracking as a product, or “beat the books with us” subscriptions.

When (if) revenue is added, prefer:

1. **Tools** — calculators and templates the reader already learned in the lessons (implied probability / overround, CLV log, board-note skeleton). Free first; paid only if they stay educational.
2. **Affiliates** — Ontario-regulated operators only, with clear disclosure, never tied to a recommended side. Affiliate copy is still not a pick.
3. **Optional Substack paid tier** — extra explainers, archives, or tool walkthroughs. Still no tickets.

If a monetization idea needs a winner to work, it is out.

---

## Bot ops

Small media desk. Humans set policy; bots draft and route. All three follow the style guide and the no-picks rule. None of them is a handicapper.

| Bot | Job |
| --- | --- |
| **Chief of Staff** | Priorities, calendar, and routing. Keeps the 90-day plan honest. Blocks work that smells like a pick. Reminds the desk about Ontario disclaimers and channel mix (site / Substack / short-form). |
| **Scribe** | Long-form. Turns outlines into markdown posts and Substack drafts. Enforces banned language, hypothetical labels, and board-note skeleton. Does not invent handle data or “sharps are on this.” |
| **Sporty** | Public voice and clips. Short TikTok/YouTube scripts and social captions that teach one market idea and link back to the canonical post. Same legal lines as the site. Never a side, unit, or lock. |

**Hand-off (default):** Chief of Staff scopes the week → Scribe drafts the post → Sporty cuts a 30–60s lesson from it → human publishes. RSS and the Pages deploy are the system of record.

---

## 90-day roadmap

Clock starts at site launch (GitHub Pages live). Dates are relative, not a promise of volume.

### Days 1–30 — Foundation

- Enable Pages (GitHub Actions) and confirm the public URL.
- Replace `TODO_SUBSTACK_URL`; publish the first newsletter issue from existing lessons (CLV, juice, line moves).
- Stand up bot roles and a simple weekly cadence (one explainer or board-note file, not a slate of games).
- Record 3–5 short videos from shipped posts; post with 19+ / education disclaimers.

### Days 31–60 — Cadence

- Recurring board notes in the template voice (hypothetical or clearly historical; never “bet this”).
- Substack on a predictable schedule; RSS checked by readers and bots.
- TikTok/YouTube as a clip layer on *published* lessons only — no orphan “plays.”
- Start a public glossary (CLV, juice, steam, grind, overround) if the archive needs it.

### Days 61–90 — Options, not a tout shop

- Review what actually got read vs what got clipped; double down on education that landed.
- Spec a first **tool** (juice/overround or CLV log) as a static page — still not a pick engine.
- Affiliate research only if it can sit behind disclosure and Ontario regulation, with no recommended sides.
- Decide whether a paid Substack tier is justified. Default remains free education.

**Non-goals for 90 days:** custom domain (optional, not required), app, Discord “vip picks,” live betting alerts, selling units.

---

## How we will know it is working

Useful signals: return readers, Substack subscribes, clip → article click-through, RSS subscribers. **Not useful:** win rate of hypothetical tickets, follower count without click-through, anything that rewards sounding like a lock.

The scoreboard for this business is whether Ontario adults can read a number more clearly than they could before — and whether the archive still refuses to be a tipster service.
