import React from 'react';
import Button from "@react-mdc/button";
import Card from "@react-mdc/card";
import Checkbox from "@react-mdc/checkbox";
import Dialog from "@react-mdc/dialog";
import Elevation from "@react-mdc/elevation";
import FAB from "@react-mdc/fab";
import FormField from "@react-mdc/form-field";
import LayoutGrid from "@react-mdc/layout-grid";
import Radio from "@react-mdc/radio";
import Ripple from "@react-mdc/ripple";
import Switch from "@react-mdc/switch";
import Textfield from "@react-mdc/textfield";
import Typography from "@react-mdc/typography";

import './app.scss';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="container">
        <div id="content-title" className="full-screen-content light">
          <Typography.Title>
            2分でバッテリー
          </Typography.Title>
          <Typography.Subheading1>
            「スマホのバッテリーがない！」<br />
            救済サービス
          </Typography.Subheading1>
          <Button>
            NEXT
          </Button>
        </div>
        <div id="content-primary" className="full-screen-content dark">
          <Ripple.Meta color="primary">
            <Button>2</Button>
          </Ripple.Meta>
        </div>
        <div id="content-primary" className="full-screen-content light">
          <Ripple.Meta color="primary">
            <Button>3</Button>
          </Ripple.Meta>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
