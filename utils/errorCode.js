const ErrorCode = {

    // 系统相关
    ERRORCODE_SERVER_INSIDE_ERROR: 1001, // 服务器错误
    ERRORCODE_DATABASE: 1002, // 数据库操作异常
    ERRORCODE_MISSING_PARAMS: 1003, // 缺少参数
    ERRORCODE_INVALID_PARAMS: 1004, // 参数验证失败
    ERRORCODE_DATA_STORAGE: 1005, // 数据保存失败
    ERRORCODE_SEND_SMS_FAIED: 1006, // 发送短信失败
    ERRORCODE_VERIFY_SMS_FAIED: 1007, // 验证短信失败
    ERRORCODE_SEND_EMAILCODE_FAIED: 1008, // 发送邮箱验证码失败
    ERRORCODE_VERIFY_EMAILCODE_FAIED: 1009, // 验证邮箱验证码失败

    // 应用相关
    ERRORCODE_APP_NOT_EXIST: 2001, // 应用不存在
    ERRORCODE_APP_ALREADY_EXIST: 2002, // 应用已存在
    ERRORCODE_APP_CREATE_FAIED: 2003, // 应用创建失败
    ERRORCODE_APP_OVER_LIMIT: 2004, // 应用超过上限
    ERRORCODE_APP_NO_CALLBACK: 2005, // 应用没有回调函数
    ERRORCODE_APP_GET_APPINFO_FAIED: 2006, // 应用列表获取失败
    ERRORCODE_APP_UPDATE_APPINFO_FAIED: 2007, // 应用信息更新失败
    ERRORCODE_APP_NOT_ME:2008,//应用不是本人

    // 用户相关
    ERRORCODE_USER_NOT_EXIST: 3001, // 用户不存在
    ERRORCODE_USER_ALREADY_EXIST: 3002, // 用户已存在
    ERRORCODE_USER_REGISTER_FAIED: 3003, // 用户注册失败
    ERRORCODE_USER_GET_SALT_FAIED: 3004, // 用户取盐失败
    ERRORCODE_USER_LOGIN_FAIED: 3005, // 用户登录失败
    ERRORCODE_USER_LOGOUT_FAIED: 3006, // 用户退出失败
    ERRORCODE_USER_NOT_ENOUGH_BALANCE: 3007, // 用户余额不足
    ERRORCODE_USER_INVALID_USERNAME_OR_PASSWORD: 3008, // 用户名/邮箱/手机号码或密码不正确
    ERRORCODE_USER_INVALID_TOKEN: 3009, // 用户Token错误
    ERRORCODE_USER_PERMISSION_DENIED: 3010, // 用户权限不足
    ERRORCODE_USER_INVALID_SIGNATURE: 3011, // 用户签名错误
    ERRORCODE_USER_GET_USERINFO_FAIED: 3012, // 用户信息获取失败
    ERRORCODE_USER_DEPOSIT_FAILED: 3013, // 用户充值不足
    ERRORCODE_USER_WITHDRAW_FAILED: 3014, // 用户提现不足
    ERRORCODE_USER_UPDATE_USERINFO_FAIED: 3015, // 用户信息更新失败
    ERRORCODE_USER_RECHARGE_MEMBERSHIP_FAILED: 3016, // 用户购买会员失败
    ERRORCODE_USER_BALANCE_NOT_ENOUGH: 3017, // 用户余额不足
    ERRORCODE_USER_PASSWORD_ERR: 3018, // 密码正确

    ERRORCODE_SIGN_ERROR:4001,//签名错误
    ERRORCODE_APPID_NOT_EXIST:4002,//appid 不存在
    NOT_FIND_PHONE:4003,//设备不存在

    ERRORCODE_PERMISSIONS_DENIED: 5001, //权限不足
    ERRORCODE_OVER_LOAD_LIMIT: 5002, //会员等级异常


}

module.exports = ErrorCode
