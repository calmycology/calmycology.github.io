import React, { Component } from 'react';

export default  class Mission extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="mission">
         <div className="row">
            <div className="twelve columns">
              { 
                webData.mission && webData.mission.map((item)=>{
                  return(
                    <div key={item.specialization} className="row item">
                       <div align='center' className="twelve columns">
                       <h1><span>Mycology Club at Berkeley</span></h1>
                          <br></br>
                          <p className="info">
                            {item.specialization}
                          </p>
                          <p className="infocenter">
                            <a href="https://discord.gg/dm3TMtPf2y">{"Join our discord here!"}</a>
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      </section>
    );
  }
}