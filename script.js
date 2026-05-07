const tossButton = document.querySelector("#tossButton");
const autoButton = document.querySelector("#autoButton");
const promptButton = document.querySelector("#promptButton");
const copyPromptButton = document.querySelector("#copyPromptButton");
const resetButton = document.querySelector("#resetButton");
const progress = document.querySelector("#progress");
const hint = document.querySelector("#hint");
const coins = document.querySelector("#coins");
const lineResult = document.querySelector("#lineResult");
const records = document.querySelector("#records");
const primaryHexagram = document.querySelector("#primaryHexagram");
const changedHexagram = document.querySelector("#changedHexagram");
const primaryMeta = document.querySelector("#primaryMeta");
const changedMeta = document.querySelector("#changedMeta");
const primaryName = document.querySelector("#primaryName");
const changedName = document.querySelector("#changedName");
const primaryBrief = document.querySelector("#primaryBrief");
const changedBrief = document.querySelector("#changedBrief");
const promptOutput = document.querySelector("#promptOutput");
const promptHint = document.querySelector("#promptHint");
const issueInput = document.querySelector("#issueInput");
const wizardOverlay = document.querySelector("#wizardOverlay");
const wizardCloseButton = document.querySelector("#wizardCloseButton");
const wizardStepText = document.querySelector("#wizardStepText");
const wizardSourceText = document.querySelector("#wizardSourceText");
const wizardQuestionTitle = document.querySelector("#wizardQuestionTitle");
const wizardQuestionHint = document.querySelector("#wizardQuestionHint");
const wizardOptions = document.querySelector("#wizardOptions");
const wizardPrevButton = document.querySelector("#wizardPrevButton");
const wizardNextButton = document.querySelector("#wizardNextButton");

const lineLabels = {
  6: "老阴",
  7: "少阳",
  8: "少阴",
  9: "老阳",
};

const lineNames = ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];

const trigramNames = {
  "111": "乾",
  "110": "兑",
  "101": "离",
  "100": "震",
  "011": "巽",
  "010": "坎",
  "001": "艮",
  "000": "坤",
};

const hexagramNames = {
  "111111": "乾",
  "000000": "坤",
  "100010": "屯",
  "010001": "蒙",
  "111010": "需",
  "010111": "讼",
  "010000": "师",
  "000010": "比",
  "111011": "小畜",
  "110111": "履",
  "111000": "泰",
  "000111": "否",
  "101111": "同人",
  "111101": "大有",
  "001000": "谦",
  "000100": "豫",
  "100110": "随",
  "011001": "蛊",
  "110000": "临",
  "000011": "观",
  "100101": "噬嗑",
  "101001": "贲",
  "000001": "剥",
  "100000": "复",
  "100111": "无妄",
  "111001": "大畜",
  "100001": "颐",
  "011110": "大过",
  "010010": "坎",
  "101101": "离",
  "001110": "咸",
  "011100": "恒",
  "001111": "遁",
  "111100": "大壮",
  "000101": "晋",
  "101000": "明夷",
  "101011": "家人",
  "110101": "睽",
  "001010": "蹇",
  "010100": "解",
  "110001": "损",
  "100011": "益",
  "011111": "夬",
  "111110": "姤",
  "011000": "萃",
  "000110": "升",
  "011010": "困",
  "010110": "井",
  "011101": "革",
  "101110": "鼎",
  "001001": "震",
  "100100": "艮",
  "110100": "渐",
  "001011": "归妹",
  "001101": "丰",
  "101100": "旅",
  "110110": "巽",
  "011011": "兑",
  "110010": "涣",
  "010011": "节",
  "110011": "中孚",
  "001100": "小过",
  "101010": "既济",
  "010101": "未济",
};

