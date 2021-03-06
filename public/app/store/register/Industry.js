Ext.define('iotnsp.store.Industry', {
    extend: 'Ext.data.Store',

    fields: ['code', 'industry'],
    storeId: 'Industry',
    data: [{code: '01', industry: '01-农业产品'},
        {code: '02', industry: '02-林业产品'},
        {code: '03', industry: '03-饲养动物及其产品'},
        {code: '04', industry: '04-渔业产品'},
        {code: '05', industry: '05-农、林、牧、渔服务'},
        {code: '06', industry: '06-煤炭采选产品'},
        {code: '07', industry: '07-石油和天然气开采产品'},
        {code: '08', industry: '08-黑色金属矿'},
        {code: '09', industry: '09-有色金属矿'},
        {code: '10', industry: '10-非金属矿'},
        {code: '11', industry: '11-其他矿产品'},
        {code: '13', industry: '13-农副食品，动、植物油制品'},
        {code: '14', industry: '14-食品及加工盐'},
        {code: '15', industry: '15-饮料、酒及酒精'},
        {code: '16', industry: '16-烟草制品'},
        {code: '17', industry: '17-纺织产品'},
        {code: '18', industry: '18-服装、鞋、帽'},
        {code: '19', industry: '19-皮革、毛皮及其制品'},
        {code: '20', industry: '20-木材及木、竹、藤、棕、草制品'},
        {code: '21', industry: '21-家具及配件'},
        {code: '22', industry: '22-纸及纸制品'},
        {code: '23', industry: '23-印刷品、记录媒介复制品'},
        {code: '24', industry: '24-文教体育用品'},
        {code: '25', industry: '25-石油加工、炼焦及核燃料'},
        {code: '26', industry: '26-化学原料及化学制品'},
        {code: '27', industry: '27-医药'},
        {code: '28', industry: '28-化学纤维'},
        {code: '29', industry: '29-橡胶制品'},
        {code: '30', industry: '30-塑料制品、半成品及辅料'},
        {code: '31', industry: '31-非金属矿物制品'},
        {code: '32', industry: '32-黑色金属冶炼及压延产品'},
        {code: '33', industry: '33-有色金属冶炼及压延产品'},
        {code: '34', industry: '34-金属制品'},
        {code: '35', industry: '35-通用设备'},
        {code: '36', industry: '36-专用设备'},
        {code: '37', industry: '37-交通运输设备'},
        {code: '38', industry: '38-收费的生产服务及修理'},
        {code: '39', industry: '39-电气机械及器材'},
        {code: '40', industry: '40-通信设备、计算机及其他电子设备'},
        {code: '41', industry: '41-仪器仪表及文化、办公用机械'},
        {code: '42', industry: '42-工艺品及其他制造产品'},
        {code: '43', industry: '43-废弃资源和废旧材料回收加工品'},
        {code: '44', industry: '44-电力和热力'},
        {code: '45', industry: '45-燃气'},
        {code: '46', industry: '46-水'},
        {code: '47', industry: '47-房屋和土木工程服务与产品'},
        {code: '48', industry: '48-建筑安装服务'},
        {code: '49', industry: '49-建筑装饰服务'},
        {code: '50', industry: '50-其他建筑服务'},
        {code: '51', industry: '51-铁路运输服务'},
        {code: '52', industry: '52-道路运输服务'},
        {code: '53', industry: '53-城市公共交通服务'},
        {code: '54', industry: '54-水路运输服务'},
        {code: '55', industry: '55-航空运输服务'},
        {code: '56', industry: '56-管道运输服务'},
        {code: '57', industry: '57-装卸搬运和其他运输服务'},
        {code: '58', industry: '58-仓储服务'},
        {code: '59', industry: '59-邮政寄递服务'},
        {code: '60', industry: '60-电信和其他信息传输服务'},
        {code: '61', industry: '61-计算机信息服务'},
        {code: '62', industry: '62-软件服务'},
        {code: '63', industry: '63-批发服务'},
        {code: '65', industry: '65-零售服务'},
        {code: '66', industry: '66-住宿服务'},
        {code: '67', industry: '67-餐饮服务'},
        {code: '68', industry: '68-银行服务'},
        {code: '69', industry: '69-证券服务'},
        {code: '70', industry: '70-保险服务'},
        {code: '71', industry: '71-其他金融服务'},
        {code: '72', industry: '72-房地产服务'},
        {code: '73', industry: '73-租赁服务'},
        {code: '74', industry: '74-商务服务'},
        {code: '75', industry: '75-研究与试验发展服务'},
        {code: '76', industry: '76-专业技术服务'},
        {code: '77', industry: '77-科技交流和推广服务'},
        {code: '78', industry: '78-地质勘查服务'},
        {code: '79', industry: '79-水利管理服务'},
        {code: '80', industry: '80-环境管理服务'},
        {code: '81', industry: '81-公共设施管理服务'},
        {code: '82', industry: '82-居民服务'},
        {code: '83', industry: '83-维修、清洁和其他服务'},
        {code: '84', industry: '84-教育服务'},
        {code: '85', industry: '85-卫生服务'},
        {code: '86', industry: '86-社会保障服务'},
        {code: '87', industry: '87-社会福利服务'},
        {code: '88', industry: '88-新闻出版服务'},
        {code: '89', industry: '89-广播、电视、电影和音像服务'},
        {code: '90', industry: '90-文化艺术服务'},
        {code: '91', industry: '91-体育服务'},
        {code: '92', industry: '92-娱乐服务'},
        {code: '93', industry: '93-公共管理服务'},
        {code: '94', industry: '94-民主党派、工商联、群众团体服务'},
        {code: '95', industry: '95-社会团体、基金会及宗教组织服务'},
        {code: '96', industry: '96-基层群众自治组织服务'},
        {code: '97', industry: '97-国际组织及使领馆服务'}]


})