import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button,Toast,Radio} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import './register.css'
import {connect} from 'react-redux'
import {regisger} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import From from '../../component/form/form.js'

@connect(
	state=>state.user,
	{regisger}
)
@From
class Register extends React.Component {
    constructor (props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this)
    }
    onErrorClick = () => {
        if (this.props.state.hasError) {
        Toast.info('Please enter 11 digits');
        }
    }
    componentDidMount() {
        this.props.handleChange('type','genius')
    }
    handleRegister() {
        this.props.regisger(this.props.state)
    }
    render () {
        const RadioItem = Radio.RadioItem
        return (
             <div>
                 {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                <h2>注册页</h2>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem
                        type="phone"
                        placeholder="Please input your phone"
                        error={this.props.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={v=>this.props.handleChange('user',v)}
                        user={this.props.state.value}
                    >手机 :</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem 
                           placeholder="input your password" 
                           type="password" 
                           onChange={v=>this.props.handleChange('pwd',v)}
                        >密码 :</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem 
                           placeholder="input your password again" 
                           type="password"
                           onChange={v=>this.props.handleChange('repeatpwd',v)}
                           >确认密码 :</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem
                        className = 'RadioItem'
                        checked={this.props.state.type ==='genius'}
                        onChange={()=>this.props.handleChange('type','genius')}
					>
						接项目
					</RadioItem>
					<RadioItem
                        className = 'RadioItem'
                        checked={this.props.state.type==='boss'}
						onChange={()=>this.props.handleChange('type','boss')}
					>
						派项目
					</RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <Button  icon="check-circle-o" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
} 

export default Register