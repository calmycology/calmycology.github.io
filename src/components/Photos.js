import React, { Component } from "react";
import { Avatar, Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: '#d5f0db' }}>
          <div className="row" >
            <div className="twelve columns" >
              <img class="center" src="images/placeholder.png"></img>
              <h1>What is Mycology Club at Berkeley?</h1>
              <Row>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '90%', marginTop: '15px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img class="card-border" alt="example" src="images/funpic1.jpg" />}
                  >
                  <Meta style={{ fontFamily: 'aleobold', fontSize: '15px'}}
                    title="Official Meetings"
                    description="We have official meetings twice per month, which consist of a presentation or hands-on workshop given by a club member or guest from the wider mycological community."
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '90%', marginTop: '15px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img class="card-border" alt="example" src="images/funpic2.jpg" />}
                  >
                  <Meta style={{ fontFamily: 'aleobold', fontSize: '15px'}}
                    title="Casual Meetings"
                    description="We host casual meetings during the main mushroom season which are intended to foster individual scientific development and community building around mycology. They consist of outings around campus, microscopy, and mini-presentations for members that wish to share anything they have learned in the realm of mycology, arts, and journal clubs."
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '90%', marginTop: '15px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img class="card-border" alt="example" src="images/funpic3.png" />}
                  >
                  <Meta style={{ fontFamily: 'aleobold', fontSize: '15px'}}
                    title="Outings and Field Trips"
                    description="We lead many trips in the East Bay and beyond to explore Californian mycodiversity, including an overnight foray in Mendocino at the end of the year! We also make use of the iNaturalist community as a space for members to catalogue & learn more about their finds."
                  />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      )
  }
}
