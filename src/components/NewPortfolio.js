import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';

export default class Porfolio extends Component {
	render() {
		let webData = this.props.webData;

		const listData = [];
		for (let i = 0; i < webData.portfolio.length; i++) {
			listData.push({
				href: `${webData.portfolio[i].url}`,
				title: `${webData.portfolio[i].name}`,
				description: `${webData.portfolio[i].description}`,
				content: `${webData.portfolio[i].content}`,
				imgurl: `${webData.portfolio[i].imgurl}`,
				// avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			});
		}

		// const IconText = ({ type, text }) => (
		//   <span>
		//     <Icon type={type} style={{ marginRight: 8 }} />
		//     {text}
		//   </span>
		// );

		return (
			<section id="portfolio" style={{ background: '#fafbff'}}>
				<div className="row">
					<div className="twelve columns" >
						<h1><span>How to Join</span></h1>
							<List
								itemLayout="vertical"
								size="default"
								
								dataSource={listData}
								// footer={<div><b>ant design</b> footer part</div>}
								renderItem={item => (
									<List.Item
										key={item.title}
										// actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
										extra={<a href={item.href}><img id='newportfolio_' width={90} alt="logo" src={item.imgurl} /></a>}
										style={{ textAlign: "justify" }}
									>
									<List.Item.Meta
										// avatar={<Avatar src={item.avatar} />}
										title={<h4><a href={item.href}>{item.title}</a></h4>}
										description={<p>{item.description}</p>}
									/>
									</List.Item>
								)}
							/>
					</div>
				</div>
			</section>
		);
	}
}
