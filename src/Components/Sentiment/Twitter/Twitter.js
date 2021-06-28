import React, { Component } from 'react';
import Layout from '../../Layout/Layout';
import Chart from "react-apexcharts";


class Twitter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [40, 45, 41],
            currentTerm: "",
            termDesc:""
        }
    }

 plotOptions = {
  colors: ["#F7464A", "#46BFBD", "#FDB45C"],
  labels: ["Negative", "Positive", "Neutral"],
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
        },
      },
    },
  },
};

    render() {
        return(
            <>
            <Layout>
                 <div className="row">
                    <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Twitter Sentiment Analysis</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            {" "}
                            Please Type If You want to know sentiment
                          </label>
                          <input
                            className="form-control pl-3"
                            rows={8}
                            // value={this.state.input}
                            // onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary pull-right"
                    // onClick={this.checkSentiment}
                  >
                    SUBMIT
                  </button>
                  <div className="clearfix" />
                </form>
              </div>
            </div>
          </div>
          </div>
          <div class="row">
                 <div className="col-md-6">
            <div className="card card-profile">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Sentiment Analysis Meter</h4>
              </div>
              <div className="card-body">
               <div class="col-sm-4">
            <Chart
              options={this.plotOptions} 
              series={this.state.series}
              type="donut"
              width="420"
            />
          </div>
          <div class="offset-sm-1 col-sm-7">
            <h1 class="desc_heading">What is {this.currentTerm}?</h1>
            <h1 class="desc_content">{this.termDesc}</h1>
            <br />
            <br />
          </div> 
              </div>
            </div>
          </div>



              <div className="col-md-6">
            <div className="card card-profile">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Sentiment Analysis Meter</h4>
              </div>
              <div className="card-body">
               <div class="col-sm-4">
            <Chart
              options={this.plotOptions}
              series={this.state.series}
              type="donut"
              width="420"
            />
          </div>
          <div class="offset-sm-1 col-sm-7">
            <h1 class="desc_heading">What is {this.currentTerm}?</h1>
            <h1 class="desc_content">{this.termDesc}</h1>
            <br />
            <br />
          </div> 
              </div>
            </div>
          </div>
          </div>
                </Layout>
            </>
        )
    }
}


export default Twitter;