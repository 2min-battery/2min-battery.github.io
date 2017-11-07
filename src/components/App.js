import React from 'react';
import Button from "material-ui/Button";
import Card from "material-ui/Card";
import Grid from "material-ui/Grid";
import ScrollableAnchor from 'react-scrollable-anchor'
import { ThumbUp } from 'material-ui-icons';
import Observer from 'react-intersection-observer';

import './app.scss';

const logoImage = require('../images/logo.png');
const batteryLowImage = require('../images/battery_low.png');

// "Shibuya" Photo by Jason Ortego on Unsplash
// "Shibuya night" Photo by Redd Angelo on Unsplash

const onViewInScreen = (viewName, inView, props) => {
  if (inView) {
    props.onViewInScreen(viewName);
  }
};

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  render() {
    const descriptions = {
      0: [
        (
          <div key="title" className="card-title">
            「あっ、スマホのバッテリーが...！」
          </div>
        ),
        (
          <div key="description" className="card-description">
            外出先で突然訪れる、<br />
            <div className="card-list">
              「あれ、スマホのバッテリーがない！」<br />
              「充電するのを忘れてた！」
            </div>
            こんなピンチを<b>「２分」</b>で解決するサービスが、あなたの街ではじまります。
          </div>
        ),
      ],
      1: [
        (
          <div key="title" className="card-title">
            「スマホのバッテリーがもつか心配、、、。」
          </div>
        ),
        (
          <div key="description" className="card-description">
            スマホのバッテリーが心配で、外出のときも携帯バッテリーを持ち歩いていませんか？<br />
            <div className="card-list">
              「荷物が重くなるけどしかたない。。。」<br />
              「携帯バッテリーの充電が面倒臭い！」
            </div>
            こんな悩みを<b>「２分」</b>で解決するサービスが、あなたの街ではじまります。
          </div>
        ),
      ],
    };

    return (
      <div className="page-container">
        <ScrollableAnchor id="content-title" className="anchor">
          <div className="title-content">
            <div className="card">
              <div className="spacer" />
              <Grid container spacing={0}>
                <Grid item xs={12} sm={3}>
                  <div className="card-content">
                    <img
                      src={logoImage}
                      alt="2min battery Logo Image"
                      className="logo-image"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Observer onChange={(inView) => onViewInScreen('Title', inView, this.props)}>
                    <div className="card-content">
                      <div className="card-title">
                        2分でバッテリー
                      </div>
                      <div className="card-subtitle">
                        スマホのバッテリーがない！<br />
                        救済サービス
                      </div>
                    </div>
                  </Observer>
                </Grid>
              </Grid>
              <div className="spacer" />
              <Button
                raised
                color="primary"
                href="#content-description"
                onClick={() => this.props.onNextClicked('Title')}
              >
                くわしく
              </Button>
              <div className="spacer" />
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="content-description">
          <div className="description-content">
            <img
              src={batteryLowImage}
              alt="battery emergency"
              className="battery-low-image"
            />
            <div className="card">
              <Observer onChange={(inView) => onViewInScreen(`Description-${this.props.descriptionId}`, inView, this.props)}>
                {descriptions[this.props.descriptionId]}
              </Observer>
              <div className="spacer" />
              <Button
                raised
                color="primary"
                href="#content-registration"
                onClick={() => this.props.onNextClicked('Description')}
              >
                次へ
              </Button>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="content-registration">
          <div className="registration-content">
            <ThumbUp className="thumb-up-image"/>
            <div className="card">
              <Observer onChange={(inView) => onViewInScreen(`GuideToFacebook`, inView, this.props)}>
                <div className="card-description">
                  こんな、みなさんの悩みを解決するサービスを、<br />
                  ただいま絶賛開発中です！<br />
                  <br />
                  わたしたちのFacebookページで、このサービスの最新情報をお届けします。<br />
                  今しばらくお待ちください！
                  <div className="spacer" />
                </div>
              </Observer>
              <div className="spacer" />
              <Button
                raised
                color="primary"
                href="https://www.facebook.com/2min.battery/"
                onClick={() => this.props.onSnsClicked('Facebook')}
              >
                facebookページでいいね！する
              </Button>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

AppComponent.defaultProps = {
  descriptionId: 0,
};

export default AppComponent;