const hexagramBriefs = {
  乾: "刚健开创，自强不息",
  坤: "厚载承势，以柔成事",
  屯: "万事初生，艰难开局",
  蒙: "启蒙求明，宜受教化",
  需: "守正待时，不宜躁进",
  讼: "有争有辩，贵在止争",
  师: "整肃用众，纪律为先",
  比: "亲附联合，择善相从",
  小畜: "小有积蓄，未可骤进",
  履: "循礼而行，如履薄冰",
  泰: "上下交泰，通达渐成",
  否: "闭塞不通，宜守待变",
  同人: "同道相谋，贵在坦诚",
  大有: "丰盛有成，慎守其位",
  谦: "谦冲自牧，反得其益",
  豫: "顺势而动，先安后发",
  随: "随时顺势，应机而行",
  蛊: "积弊待治，先乱后整",
  临: "近观其势，主在引导",
  观: "审势观变，明察大局",
  噬嗑: "决断去阻，先难后通",
  贲: "文饰成象，重质亦重文",
  剥: "旧势剥落，宜守本元",
  复: "转机初现，回归正轨",
  无妄: "守真去妄，勿存侥幸",
  大畜: "蓄势养德，厚积待发",
  颐: "养正养志，慎言慎食",
  大过: "栋梁承重，过则有险",
  坎: "重险当前，行稳为上",
  离: "明而有附，以智取势",
  咸: "感应相通，重在真诚",
  恒: "持守有常，久则见功",
  遁: "当退则退，以避其锋",
  大壮: "气盛势强，戒刚过头",
  晋: "光明上进，宜顺势升",
  明夷: "晦明藏光，宜隐其锋",
  家人: "内正其本，外方能成",
  睽: "异中求同，和而不同",
  蹇: "进路受阻，先难后谋",
  解: "险解事缓，可舒其结",
  损: "先减后益，舍得有成",
  益: "有增有助，利于进取",
  夬: "决而后行，不可狐疑",
  姤: "猝然相遇，防微杜渐",
  萃: "聚众成势，贵在主心",
  升: "积小成高，缓升为吉",
  困: "内困外乏，守志待通",
  井: "根本未改，重在整治",
  革: "时机已到，宜变则变",
  鼎: "去故纳新，重建秩序",
  震: "骤动惊起，行动宜审",
  艮: "止于其所，知止后定",
  渐: "循序渐进，缓成其功",
  归妹: "关系未稳，慎定终局",
  丰: "势盛则明，盈极当戒",
  旅: "寄身在外，谨慎自持",
  巽: "因势入局，柔顺渗透",
  兑: "悦而能说，和中有界",
  涣: "分散待聚，先解后合",
  节: "立界知度，守中为吉",
  中孚: "诚信为本，感通于内",
  小过: "宜小不宜大，谨行为先",
  既济: "事已近成，更戒松懈",
  未济: "未竟之局，终须善终",
};

let lines = [];
let wizardState = null;

const DEFAULT_UNKNOWN_OPTION = {
  value: "不明确",
  label: "不明确",
  description: "眼下还说不准，先按信息不足处理。",
};

const styleQuestion = {
  id: "reading_style",
  title: "你希望这次解读更接近哪种风格？",
  hint: "这是第一步。不同风格会影响提示词的语气、力度和安抚程度。",
  options: [
    {
      value: "温柔安抚型",
      label: "温柔安抚型",
      description: "更重体察、陪伴和安定感，适合情绪较重或较敏感的问题。",
    },
    {
      value: "平衡洞察型",
      label: "平衡洞察型",
      description: "兼顾温度与判断，既不回避问题，也不过分锋利。",
    },
    {
      value: "清醒点破型",
      label: "清醒点破型",
      description: "更直接指出关键症结，但仍保持分寸和礼貌。",
    },
  ],
};

const AI_CONFIG_STORAGE_KEY = "zhouyi_ai_question_config";

function tossCoins() {
  return Array.from({ length: 3 }, () => (Math.random() < 0.5 ? 2 : 3));
}

function describeLine(sum) {
  const isYang = sum === 7 || sum === 9;
  const isMoving = sum === 6 || sum === 9;

  return {
    value: sum,
    label: lineLabels[sum],
    binary: isYang ? 1 : 0,
    changedBinary: isMoving ? (isYang ? 0 : 1) : isYang ? 1 : 0,
    isYang,
    isMoving,
  };
}

