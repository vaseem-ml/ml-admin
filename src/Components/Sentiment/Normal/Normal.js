import React, { Component } from 'react';
import Layout from '../../Layout/Layout';
import ReactSpeedometer from "react-d3-speedometer";


class Normal extends Component {
    constructor(props) {
    super(props);
    this.state = {
      input: "",
      sentiment: { value: 0.9898 },
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkSentiment = this.checkSentiment.bind(this);
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  checkSentiment = async (e) => {
    e.prevendDefault();
  };

    render() {
        return(
            <>
                <Layout>
                    <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Sentiment Analysis</h4>
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
                          <textarea
                            className="form-control pl-3"
                            rows={8}
                            value={this.state.input}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary pull-right" 
                    onClick={this.checkSentiment}
                  >
                    SUBMIT
                  </button>
                  <div className="clearfix" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card card-profile">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Sentiment Analysis Meter</h4>
              </div>
              <div className="card-body">
                <ReactSpeedometer
                  minValue={0}
                  maxValue={1}
                  value={this.state.sentiment.value}
                  height={200}
                  //needleTransition={"easeQuadInOut"}
                  needleTransitionDuration={3333}
                  needleTransition="easeElastic"
                />
              </div>
            </div>
          </div>
        </div>
                </Layout>
            </>
        )
    }
}

export default Normal;