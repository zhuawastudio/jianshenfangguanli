const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"课程类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKecheng"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"器材类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryQicai"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"健身房管理",
                        "menuJump":"列表",
                        "tableName":"jianshenfang"
                    }
                ],
                "menu":"健身房管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"教练管理",
                        "menuJump":"列表",
                        "tableName":"jiaolian"
                    }
                ],
                "menu":"教练管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"课程管理",
                        "menuJump":"列表",
                        "tableName":"kecheng"
                    }
                ],
                "menu":"课程管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"器材管理",
                        "menuJump":"列表",
                        "tableName":"qicai"
                    }
                ],
                "menu":"器材管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"健身房管理",
                        "menuJump":"列表",
                        "tableName":"jianshenfang"
                    }
                ],
                "menu":"健身房管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"教练管理",
                        "menuJump":"列表",
                        "tableName":"jiaolian"
                    }
                ],
                "menu":"教练管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"课程管理",
                        "menuJump":"列表",
                        "tableName":"kecheng"
                    }
                ],
                "menu":"课程管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"器材管理",
                        "menuJump":"列表",
                        "tableName":"qicai"
                    }
                ],
                "menu":"器材管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;