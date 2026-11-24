export type Shot = {
  src: string;
  alt: string;
  caption: string;
};

export type ShotGroup = {
  id: string;
  label: string;
  note: string;
  images: Shot[];
};

export type Series = {
  slug: string;
  code: string;
  name: string;
  product: string;
  en: string;
  slogan: string;
  role: string;
  positioning: string;
  visual: string;
  density: "丰富" | "留白" | "克制";
  lead: string;
  paragraphs: string[];
  points: string[];
  groups: ShotGroup[];
};

export const seriesList: Series[] = [
  {
    slug: "huaxu",
    code: "01",
    name: "花序",
    product: "九件套茶具",
    en: "HUAXU",
    slogan: "繁花入席，茶韵成章。",
    role: "完整茶席与礼赠",
    positioning: "品牌形象主系列／礼赠",
    visual: "纹样丰富、色彩层次完整",
    density: "丰富",
    lead: "华井较为完整的茶席呈现与品牌形象系列。以较为完整、丰富的宝相花纹样作为视觉主体，将花形结构、边饰与色彩层次分布于茶壶、盖碗、茶杯及配件之上，使整席形成统一的装饰关系。",
    paragraphs: [
      "视觉以象牙白或米白色器物为底，承托青蓝、朱红、赭色与暖金。整体温润、华美，仍保持敦煌装饰里那种繁而不乱的秩序。",
      "它适合作为品牌形象主推，也适合作为礼赠核心。繁花可以盛放在一整席茶具上，让文化以可使用的方式被看见。",
    ],
    points: [
      "统一母题：宝相花及其边饰贯穿整席。",
      "装饰层级：三个系列中纹样最完整的一层。",
      "使用场景：完整茶席、礼赠与收藏。",
    ],
    groups: [
      {
        id: "ochre",
        label: "暖赭与青蓝",
        note: "暖赭与青蓝宝相花纹样，完整茶席呈现。",
        images: [
          {
            src: "/media/set-ochre.jpg",
            alt: "花序系列九件套茶具，暖赭与青蓝宝相花纹样铺陈在浅色台面上",
            caption: "九件套茶具 · 暖赭与青蓝",
          },
          {
            src: "/media/gift-scene.jpg",
            alt: "花序九件套与朱红礼盒、茶席布一同陈列",
            caption: "完整礼盒场景 · 九件套、礼盒与茶席布",
          },
        ],
      },
      {
        id: "blue",
        label: "青蓝主导",
        note: "青蓝主导纹样，温润瓷白基底。适合作为品牌形象主推与礼赠核心。",
        images: [
          {
            src: "/media/set-blue.jpg",
            alt: "花序系列九件套茶具，青蓝主导的宝相花纹样",
            caption: "九件套茶具 · 青蓝主导",
          },
        ],
      },
    ],
  },
  {
    slug: "huajian",
    code: "02",
    name: "花间",
    product: "盖碗",
    en: "HUAJIAN",
    slogan: "一器留白，花韵入茶。",
    role: "日常冲泡与品饮",
    positioning: "日常使用系列",
    visual: "局部纹样、留白与器型结合",
    density: "留白",
    lead: "连接文化审美与日常冲泡的核心实用系列。相较九件套的整体与繁盛，盖碗更注重纹样与器型的比例：盖钮、盖面、碗身与托碟上只作局部装饰，让宝相花成为焦点，同时留下器物本身的空白与使用感。",
    paragraphs: [
      "一盏盖碗，适合独坐品饮。花不必铺满全身，留白本身就是花间的节奏。",
      "结构图标出盖、碗、托碟的纹样分布与器型比例，供理解器物如何被使用，也提醒装饰服从于器。",
    ],
    points: [
      "盖面纹样是视觉焦点，碗身以边饰与散点花形呼吸。",
      "青绿与青蓝边饰区分不同版本，瓷白仍是共同底色。",
      "日常冲泡、自用与入门礼赠都可以从这里开始。",
    ],
    groups: [
      {
        id: "green",
        label: "青绿边饰",
        note: "盖碗实物 · 青绿边饰。局部纹样与留白并置。",
        images: [
          {
            src: "/media/gaiwan-saucer.jpg",
            alt: "青绿边饰盖碗，连同托碟置于浅色背景",
            caption: "盖碗 · 青绿边饰与托碟",
          },
          {
            src: "/media/gaiwan-green.jpg",
            alt: "青绿边饰盖碗侧面，碗身菱形花纹与点状边饰",
            caption: "盖碗细节 · 局部纹样与留白",
          },
        ],
      },
      {
        id: "teal",
        label: "青蓝边饰",
        note: "盖碗实物 · 青蓝边饰与盖面纹样。",
        images: [
          {
            src: "/media/gaiwan-lid.jpg",
            alt: "青蓝边饰盖碗，盖面中心为宝相花纹样",
            caption: "盖碗 · 青蓝边饰与盖面纹样",
          },
          {
            src: "/media/gaiwan-arch.jpg",
            alt: "青蓝边饰盖碗与托碟的侧面",
            caption: "盖碗 · 器型与托碟",
          },
        ],
      },
      {
        id: "drawing",
        label: "结构展开",
        note: "结构图展示盖、碗、托碟的纹样分布与器型比例。",
        images: [
          {
            src: "/media/gaiwan-drawing.jpg",
            alt: "盖碗结构展开图，含盖面、盖、碗身与托碟",
            caption: "结构展开 · 盖面 / 碗身 / 托碟",
          },
          {
            src: "/media/gaiwan-drawing-diamond.jpg",
            alt: "菱形花形版本的盖碗结构展开图",
            caption: "结构展开 · 菱形花形",
          },
        ],
      },
    ],
  },
  {
    slug: "huasu",
    code: "03",
    name: "花素",
    product: "极简主人杯",
    en: "HUASU",
    slogan: "一花一盏，静享茶时。",
    role: "个人品饮与搭配",
    positioning: "轻量入门／搭配系列",
    visual: "简化花形符号、装饰克制",
    density: "克制",
    lead: "强调个人审美与日常搭配的轻量茶器。复杂的宝相花被收成单独花形、重复符号或小面积图案，传统纹样从繁复装饰转为清晰、克制的现代符号。",
    paragraphs: [
      "三色花形共用瓷白杯身：青蓝、暖金、石绿。颜色用于区分，不与朱红识别色抢夺页面。",
      "简化之后的花仍要可识别。它也可以延展到杯垫、贴纸等轻量触点，但在杯上只保留一枚安静的记号。",
    ],
    points: [
      "适合个人品饮，也可与盖碗、九件套搭配。",
      "装饰克制，器型与手感优先。",
      "小礼盒可按花形颜色选择石绿、暖金、青蓝或朱红。",
    ],
    groups: [
      {
        id: "blue",
        label: "青蓝花形",
        note: "青蓝简化花形，细线口沿。",
        images: [
          {
            src: "/media/cup-blue.jpg",
            alt: "白瓷主人杯，杯身饰青蓝色简化宝相花",
            caption: "主人杯 · 青蓝花形",
          },
        ],
      },
      {
        id: "gold",
        label: "暖金花形",
        note: "暖金花形与点饰，只作局部点缀。",
        images: [
          {
            src: "/media/cup-gold.jpg",
            alt: "白瓷主人杯，杯身饰暖金色简化花形",
            caption: "主人杯 · 暖金花形",
          },
        ],
      },
      {
        id: "stone",
        label: "石绿花形",
        note: "石绿花形，装饰保持克制。",
        images: [
          {
            src: "/media/cup-green.jpg",
            alt: "白瓷主人杯，杯身饰石绿色简化花形",
            caption: "主人杯 · 石绿花形",
          },
        ],
      },
    ],
  },
];

