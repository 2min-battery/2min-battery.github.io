import React from 'react';
import Button from "material-ui/Button";
import Card from "material-ui/Card";
import Grid from "material-ui/Grid";

import './app.scss';

const logoImage = require('../images/logo.png');

// "Shibiya" Photo by Jason Ortego on Unsplash

class AppComponent extends React.Component {

  render() {
    return (
      <div className="container">
        <div id="content-title" className="title-content">
          <div className="card">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4}>
                <div className="card-content">
                  <img
                    src={logoImage}
                    alt="2min battery Logo Image"
                    style={{
                      width: 96,
                      height: 96,
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div className="card-title">
                  2分でバッテリー
                </div>
                <div className="card-subtitle">
                  スマホのバッテリーがない！<br />
                  救済サービス
                </div>
              </Grid>
            </Grid>
            <div  className="spacer" />
            <Button>
              NEXT
            </Button>
          </div>
        </div>
        <div id="content-primary" className="description-content">

        </div>
        <div id="content-primary" className="registration-content">

        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
