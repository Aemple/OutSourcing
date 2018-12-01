import React from 'react'
import { Link } from 'react-router-dom'
import { List, InputItem, WingBlank, WhiteSpace, Button,Toast} from 'antd-mobile'
import {login} from '../../redux/user.redux'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from '../../component/logo/logo'
import './login.css'

@connect(
	state=>state.user,
	{login}
)
class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false,
            user: '',
            pwd: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
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
    handleLogin(){
		this.props.login(this.state)
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
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={v=>this.handleChange('user',v)}
                        value={this.state.user}
                    >手机 :</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem 
                          placeholder="input your password"
                          type="password"
                          onChange={v=>this.handleChange('pwd',v)}
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