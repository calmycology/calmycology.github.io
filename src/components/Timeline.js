import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';


export default class timeline extends Component {
	render() {
		return (
			<section id="timeline" style= {{ background: "#fafbff" }}>
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Event Calendar</h1>
						<div class="responsiveCal">
							<div class="deskContent"><iframe src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
							<div class="phoneContent"><iframe src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles" width="280" height="500" frameborder="0" scrolling="no"></iframe></div>
						</div>
					</div>
				</div>
				<br></br>
			</section>
		);
	}
}