import React from 'react'


export default function Form(Comp){
	return class WrapperComp extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				hasError: false,
			}
			this.handleChange = this.handleChange.bind(this)
		}
		handleChange(key,val){
            if (key === 'user') {
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
		render(){
			return <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
		}
	}
}