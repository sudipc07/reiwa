# Reiwa Consultancy — Website PRD v2

**Owner:** Sudipto  
**For:** Claude Code  
**Date:** 17 April 2026  

---

## The one thing

This is not a consulting website. It is a narrative experience that walks a visitor to a crossroad and leaves them there — with the only exit being a conversation with a human.

The visitor is the protagonist. Reiwa never tells them what to do. It shows them a situation they recognise, walks alongside them as it gets clearer, and stops just before the answer. The answer lives in a phone call with Gupta san or the right bench member.

If the site feels like a website, we've failed.
If it feels like someone who understood their situation wrote it, we've succeeded.

---

## The reader

Two kinds of reader arrive. The site serves both simultaneously.

**The slow reader** — arrives curious, probably cold or semi-warm. Follows the narrative. Gets the full journey. Arrives at the crossroad naturally.

**The fast reader** — arrives already convinced, sent the link by Gupta san before a meeting. Scrolls fast. Needs to confirm: real firm, serious people, how to reach them. Gets that in under 30 seconds without any friction.

The way to serve both: the journey lives in the scroll depth. The bones — who this is, what they do, how to call — are immediately legible at any scroll speed.

---

## The narrative arc

Every page of this site follows the same emotional shape:

**Recognition** — the visitor sees a situation they're in, reflected back without judgment. They feel seen, not sold to.

**Unfamiliar territory** — the situation turns out to be more complex than it first looked. Not in a frightening way. In a way that makes the visitor realise they're holding a map of a place they haven't been before.

**The crossroad** — the narrative stops. Not with an answer. With a moment of clarity: *this is where you are, and the next step is a conversation, not a webpage.*

**The walls** — at the crossroad, the visitor naturally looks around. They see the bench (serious people), the clients (others who stood here), the guest book (what happened when they called). These are reassurance, not proof. Permission to reach out, not reasons to.

**The exit** — contact details. No button. No "Book a Demo." A phone number and an email, the way a serious firm leaves its card on a table.

---

## What the site is not

- Not a brochure. No "we offer X, Y, Z."
- Not a pitch. No "why choose us."
- Not a catalog. No service menus, no advisor grids as the primary experience.
- Not a funnel. No lead capture, no gated content, no conversion optimisation.
- No stock imagery. No cherry blossoms. No handshakes. No Mount Fuji. No "East meets West." No kanji as decoration.
- No auto-playing video. No loading spinners. No cookie banners.
- No marketing vocabulary: dynamic, paradigm, unleash, transformative, synergize, gateway, avant-garde.

---

## The site structure

### One long home

The homepage is the primary experience. It is a single long scroll — unhurried, with generous breathing room between sections. It contains everything a visitor needs: the narrative arc, the walls, the crossroad, the exit.

It is not a landing page. It is not an "about us." It opens without announcing itself and ends without demanding anything.

Sections in scroll order:

1. **Opening** — who Reiwa is, in the fewest possible words. The firm, the founder's credential, one sentence about what the practice does. No hero image. Type on canvas.

2. **The moment** — three or four situations, phrased from the protagonist's point of view. Not "our services." Moments: *"A Japanese mid-cap studying an Indian acquisition, uneasy about the cultural texture of the deal."* The visitor who recognises themselves in one of these slows down.

3. **What this actually is** — a short section about judgment, not scale. Senior practitioners, no associates, named practitioner per engagement. The "nearly three centuries" line belongs here — earned by this point, not stated upfront.

4. **The bench, glimpsed** — not a grid. Not a directory. A slow drift of faces and names across the screen. No titles, no credentials listed. Just presence. The visitor who wants more can go to the Bench page. Most visitors get what they need from the glimpse: *real people, serious people.*

5. **The clients, drifting** — the logo carousel. Monochrome, slow, unhurried. No heading like "Our Clients." Just the logos, present.

6. **The guest book** — one voice. Short. Anonymised but specific. Not a testimonial box. A line someone said, set in italic, with a one-line attribution: *"— Chief Executive, Indian industrial group."* Followed by silence.

