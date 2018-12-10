import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route,Redirect} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'
import Msg from '../msg/msg'
import {getMsgList, recvMsg} from '../../redux/chat.redux'

@connect(
	state=>state,
	{ getMsgList, recvMsg}
)
class Dashboard extends React.Component{
	componentDidMount() {
		if (!this.props.chat.chatmsg.length) {
			this.props.getMsgList()
			this.props.recvMsg()
		}
	}
	render(){
		const {pathname} = this.props.location
		const user = this.props.user
		const navList = [
			{
				path:'/boss',
				text:'大佬',
				icon:'boss',
				title:'大佬列表',
				component:Boss,
				hide:user.type==='genius'
			},
			{
				path:'/genius',
				text:'项目',
				icon:'job',
				title:'项目列表',
				component:Genius,
				hide:user.type==='boss'
			},
			{
				path:'/msg',
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg
			},
			{
				path:'/me',
				text:'我',
				icon:'user',
				title:'个人中心',
				component:User
			}
		]

		const page = navList.find(v => v.path === pathname)
		return page?(
			<div>
				<NavBar className='fixd-header' mode='dard'>{page.title}</NavBar>
				<div style={{marginTop:45}}>
						<Switch>
							{navList.map(v=>(
								<Route key={v.path} path={v.path} component={v.component}></Route>
							))}
						</Switch>
				</div>

				<NavLinkBar data={navList}></NavLinkBar>
				
			</div>
		):<Redirect to='/login'></Redirect>
	}

}

export default Dashboard