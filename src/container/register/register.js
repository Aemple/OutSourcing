import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button,Toast,Radio} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import './register.css'
import {connect} from 'react-redux'
import {regisger} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
	state=>state.user,
	{regisger}
)

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false,
            user: '',
            pwd: '',
            repeatpwd: '',
            type:'genius' // 或者boss
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    onErrorClick = () => {
        if (this.state.hasError) {
        Toast.info('Please enter 11 digits');
        }
    }
    handleChange(key,val) {
        if (key==='user') {
            if (val.replace(/\s/g, '').length < 11) {
                this.setState({
                    hasError: true,
                });
            } else {
                this.setState({
                    hasError: false,
                });
            }
        } 
        this.setState({
            [key]:val
        })
    }
    handleRegister() {
        this.props.regisger(this.state)
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
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={v=>this.handleChange('user',v)}
                        user={this.state.value}
                    >手机 :</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem 
                           placeholder="input your password" 
                           type="password" 
                           onChange={v=>this.handleChange('pwd',v)}
                        >密码 :</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem 
                           placeholder="input your password again" 
                           type="password"
                           onChange={v=>this.handleChange('repeatpwd',v)}
                           >确认密码 :</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem
                        className = 'RadioItem'
                        checked={this.state.type ==='genius'}
                        onChange={()=>this.handleChange('type','genius')}
					>
						接项目
					</RadioItem>
					<RadioItem
                        className = 'RadioItem'
                        checked={this.state.type==='boss'}
						onChange={()=>this.handleChange('type','boss')}
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