7. **The crossroad** — one short paragraph. Something like: *"If this resembles a moment you're in, the next step is a conversation. Thirty minutes. No pitch. We'll tell you honestly whether we're the right firm for your situation."* Then: contact details.

### Depth pages

Exist for visitors who want more. Linked from the home page in passing — not pushed. The catalog for people who want a catalog.

- **/practice** — the firm's story, Gupta san in depth, how the bench works, the Reiwa name.
- **/bench** — all eleven advisors, full profiles, for the fast reader who wants to verify specific people.
- **/services** — the six practice areas, described properly, for the visitor who wants to map their situation to a shape of work.
- **/insights** — the podcast series, future written notes.
- **/contact** — the form and details, for the visitor who wants a structured way in rather than a direct email.

These pages follow the same design system as home but are simpler — they serve a reader who has already decided to look deeper. They don't need to do narrative work.

---

## The design

### The feeling

Light. Composed. Alive in small ways. Like a well-designed magazine that happens to have a firm inside it.

Not: a cool website. Not: a tech startup. Not: a Big Four. A senior person's firm, presented with care.

### Canvas

Warm off-white — `#F6F3ED`. The whole site lives on this. Not white. Not cream. Closer to washi paper.

### Glass

Every content block floats on the canvas as a translucent glass card. The canvas shows through. Not a heavy card — a light one. You can feel the paper behind it.

- Background: `rgba(255,255,255,0.85)` with `backdrop-filter: blur(20px)`
- Border: `1px solid rgba(0,0,0,0.06)`
- Border radius: `24px`
- Shadow: barely there — `0 8px 32px rgba(0,0,0,0.04)`
- On hover (interactive cards only): rises `2px`, border brightens slightly

### Color

One accent: ai-iro, deep Japanese indigo — `#1F3A5F`.

Used sparingly: links on hover, one thin rule per page, CTA fill. Not headlines. Not body text.

The existing Reiwa logo mark is red. Keep it. The red lives only in the mark. Everywhere else is ink on washi, with one indigo thread.

### Type

**Display:** Noto Serif. Large, confident, slightly tight letter-spacing. Used for H1 and section openers only.

**Body:** Inter. Clean, legible, comfortable at length.

**One italic moment per page:** Noto Serif Italic. Used for the hero accent line, the guest book quote, the Reiwa name meaning. Not elsewhere.

**Micro-labels:** Inter, all caps, wide letter-spacing `0.14em`, muted color. Used as section eyebrows — `JAPAN · INDIA · SEA`, `THE BENCH`, `THE CROSSROAD`. These give the fast reader anchor points.

### Motion

**On the hero only:** a subtle breathing grid — faint lines, very slow scale pulse. On desktop, cursor proximity slightly brightens nearby grid cells. On mobile, a slow gradient drift instead. Neither is dramatic. Both register in the second or third second, not the first.

**Below the hero:** everything is still. Scroll-triggered fade-and-rise on content entering view — `opacity 0→1`, `translateY 12px→0`, `600ms`, gentle ease-out. Runs once. Doesn't repeat.

**The logo carousel:** continuous, slow drift. Pauses on hover. Edges fade to canvas. Roughly 45 seconds per full loop — slow enough to register individual logos.

**Reduced motion:** everything stops except hover states. The site still looks beautiful. Nothing breaks.

### The logo

Red circle, 令和 inside, the existing mark. Keep it. Request SVG from Gupta san's team — do not rasterise from the current site.

Wordmark beside it: "Reiwa Consultancy" in Noto Serif 600. Second line: "& Management Solutions LLP" in Inter, small caps, muted.

### The corridor

One abstract diagram on the home page — three nodes (Tokyo, New Delhi / Mumbai, Singapore / SEA) connected by curved lines. Not a map. Not flags. Not landmarks. Geometry. Nodes pulse once every six seconds, quietly. Lines are faint indigo at 30% opacity.

---

## The copy — source of truth

### Home page — full scroll

---

**[Opening — above the fold, type on canvas, no image]**

*JAPAN · INDIA · SEA*

