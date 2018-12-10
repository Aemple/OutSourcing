import React from 'react'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, Modal, Button} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
	state=>state.user,
	{logoutSubmit}
)
class User extends React.Component{
	constructor(props){
		super(props);
		this.logout = this.logout.bind(this)
	}
	logout(){
		const alert = Modal.alert
		alert('注销', '确认退出登录吗???', [
		      { text: '取消', onPress: () => console.log('cancel') },
		      { text: '确认', onPress: () => {
		      	browserCookie.erase('userid')
		      	this.props.logoutSubmit()
		      }}
            ]
        )
	}
	render(){
		const props = this.props
		const Item = List.Item
		return props.user?(
			<div>
				<Result
					img={<img src={require(`../img/${props.avatar}.png`)} style={{width:50}} alt="" />}
					title={props.user}
					message={props.type==='boss'?props.company:null}
				/>
				<List renderHeader={() => '专项功能'}>
					<Item
						thumb={require(`./img/gerenxinxi.png`)}
						arrow="horizontal"
					>个人信息</Item>
					<WhiteSpace></WhiteSpace>
					<Item
						thumb={require(`./img/icondd.png`)}
						arrow="horizontal"
						extra={'16条'}
						>
					我的订单
					</Item>
					<WhiteSpace></WhiteSpace>
					<Item
						thumb={require(`./img/fuli.png`)}
						arrow="horizontal"
						extra={'8条'}
					>福利专区</Item>
					<WhiteSpace></WhiteSpace>
					<Item
						thumb={require(`./img/shoucang.png`)}
						arrow="horizontal"
						extra={'112条'}
						>
						我的收藏
					</Item>
				</List>
				<List renderHeader={() => '意见(suggestion)'}>
				    <Item
						thumb={require(`./img/yijian.png`)}
						>
						My Cost Ratio
					</Item>
				</List>
				<WhiteSpace></WhiteSpace>
				<Button onClick={this.logout}>退出登录</Button>
			</div>
		):<Redirect to={props.redirectTo} />

	}
}


export default User