export function seriesBySlug(slug: string) {
  return seriesList.find((item) => item.slug === slug);
}

export const colors = [
  {
    id: "cinnabar",
    name: "朱红",
    hex: "#C23A2B",
    role: "品牌识别主色",
    use: "用于标志、标题与关键强调。不做大面积铺陈以外的喧哗，它是识别，不是背景噪声。",
  },
  {
    id: "porcelain",
    name: "瓷白",
    hex: "#F8F4EC",
    role: "大面积留白底色",
    use: "页面、器物与包装的共同底色。温润、干净，把纹样和茶器都托出来。",
  },
  {
    id: "teal",
    name: "青蓝",
    hex: "#2A6B6B",
    role: "系列识别色",
    use: "用于系列区分与辅助图形。控制比例，不与朱红争夺主次。",
  },
  {
    id: "stone",
    name: "石绿",
    hex: "#5B7A6B",
    role: "系列区分色",
    use: "与青蓝一起服务系列差异，适合主人杯、小礼盒与局部边饰。",
  },
  {
    id: "gold",
    name: "暖金",
    hex: "#C9A227",
    role: "局部点缀色",
    use: "只做局部：礼盒烫金、杯沿、花心。不铺成底，不做成渐变。",
  },
] as const;

export const patterns = [
  {
    id: "full",
    name: "完整宝相花",
    level: "完整纹样",
    palette: "朱红 · 青蓝 · 石绿 · 暖金",
    src: "/media/pattern-full.png",
    alt: "完整宝相花纹样，多层花瓣与中心莲心，朱红青蓝石绿与暖金",
    use: "用于礼盒主视觉、品牌海报、文化介绍等需要突出敦煌主题的场景。结构完整、层次丰富，应给予充足的展示空间，避免与其他复杂元素叠加。",
  },
  {
    id: "mist",
    name: "灰调花形",
    level: "完整纹样",
    palette: "灰蓝轮廓 · 朱红与石绿点缀",
    src: "/media/pattern-mist.png",
    alt: "灰调宝相花纹样，灰蓝轮廓，朱红与石绿点缀",
    use: "气质更沉静。适合文化说明、说明书内页，或需要降低视觉强度的场景。仍置于浅色或纯色背景，让细节可读。",
  },
  {
    id: "scroll",
    name: "赭青卷草",
    level: "局部边饰",
    palette: "赭色 · 青蓝 · 石绿",
    src: "/media/pattern-scroll.png",
    alt: "赭青卷草纹样，四向对称的卷草花形",
    use: "局部花瓣与连续边饰，用于包装边缘、纸袋侧边、页眉页脚等辅助位置。它陪衬器物，不替代器物。",
  },
  {
    id: "diamond",
    name: "菱形简化花形",
    level: "简化符号",
    palette: "石绿 · 赭色 · 暖金",
    src: "/media/pattern-diamond.png",
    alt: "菱形简化花形，四出花瓣与暖金花心",
    use: "用于主人杯等极简产品，以及小尺寸识别。简化之后仍要认得出花，同时避免过度装饰。",
  },
] as const;