A senior advisory practice at the Japan–India–Southeast Asia corridor.

---

**[The firm, briefly]**

The practice was founded by Anil Gupta — formerly Chairman and Managing Director of NEC Technologies India, and CEO of the NEC–HCL joint venture. He has spent forty years at this interface, bilingual in English and Japanese, shaped by as much time in Japan as in India.

Reiwa is the work he does now, and the bench he has gathered to do it with.

---

**[The moment — situations, phrased as observations]**

*MOMENTS WE RECOGNISE*

Companies come to us at specific moments.

A Japanese mid-cap studying an Indian acquisition, uneasy about the cultural texture of the deal. An Indian group entering Japan, with an internal plan that is likely wrong in ways they cannot yet see. A European firm whose Southeast Asia joint venture is performing well on paper and quietly failing in the room. A CEO whose India office and Tokyo office are speaking past each other in a language neither realises they are speaking.

These moments share a shape: urgency without clarity. Our first work is usually to listen, and then to slow the decision down enough that the decision becomes visible.

*If you recognise your situation in one of these, keep reading.*

---

**[What this actually is]**

*WHAT THIS PRACTICE OFFERS*

Judgment. Not scale, not frameworks, not a delivery team.

The people who scope an engagement are the people who do the work. Every Reiwa engagement is led by a named senior practitioner — someone who has operated at senior levels in real businesses, across real markets, in the languages of the room. Between them, the bench brings nearly three centuries of operating experience at this corridor.

We work where that kind of judgment is worth the premium. We decline where it isn't.

---

**[The bench, glimpsed — this is a visual component, not a text block]**

*THE BENCH*

Eleven senior practitioners. Each engaged personally. None behind a curtain.

*(— a slow horizontal drift of advisor portraits and names, no credentials listed, no titles. Just presence. A quiet gallery, not a directory. —)*

→ Meet the bench

---

**[The clients — visual component]**

*(— the logo carousel, monochrome, unhurried, slow drift —)*

---

**[The guest book — one voice]**

*"We had a letter of intent signed. Two months of work with Reiwa surfaced what we had missed. We walked away. Eighteen months later we closed a better deal in the same sector."*

— Chief Executive, Indian industrial group

---

**[The crossroad]**

Most people find us through a referral — a past client, a shared network, forty years of relationships. If you are reading this, someone who trusts us has probably suggested you do.

If what we have described resembles a moment you are in, the next step is a conversation. Thirty minutes, with Anil or the practitioner whose judgment seems most relevant. No cost, no pitch. If we are the right firm for your situation, we will say so. If we are not, we will say that too.

---

**[The exit — contact details, no button]**

info@reiwaconsultancy.in  
+91 98180 71196

*Reiwa Consultancy & Management Solutions LLP*  
Assotech Business Cresterra, Sector 135, Noida

---

### Practice page — /practice

**[Hero]**

*THE PRACTICE*

A boutique, by design.

Reiwa Consultancy & Management Solutions LLP is not a scaled firm. No associates. No delivery centres. Eleven senior practitioners, a set of practice areas understood deeply, and one rule: every engagement is led personally by a named bench member.

**[Why boutique — three glass cards]**

*01*  
Senior counsel, not senior supervision. The person who scopes the engagement leads it. No handoffs.

*02*  
This corridor takes a lifetime to learn. Our bench averages over twenty-five years here. It is the only thing we do.

*03*  
We are selective. We decline engagements where we cannot add disproportionate value. This is a feature.

**[The Reiwa name — dark section, one moment of depth]**

令和

*Reiwa — "beautiful harmony"*

Reiwa is the name of Japan's current imperial era, which began on 1 May 2019. The characters are drawn from the Man'yōshū — the oldest existing collection of Japanese poetry — and are most often rendered as "beautiful harmony."

Harmony, not sameness. The work of composing two business cultures into productive partnership is not the work of making them identical. It is the work of finding the interval at which they can play together.

We chose the name with care.

**[The founder]**

*THE FOUNDER*

Anil Gupta  
Director & Principal Consultant  
*Former Chairman & Managing Director, NEC Technologies India*

