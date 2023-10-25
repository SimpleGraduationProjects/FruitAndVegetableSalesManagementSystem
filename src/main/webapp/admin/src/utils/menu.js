const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"产品分类","menuJump":"列表","tableName":"chanpinfenlei"}],"menu":"产品分类管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除","查看评论"],"menu":"果蔬","menuJump":"列表","tableName":"nongchanpin"}],"menu":"果蔬管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["查看","修改","删除"],"menu":"会员群聊","tableName":"forum"}],"menu":"会员群聊"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言板","tableName":"messages"}],"menu":"留言板"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"},{"appFrontIcon":"cuIcon-service","buttons":["查看","修改","删除"],"menu":"在线客服","tableName":"chat"},{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","删除","日销量","月销量","年销量","品销量","类销量","日销额","月销额","年销额","品销额","类销额","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-pay","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-send","buttons":["查看","删除","日销量","月销量","年销量","品销量","类销量","日销额","月销额","年销额","品销额","类销额"],"menu":"已完成订单","tableName":"orders/已完成"},{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除","日销量","月销量","年销量","品销量","类销量","日销额","月销额","年销额","品销额","类销额"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-brand","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","查看评论"],"menu":"果蔬列表","menuJump":"列表","tableName":"nongchanpin"}],"menu":"果蔬模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","查看评论"],"menu":"果蔬列表","menuJump":"列表","tableName":"nongchanpin"}],"menu":"果蔬模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
