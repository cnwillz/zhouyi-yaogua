/**
 * Zhouyi web app — UI strings, locale helpers, English hexagram titles & briefs.
 */
(function () {
  const STORAGE_KEY = "zhouyi_locale";

  const ZHOUYI_STRINGS = {
    zh: {
      meta: { title: "周易摇卦" },
      lang: { switchToEn: "English", switchToZh: "中文", aria: "切换界面语言" },
      hero: {
        eyebrow: "周易在线摇卦",
        title: "观象定机，六爻示变",
        intro:
          "一念既起，吉凶未彰；六次投铜，卦势自明。循古法取象，自下而上定本卦，动爻所至，再观其变，以察当下气机与后续趋向。",
      },
      btn: {
        toss: "摇一次",
        auto: "一键摇六次",
        prompt: "生成解读提示词",
        directPrompt: "按固定模板生成",
        copy: "复制提示词",
        reset: "重新开始",
      },
      status: { progress: "当前进度", state: "当前状态" },
      issue: {
        label: "所问事由",
        placeholder:
          "可填写本次想问的事情，例如：是否适合近期换工作、这段合作能否继续推进。留空则默认“（无指定事由）”。",
      },
      coins: { title: "本次铜板", waiting: "等待摇卦", heads: "正面 3", tails: "反面 2", coinAria: "第{n}枚铜板" },
      records: { title: "六爻记录", lineItem: "{name}：<strong>{label}</strong>（{value}）" },
      hex: {
        primary: "本卦",
        changed: "变卦",
        metaPending: "完成六爻后显示",
        metaNoChange: "若无变爻，则与本卦相同",
        namePending: "待成卦",
        briefPrimaryPending: "卦成之后见其名与意",
        briefChangedPending: "动而后变，其势方显",
        moving: "变爻",
        suffix: "卦",
        noMovingNote: "（无变爻）",
        primaryOnlySuffix: "，此局以本卦为主",
      },
      notes: {
        title: "规则说明",
        r1: "正面记 3，反面记 2，三枚相加得到一个爻。",
        r2: "6 为老阴，7 为少阳，8 为少阴，9 为老阳。",
        r3: "六爻从下往上生成，所以第一次摇出的是初爻。",
      },
      prompt: {
        title: "AI 解读提示词",
        hintIdle: "完成六爻后可生成",
        placeholder:
          "点击“生成解读提示词”后，这里会输出一份可直接交给生成式 AI 的专业解卦提示词。",
      },
      wizard: {
        kicker: "解读设定",
        title: "生成提示词前的补充确认",
        close: "关闭",
        step: "第 {current} 步 / 共 {total} 步",
        sourceNote: "{source}，每题均可选“不明确”",
        prev: "上一步",
        next: "下一步",
        generate: "生成提示词",
        prepQuestions: "正在准备补充问题…",
        finishWizardFirst: "请先完成弹窗问答",
        genDone: "提示词已生成，可直接复制使用",
      },
      hints: {
        startCalm: "请静心后开始摇卦",
        needMore: "还需 {n} 次",
        tossDoneMoving: "摇卦完成，已生成本卦与变卦",
        tossDoneStill: "摇卦完成，本卦无变爻",
        promptReady: "可生成并复制给任意生成式 AI",
        incomplete: "当前卦象未完成",
        finishSixFirst: "请先完成六次摇卦，再生成解读提示词。",
        finishSixDirect: "请先完成六次摇卦，再按固定模板生成提示词。",
        templateDone: "固定模板提示词已生成",
        copied: "提示词已复制",
        copyFail: "复制受限，已帮你选中文本",
      },
      line: {
        result: "本次为 {label}（{sum}）",
        noneYet: "尚未生成爻象",
      },
      labels: {
        primaryShort: "本卦",
        changedShort: "变卦",
        mutualShort: "互卦",
        oppositeShort: "错卦",
        reversedShort: "综卦（总卦）",
      },
      sources: { ai: "AI 自动生成", local: "本地智能生成" },
      unknownHex: "未知卦",
      unknownTri: "未知",
      briefFallback: "观象取义，仍需结合爻变",
      polarity: { yang: "阳", yin: "阴" },
      lineMotion: { moving: "变爻", resting: "静爻" },
      yangLine: "阳爻",
      yinLine: "阴爻",
      movingBecomes: "为动爻，变化后转为",
      restingLine: "，为静爻",
      movingSummaryPrefix: "由",
      movingSummaryTo: "变",
      noMovingLines: "本卦无动爻，以本卦卦义、卦德、卦势为主，不强行解变。",
      progressUnit: "爻",
      issueUnset: "（无指定事由）",
      issueUnsetAlt: "（未指定事由）",
      positionsNone: "无",
      interpretationRules: [
        "0个变爻：以本卦卦辞为主",
        "1个变爻：以变爻爻辞为主",
        "2个变爻：以两个变爻爻辞为主，以下爻为先",
        "3个变爻：本卦与变卦并看，以本卦为主、变卦为辅",
        "4个变爻：以两个不变爻爻辞为主，以下爻为先",
        "5个变爻：以唯一不变爻爻辞为主",
        "6个变爻：若为乾坤看用九用六，其余以变卦卦辞为主",
      ],
    },
    en: {
      meta: { title: "Zhouyi — Coin Oracle" },
      lang: { switchToEn: "English", switchToZh: "中文", aria: "Switch interface language" },
      hero: {
        eyebrow: "Online I Ching coin toss",
        title: "Read the pattern; six lines reveal change",
        intro:
          "When a question arises, outcomes stay hidden until you cast six times. Following the classical three-coin method from bottom to top, you form the primary hexagram; changing lines lead to the transformed hexagram—reading momentum and likely trend.",
      },
      btn: {
        toss: "Cast once",
        auto: "Cast all six",
        prompt: "Build AI prompt",
        directPrompt: "Use fixed template",
        copy: "Copy prompt",
        reset: "Start over",
      },
      status: { progress: "Progress", state: "Status" },
      issue: {
        label: "Your question",
        placeholder:
          "Optional: describe what you are asking about (e.g. job change, partnership). Leave blank for “(no specific topic)”.",
      },
      coins: {
        title: "This cast",
        waiting: "Awaiting cast",
        heads: "Heads 3",
        tails: "Tails 2",
        coinAria: "Coin {n}",
      },
      records: { title: "Six lines", lineItem: "{name}: <strong>{label}</strong> ({value})" },
      hex: {
        primary: "Primary",
        changed: "Transformed",
        metaPending: "Shown after six lines",
        metaNoChange: "Same as primary if no moving lines",
        namePending: "Pending",
        briefPrimaryPending: "Name and meaning appear when complete",
        briefChangedPending: "Change appears once lines move",
        moving: "Moving",
        suffix: "",
        noMovingNote: "(no moving lines)",
        primaryOnlySuffix: "; this reading stays with the primary hexagram",
      },
      notes: {
        title: "Rules",
        r1: "Heads = 3, tails = 2; sum the three coins for one line.",
        r2: "6 = old yin, 7 = young yang, 8 = young yin, 9 = old yang.",
        r3: "Lines are built from bottom upward—the first cast is the bottom line.",
      },
      prompt: {
        title: "AI reading prompt",
        hintIdle: "Available after six lines",
        placeholder:
          'Click "Build AI prompt" to generate a structured prompt you can paste into any LLM.',
      },
      wizard: {
        kicker: "Reading setup",
        title: "Before generating the prompt",
        close: "Close",
        step: "Step {current} / {total}",
        sourceNote: "{source}; each question includes “Unclear”.",
        prev: "Back",
        next: "Next",
        generate: "Generate prompt",
        prepQuestions: "Preparing follow-up questions…",
        finishWizardFirst: "Finish the dialog first",
        genDone: "Prompt ready — you can copy it",
      },
      hints: {
        startCalm: "Settle, then begin casting",
        needMore: "{n} more cast(s) needed",
        tossDoneMoving: "Complete — primary and transformed hexagrams ready",
        tossDoneStill: "Complete — no moving lines in the primary",
        promptReady: "Generate and copy for any LLM",
        incomplete: "Hexagram not complete yet",
        finishSixFirst: "Complete six casts before building the AI prompt.",
        finishSixDirect: "Complete six casts before using the fixed template.",
        templateDone: "Fixed-template prompt generated",
        copied: "Copied",
        copyFail: "Copy blocked — text selected for manual copy",
      },
      line: {
        result: "This line: {label} (sum {sum})",
        noneYet: "No line yet",
      },
      labels: {
        primaryShort: "Primary",
        changedShort: "Transformed",
        mutualShort: "Mutual",
        oppositeShort: "Opposite",
        reversedShort: "Inverted (overall)",
      },
      sources: { ai: "AI-generated", local: "Rule-based (local)" },
      unknownHex: "Unknown hexagram",
      unknownTri: "Unknown",
      briefFallback: "Interpret from the image; combine with moving lines",
      polarity: { yang: "yang", yin: "yin" },
      lineMotion: { moving: "Moving", resting: "Resting" },
      yangLine: "yang line",
      yinLine: "yin line",
      movingBecomes: "moving; becomes ",
      restingLine: "; resting line",
      movingSummaryPrefix: "from ",
      movingSummaryTo: " to ",
      noMovingLines:
        "No moving lines — stay with the primary hexagram’s meaning, virtue, and momentum.",
      progressUnit: "lines",
      issueUnset: "(no specific topic)",
      issueUnsetAlt: "(no topic given)",
      positionsNone: "none",
      interpretationRules: [
        "0 moving lines: focus on the primary hexagram text",
        "1 moving line: focus on that line’s text",
        "2 moving lines: both moving lines; prefer the lower",
        "3 moving lines: read primary and transformed; primary leads",
        "4 moving lines: focus on the two resting lines; lower first",
        "5 moving lines: focus on the single resting line",
        "6 moving lines: for Qian/Kun use special rules; else use the transformed hexagram text",
      ],
    },
  };

  /** Wilhelm-style English titles, keyed by Chinese name as used in `hexagramNames`. */
  const HEXAGRAM_TITLE_EN = {
    乾: "The Creative",
    坤: "The Receptive",
    屯: "Difficulty at the Beginning",
    蒙: "Youthful Folly",
    需: "Waiting",
    讼: "Conflict",
    师: "The Army",
    比: "Holding Together",
    小畜: "The Taming Power of the Small",
    履: "Treading",
    泰: "Peace",
    否: "Standstill",
    同人: "Fellowship with Men",
    大有: "Possession in Great Measure",
    谦: "Modesty",
    豫: "Enthusiasm",
    随: "Following",
    蛊: "Work on What Has Been Spoiled",
    临: "Approach",
    观: "Contemplation",
    噬嗑: "Biting Through",
    贲: "Grace",
    剥: "Splitting Apart",
    复: "Return",
    无妄: "Innocence",
    大畜: "The Taming Power of the Great",
    颐: "The Corners of the Mouth",
    大过: "Preponderance of the Great",
    坎: "The Abysmal (Water)",
    离: "The Clinging (Fire)",
    咸: "Influence",
    恒: "Duration",
    遁: "Retreat",
    大壮: "The Power of the Great",
    晋: "Progress",
    明夷: "Darkening of the Light",
    家人: "The Family",
    睽: "Opposition",
    蹇: "Obstruction",
    解: "Deliverance",
    损: "Decrease",
    益: "Increase",
    夬: "Break-through",
    姤: "Coming to Meet",
    萃: "Gathering Together",
    升: "Pushing Upward",
    困: "Oppression",
    井: "The Well",
    革: "Revolution",
    鼎: "The Cauldron",
    震: "The Arousing (Thunder)",
    艮: "Keeping Still (Mountain)",
    渐: "Development",
    归妹: "The Marrying Maiden",
    丰: "Abundance",
    旅: "The Wanderer",
    巽: "The Gentle (Wind)",
    兑: "The Joyous (Lake)",
    涣: "Dispersion",
    节: "Limitation",
    中孚: "Inner Truth",
    小过: "Preponderance of the Small",
    既济: "After Completion",
    未济: "Before Completion",
  };

  const HEXAGRAM_BRIEF_EN = {
    乾: "Strong initiative; creative force",
    坤: "Receptive bearing; achieve through flexibility",
    屯: "Things begin; difficulty at the start",
    蒙: "Seek clarity; accept guidance",
    需: "Wait with integrity; avoid rushing",
    讼: "Dispute arises; know when to stop",
    师: "Lead with discipline; rally the group",
    比: "Trust and ally; choose companions wisely",
    小畜: "Small accumulations; advance gradually",
    履: "Walk carefully; honor boundaries",
    泰: "Above and below meet; smooth flow",
    否: "Blocked exchange; hold and await shift",
    同人: "Shared aim; speak plainly together",
    大有: "Great abundance; guard your position",
    谦: "Humility gains ground",
    豫: "Prepare joyfully; settle before acting",
    随: "Adapt and follow the moment",
    蛊: "Rot to mend; put things in order",
    临: "Come close; guide with presence",
    观: "Observe widely; see the whole pattern",
    噬嗑: "Bite through obstacles; decide firmly",
    贲: "Adornment and substance together",
    剥: "Layers peel; protect the core",
    复: "Return begins; turn back on track",
    无妄: "No pretense; avoid wishful thinking",
    大畜: "Store strength; nurture character",
    颐: "Nourish rightly; mind words and intake",
    大过: "Great excess; the beam bears weight",
    坎: "Danger doubled; move with care",
    离: "Clarity and attachment; see clearly",
    咸: "Mutual resonance; sincerity counts",
    恒: "Lasting ways; small steps endure",
    遁: "Step back; avoid sharp edges",
    大壮: "Power surges; avoid brute excess",
    晋: "Advance into light; rise with poise",
    明夷: "Light injured; keep lamps low",
    家人: "Order within; home grounds outcomes",
    睽: "Opposites meet; seek workable unity",
    蹇: "Hindered advance; plan the path",
    解: "Tension eases; untie knots slowly",
    损: "Less first; gain follows",
    益: "Increase that helps; favor growth",
    夬: "Decide cleanly; no lingering doubt",
    姤: "Sudden encounter; watch early signs",
    萃: "Gather around a center; shared focus",
    升: "Climb stepwise; grow steadily",
    困: "Pressed within; keep faith",
    井: "Source stays; repair what serves all",
    革: "Change is due; renew carefully",
    鼎: "Cook the new; establish order",
    震: "Shock and wake; act with care",
    艮: "Stillness; stop where fitting",
    渐: "Gradual advance; no sudden leaps",
    归妹: "Union forming; choose commitments wisely",
    丰: "Brightness peaks; watch overflow",
    旅: "Sojourning; stay prudent abroad",
    巽: "Enter gently; influence by degrees",
    兑: "Joy and speech; keep borders kind",
    涣: "Scatter then regather; clear blocks first",
    节: "Measure and bound; the middle holds",
    中孚: "Inner truth; trust from the center",
    小过: "Small exceeds; keep actions modest",
    既济: "Mostly done; guard against slack",
    未济: "Not yet across; finish with care",
  };

  const TRIGRAM_NAMES_EN = {
    "111": "Qian",
    "110": "Dui",
    "101": "Li",
    "100": "Zhen",
    "011": "Xun",
    "010": "Kan",
    "001": "Gen",
    "000": "Kun",
  };

  function getLocale() {
    try {
      const v = window.localStorage.getItem(STORAGE_KEY);
      return v === "en" ? "en" : "zh";
    } catch {
      return "zh";
    }
  }

  function setLocale(lang) {
    const next = lang === "en" ? "en" : "zh";
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next === "en" ? "en" : "zh-CN";
    return next;
  }

  function t(path, vars) {
    const locale = getLocale();
    const parts = path.split(".");
    let cur = ZHOUYI_STRINGS[locale];
    for (const p of parts) {
      cur = cur?.[p];
    }
    let out = typeof cur === "string" ? cur : path;
    if (vars && typeof out === "string") {
      Object.entries(vars).forEach(([k, val]) => {
        out = out.split(`{${k}}`).join(String(val));
      });
    }
    return out;
  }

  function applyPageLocale() {
    document.title = t("meta.title");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && "placeholder" in el) el.placeholder = t(key);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });
  }

  window.ZhouyiI18n = {
    STORAGE_KEY,
    getLocale,
    setLocale,
    t,
    applyPageLocale,
    HEXAGRAM_TITLE_EN,
    HEXAGRAM_BRIEF_EN,
    TRIGRAM_NAMES_EN,
    ZHOUYI_STRINGS,
  };
})();
