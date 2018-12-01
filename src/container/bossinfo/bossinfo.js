import React from 'react'
import {NavBar,InputItem,TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import './bossinfo.css'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'

@connect(
	state=>state.user,
	{update}
)

class BossInfo extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
			title:'',
			desc:'',
			company:'',
			money:''
		}
	}
	onChange(key,val){
		this.setState({
			[key]:val
		})
	}

    render() {
        const path = this.props.location.pathname
		const redirect = this.props.redirectTo
        return(
            <div>
                {redirect&&redirect!==path? <Redirect to={this.props.redirectTo}></Redirect> :null}
                <NavBar>完善项目信息</NavBar>
                <AvatarSelector
                   selectAvatar={(imgname)=>{
						this.setState({
							avatar:imgname
						})
					}}
                ></AvatarSelector>
                <InputItem onChange={(v)=>this.onChange('title',v)}>
					技术栈
				</InputItem>
				<InputItem onChange={(v)=>this.onChange('company',v)}>
					公司名称
				</InputItem>
				<InputItem onChange={(v)=>this.onChange('money',v)}>
					项目薪资
				</InputItem>
				<TextareaItem
					onChange={(v)=>this.onChange('desc',v)}
					rows={4}
					autoHeight
					title='项目需求'
				>
				</TextareaItem>
                <Button onClick={()=>{
						this.props.update(this.state)
					}}>保存</Button>
            </div>
            
        )
    }
}

export default BossInfo