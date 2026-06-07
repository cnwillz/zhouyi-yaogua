# Zhouyi — Online I Ching Coin Oracle 

A lightweight, client-side web app for **six-line I Ching divination** using the classical **three-coin method**. Cast lines from bottom to top, see the primary and transformed hexagrams, and generate structured prompts for large language models (optional).

**Live site:** [cnwillz.github.io/zhouyi-yaogua](https://cnwillz.github.io/zhouyi-yaogua/)

---

## Features

### Casting

- **Cast once** — flip three virtual coins per line (heads = 3, tails = 2; sum each line to 6–9).
- **Cast all six** — automatically completes six casts with a short delay between lines.
- **Progress & status** — shows how many of six lines are done and whether the hexagram is complete.

### Hexagram display

- **Primary hexagram** — built from the six lines (young/old yin and yang).
- **Transformed hexagram** — appears when there are *moving* lines (6 or 9); lines flip according to the classical rules.
- **Visual lines** — yin/yang segments with markers for moving lines.
- **Related patterns** — mutual, opposite, and inverted (overall) hexagrams are included in generated prompts for richer interpretation context.

### Questions & notes

- Optional **topic / question** field; text is woven into AI prompts so readings stay grounded in what you asked.

### AI-ready prompts

- **Guided prompt wizard** — after six lines, opens a short questionnaire (reading tone + follow-up questions). Questions can be **rule-based** from your topic keywords, or **AI-generated** if you configure an API (see below).
- **Fixed template** — one-click generation of a structured prompt without the wizard.
- **Copy to clipboard** — copy the final prompt for ChatGPT, Claude, or any LLM.

### Bilingual UI

- **Chinese (简体)** and **English** with a **language toggle** in the top-right.
- Preference is stored in `localStorage` (`zhouyi_locale`).
- Prompt bodies and local clarification questions follow the active language.

---

## How the coins map to lines

| Sum | Line type | Moving? |
|-----|------------|--------|
| 6 | Old yin | Yes |
| 7 | Young yang | No |
| 8 | Young yin | No |
| 9 | Old yang | Yes |

Lines are generated **from the bottom upward**; the first cast is the bottom line (line 1).

---

## Optional: AI-generated wizard questions

The app can call a compatible chat-completions-style API to produce **3–4 multiple-choice questions** tailored to your topic. Configure at runtime via `window.ZHOUYI_AI_QUESTION_CONFIG` or `localStorage` key `zhouyi_ai_question_config` with:

- `endpoint` — POST URL  
- `model` — model name  
- `apiKey` — bearer token  

If the request fails or nothing is configured, the app **falls back** to built-in rule-based questions (Chinese or English, depending on UI language).

---

## Tech stack

- Plain **HTML**, **CSS**, and **JavaScript** — no build step.
- **i18n** in `i18n.js`; UI logic in `script.js`; styles in `styles.css`.

---

## Run locally

From the project root:

```bash
python3 -m http.server 8765
```

Open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

---

## Repository layout

| File | Role |
|------|------|
| `index.html` | Page structure and copy hooks |
| `styles.css` | Layout and theme |
| `i18n.js` | Locales, English hexagram titles/briefs, `t()` helpers |
| `script.js` | Casting, hexagram logic, wizard, prompt builders |

---

## Disclaimer

This tool is for **cultural and reflective use**. It does not replace professional advice (medical, legal, financial, or otherwise).