Anil Gupta founded Reiwa after more than four decades at the interface of Japanese and Indian business. He holds a B.Tech from IIT Delhi, completed intensive Japanese-language study at International Christian University in Tokyo, and undertook postgraduate research in computer science at the University of Tsukuba. He is fluent in English and Japanese.

Across thirty-plus years in senior management, Anil served as Vice President of Strategic Alliance, Japan, at HCL Technologies — where he established the NEC–HCL joint venture and drove its growth as CEO. He went on to serve as Chairman and Managing Director of NEC Technologies India.

His background is unusual: alongside his corporate career, he has been a research scholar in computer science, a part-time English and yoga teacher in Japan, and a long-time student of Japanese culture. This breadth is the substrate of his counsel.

**[How we work — four glass cards]**

Named practitioner, every engagement.

A small bench, composed per engagement — typically two or three practitioners drawn around the problem.

We write plainly. A Reiwa memo is legible at 6:30am before a board meeting.

We are comfortable saying no. We decline engagements where scale firms are better suited.

**[Dark section — from the founder]**

*"The work we do is not consulting. It is translation — between two business cultures that have every reason to work together and, too often, don't quite manage it. Reiwa exists to shorten that distance."*

— Anil Gupta

---

### Bench page — /bench

**[Hero]**

*THE BENCH*

Eleven practitioners. Nearly three centuries of operating experience.

One Principal anchors the practice. Five Partners lead domains. Five Advisors specialise deeply. Every member has operated at senior levels in real businesses.

**[The eleven profiles]**

Each advisor gets a glass card with: photo (placeholder until received), name, title, one-line credential, three-paragraph bio, specialisation tags.

Full profiles listed in the Advisor Content section below.

**[Dark section]**

*HOW WE COMPOSE A TEAM*

Most engagements involve two or three bench members. The composition depends on the work. A Japan market-entry study might draw Anil, Ken, and Tom. A Singapore executive search draws Swati and Prakash. A cross-border acquisition draws Anil, Puneet, and Mukul. The bench composes itself around the problem, not the other way round.

---

### Services page — /services

**[Hero]**

*SERVICES*

Six shapes the work tends to take.

These are not products. A client rarely arrives needing exactly one. Most engagements cut across two or three. We describe them here as shapes — entry points into a conversation about what the work actually requires.

**[The six, as a numbered editorial list]**

01 · Market Entry Strategies  
Research, entry planning, and risk assessment for companies crossing into Japan, India, or SEA. The first eighteen months are where most market entries succeed or fail. We spend the early weeks challenging the assumptions in the plan before writing a new one.

02 · Cross-Cultural Advisory  
The part most consultancies skip. Japanese senior executives read a proposal very differently from Indian ones. We advise CEOs and CXOs on the specific meetings they are about to walk into — not in the abstract, but in the particular.

03 · HR Advisory  
People strategy for multi-country operations. Running an India–Japan–SEA workforce on a single HR playbook is expensive. We bring senior talent strategy, compensation design, and cross-border workforce management grounded in how these markets actually work.

04 · Business Growth Advisory  
Partner identification, distribution design, the right first hires, the slow building of reputation. We do this work alongside senior client teams, not as a deck from a distance.

05 · Regulatory Compliance  
Three jurisdictions, three regulatory regimes. We work with specialist legal counsel in each and provide the senior oversight layer that turns their advice into something a CFO can act on.

06 · Financial Advisory  
Led by Puneet Nayyar, FCA — M&A, due diligence, IFRS, financial planning, funding advisory. The strategic financial thinking that mid-cap Japan–India corridor businesses often need and rarely get at this seniority.

**[Dark section — how to engage]**

A short path to a first conversation.

An intro call — thirty minutes, no cost, no commitment.  
A scope note — what we'd do, what we wouldn't, approximate timeline and fees.  
An engagement letter — short, signed, and we begin.

→ Start a conversation

---

### Insights page — /insights

**[Hero]**

*INSIGHTS*

Notes from the corridor.

