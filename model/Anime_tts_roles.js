export function Anime_tts_roles(userInput){
const characters = [
  "派蒙_ZH",
  "纳西妲_ZH",
  "凯亚_ZH",
  "阿贝多_ZH",
  "温迪_ZH",
  "枫原万叶_ZH",
  "钟离_ZH",
  "荒泷一斗_ZH",
  "八重神子_ZH",
  "艾尔海森_ZH",
  "提纳里_ZH",
  "迪希雅_ZH",
  "卡维_ZH",
  "宵宫_ZH",
  "那维莱特_ZH",
  "莱依拉_ZH",
  "赛诺_ZH",
  "莫娜_ZH",
  "诺艾尔_ZH",
  "托马_ZH",
  "凝光_ZH",
  "林尼_ZH",
  "北斗_ZH",
  "柯莱_ZH",
  "神里绫华_ZH",
  "可莉_ZH",
  "芭芭拉_ZH",
  "雷电将军_ZH",
  "娜维娅_ZH",
  "芙宁娜_ZH",
  "珊瑚宫心海_ZH",
  "鹿野院平藏_ZH",
  "迪奥娜_ZH",
  "琴_ZH",
  "五郎_ZH",
  "班尼特_ZH",
  "达达利亚_ZH",
  "安柏_ZH",
  "莱欧斯利_ZH",
  "夜兰_ZH",
  "妮露_ZH",
  "辛焱_ZH",
  "丽莎_ZH",
  "珐露珊_ZH",
  "魈_ZH",
  "香菱_ZH",
  "迪卢克_ZH",
  "砂糖_ZH",
  "烟绯_ZH",
  "早柚_ZH",
  "云堇_ZH",
  "刻晴_ZH",
  "重云_ZH",
  "优菈_ZH",
  "胡桃_ZH",
  "流浪者_ZH",
  "久岐忍_ZH",
  "神里绫人_ZH",
  "甘雨_ZH",
  "戴因斯雷布_ZH",
  "菲谢尔_ZH",
  "白术_ZH",
  "行秋_ZH",
  "九条裟罗_ZH",
  "夏洛蒂_ZH",
  "雷泽_ZH",
  "申鹤_ZH",
  "荧_ZH",
  "空_ZH",
  "迪娜泽黛_ZH",
  "凯瑟琳_ZH",
  "多莉_ZH",
  "坎蒂丝_ZH",
  "琳妮特_ZH",
  "萍姥姥_ZH",
  "罗莎莉亚_ZH",
  "埃德_ZH",
  "爱贝尔_ZH",
  "伊迪娅_ZH",
  "留云借风真君_ZH",
  "绮良良_ZH",
  "七七_ZH",
  "式大将_ZH",
  "瑶瑶_ZH",
  "奥兹_ZH",
  "菲米尼_ZH",
  "米卡_ZH",
  "哲平_ZH",
  "大肉丸_ZH",
  "托克_ZH",
  "蒂玛乌斯_ZH",
  "昆钧_ZH",
  "欧菲妮_ZH",
  "塞琉斯_ZH",
  "仆人_ZH",
  "迈勒斯_ZH",
  "希格雯_ZH",
  "阿守_ZH",
  "拉赫曼_ZH",
  "杜拉夫_ZH",
  "伊利亚斯_ZH",
  "阿晃_ZH",
  "旁白_ZH",
  "爱德琳_ZH",
  "埃洛伊_ZH",
  "德沃沙克_ZH",
  "玛乔丽_ZH",
  "塞塔蕾_ZH",
  "柊千里_ZH",
  "海芭夏_ZH",
  "九条镰治_ZH",
  "阿娜耶_ZH",
  "笼钓瓶一心_ZH",
  "回声海螺_ZH",
  "劳维克_ZH",
  "元太_ZH",
  "阿扎尔_ZH",
  "查尔斯_ZH",
  "阿洛瓦_ZH",
  "埃勒曼_ZH",
  "纳比尔_ZH",
  "莎拉_ZH",
  "康纳_ZH",
  "博来_ZH",
  "玛塞勒_ZH",
  "阿祇_ZH",
  "博士_ZH",
  "玛格丽特_ZH",
  "迪尔菲_ZH",
  "宛烟_ZH",
  "羽生田千鹤_ZH",
  "海妮耶_ZH",
  "旅行者_ZH",
  "霍夫曼_ZH",
  "佐西摩斯_ZH",
  "鹿野奈奈_ZH",
  "舒伯特_ZH",
  "天叔_ZH",
  "艾莉丝_ZH",
  "龙二_ZH",
  "莺儿_ZH",
  "嘉良_ZH",
  "一心传名刀_ZH",
  "费迪南德_ZH",
  "珊瑚_ZH",
  "言笑_ZH",
  "久利须_ZH",
  "嘉玛_ZH",
  "艾文_ZH",
  "克洛琳德_ZH",
  "丹吉尔_ZH",
  "女士_ZH",
  "白老先生_ZH",
  "天目十五_ZH",
  "老孟_ZH",
  "巴达维_ZH",
  "长生_ZH",
  "吴船长_ZH",
  "拉齐_ZH",
  "艾伯特_ZH",
  "松浦_ZH",
  "埃泽_ZH",
  "阿圆_ZH",
  "莫塞伊思_ZH",
  "阿拉夫_ZH",
  "杜吉耶_ZH",
  "石头_ZH",
  "百闻_ZH",
  "波洛_ZH",
  "斯坦利_ZH",
  "博易_ZH",
  "迈蒙_ZH",
  "掇星攫辰天君_ZH",
  "毗伽尔_ZH",
  "芙卡洛斯_ZH",
  "恶龙_ZH",
  "恕筠_ZH",
  "知易_ZH",
  "克列门特_ZH",
  "大慈树王_ZH",
  "西拉杰_ZH",
  "上杉_ZH",
  "阿尔卡米_ZH",
  "纯水精灵_ZH",
  "常九爷_ZH",
  "沙扎曼_ZH",
  "田铁嘴_ZH",
  "克罗索_ZH",
  "阿巴图伊_ZH",
  "悦_ZH",
  "阿佩普_ZH",
  "埃尔欣根_ZH",
  "萨赫哈蒂_ZH",
  "塔杰·拉德卡尼_ZH",
  "安西_ZH",
  "埃舍尔_ZH",
  "萨齐因_ZH",
  "派蒙_JP",
  "纳西妲_JP",
  "凯亚_JP",
  "阿贝多_JP",
  "温迪_JP",
  "枫原万叶_JP",
  "钟离_JP",
  "荒泷一斗_JP",
  "八重神子_JP",
  "艾尔海森_JP",
  "提纳里_JP",
  "迪希雅_JP",
  "卡维_JP",
  "宵宫_JP",
  "那维莱特_JP",
  "莱依拉_JP",
  "赛诺_JP",
  "莫娜_JP",
  "诺艾尔_JP",
  "托马_JP",
  "凝光_JP",
  "林尼_JP",
  "北斗_JP",
  "柯莱_JP",
  "神里绫华_JP",
  "可莉_JP",
  "芭芭拉_JP",
  "雷电将军_JP",
  "娜维娅_JP",
  "芙宁娜_JP",
  "珊瑚宫心海_JP",
  "鹿野院平藏_JP",
  "迪奥娜_JP",
  "琴_JP",
  "五郎_JP",
  "班尼特_JP",
  "达达利亚_JP",
  "安柏_JP",
  "莱欧斯利_JP",
  "夜兰_JP",
  "妮露_JP",
  "辛焱_JP",
  "丽莎_JP",
  "珐露珊_JP",
  "魈_JP",
  "香菱_JP",
  "迪卢克_JP",
  "砂糖_JP",
  "烟绯_JP",
  "早柚_JP",
  "云堇_JP",
  "刻晴_JP",
  "重云_JP",
  "优菈_JP",
  "胡桃_JP",
  "流浪者_JP",
  "久岐忍_JP",
  "神里绫人_JP",
  "甘雨_JP",
  "戴因斯雷布_JP",
  "菲谢尔_JP",
  "白术_JP",
  "行秋_JP",
  "九条裟罗_JP",
  "夏洛蒂_JP",
  "雷泽_JP",
  "申鹤_JP",
  "空_JP",
  "荧_JP",
  "迪娜泽黛_JP",
  "凯瑟琳_JP",
  "多莉_JP",
  "坎蒂丝_JP",
  "琳妮特_JP",
  "萍姥姥_JP",
  "罗莎莉亚_JP",
  "埃德_JP",
  "爱贝尔_JP",
  "伊迪娅_JP",
  "留云借风真君_JP",
  "绮良良_JP",
  "七七_JP",
  "式大将_JP",
  "瑶瑶_JP",
  "奥兹_JP",
  "菲米尼_JP",
  "米卡_JP",
  "哲平_JP",
  "大肉丸_JP",
  "托克_JP",
  "蒂玛乌斯_JP",
  "昆钧_JP",
  "欧菲妮_JP",
  "塞琉斯_JP",
  "仆人_JP",
  "迈勒斯_JP",
  "希格雯_JP",
  "阿守_JP",
  "拉赫曼_JP",
  "杜拉夫_JP",
  "伊利亚斯_JP",
  "阿晃_JP",
  "旁白_JP",
  "爱德琳_JP",
  "埃洛伊_JP",
  "德沃沙克_JP",
  "玛乔丽_JP",
  "塞塔蕾_JP",
  "柊千里_JP",
  "海芭夏_JP",
  "九条镰治_JP",
  "阿娜耶_JP",
  "笼钓瓶一心_JP",
  "回声海螺_JP",
  "劳维克_JP",
  "元太_JP",
  "阿扎尔_JP",
  "查尔斯_JP",
  "阿洛瓦_JP",
  "埃勒曼_JP",
  "纳比尔_JP",
  "莎拉_JP",
  "康纳_JP",
  "博来_JP",
  "玛塞勒_JP",
  "阿祇_JP",
  "博士_JP",
  "迪尔菲_JP",
  "玛格丽特_JP",
  "宛烟_JP",
  "羽生田千鹤_JP",
  "海妮耶_JP",
  "霍夫曼_JP",
  "旅行者_JP",
  "佐西摩斯_JP",
  "舒伯特_JP",
  "鹿野奈奈_JP",
  "天叔_JP",
  "龙二_JP",
  "艾莉丝_JP",
  "莺儿_JP",
  "嘉良_JP",
  "珊瑚_JP",
  "言笑_JP",
  "一心传名刀_JP",
  "费迪南德_JP",
  "久利须_JP",
  "嘉玛_JP",
  "艾文_JP",
  "克洛琳德_JP",
  "丹吉尔_JP",
  "女士_JP",
  "天目十五_JP",
  "老孟_JP",
  "白老先生_JP",
  "舍利夫_JP",
  "巴达维_JP",
  "拉齐_JP",
  "长生_JP",
  "吴船长_JP",
  "艾伯特_JP",
  "松浦_JP",
  "埃泽_JP",
  "阿圆_JP",
  "阿拉夫_JP",
  "莫塞伊思_JP",
  "石头_JP",
  "百闻_JP",
  "杜吉耶_JP",
  "波洛_JP",
  "掇星攫辰天君_JP",
  "迈蒙_JP",
  "博易_JP",
  "诗筠_JP",
  "斯坦利_JP",
  "毗伽尔_JP",
  "芙卡洛斯_JP",
  "恶龙_JP",
  "小仓澪_JP",
  "恕筠_JP",
  "知易_JP",
  "克列门特_JP",
  "大慈树王_JP",
  "望雅_JP",
  "黑田_JP",
  "卡莉娜_JP",
  "马姆杜_JP",
  "科林斯_JP",
  "上杉_JP",
  "西拉杰_JP",
  "菲尔戈黛特_JP",
  "一平_JP",
  "纯水精灵_JP",
  "阿尔卡米_JP",
  "老戴_JP",
  "谢赫祖拜尔_JP",
  "沙扎曼_JP",
  "田铁嘴_JP",
  "小野寺_JP",
  "百识_JP",
  "克罗索_JP",
  "莱斯格_JP",
  "芷巧_JP",
  "加藤洋平_JP",
  "阿巴图伊_JP",
  "埃尔欣根_JP",
  "斯嘉莉_JP",
  "阿佩普_JP",
  "巫女_JP",
  "卡布斯_JP",
  "洛伦佐_JP",
  "萨赫哈蒂_JP",
  "娜德瓦_JP",
  "塞德娜_JP",
  "塔杰·拉德卡尼_JP",
  "绘星_JP",
  "泽田_JP",
  "安西_JP",
  "拉伊德_JP",
  "亚卡巴_JP",
  "有乐斋_JP",
  "莱昂_JP",
  "尤苏波夫_JP",
  "夏妮_JP",
  "埃舍尔_JP",
  "萨齐因_JP",
  "古山_JP",
  "自称渊上之物_JP",
  "丹羽_JP",
  "塞萨尔的日记_JP",
  "派蒙_EN",
  "纳西妲_EN",
  "凯亚_EN",
  "阿贝多_EN",
  "温迪_EN",
  "枫原万叶_EN",
  "钟离_EN",
  "荒泷一斗_EN",
  "八重神子_EN",
  "艾尔海森_EN",
  "提纳里_EN",
  "迪希雅_EN",
  "卡维_EN",
  "宵宫_EN",
  "莱依拉_EN",
  "那维莱特_EN",
  "赛诺_EN",
  "莫娜_EN",
  "诺艾尔_EN",
  "托马_EN",
  "凝光_EN",
  "林尼_EN",
  "北斗_EN",
  "柯莱_EN",
  "神里绫华_EN",
  "可莉_EN",
  "芭芭拉_EN",
  "雷电将军_EN",
  "娜维娅_EN",
  "芙宁娜_EN",
  "珊瑚宫心海_EN",
  "鹿野院平藏_EN",
  "迪奥娜_EN",
  "琴_EN",
  "五郎_EN",
  "班尼特_EN",
  "达达利亚_EN",
  "安柏_EN",
  "莱欧斯利_EN",
  "夜兰_EN",
  "妮露_EN",
  "辛焱_EN",
  "珐露珊_EN",
  "丽莎_EN",
  "魈_EN",
  "香菱_EN",
  "迪卢克_EN",
  "砂糖_EN",
  "烟绯_EN",
  "早柚_EN",
  "云堇_EN",
  "刻晴_EN",
  "重云_EN",
  "优菈_EN",
  "胡桃_EN",
  "流浪者_EN",
  "久岐忍_EN",
  "神里绫人_EN",
  "甘雨_EN",
  "戴因斯雷布_EN",
  "菲谢尔_EN",
  "白术_EN",
  "行秋_EN",
  "九条裟罗_EN",
  "夏洛蒂_EN",
  "雷泽_EN",
  "申鹤_EN",
  "荧_EN",
  "空_EN",
  "迪娜泽黛_EN",
  "凯瑟琳_EN",
  "多莉_EN",
  "坎蒂丝_EN",
  "琳妮特_EN",
  "萍姥姥_EN",
  "罗莎莉亚_EN",
  "埃德_EN",
  "爱贝尔_EN",
  "伊迪娅_EN",
  "留云借风真君_EN",
  "绮良良_EN",
  "七七_EN",
  "式大将_EN",
  "瑶瑶_EN",
  "奥兹_EN",
  "菲米尼_EN",
  "米卡_EN",
  "哲平_EN",
  "大肉丸_EN",
  "托克_EN",
  "蒂玛乌斯_EN",
  "昆钧_EN",
  "欧菲妮_EN",
  "塞琉斯_EN",
  "仆人_EN",
  "迈勒斯_EN",
  "希格雯_EN",
  "阿守_EN",
  "拉赫曼_EN",
  "杜拉夫_EN",
  "伊利亚斯_EN",
  "阿晃_EN",
  "旁白_EN",
  "爱德琳_EN",
  "埃洛伊_EN",
  "德沃沙克_EN",
  "玛乔丽_EN",
  "塞塔蕾_EN",
  "柊千里_EN",
  "海芭夏_EN",
  "九条镰治_EN",
  "阿娜耶_EN",
  "笼钓瓶一心_EN",
  "回声海螺_EN",
  "劳维克_EN",
  "元太_EN",
  "阿扎尔_EN",
  "查尔斯_EN",
  "阿洛瓦_EN",
  "埃勒曼_EN",
  "纳比尔_EN",
  "莎拉_EN",
  "康纳_EN",
  "博来_EN",
  "玛塞勒_EN",
  "阿祇_EN",
  "博士_EN",
  "迪尔菲_EN",
  "玛格丽特_EN",
  "宛烟_EN",
  "羽生田千鹤_EN",
  "海妮耶_EN",
  "霍夫曼_EN",
  "旅行者_EN",
  "佐西摩斯_EN",
  "鹿野奈奈_EN",
  "舒伯特_EN",
  "天叔_EN",
  "艾莉丝_EN",
  "龙二_EN",
  "莺儿_EN",
  "嘉良_EN",
  "珊瑚_EN",
  "费迪南德_EN",
  "言笑_EN",
  "一心传名刀_EN",
  "久利须_EN",
  "嘉玛_EN",
  "艾文_EN",
  "克洛琳德_EN",
  "丹吉尔_EN",
  "女士_EN",
  "天目十五_EN",
  "老孟_EN",
  "白老先生_EN",
  "舍利夫_EN",
  "巴达维_EN",
  "拉齐_EN",
  "长生_EN",
  "吴船长_EN",
  "艾伯特_EN",
  "松浦_EN",
  "埃泽_EN",
  "阿圆_EN",
  "阿拉夫_EN",
  "莫塞伊思_EN",
  "石头_EN",
  "百闻_EN",
  "杜吉耶_EN",
  "波洛_EN",
  "掇星攫辰天君_EN",
  "迈蒙_EN",
  "博易_EN",
  "诗筠_EN",
  "斯坦利_EN",
  "毗伽尔_EN",
  "芙卡洛斯_EN",
  "恶龙_EN",
  "小仓澪_EN",
  "恕筠_EN",
  "知易_EN",
  "克列门特_EN",
  "大慈树王_EN",
  "望雅_EN",
  "黑田_EN",
  "卡莉娜_EN",
  "马姆杜_EN",
  "科林斯_EN",
  "上杉_EN",
  "西拉杰_EN",
  "菲尔戈黛特_EN",
  "一平_EN",
  "纯水精灵_EN",
  "阿尔卡米_EN",
  "老戴_EN",
  "谢赫祖拜尔_EN",
  "沙扎曼_EN",
  "田铁嘴_EN",
  "小野寺_EN",
  "百识_EN",
  "克罗索_EN",
  "莱斯格_EN",
  "芷巧_EN",
  "加藤洋平_EN",
  "阿巴图伊_EN",
  "埃尔欣根_EN",
  "斯嘉莉_EN",
  "阿佩普_EN",
  "巫女_EN",
  "卡布斯_EN",
  "洛伦佐_EN",
  "萨赫哈蒂_EN",
  "娜德瓦_EN",
  "塞德娜_EN",
  "塔杰·拉德卡尼_EN",
  "绘星_EN",
  "泽田_EN",
  "安西_EN",
  "拉伊德_EN",
  "亚卡巴_EN",
  "有乐斋_EN",
  "莱昂_EN",
  "尤苏波夫_EN",
  "夏妮_EN",
  "埃舍尔_EN",
  "萨齐因_EN",
  "古山_EN",
  "自称渊上之物_EN",
  "丹羽_EN",
  "塞萨尔的日记_EN",
  "派蒙_ZH",
  "纳西妲_ZH",
  "凯亚_ZH",
  "阿贝多_ZH",
  "温迪_ZH",
  "枫原万叶_ZH",
  "钟离_ZH",
  "荒泷一斗_ZH",
  "八重神子_ZH",
  "艾尔海森_ZH",
  "提纳里_ZH",
  "迪希雅_ZH",
  "卡维_ZH",
  "宵宫_ZH",
  "莱依拉_ZH",
  "那维莱特_ZH",
  "赛诺_ZH",
  "莫娜_ZH",
  "诺艾尔_ZH",
  "托马_ZH",
  "凝光_ZH",
  "林尼_ZH",
  "北斗_ZH",
  "柯莱_ZH",
  "神里绫华_ZH",
  "可莉_ZH",
  "芭芭拉_ZH",
  "雷电将军_ZH",
  "娜维娅_ZH",
  "芙宁娜_ZH",
  "珊瑚宫心海_ZH",
  "鹿野院平藏_ZH",
  "迪奥娜_ZH",
  "琴_ZH",
  "五郎_ZH",
  "班尼特_ZH",
  "达达利亚_ZH",
  "安柏_ZH",
  "莱欧斯利_ZH",
  "夜兰_ZH",
  "妮露_ZH",
  "辛焱_ZH",
  "珐露珊_ZH",
  "丽莎_ZH",
  "魈_ZH",
  "香菱_ZH",
  "迪卢克_ZH",
  "砂糖_ZH",
  "烟绯_ZH",
  "早柚_ZH",
  "云堇_ZH",
  "刻晴_ZH",
  "重云_ZH",
  "优菈_ZH",
  "胡桃_ZH",
  "流浪者_ZH",
  "久岐忍_ZH",
  "神里绫人_ZH",
  "甘雨_ZH",
  "戴因斯雷布_ZH",
  "菲谢尔_ZH",
  "白术_ZH",
  "行秋_ZH",
  "九条裟罗_ZH",
  "夏洛蒂_ZH",
  "雷泽_ZH",
  "申鹤_ZH",
  "荧_ZH",
  "空_ZH",
  "迪娜泽黛_ZH",
  "凯瑟琳_ZH",
  "多莉_ZH",
  "坎蒂丝_ZH",
  "琳妮特_ZH",
  "萍姥姥_ZH",
  "罗莎莉亚_ZH",
  "埃德_ZH",
  "爱贝尔_ZH",
  "伊迪娅_ZH",
  "留云借风真君_ZH",
  "绮良良_ZH",
  "七七_ZH",
  "式大将_ZH",
  "瑶瑶_ZH",
  "奥兹_ZH",
  "菲米尼_ZH",
  "米卡_ZH",
  "哲平_ZH",
  "大肉丸_ZH",
  "托克_ZH",
  "蒂玛乌斯_ZH",
  "昆钧_ZH",
  "欧菲妮_ZH",
  "塞琉斯_ZH",
  "仆人_ZH",
  "迈勒斯_ZH",
  "希格雯_ZH",
  "阿守_ZH",
  "拉赫曼_ZH",
  "杜拉夫_ZH",
  "伊利亚斯_ZH",
  "阿晃_ZH",
  "旁白_ZH",
  "爱德琳_ZH",
  "埃洛伊_ZH",
  "德沃沙克_ZH",
  "玛乔丽_ZH",
  "塞塔蕾_ZH",
  "柊千里_ZH",
  "海芭夏_ZH",
  "九条镰治_ZH",
  "阿娜耶_ZH",
  "笼钓瓶一心_ZH",
  "回声海螺_ZH",
  "劳维克_ZH",
  "元太_ZH",
  "阿扎尔_ZH",
  "查尔斯_ZH",
  "阿洛瓦_ZH",
  "埃勒曼_ZH",
  "纳比尔_ZH",
  "莎拉_ZH",
  "康纳_ZH",
  "博来_ZH",
  "玛塞勒_ZH",
  "阿祇_ZH",
  "博士_ZH",
  "迪尔菲_ZH",
  "玛格丽特_ZH",
  "宛烟_ZH",
  "羽生田千鹤_ZH",
  "海妮耶_ZH",
  "霍夫曼_ZH",
  "旅行者_ZH",
  "佐西摩斯_ZH",
  "鹿野奈奈_ZH",
  "舒伯特_ZH",
  "天叔_ZH",
  "艾莉丝_ZH",
  "龙二_ZH",
  "莺儿_ZH",
  "嘉良_ZH",
  "珊瑚_ZH",
  "费迪南德_ZH",
  "言笑_ZH",
  "一心传名刀_ZH",
  "久利须_ZH",
  "嘉玛_ZH",
  "艾文_ZH",
  "克洛琳德_ZH",
  "丹吉尔_ZH",
  "女士_ZH",
  "天目十五_ZH",
  "老孟_ZH",
  "白老先生_ZH",
  "舍利夫_ZH",
  "巴达维_ZH",
  "拉齐_ZH",
  "长生_ZH",
  "吴船长_ZH",
  "艾伯特_ZH",
  "松浦_ZH",
  "埃泽_ZH",
  "阿圆_ZH",
  "阿拉夫_ZH",
  "莫塞伊思_ZH",
  "石头_ZH",
  "百闻_ZH",
  "杜吉_ZH",
  "耶_ZH",
  "波洛_ZH",
  "斯坦利_ZH",
  "博易_ZH",
  "迈蒙_ZH",
  "掇星攫辰天君_ZH",
  "毗伽尔_ZH",
  "芙卡洛斯_ZH",
  "恶龙_ZH",
  "小仓澪_ZH",
  "恕筠_ZH",
  "知易_ZH",
  "克列门特_ZH",
  "大慈树王_ZH",
  "望雅_ZH",
  "黑田_ZH",
  "卡莉娜_ZH",
  "马姆杜_ZH",
  "科林斯_ZH",
  "上杉_ZH",
  "西拉杰_ZH",
  "菲尔戈黛特_ZH",
  "一平_ZH",
  "纯水精灵_ZH",
  "阿尔卡米_ZH",
  "老戴_ZH",
  "谢赫祖拜尔_ZH",
  "沙扎曼_ZH",
  "田铁嘴_ZH",
  "小野寺_ZH",
  "百识_ZH",
  "克罗索_ZH",
  "莱斯格_ZH",
  "芷巧_ZH",
  "加藤洋平_ZH",
  "阿巴图伊_ZH",
  "埃尔欣根_ZH",
  "斯嘉莉_ZH",
  "阿佩普_ZH",
  "巫女_ZH",
  "卡布斯_ZH",
  "洛伦佐_ZH",
  "萨赫哈蒂_ZH",
  "娜德瓦_ZH",
  "塞德娜_ZH",
  "塔杰·拉德卡尼_ZH",
  "绘星_ZH",
  "泽田_ZH",
  "安西_ZH",
  "拉伊德_ZH",
  "亚卡巴_ZH",
  "有乐斋_ZH",
  "莱昂_ZH",
  "尤苏波夫_ZH",
  "夏妮_ZH",
  "埃舍尔_ZH",
  "萨齐因_ZH",
  "古山_ZH",
  "自称渊上之物_ZH",
  "丹羽_ZH",
  "塞萨尔的日记_ZH",
  "派蒙_JP",
  "纳西妲_JP",
  "凯亚_JP",
  "阿贝多_JP",
  "温迪_JP",
  "枫原万叶_JP",
  "钟离_JP",
  "荒泷一斗_JP",
  "八重神子_JP",
  "艾尔海森_JP",
  "提纳里_JP",
  "迪希雅_JP",
  "卡维_JP",
  "宵宫_JP",
  "莱依拉_JP",
  "那维莱特_JP",
  "赛诺_JP",
  "莫娜_JP",
  "诺艾尔_JP",
  "托马_JP",
  "凝光_JP",
  "林尼_JP",
  "北斗_JP",
  "柯莱_JP",
  "神里绫华_JP",
  "可莉_JP",
  "芭芭拉_JP",
  "雷电将军_JP",
  "娜维娅_JP",
  "芙宁娜_JP",
  "珊瑚宫心海_JP",
  "鹿野院平藏_JP",
  "迪奥娜_JP",
  "琴_JP",
  "五郎_JP",
  "班尼特_JP",
  "达达利亚_JP",
  "安柏_JP",
  "莱欧斯利_JP",
  "夜兰_JP",
  "妮露_JP",
  "辛焱_JP",
  "珐露珊_JP",
  "丽莎_JP",
  "魈_JP",
  "香菱_JP",
  "迪卢克_JP",
  "砂糖_JP",
  "烟绯_JP",
  "早柚_JP",
  "云堇_JP",
  "刻晴_JP",
  "重云_JP",
  "优菈_JP",
  "胡桃_JP",
  "流浪者_JP",
  "久岐忍_JP",
  "神里绫人_JP",
  "甘雨_JP",
  "戴因斯雷布_JP",
  "菲谢尔_JP",
  "白术_JP",
  "行秋_JP",
  "九条裟罗_JP",
  "夏洛蒂_JP"
]
const inputWithoutCountryCode = userInput
console.log(inputWithoutCountryCode)
const matchedSpeaker = characters.find((speaker) => speaker.includes(inputWithoutCountryCode));
  if (matchedSpeaker) {
    return matchedSpeaker;
  } else {
    return undefined
  }
}




















