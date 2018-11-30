const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/money'
mongoose.connect(DB_URL)

const models = {
	user:{
		'user':{type:String, 'require':true},
		'pwd':{type:String, 'require':true},
		'type':{'type':String, 'require':true},
		//头像
		'avatar':{'type':String},
		// 个人简介或者项目简介
		'desc':{'type':String},
		// 项目名
		'title':{'type':String},
		// 如果你是boss 还有两个字段
		'company':{'type':String},
		'money':{'type':String}
	},
	chat:{
	}
}

//批量生成
for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

//读取
module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
}