A slowly-growing collection of conversations and observations from the Japan–India–SEA business corridor.

**[Podcast series]**

*PODCAST SERIES*

Building Strategic Partnerships between India & Japan.

A conversation series hosted by Anil Gupta — exploring how Indian and Japanese businesses find each other, learn from each other, and build together.

*(Episode cards — one per episode, structured as data. Each card: episode number, title, guest name and affiliation, two-sentence description, YouTube thumbnail with play overlay. Click opens YouTube player in a lightbox, not a new tab.)*

*(Episode data is a JSON file. Adding an episode is a data edit, not a code change.)*

**[Written notes stub]**

*WRITTEN NOTES*

In due course, Reiwa will publish written commentary alongside the podcast. When we do, it will be because we have something useful to say.

Leave your email to be notified.

*(Email field, submit button labelled "Notify me," no newsletter language.)*

---

### Contact page — /contact

**[Hero]**

*CONTACT*

Start a conversation.

Tell us briefly what you are working on. Anil or the right bench member will reply within two business days. We read every message personally.

**[Form — inside a glass card]**

Name  
Organisation  
Email  
What are you working on? *(textarea)*  
Send *(button)*

On submit: the card replaces itself with "Thank you. We will reply within two business days." No page reload.

**[Direct channels — second glass card]**

Or reach us directly:

info@reiwaconsultancy.in  
+91 98180 71196

**[Office — third glass card]**

Unit 914, Tower 1  
Assotech Business Cresterra  
Sector 135, Noida  
Uttar Pradesh 201304, India

*(Link: Open in Google Maps ↗)*

---

## Advisor profiles — source of truth

### Anil Gupta — Principal

**Title:** Director & Principal Consultant  
**Credential:** Former Chairman & Managing Director, NEC Technologies India

Anil Gupta founded Reiwa after more than four decades at the interface of Japanese and Indian business. He holds a B.Tech from IIT Delhi, completed intensive Japanese-language study at International Christian University in Tokyo, and undertook postgraduate research in computer science at the University of Tsukuba. He is fluent in English and Japanese.

Across thirty-plus years in senior management, Anil served as Vice President of Strategic Alliance, Japan, at HCL Technologies — where he established the NEC–HCL joint venture and drove its growth as CEO. He went on to serve as Chairman and Managing Director of NEC Technologies India.

His background is unusual: alongside his corporate career, he has been a research scholar, a part-time English and yoga teacher in Japan, and a long-time student of Japanese culture and society. This breadth is the substrate of his counsel. He is sought out particularly for his read of senior Japanese executives — a read grounded in four decades of working with them, in their language.

**Tags:** Japan–India strategy · Cross-border M&A · Market entry · Senior executive counsel

---

### Mukul Jain — Partner, Technology

**Credential:** Founder & CEO, MTree Software; former COO, GlobalLogic

Four decades building software products and scaling technology services. IIT Kanpur in Electrical Engineering. Led R&D at HCL across compilers, operating systems, multi-CPU architectures, and business software.

As COO of GlobalLogic, grew the workforce from 400 to 3,000 in four years, establishing development hubs across India and Ukraine. Now Founder and CEO of MTree Software, focused on computer vision and NLP using deep neural networks.

At Reiwa, Mukul advises on technology strategy, R&D partnerships, and the technical due-diligence aspects of cross-border transactions.

**Tags:** Technology strategy · Product R&D · Scaling operations · Technical due diligence

---

### Tom Logan — Partner, Asian Business Development

**Credential:** 40+ years in Japan and East Asia; deep Japanese ministerial networks

Fluent in English and Japanese. Loyola Marymount University, intensive Japanese at International Christian University, business research at Waseda University, executive education at the Indian School of Business.

Over twenty years in Tokyo — The Austin Company, PAE International, AeA — building partnerships between Japanese and non-Japanese entities in high-tech and financial services.

Tom's work regularly involves navigation of Japanese ministries, agencies, and political landscapes. He has assisted numerous foreign firms in achieving inward-investment objectives in Japan.

