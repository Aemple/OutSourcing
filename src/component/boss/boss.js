import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'
import { Carousel, WingBlank,NoticeBar} from 'antd-mobile';
import './boss.css'
@connect(
	state=>state.chatuser,
	{getUserList}
)
class Genius extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
			imgHeight: 176,
		}
	}
	componentDidMount() {
		this.props.getUserList('genius')
		setTimeout(() => {
			this.setState({
				data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
			});
		}, 100);

	}
	render(){
		return(
			<WingBlank>
				<Carousel className="space-carousel"
					frameOverflow="visible"
					cellSpacing={10}
					slideWidth={0.8}
					autoplay
					infinite
					afterChange={index => this.setState({ slideIndex: index })}
					>
					{this.state.data.map((val, index) => (
						<a
						key={val}
						href="http://www.alipay.com"
						style={{
							display: 'block',
							position: 'relative',
							top: this.state.slideIndex === index ? -10 : 0,
							height: this.state.imgHeight,
							boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
						}}
						>
						<img
							src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
							alt=""
							style={{ width: '100%', verticalAlign: 'top' }}
							onLoad={() => {
							// fire window resize event to change height
							window.dispatchEvent(new Event('resize'));
							this.setState({ imgHeight: 'auto' });
							}}
						/>
						</a>
					))}
				</Carousel>
				<NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
				  Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
				</NoticeBar>
				 <UserCard userlist={this.props.userlist}></UserCard>
			</WingBlank>
		)
	}

}
export default Genius