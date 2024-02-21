export const CONTENT_TYPES: { value: string, label: string }[] = [
    { label: "Fun", value: 'fun' },
    { label: "Education", value: 'education' },
    { label: "Sports", value: 'sports' },
    { label: "News", value: 'news' },
    { label: "Investment", value: 'investment' },
    { label: "Facts", value: 'facts' },
]

export const CONTENT_TYPE_OPTIONS: { [x: string]: { value: string, label: string }[] } = {
    "fun": [
        { value: "Board games revival", label: "Board games revival" },
        { value: "Comedy trends", label: "Comedy trends" },
        { value: "Amusement parks", label: "Amusement parks" },
        { value: "Escape rooms", label: "Escape rooms" },
        { value: "Street performances", label: "Street performances" },
        { value: "Online challenges", label: "Online challenges" },
        { value: "Festivals impact", label: "Festivals impact" },
        { value: "Crafting movement", label: "Crafting movement" },
        { value: "Social gaming", label: "Social gaming" },
        { value: "Virtual reality", label: "Virtual reality" }
    ],
    "education": [
        { value: "Gamified learning", label: "Gamified learning" },
        { value: "Education systems", label: "Education systems" },
        { value: "Bilingual benefits", label: "Bilingual benefits" },
        { value: "Standardized testing", label: "Standardized testing" },
        { value: "Arts in schools", label: "Arts in schools" },
        { value: "Tech bootcamps", label: "Tech bootcamps" },
        { value: "Homeschooling dynamics", label: "Homeschooling dynamics" },
        { value: "Mentorship importance", label: "Mentorship importance" },
        { value: "Educational equity", label: "Educational equity" },
        { value: "Mobile learning", label: "Mobile learning" }
    ],
    "sports": [
        { value: "Sports medicine", label: "Sports medicine" },
        { value: "Team sociology", label: "Team sociology" },
        { value: "Olympic economics", label: "Olympic economics" },
        { value: "Gender parity", label: "Gender parity" },
        { value: "Fandom psychology", label: "Fandom psychology" },
        { value: "Extreme sports", label: "Extreme sports" },
        { value: "Sports business", label: "Sports business" },
        { value: "Youth athletics", label: "Youth athletics" },
        { value: "Data analytics", label: "Data analytics" },
        { value: "Doping ethics", label: "Doping ethics" }
    ],
    "news": [
        { value: "Citizen journalism", label: "Citizen journalism" },
        { value: "Whistleblower influence", label: "Whistleblower influence" },
        { value: "Fake news", label: "Fake news" },
        { value: "Print media survival", label: "Print media survival" },
        { value: "Social media news", label: "Social media news" },
        { value: "Cybersecurity news", label: "Cybersecurity news" },
        { value: "Democratic media", label: "Democratic media" },
        { value: "News deserts", label: "News deserts" },
        { value: "News economics", label: "News economics" },
        { value: "Broadcast evolution", label: "Broadcast evolution" }
    ],
    "investment": [
        { value: "Robo-advising", label: "Robo-advising" },
        { value: "Geopolitical impacts", label: "Geopolitical impacts" },
        { value: "Index funds", label: "Index funds" },
        { value: "Real estate trends", label: "Real estate trends" },
        { value: "Startup investing", label: "Startup investing" },
        { value: "Social trading", label: "Social trading" },
        { value: "Tax strategies", label: "Tax strategies" },
        { value: "Emerging markets", label: "Emerging markets" },
        { value: "Financial literacy", label: "Financial literacy" },
        { value: "Pension futures", label: "Pension futures" }
    ],
    "facts": [
        { value: "Animal oddities", label: "Animal oddities" },
        { value: "Everyday science", label: "Everyday science" },
        { value: "Historical obscurities", label: "Historical obscurities" },
        { value: "Science myths", label: "Science myths" },
        { value: "Human body facts", label: "Human body facts" },
        { value: "Oceanic discoveries", label: "Oceanic discoveries" },
        { value: "Space exploration", label: "Space exploration" },
        { value: "Ancient tech", label: "Ancient tech" },
        { value: "World laws", label: "World laws" },
        { value: "Bizarre news", label: "Bizarre news" }
    ]
}