function renderCoins(values) {
  coins.innerHTML = values
    .map((value, index) => {
      const face = value === 3 ? "正面 3" : "反面 2";
      return `<div class="coin" aria-label="第${index + 1}枚铜板">${face}</div>`;
    })
    .join("");
}

function renderRecords() {
  records.innerHTML = lines
    .map((line, index) => {
      return `<li>${lineNames[index]}：<strong>${line.label}</strong>（${line.value}）</li>`;
    })
    .join("");
}

function renderHexagram(target, values, movingValues = []) {
  if (!values.length) {
    target.className = "hexagram-lines empty";
    target.innerHTML = "";
    return;
  }

  target.className = "hexagram-lines";
  target.innerHTML = values
    .map((bit, index) => {
      const moving = movingValues[index];
      const typeClass = bit === 1 ? "yang" : "yin";
      const movingLabel = moving ? `<span class="moving-mark">${moving}</span>` : "";

      return `
        <div class="hexagram-line ${typeClass}">
          <span class="segment"></span>
          ${bit === 0 ? '<span class="segment"></span>' : ""}
          ${movingLabel}
        </div>
      `;
    })
    .join("");
}

function getHexagramName(bits) {
  const key = bits.slice().reverse().join("");
  return hexagramNames[key] || "未知卦";
}

function getTrigramName(bits) {
  return trigramNames[bits.join("")] || "未知";
}

function createHexagramInfo(bits, label) {
  const lowerBits = bits.slice(0, 3);
  const upperBits = bits.slice(3, 6);
  const name = getHexagramName(bits);

  return {
    label,
    bits,
    name,
    brief: hexagramBriefs[name] || "观象取义，仍需结合爻变",
    key: bits.slice().reverse().join(""),
    lowerTrigram: getTrigramName(lowerBits),
    upperTrigram: getTrigramName(upperBits),
  };
}

function getRelatedHexagrams(primaryBits, changedBits) {
  const mutualBits = [
    primaryBits[1],
    primaryBits[2],
    primaryBits[3],
    primaryBits[2],
    primaryBits[3],
    primaryBits[4],
  ];
  const oppositeBits = primaryBits.map((bit) => (bit === 1 ? 0 : 1));
  const reversedBits = primaryBits.slice().reverse();

  return {
    primary: createHexagramInfo(primaryBits, "本卦"),
    changed: createHexagramInfo(changedBits, "变卦"),
    mutual: createHexagramInfo(mutualBits, "互卦"),
    opposite: createHexagramInfo(oppositeBits, "错卦"),
    reversed: createHexagramInfo(reversedBits, "综卦（总卦）"),
  };
}

function getReadingContext() {
  if (lines.length !== 6) return null;

  const primaryBits = lines.map((line) => line.binary);
  const changedBits = lines.map((line) => line.changedBinary);
  const related = getRelatedHexagrams(primaryBits, changedBits);
  const movingLines = lines
    .map((line, index) =>
      line.isMoving
        ? {
            index,
            name: lineNames[index],
            label: line.label,
            value: line.value,
            from: line.binary === 1 ? "阳" : "阴",
            to: line.changedBinary === 1 ? "阳" : "阴",
          }
        : null,
    )
    .filter(Boolean);

  return {
    lines,
    primaryBits,
    changedBits,
    movingLines,
    hasMoving: movingLines.length > 0,
    related,
  };
}

