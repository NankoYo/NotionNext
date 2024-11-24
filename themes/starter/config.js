/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '云谷引擎（Vallengine）', // 英雄区文字
  STARTER_HERO_TITLE_2: '我们的宗旨是通过创新技术简化IT基础设施，释放客户的创新潜能。', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    '/sign-up', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://github.com/NanKoYo/vallengine', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: 'https://p0.meituan.net/csc/2acdf8c5a8b46c8381175c8abf0a11a044787.jpg', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '特性', // 特性
  STARTER_FEATURE_TEXT_1: 'Vallengine的主要特性', // 特性
  STARTER_FEATURE_TEXT_2:
    '简化复杂性，释放创新潜能', // 特性

  STARTER_FEATURE_1_TITLE_1: '免费且开源', // 特性1
  STARTER_FEATURE_1_TITLE_1: '安全可靠的数据保护', // 特性1
  STARTER_FEATURE_1_TEXT_1: '遵守最高安全标准，保护您的数据', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '/Data_Security_Assurance', // 特性1

  STARTER_FEATURE_2_TITLE_1: '灵活的计费模式', // 特性2
  STARTER_FEATURE_2_TEXT_1: '根据使用量付费，无长期合同束缚', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '/Highly_customizable', // 特性2

  STARTER_FEATURE_3_TITLE_1: '高性能计算资源', // 特性3
  STARTER_FEATURE_3_TEXT_1: '支持各种规模的应用程序和工作负载', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '/Flexible_Scalability', // 特性3

  STARTER_FEATURE_4_TITLE_1: '全球数据中心网络', // 特性4
  STARTER_FEATURE_4_TEXT_1: '确保数据低延迟和高可用性', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '/Excellent_performance', // 特性4
  
    // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '云谷引擎（Vallengine）',
  STARTER_ABOUT_TEXT:
    '简化复杂性，释放创新潜能',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '7年',
  STARTER_ABOUT_TIPS_2: '产品开发',
  STARTER_ABOUT_TIPS_3: '拥有数年运营经验',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。',

  STARTER_PRICING_1_TITLE: '免费版',
  STARTER_PRICING_1_PRICE: '0',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '应用商店,网站管理,数据库管理,容器管理,文件管理,服务器监控,防火墙,进程管理,SSH 管理,计划任务,日志审计', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    '/',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '专业版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含免费版,WAF防火墙,网站防篡改,自定义LOGO,GPU监控,网站监控报表,自定义主题配色,内网代理模式,定时病毒扫描,短信告警,订阅期内工单支持,短信额度100条', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    '/',

  STARTER_PRICING_3_TITLE: '企业版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含免费版,包含专业版,企业级防篡改,多用户管理,运维平台,服务器安全扫描,网站测速,数据库运维工具,站点加速,站点优化,企业级备份,防入侵,安全防护,资源监视器', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    '/',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数千位站长选择用SmartPages搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标
  
  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'This method is really amazing! I have tried many foreign software before, but none of them are as good as this one. I have ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ace',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'USER',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'The method of the big shot is so practical! I used other foreign platforms before, but the effect was not satisfactory. This method is awesome!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'NEO',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'User',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Thank you for sharing such a good method! I have tried similar foreign platforms before, and the experience was not good. This one is superb!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Max ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'User',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    }
  ],
  
  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题',
  STARTER_FAQ_TEXT_1: '我们列举了一些你可能关注的话题。',
  STARTER_FAQ_TEXT_2: '如果没能找你想要的信息，可以浏览帮助文档获取更多支持。',

  STARTER_FAQ_1_QUESTION: '我购买的是正版授权软件吗？',
  STARTER_FAQ_1_ANSWER:
    '是的。南科技术是南科网络全资子公司。所售产品均拥有完整版权及原厂售后支持，可以放心购买。',

  STARTER_FAQ_2_QUESTION: '什么是许可证？',
  STARTER_FAQ_2_ANSWER:
    '许可证是你购买南科产品的可用凭证，用以导入关联应用，激活产品权益。 许可证跟随南科订单发放，一个订单可包含多个南科产品，一个产品对应一个许可证',

  STARTER_FAQ_3_QUESTION: '许可证限制使用设备吗？',
  STARTER_FAQ_3_ANSWER:
    '一个许可证同一时段仅支持绑定激活一个设备，但可以在不同的设备之间换绑。',

  STARTER_FAQ_4_QUESTION: '是否支持退款？',
  STARTER_FAQ_4_ANSWER:
    '由于软件授权的虚拟属性，因此不支持退款，感谢您的理解与支持。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '领先的软件公司南科网络的全资子公司',
  STARTER_TEAM_TEXT_2:
    '专注于南科技术旗下云上业务的商业化运营，为用户提供被广泛验证的生产力工具。',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://gravatar.nankoyo.com/avatar/83351c9c99ee87ff272f1669557b02fa?s=640&d=identicon',
      STARTER_TEAM_ITEM_NICKNAME: '南枫.',
      STARTER_TEAM_ITEM_DESCRIPTION: '创始人'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://thirdqq.qlogo.cn/g?b=sdk&nk=3594399324&s=640',
      STARTER_TEAM_ITEM_NICKNAME: '晓婷.',
      STARTER_TEAM_ITEM_DESCRIPTION: '首席执行官（CEO）'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://gravatar.nankoyo.com/avatar/d5b7cfe6b404de25f3e5e4182bbf2962866c844fadf0bcdb844abc1a45110efa?s=460&d=identicon',
      STARTER_TEAM_ITEM_NICKNAME: 'Slient.',
      STARTER_TEAM_ITEM_DESCRIPTION: '首席技术官（CTO）'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://gravatar.nankoyo.com/avatar/13f4fce9d4994d742a0ce7d98ab99600?s=640',
      STARTER_TEAM_ITEM_NICKNAME: 'Lovi.',
      STARTER_TEAM_ITEM_DESCRIPTION: '首席财务官（CFO）'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://thirdqq.qlogo.cn/g?b=sdk&nk=3932796034&s=640',
      STARTER_TEAM_ITEM_NICKNAME: 'Slient.',
      STARTER_TEAM_ITEM_DESCRIPTION: '首席营销官（CMO）'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://thirdqq.qlogo.cn/g?b=sdk&nk=431738813&s=640',
      STARTER_TEAM_ITEM_NICKNAME: 'Coke',
      STARTER_TEAM_ITEM_DESCRIPTION: '联合创始人'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://thirdqq.qlogo.cn/g?b=sdk&nk=3764011033&s=640',
      STARTER_TEAM_ITEM_NICKNAME: 'Movie.',
      STARTER_TEAM_ITEM_DESCRIPTION: '首席运营官（COO）'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于 云谷引擎（Vallengine）的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，香港',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@vallengine.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/feedback-yjrioz', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '专注于南科技术旗下云上业务的商业化运营，为用户提供被广泛验证的生产力工具。',

  
  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '关于我们', URL: '/about' },
        {
          TITLE: '',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '安全可靠的数据保护',
          URL: '/Data_Security_Assurance'
        },
        {
          TITLE: '灵活的计费模式',
          URL: '/Highly_customizable'
        },
        {
          TITLE: '全球数据中心网络',
          URL: '/Flexible_Scalability'
        },
        { TITLE: '高性能计算资源', URL: '/Excellent_performance' }
      ]
    },
    {
      TITLE: '',
      LINK_GROUP: [
        {
          TITLE: '',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIOTN:
    '访问Vallengine的后台管理，我们提供了详细的面板',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    '/sign-up',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
