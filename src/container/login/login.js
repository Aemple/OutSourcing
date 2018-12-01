import React from 'react'
import { Link } from 'react-router-dom'
import { List, InputItem, WingBlank, WhiteSpace, Button,Toast} from 'antd-mobile'
import {login} from '../../redux/user.redux'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import From from '../../component/form/form.js'
import Logo from '../../component/logo/logo'
import './login.css'

@connect(
	state=>state.user,
	{login}
)
@From
class Login extends React.Component {
    constructor (props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this)
    }
    onErrorClick = () => {
        if (this.props.state.hasError) {
        Toast.info('Please enter 11 digits');
        }
    }
    handleLogin(){
		this.props.login(this.props.state)
	}
    render () {
        return (
             <div>
                 {(this.props.redirectTo&&this.props.redirectTo!=='/login')?  <Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem
                        type="phone"
                        placeholder="Please input your phone"
                        error={this.props.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={v=>this.props.handleChange('user',v)}
                        value={this.props.state.user}
                    >手机 :</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem 
                          placeholder="input your password"
                          type="password"
                          onChange={v=>this.props.handleChange('pwd',v)}
                          >密码 :</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button icon="check-circle-o" onClick={this.handleLogin}>登录</Button>
                    <Link  className="register-l" to="/register" >还没有账号吗？快来注册哦 》</Link>
                </WingBlank>
            </div>
        )
    }
} 

export default Login