**Tags:** Japan market entry · Cross-border partnerships · Government relations · Inward investment

---

### Ken Sugata — Partner, IT & Global Business

**Credential:** 36 years in Japanese enterprise IT; former executive at NEC Solution Innovators

Master's in Electrical Engineering, Kanazawa University. Thirty-six years in IT systems development, sales, and management inside major Japanese technology firms.

As a corporate executive at NEC Solution Innovators, led global cloud solutions and telecom systems development, and drove collaboration with overseas subsidiaries and partners.

At Reiwa, Ken provides the view from inside a Japanese enterprise — how Japanese buyers evaluate technology partners, and how global firms can position themselves to be evaluated well.

**Tags:** Japanese enterprise IT · Technology partnerships · Japan-side buyer perspective

---

### Prakash Mathur — Partner, Executive Coaching

**Credential:** Founder & CEO, Transformative Training (Singapore); ICF Professional Certified Coach

MBA, PCC (ICF). Three decades across Sony, Brooke Bond, Cadbury, IBM-SBM, the World Health Organisation, and Deloitte Consulting. Tutor at the National University of Singapore; Senior Trainer Consultant at the British Council's Professional Development Centre, Singapore.

At Reiwa, Prakash works with senior executives at the moment of leadership transition — a new regional role, a bicultural scope, a bigger brief than before. Patient, structured, confidential.

**Tags:** Executive coaching · Leadership transitions · Cross-cultural leadership

---

### Vijay Michihito Batra — Partner, Executive Coaching & Cross-Cultural

**Credential:** Trained at the PHP Institute, Kyoto under Matsushita Konosuke (founder of Panasonic); author; 5,000+ workshops in 14 countries

MBA, University of Pittsburgh. JAIMS, Hawaii. Trained as a facilitator of adult learning at the PHP Institute in Kyoto under Matsushita Konosuke, founder of Panasonic. Author of *Ideas By Konosuke Matsushita* and *Switch On*.

Over 5,000 workshops in 14 countries, 25,000 hours of senior-executive facilitation. Clients include Microsoft, Apple, Google, and NEC.

At Reiwa, Vijay advises on the human dimension of Indo-Japanese engagements — specifically, how senior Indian and Japanese executives learn to work productively together.

**Tags:** Executive coaching · Indo-Japanese cultural fluency · Senior facilitation

---

### Puneet Nayyar — Advisor, Finance & M&A

**Credential:** FCA; former EY, PwC, AIG, Bharti Airtel

Fellow of the Institute of Chartered Accountants of India. Deep experience in M&A, valuation, due diligence, IFRS and Ind AS implementation, risk advisory, and SOX compliance.

Clients include Maruti Suzuki, JTEKT, Hero, GSK, and the Jubilant Group. At Reiwa, Puneet leads the Financial Advisory practice — the senior finance partner for cross-border transactions, due diligence, and strategic financial thinking at the Japan–India corridor.

**Tags:** M&A · Financial due diligence · IFRS & Ind AS · Transaction advisory

---

### Rohini Kaul — Advisor, Communications

**Credential:** Founder, The Narratives; former communications lead at Fidelity, NEC, American Express, HSBC, Genpact

Built and led communication functions across Fidelity International, NEC Corporation, American Express, HSBC, and Genpact — spanning the UK, USA, APAC, Japan, and India.

Founder of The Narratives, an integrated marketing and communications agency. At Reiwa, Rohini advises on corporate communications strategy for cross-border businesses — aligning an organisation's voice across markets without losing clarity.

**Tags:** Corporate communications · Cross-cultural messaging · Brand strategy

---

### Atul Gangwar — Advisor, Technology & Sustainability

**Credential:** IIT Roorkee; co-author of ISSCC paper on the world's first GHz-class processor clock design

B.E. Electronics and Communication, IIT Roorkee. Nearly three decades in electronics product design, VLSI, and chip design. Co-authored a paper at ISSCC on the clock design and synthesis of the world's first GHz-class processor.

