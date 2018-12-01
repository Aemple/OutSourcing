import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'
import './avatar-selector.css'

class AvatarSelector extends React.Component {
    static propTypes = {
		selectAvatar: PropTypes.func.isRequired
	}

    constructor(props) {
		super(props)
		this.state={}
	}
    render() {
        const avatarList = 'boy,crab,girl,koala,pig,whale,woman,zebra'
            .split(',')
            .map(v => ({
                icon: require(`../img/${v}.png`),
                text: v
            }))
        const gridHeader = this.state.icon
					? (<div>
						<span style={{marginRight:120}}>已选择头像</span>
						<img style={{width:25}} src={this.state.icon} alt=""/>
					</div>): '请选择头像'
        return(
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={4} 
                        onClick={elm=>{
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                        />
                </List>
            </div>
        )
    }
}

export default AvatarSelector