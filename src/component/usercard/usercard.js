import React from 'react'
import PropTypes from 'prop-types'
import {Card, WhiteSpace,WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends React.Component{
	static propTypes = {
		userlist: PropTypes.array.isRequired
	}
	handleClick(v){
		this.props.history.push(`/chat/${v._id}`)
	}
	render(){
		const Header = Card.Header
		const Body = Card.Body
		return (
			<WingBlank>
			<WhiteSpace></WhiteSpace>
				{this.props.userlist.map(v=>(
					v.avatar?(<Card 
						onClick={()=>this.handleClick(v)}
						key={v._id}
					>
						<Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.png`)}
							extra={<span>{v.title}</span>}
						></Header>
						<Body>
							{v.type==='boss'? <div>公司:{v.company}</div> :null}
							<img className="uimg" alt="" src={require(`./img/js5.png`)}></img>
							{ /* {v.descv.desc.split('\n').map(d=>(
								<div key={d}>{d}</div>
							))} */}
							<p className="desc">{v.desc}</p>
							{v.type==='boss'? <div>薪资:{v.money}</div> :null}
						</Body>
						<Card.Footer content="八折优惠，质量可靠" extra={<div>extra footer content</div>} />
					</Card>):null

				))}
			</WingBlank>
		)


	}
}
export default UserCard