import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button,Toast,Radio} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import './register.css'

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false,
            value: '',
            type:'genius' // 或者boss
        }
    }
    onErrorClick = () => {
        if (this.state.hasError) {
        Toast.info('Please enter 11 digits');
        }
    }
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
        this.setState({
            hasError: true,
        });
        } else {
        this.setState({
            hasError: false,
        });
        }
        this.setState({
        value,
        });
    }
    render () {
        const RadioItem = Radio.RadioItem
        return (
             <div>
                <Logo></Logo>
                <h2>注册页</h2>
                <WingBlank>
                    <List>
                        <InputItem
                        type="phone"
                        placeholder="Please input your phone"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >手机 :</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem placeholder="input your password"type="password">密码 :</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem placeholder="input your password again"type="password">确认密码 :</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem
                        className = 'RadioItem'
						checked={this.state.type ==='genius'}
					>
						接项目
					</RadioItem>
					<RadioItem
                        className = 'RadioItem'
						checked={this.state.type ==='boss'}
					>
						派项目
					</RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <Button  icon="check-circle-o">注册</Button>
                </WingBlank>
            </div>
        )
    }
} 

export default Register