Twenty years at HCL-HP R&D and HCL Technologies — collaborating with Compaq, Renesas, NEC, and Broadcom. Now leads a green solutions enterprise across IT/IoT and solar energy. Clients include Tata Solar, MRF, NEC Technologies, and the Shiv Nadar Foundation.

**Tags:** Technology & R&D · Semiconductor industry · Sustainability & solar · IoT

---

### Rahul Gupta — Advisor, HR Strategy & Operations

**Credential:** 14 years of cross-border HR across India, Singapore, Japan, Australia, Vietnam, Indonesia

Computer science engineering foundation, human resources practice. Fourteen years across employee lifecycle management, cross-cultural workforce management, and HR compliance in multi-country operations.

At Reiwa, Rahul works on the HR architecture of cross-border operations — people strategies that work when a team is spread across three timezones and two business cultures.

**Tags:** Cross-border HR · Workforce strategy · Compensation & performance

---

### Swati Arora — Advisor, Executive Search

**Credential:** 11 years in talent acquisition across India and Southeast Asia

Postgraduate in human resources. Seven years in India, four in Southeast Asia — Singapore, Malaysia, Philippines, Indonesia. Successful placements across engineering, IT, and finance, from individual contributor to senior management.

At Reiwa, Swati leads senior search mandates — regional leadership and country-head hires. Her network in India and SEA gives access to candidates rarely on public radar.

**Tags:** Executive search · India & SEA talent · Regional leadership hiring

---

## Design tokens — canonical

```
--canvas:          #F6F3ED
--canvas-dark:     #0F1B2E
--surface:         rgba(255,255,255,0.85)
--surface-strong:  rgba(255,255,255,0.94)
--surface-dark:    rgba(26,39,64,0.80)
--ink:             #1A1A1A
--ink-muted:       #4A4A4A
--ink-subtle:      #7A7A7A
--ink-inverse:     #F6F3ED
--accent:          #1F3A5F
--accent-hover:    #16294A
--border:          rgba(0,0,0,0.06)
--border-dark:     rgba(255,255,255,0.12)

Display font:      Noto Serif (400, 600)
Body font:         Inter (400, 500, 600)
Italic moment:     Noto Serif Italic (400)

Border radius:     24px desktop / 20px mobile
Glass blur:        backdrop-filter: blur(20px) saturate(1.1)
```

---

## What "done" looks like

- The homepage reads like a thoughtful person wrote it for one reader, not a committee for everyone.
- A visitor who scrolls fast can confirm: real firm, serious people, how to reach them — in under 30 seconds.
- A visitor who slows down moves through the full narrative arc and arrives at the crossroad without feeling pushed.
- The Japanese CFO who opens it on his phone during a morning train does not close it immediately.
- Gupta san reads it and feels it represents him — without having to explain why.
- Zero typos. "Principal" not "Principle." "NEC" not "Nec." "Solutions" not "Solution."
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95.
- `prefers-reduced-motion` respected. Motion stops. Nothing breaks.
- Form works. Sends to info@reiwaconsultancy.in. Confirms to the user without a page reload.

---

## Open questions — Sudipto to resolve

1. **Logo SVG file** — need from Gupta san's team. Do not rasterise from the current site.
2. **Advisor photographs** — professional portraits for all eleven. Interim: placeholder glass cards with initials in Noto Serif.
3. **Gupta san's photo** — the About page portrait is usable as interim. Confirm whether to keep or reshoot.
4. **Client logo list** — approximately 17 logos in the current carousel. Need the canonical list, clean files, and confirmed permissions from Gupta san's team.
5. **Podcast episode list** — titles, YouTube URLs, guest names and affiliations, short descriptions for all episodes to date.
6. **Real case vignettes** — to replace the guest book placeholder once NDAs allow.
7. **LLP founding year** — confirm with Gupta san. Public records suggest pre-2023; the current site implies 2023.
8. **Domain cutover** — launch on staging first, Gupta san approves, then cut over. Do not touch reiwaconsultancy.in until sign-off.
9. **Brand color shift** — the current site is red-dominant. The new site uses red only in the logo mark, indigo everywhere else. Gupta san should consciously sign off on this.
