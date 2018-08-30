exports.UNKNOW_ERROR = {
    code: -1,
    message: "未知异常"
}

exports.SUCCESS = {code: 0, message: "成功", status: 200}
exports.PASSWORD_ERROR = {code: 1, message: "密码错误", status: 400};//登录失败--密码错误:
exports.USERNAME_ERROR = {code: 2, message: "用户名不存在", status: 400};//登录失败--用户名不存在
exports.REGIONCODE_ERROR = {code: 3, message: "企业注册区域码有误", status: 403};//区域编码 region_code 不符合要求时:
exports.REGISTER_ERROR = {code: 4, message: "注册信息有误,参数不完整或者 email 格式错误或者 email 被占用或者手机号被占用", status: 403};//参数不完整或者 email 格式错误或者 email 被占用或者手机号被占用:
exports.CODEI_ERROR = {code: 5, message: "企业注册行业分类错误", status: 403};//企业注册的行业代码 code_i 不符合要求时:
exports.REGISTER_INTERFACE_ERROR = {code: 6, message: "注册接口不可用", status: 403};//注册服务接口不可用:
exports.CATEGORY_ERROR = {code: 7, message: "无产品分类信息", status: 403};//企业获取已有的产品分类信息 无数据时返回
exports.CATEGORY_STORE_ERROR = {code: 8, message: "产品分类添加失败", status: 403};//无数据时返回
exports.BRANDS_STORE_CATEGORY_NONE_ERROR = {code: 9, message: "您所添加的产品分类不存在", status: 403};//提交的产品分类 id 值不存在或者不属于当前登录用户时返回
exports.BRANDS_STORE_INFO_LACK_ERROR = {code: 10, message: "提交信息不完整", status: 403};//参数不完整或格式不正确时
exports.BRANDS_STORE_ATTR_NONE_ERROR = {code: 11, message: "产品属性格式错误", status: 403};//产品属性数据格式不正确时 接口程序会对 jsonAttr 的内容进行 json_decode，并使用 array_key_exist() 方法判断是否包含 "name"和"value"两个 key，如果不包含将返回
exports.USER_QR_CODE_LIST_NONE_ERROR = {code: 12, message: "无标识申请记录", status: 403};//用户标识列表 无数据时返回
exports.USER_QR_CODE_LIST_LACK_ERROR = {code: 13, message: "提交信息不完整!", status: 403};//用户标识申请 参数不完整时返回
exports.USER_QR_CODE_LIST_OVERBERDEN_ERROR = {code: 14, message: "抱歉!您申请的数量超过 5 万的限额", status: 403};//count 的值大于50000
exports.USER_QR_CODE_LIST_BRANDID_ERROR = {code: 15, message: "产品品牌错误!", status: 403};//userbrandId 的值不属于当前登录用户
exports.USER_QR_CODE_LIST_OVERMAX_ERROR = {code: 16, message: "抱歉!您申请的数量已经超过了最大限额!", status: 403};//count 的值超过了该品牌标识可申请的剩余数量
exports.REMOVE_SERVER_ERROR = {code: 100, message: "远程服务器异常", status: 500};//服务器返回值json解析错误
exports.REMOVE_SERVER_RESULT_ERROR = {code: 101, message: "远程服务器结果异常", status: 500};//服务器返回值json解析错误
exports.REMOVE_SERVER_UNKNOW_ERROR = {code: 102, message: "远程服务器未知异常", status: 500};


exports.NOT_LOGIN = {code: 10000, message: "未登录", status: 400};

exports.UPLOAD_ERROR = {code: 10005, message: "上传图片失败", status: 500};
exports.TEMPLATE_EXIST_ERR = {code: 10006, message: "模版不存在", status: 404}
exports.PRODUCT_FILTER_ERR = {code: 10007, message: "查询参数有误", status: 404}
