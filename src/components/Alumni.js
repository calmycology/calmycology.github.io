import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class Alumni extends Component {
  render() {
    return (
      <section id="alumni" style={{ background:'white' }}>
        <div className="row" >
          <div className="twelve columns" >
          <h1><span>Some of our finds!</span></h1>
          <Carousel autoplay>
            <div>
              <Row type="flex">  
                  <Card
                    hoverable={false}
                    style={{ height: '774px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/arcyria.jpg" />}
                  >
                  <Meta style={{ fontFamily:"aleobold", fontSize: '15px'}}
                    title="Arcyria cinerea"
                  />
                  </Card>
              </Row>
            </div>
            <div>
              <Row type="flex">  
                  <Card
                    hoverable={false}
                    style={{ height: '774px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/lamproderma.jpg" />}
                  >
                  <Meta style={{ fontFamily:"aleobold", fontSize: '15px'}}
                    title="Lamproderma arcyrioides complex"
                  />
                  </Card>
              </Row>
            </div>
            <div>
	      <Row type="flex">
	          <Card
                    hoverable={false}
                    style={{ height: '774px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/guepiniopsis.jpg" />}
                  >
                  <Meta style={{ fontFamily:"aleobold", fontSize: '15px'}}
                    title="Guepiniopsis alpina"
                  />
                  </Card>
              </Row>
	    </div>
            <div>
	      <Row type="flex">
	          <Card
                    hoverable={false}
                    style={{ height: '774px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/collybiopsis.jpg" />}
                  >
                  <Meta style={{ fontFamily:"aleobold", fontSize: '15px'}}
                    title="Collybiopsis quercophila"
                  />
                  </Card>
              </Row>
	    </div>
            <div>
	      <Row type="flex">
	          <Card
                    hoverable={false}
                    style={{ height: '774px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/auriscalpium.jpg" />}
                  >
                  <Meta style={{ fontFamily:"aleobold", fontSize: '15px'}}
                    title="Auriscalpium vulgare"
                  />
                  </Card>
              </Row>
	    </div>
            <div>
	      <Row type="flex">
	          <Card
                    hoverable={false}
                    style={{ height: '774px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/comatricha.jpg" />}
                  >
                  <Meta style={{ fontFamily:"aleobold", fontSize: '15px'}}
                    title="Comatricha nigra"
                  />
                  </Card>
              </Row>
	    </div>
          </Carousel>
          </div>
        </div>
      </section>
    );
  }
}
