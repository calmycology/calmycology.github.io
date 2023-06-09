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
                    title="The Amazing Staff"
                    description="Really cool and awesome people at the staff :). We have experienced people working in the Krasilava lab and the mushroom lab who have done research."
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
                    title="Community"
                    description="The people we attract are super cool and lovely! Come hang out with our community."
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
                    title="Fun Meetups"
                    description="We have meetings where you can check the microscopy of different fungi, give primers and fun workshops on fungi, as well as host talks and conferences on cool new fungi-related research!"
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