function getAiQuestionConfig() {
  const fromWindow = window.ZHOUYI_AI_QUESTION_CONFIG;
  if (fromWindow && typeof fromWindow === "object") return fromWindow;

  try {
    const raw = window.localStorage.getItem(AI_CONFIG_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function buildLocalQuestionSet(issueText) {
  const issue = issueText.trim();
  const hasCareerKeywords = /工作|事业|职业|岗位|跳槽|升职|合作|项目|创业/.test(issue);
  const hasLoveKeywords = /感情|关系|喜欢|复合|婚|对象|暧昧|恋爱/.test(issue);
  const hasMoneyKeywords = /财|钱|投资|收入|借|回款|生意|买卖/.test(issue);
  const hasDecisionKeywords = /要不要|是否|该不该|适不适合|能不能|选择|决定/.test(issue);
  const questions = [];

  questions.push({
    id: "time_focus",
    title: "你这次更关心哪个时间范围的结果？",
    hint: "时间范围不同，解读的重点也会不同。",
    options: [
      { value: "短期", label: "短期", description: "更关注最近 1 到 4 周内的变化。" },
      { value: "中期", label: "中期", description: "更关注接下来 1 到 3 个月的走势。" },
      { value: "长期", label: "长期", description: "更关心更长线的方向与结构。" },
      DEFAULT_UNKNOWN_OPTION,
    ],
  });

  if (hasCareerKeywords) {
    questions.push({
      id: "career_goal",
      title: "关于这件事，你最在意的点更偏哪一类？",
      hint: "这会帮助解读更聚焦你真正担心的地方。",
      options: [
        { value: "机会与发展", label: "机会与发展", description: "更关心有没有上升空间、转机或新机会。" },
        { value: "稳定与风险", label: "稳定与风险", description: "更关心是否会踩坑、是否值得继续投入。" },
        { value: "合作与人事", label: "合作与人事", description: "更关心团队关系、上级态度或合作默契。" },
        DEFAULT_UNKNOWN_OPTION,
      ],
    });
  } else if (hasLoveKeywords) {
    questions.push({
      id: "relationship_state",
      title: "这段关系目前更接近哪种状态？",
      hint: "关系所处阶段不同，卦意侧重点也会不同。",
      options: [
        { value: "暧昧试探中", label: "暧昧试探中", description: "彼此还在观察，尚未真正落定。" },
        { value: "已有关系但不稳", label: "已有关系但不稳", description: "已经有连接，但存在顾虑或拉扯。" },
        { value: "分开后仍有牵挂", label: "分开后仍有牵挂", description: "更关注复合、回头或彼此是否仍有心。" },
        DEFAULT_UNKNOWN_OPTION,
      ],
    });
  } else if (hasMoneyKeywords) {
    questions.push({
      id: "money_priority",
      title: "这件事你现在最担心的是哪一方面？",
      hint: "财务问题通常要分清是求增益、求回稳，还是先防损。",
      options: [
        { value: "能否进账", label: "能否进账", description: "更关心收益、回款或结果能否落袋。" },
        { value: "风险会不会扩大", label: "风险会不会扩大", description: "更担心损失、拖欠或连带问题。" },
        { value: "该不该继续投入", label: "该不该继续投入", description: "更想判断是否值得继续花钱、花力气或加码。" },
        DEFAULT_UNKNOWN_OPTION,
      ],
    });
  } else {
    questions.push({
      id: "concern_type",
      title: "你这次更偏向想知道哪一类信息？",
      hint: "如果问题还比较模糊，可以先选一个最接近的方向。",
      options: [
        { value: "结果走向", label: "结果走向", description: "更想知道事情最终大致会往哪边发展。" },
        { value: "当下该怎么做", label: "当下该怎么做", description: "更想知道眼前先做什么比较合适。" },
        { value: "对方或外部态度", label: "对方或外部态度", description: "更关心别人怎么看、外部条件如何变化。" },
        DEFAULT_UNKNOWN_OPTION,
      ],
    });
  }

  if (hasDecisionKeywords || !issue) {
    questions.push({
      id: "decision_pressure",
      title: "这件事现在是否已经逼近必须做决定的节点？",
      hint: "这会影响解读更偏观察，还是更偏收口定夺。",
      options: [
        { value: "是，近期必须决定", label: "是，近期必须决定", description: "时间比较紧，希望尽快看清方向。" },
        { value: "还可以再观察", label: "还可以再观察", description: "暂时不急，允许再多看一些迹象。" },
        { value: "外部在推动我决定", label: "外部在推动我决定", description: "不是完全自发，是被环境或别人推着走。" },
        DEFAULT_UNKNOWN_OPTION,
      ],
    });
  }

  questions.push({
    id: "emotional_state",
    title: "你现在面对这件事的心态，更接近哪一种？",
    hint: "这会帮助解读语气更贴近你的接受方式。",
    options: [
      { value: "焦虑犹豫", label: "焦虑犹豫", description: "担心走错、想太多，心里比较悬着。" },
      { value: "理性观望", label: "理性观望", description: "希望冷静判断，不想被情绪带着走。" },
      { value: "已有倾向想确认", label: "已有倾向想确认", description: "心里大概有答案，只是想再确认一下。" },
      DEFAULT_UNKNOWN_OPTION,
    ],
  });

  return questions.slice(0, 4);
}

async function requestAiGeneratedQuestions(issueText) {
  const config = getAiQuestionConfig();
  if (!config || !config.endpoint || !config.model || !config.apiKey) return null;

  const response = await fetch(config.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            "你要为周易解读前置问答生成 3 到 4 个和用户事由相关的选择题。返回纯 JSON，不要 markdown。格式：{\"questions\":[{\"id\":\"...\",\"title\":\"...\",\"hint\":\"...\",\"options\":[{\"value\":\"...\",\"label\":\"...\",\"description\":\"...\"}]}]}。每题 3 个有效选项即可，语气温和，后续系统会自动补一个“不明确”选项。",
        },
        {
          role: "user",
          content: `所问事由：${issueText || "（无指定事由）"}。请输出适合进一步澄清背景的选择题。`,
        },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) {
    throw new Error(`Question API error: ${response.status}`);
  }

  const data = await response.json();
  const rawContent = data.output_text || data.choices?.[0]?.message?.content || "";
  const parsed = typeof rawContent === "string" ? JSON.parse(rawContent) : rawContent;
  return Array.isArray(parsed.questions) ? parsed.questions : null;
}

async function getClarifyingQuestions(issueText) {
  try {
    const aiQuestions = await requestAiGeneratedQuestions(issueText);
    if (aiQuestions?.length) {
      return {
        source: "AI 自动生成",
        questions: aiQuestions.map((question, index) => ({
          ...question,
          id: question.id || `ai_question_${index + 1}`,
          options: [...(question.options || []).slice(0, 3), DEFAULT_UNKNOWN_OPTION],
        })),
      };
    }
  } catch {
    // Fall back to local generation.
  }

  return {
    source: "本地智能生成",
    questions: buildLocalQuestionSet(issueText),
  };
}

function buildAnswerSummary(answerMap) {
  return Object.values(answerMap)
    .map((entry) => `${entry.title}：${entry.label}`)
    .join("\n");
}

function buildPrompt(context, wizardAnswers) {
  const { lines: sixLines, movingLines, hasMoving, related } = context;
  const issueText = issueInput.value.trim() || "（无指定事由）";
  const styleChoice = wizardAnswers.reading_style?.label || "平衡洞察型";
  const answerSummary = buildAnswerSummary(wizardAnswers);

  const styleGuidance = {
    温柔安抚型:
      "整体语气请更柔和、更有安抚感，优先照顾提问者的感受，再给出判断与建议。",
    平衡洞察型:
      "整体语气请兼顾温度与判断，既要说透关键，也要保留分寸与缓冲。",
    清醒点破型:
      "整体语气可以更直接一些，但仍要克制有礼，不要让人感到被压迫或训斥。",
  };

  const lineSection = sixLines
    .map((line, index) => {
      const yinYang = line.binary === 1 ? "阳爻" : "阴爻";
      const movingText = line.isMoving
        ? `，为动爻，变化后转为${line.changedBinary === 1 ? "阳爻" : "阴爻"}`
        : "，为静爻";

      return `${lineNames[index]}：${line.label}（数值 ${line.value}），本象为${yinYang}${movingText}。`;
    })
    .join("\n");

  const movingSummary = hasMoving
    ? movingLines.map((item) => `${item.name}${item.label}，由${item.from}变${item.to}`).join("；")
    : "本卦无动爻，以本卦卦义、卦德、卦势为主，不强行解变。";

  const hexagramSection = [
    related.primary,
    related.changed,
    related.mutual,
    related.opposite,
    related.reversed,
  ]
    .map(
      (item) =>
        `${item.label}：${item.name}卦（${item.brief}）；上卦 ${item.upperTrigram}，下卦 ${item.lowerTrigram}；六爻二进制（自下而上）为 ${item.bits.join(
          "",
        )}；卦码为 ${item.key}。`,
    )
    .join("\n");

  return `你现在是一名熟悉《周易》义理、象数与六爻关系分析的资深解卦者，同时也擅长以温和、细致、有分寸感的方式与人沟通。请基于下面这组摇卦结果，写一份既专业又有人情味的解读，让提问者感到被理解、被看见，而不是被生硬地评判或训诫。

你的解读风格要求：
1. 保持专业，但语气温润、克制、耐心，像一位有阅历、会体察人心的卦师在认真回应来问之人。
2. 可以指出问题与风险，但措辞尽量委婉、留有余地，让人能够接受，也能感受到安定感。
3. 避免高高在上的指教感，不要像下结论、下命令；更适合用“这更像是在提醒你……”“眼下或许更适合……”这类表达。
4. 既要看见卦里的压力和难处，也要看见其中可转圜、可努力、可等待的空间。

专业解读要求：
1. 具备扎实的周易基础，能综合卦名、卦象、卦德、上下卦关系、动静变化、互卦、错卦、综卦（总卦）进行分析。
2. 明确区分本卦主局、动爻主变化、变卦主趋势落点。
3. 结合互卦看内在机制或中间过程，结合错卦看对立面或反向提醒，结合综卦（总卦）看换位视角或整体翻转后的含义。
4. 若动爻较少，重点分析动爻；若动爻较多，说明主次，不要平均用力。
5. 必须逐爻解释，不可只解卦名。
6. 要说明有利因素、不利因素、当前适合做的事、当前不宜急做的事、短期趋势、中期趋势。
7. 输出时避免宿命论、绝对化、压迫感过强的措辞，不要把解卦写成不可更改的宣判。
8. 如果缺少提问背景，请在解读中主动给出“感情 / 事业 / 财务 / 人际 / 决策”几个常见场景下的适配提示。
9. 若结果涉及健康、法律、投资等高风险议题，请温和提醒提问者结合专业人士意见，不可替代现实决策。

本次指定的解读风格：
${styleChoice}
补充语气要求：${styleGuidance[styleChoice] || styleGuidance["平衡洞察型"]}

本次摇卦原始信息：
所问事由：${issueText}
补充背景选择：
${answerSummary}
起卦方式：三枚铜板摇卦法，共六次，自下而上成卦。
六爻详情：
${lineSection}

动爻情况：
${movingSummary}

相关卦信息：
${hexagramSection}

请按以下结构输出，整体语气要自然、有人情味，不要写成生硬报告：
一、整体判断
二、本卦详解
三、动爻逐条解读
四、变卦趋势分析
五、互卦、错卦、综卦（总卦）的补充启示
六、分场景提示（至少覆盖事业/工作、感情、人际/合作、财务/决策）
七、行动建议
八、风险提醒与解读边界

补充解析要求：
1. 开头先用一小段话回应提问者当下的处境或心情，让人感到被理解。
2. 请指出这卦最核心的一句话结论，但表达不要太硬，可以温和、含蓄一些。
3. 请指出“现在最重要的一个动作”和“现在最不该急着做的一个动作”。
4. 请给出 3 条可落地建议，必须具体到行为层面，但语气尽量像提醒和陪伴，而不是命令。
5. 若卦象存在明显的先难后易、先易后难、反复、拖延、冲突、误判、贵人、阻力、时机未到等信号，请直接点明，但措辞要让人容易接受。
6. 结尾请补上一段安定人心的话，不夸大吉凶，不过度制造焦虑。
7. 请在最后附一个“如果我是提问者，接下来 7 天可以怎样观察现实变化”的清单，帮助验证这次解读是否贴近现实。`;
}

function updateSummary() {
  progress.textContent = `${lines.length} / 6 爻`;

  const complete = lines.length === 6;
  tossButton.disabled = complete;
  autoButton.disabled = complete;
  promptButton.disabled = !complete;
  copyPromptButton.disabled = !promptOutput.value.trim();

  if (!complete) {
    hint.textContent = lines.length === 0 ? "请静心后开始摇卦" : `还需 ${6 - lines.length} 次`;
    primaryMeta.textContent = "完成六爻后显示";
    changedMeta.textContent = "若无变爻，则与本卦相同";
    primaryName.textContent = "待成卦";
    changedName.textContent = "待成卦";
    primaryBrief.textContent = "卦成之后见其名与意";
    changedBrief.textContent = "动而后变，其势方显";
    promptHint.textContent = "完成六爻后可生成";
    renderHexagram(primaryHexagram, lines.map((line) => line.binary));
    renderHexagram(changedHexagram, lines.map((line) => line.changedBinary));
    return;
  }

  const context = getReadingContext();
  const primaryBits = context.primaryBits;
  const changedBits = context.changedBits;
  const hasMoving = context.hasMoving;
  const movingMarks = lines.map((line) => (line.isMoving ? "变爻" : ""));

  renderHexagram(primaryHexagram, primaryBits, movingMarks);
  renderHexagram(changedHexagram, changedBits);

  primaryMeta.textContent = `${context.related.primary.name}卦`;
  primaryName.textContent = `${context.related.primary.name}卦`;
  primaryBrief.textContent = context.related.primary.brief;
  changedMeta.textContent = hasMoving
    ? `${context.related.changed.name}卦`
    : `${context.related.primary.name}卦（无变爻）`;
  changedName.textContent = hasMoving
    ? `${context.related.changed.name}卦`
    : `${context.related.primary.name}卦`;
  changedBrief.textContent = hasMoving
    ? context.related.changed.brief
    : `${context.related.primary.brief}，此局以本卦为主`;
  hint.textContent = hasMoving ? "摇卦完成，已生成本卦与变卦" : "摇卦完成，本卦无变爻";
  promptHint.textContent = "可生成并复制给任意生成式 AI";
}

function addLine() {
  if (lines.length >= 6) return;

  const values = tossCoins();
  const sum = values.reduce((total, value) => total + value, 0);
  const line = describeLine(sum);

  lines.push(line);
  renderCoins(values);
  lineResult.textContent = `本次为 ${line.label}（${sum}）`;
  renderRecords();
  updateSummary();
}

function closeWizard() {
  wizardState = null;
  wizardOverlay.classList.add("hidden");
  wizardOverlay.setAttribute("aria-hidden", "true");
}

function openWizard() {
  wizardOverlay.classList.remove("hidden");
  wizardOverlay.setAttribute("aria-hidden", "false");
}

function getWizardSteps() {
  if (!wizardState) return [];
  return [styleQuestion, ...wizardState.dynamicQuestions];
}

function getCurrentWizardQuestion() {
  const steps = getWizardSteps();
  return steps[wizardState.currentStep] || null;
}

function selectWizardOption(question, option) {
  wizardState.answers[question.id] = {
    title: question.title,
    value: option.value,
    label: option.label,
    description: option.description,
  };
  renderWizardStep();
}

function renderWizardOptions(question) {
  const selectedValue = wizardState.answers[question.id]?.value;

  wizardOptions.innerHTML = question.options
    .map((option) => {
      const selectedClass = selectedValue === option.value ? " selected" : "";
      return `
        <button class="wizard-option${selectedClass}" type="button" data-value="${option.value}">
          <span class="wizard-option-title">${option.label}</span>
          <span class="wizard-option-desc">${option.description}</span>
        </button>
      `;
    })
    .join("");

  wizardOptions.querySelectorAll(".wizard-option").forEach((button) => {
    const option = question.options.find((item) => item.value === button.dataset.value);
    button.addEventListener("click", () => selectWizardOption(question, option));
  });
}

function renderWizardStep() {
  if (!wizardState) return;

  const steps = getWizardSteps();
  const question = getCurrentWizardQuestion();
  const totalSteps = steps.length;

  wizardStepText.textContent = `第 ${wizardState.currentStep + 1} 步 / 共 ${totalSteps} 步`;
  wizardSourceText.textContent = wizardState.questionSource;
  wizardQuestionTitle.textContent = question.title;
  wizardQuestionHint.textContent = question.hint || "";
  renderWizardOptions(question);

  wizardPrevButton.disabled = wizardState.currentStep === 0;
  wizardNextButton.textContent = wizardState.currentStep === totalSteps - 1 ? "生成提示词" : "下一步";
}

function moveWizardStep(direction) {
  const question = getCurrentWizardQuestion();
  if (direction > 0 && !wizardState.answers[question.id]) return;

  const nextStep = wizardState.currentStep + direction;
  const totalSteps = getWizardSteps().length;
  if (nextStep < 0 || nextStep >= totalSteps) return;

  wizardState.currentStep = nextStep;
  renderWizardStep();
}

async function startPromptWizard() {
  const context = getReadingContext();
  if (!context) {
    promptOutput.value = "请先完成六次摇卦，再生成解读提示词。";
    promptHint.textContent = "当前卦象未完成";
    copyPromptButton.disabled = false;
    return;
  }

  promptHint.textContent = "正在准备补充问题…";
  promptButton.disabled = true;

  const issueText = issueInput.value.trim();
  const questionData = await getClarifyingQuestions(issueText);

  wizardState = {
    context,
    currentStep: 0,
    questionSource: `${questionData.source}，每题均可选“不明确”`,
    dynamicQuestions: questionData.questions.map((question) => ({
      ...question,
      options: question.options.some((option) => option.value === DEFAULT_UNKNOWN_OPTION.value)
        ? question.options
        : [...question.options, DEFAULT_UNKNOWN_OPTION],
    })),
    answers: {},
  };

  promptButton.disabled = false;
  promptHint.textContent = "请先完成弹窗问答";
  openWizard();
  renderWizardStep();
}

function finalizePromptFromWizard() {
  promptOutput.value = buildPrompt(wizardState.context, wizardState.answers);
  promptOutput.scrollTop = 0;
  promptHint.textContent = "提示词已生成，可直接复制使用";
  copyPromptButton.disabled = false;
  closeWizard();
}

async function copyPrompt() {
  const text = promptOutput.value.trim();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    promptHint.textContent = "提示词已复制";
  } catch {
    promptOutput.focus();
    promptOutput.select();
    promptHint.textContent = "复制受限，已帮你选中文本";
  }
}

function resetAll() {
  lines = [];
  closeWizard();
  coins.innerHTML = '<div class="coin-placeholder">等待摇卦</div>';
  records.innerHTML = "";
  lineResult.textContent = "尚未生成爻象";
  promptOutput.value = "";
  primaryName.textContent = "待成卦";
  changedName.textContent = "待成卦";
  primaryBrief.textContent = "卦成之后见其名与意";
  changedBrief.textContent = "动而后变，其势方显";
  renderHexagram(primaryHexagram, []);
  renderHexagram(changedHexagram, []);
  updateSummary();
}

async function autoGenerate() {
  while (lines.length < 6) {
    addLine();
    await new Promise((resolve) => window.setTimeout(resolve, 220));
  }
}

tossButton.addEventListener("click", addLine);
autoButton.addEventListener("click", autoGenerate);
promptButton.addEventListener("click", startPromptWizard);
copyPromptButton.addEventListener("click", copyPrompt);
resetButton.addEventListener("click", resetAll);
wizardCloseButton.addEventListener("click", closeWizard);
wizardPrevButton.addEventListener("click", () => moveWizardStep(-1));
wizardNextButton.addEventListener("click", () => {
  const isLastStep = wizardState && wizardState.currentStep === getWizardSteps().length - 1;
  if (!wizardState) return;

  if (isLastStep) {
    const question = getCurrentWizardQuestion();
    if (!wizardState.answers[question.id]) return;
    finalizePromptFromWizard();
    return;
  }

  moveWizardStep(1);
});
wizardOverlay.addEventListener("click", (event) => {
  if (event.target === wizardOverlay) closeWizard();
});

resetAll();
