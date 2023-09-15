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
                    title="Casual meetings"
                    description="We have casual meetings every first week of the month, which are intended to foster individual scientific development and community building around mycology. They consist of outings around campus, microscopy, member presentations - for members that wish to present anything they have learned in the realm of mycology, arts, and journal clubs."
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
                    title="Official meetings"
                    description="We have official meetings every third week of the month, which consist of a presentation of invited speakers from the wider mycological community and a workshop of an invited workshop leader from the wider mycological community."
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
                    title="Official outings and field trips"
                    description="We heavily use the I-naturalist community, and we have a Mendocino field trip at the end of the year!"
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