export const boxes = [
  {
    id: "stone",
    name: "石绿",
    hex: "#5B7A6B",
    src: "/media/box-stone.jpg",
    alt: "石绿色方形小礼盒，盖面刺绣宝相花，配绿色流苏",
  },
  {
    id: "gold",
    name: "暖金",
    hex: "#C9A227",
    src: "/media/box-gold.jpg",
    alt: "暖金色方形小礼盒，盖面刺绣宝相花，配金色流苏",
  },
  {
    id: "teal",
    name: "青蓝",
    hex: "#2A6B6B",
    src: "/media/box-teal.jpg",
    alt: "青蓝色方形小礼盒，盖面刺绣宝相花，配蓝色流苏",
  },
  {
    id: "cinnabar",
    name: "朱红",
    hex: "#C23A2B",
    src: "/media/box-cinnabar.jpg",
    alt: "朱红色方形小礼盒，盖面刺绣宝相花，配红色流苏",
  },
] as const;

export const coasters = [
  {
    id: "full",
    name: "完整宝相花",
    src: "/media/coaster-full.jpg",
    alt: "圆形杯垫，完整宝相花纹样",
  },
  {
    id: "mist",
    name: "灰调花形",
    src: "/media/coaster-mist.jpg",
    alt: "圆形杯垫，灰调宝相花纹样",
  },
  {
    id: "scroll",
    name: "赭青卷草",
    src: "/media/coaster-scroll.jpg",
    alt: "圆形杯垫，赭青卷草纹样",
  },
  {
    id: "diamond",
    name: "菱形花形",
    src: "/media/coaster-diamond.jpg",
    alt: "菱形杯垫，简化花形纹样",
  },
] as const;

export const zones = [
  {
    id: "identity",
    name: "品牌形象区",
    text: "入口处放下标志与品牌故事，让人先认出华井，再看见器物。识别清楚，不必用仿古门楼去说明文化。",
  },
  {
    id: "set",
    name: "九件套展示区",
    text: "以完整茶席的方式陈列花序系列，让茶壶、盖碗、茶杯与配件的装饰关系被一起看见。",
  },
  {
    id: "gaiwan",
    name: "盖碗体验区",
    text: "可以冲泡、可以靠近看盖钮与边饰。体验的是器型与用法，不是一段解说词。",
  },
  {
    id: "cup",
    name: "主人杯陈列区",
    text: "按颜色或花形分类。这里强调简约、轻巧，以及它如何与其他器物搭配。",
  },
  {
    id: "culture",
    name: "文化说明区",
    text: "用图文说明宝相花如何被提取，又如何在三个系列里以不同浓度延续。叙述以品牌手册中的设计逻辑为准，不另添未经核实的洞窟出处。",
  },
] as const;

export const people = [
  {
    id: "daily",
    index: "01",
    name: "日常茶生活",
    text: "希望用有设计感的茶器改善每天的饮茶，在意器型是否顺手、使用是否便利。",
  },
  {
    id: "aesthetic",
    index: "02",
    name: "东方美学",
    text: "关注传统文化、敦煌艺术、器物设计与空间审美，对纹样细节和设计逻辑敏感。",
  },
  {
    id: "gift",
    index: "03",
    name: "礼赠",
    text: "需要一件有文化主题、视觉完整、适合纪念的茶器。包装的仪式感是选择的一部分。",
  },
  {
    id: "collect",
    index: "04",
    name: "收藏与设计",
    text: "在意系列化、纹样细节与产品故事，也会留意限定与特殊工艺。",
  },
] as const;

export const intents = [
  { id: "huaxu", label: "花序 · 九件套礼赠" },
  { id: "huajian", label: "花间 · 盖碗" },
  { id: "huasu", label: "花素 · 主人杯" },
  { id: "gift", label: "小礼盒与杯垫" },
  { id: "visit", label: "到店体验意向" },
  { id: "collaborate", label: "品牌合作" },
] as const;

export type IntentId = (typeof intents)[number]["id"];

export function intentLabel(id: string) {
  return intents.find((item) => item.id === id)?.label;
}
