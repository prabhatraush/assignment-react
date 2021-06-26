import React, { Component } from 'react'
import { PageHeader, Row, Col, Button, Switch, Popover } from 'antd';
import { connect } from 'react-redux';
import { loggedOut } from '../redux/user/actions';
import { enableHighlight, disableHighlight } from '../redux/highlight/actions';

class Header extends Component {

  constructor(props){
    super(props);

    this.logOut = this.logOut.bind(this);
    this.updateHighlight = this.updateHighlight.bind(this);
  }

  logOut(){
    this.props.loggedOut();
  };

  updateHighlight(checked) {
    if(checked)
      this.props.enableHighlight();
    else
     this.props.disableHighlight();
  }

    render() {
        return (
            <PageHeader>
            <Row justify="space-around">
              <Col >
                <h2>Highlighter</h2>
              </Col>
              <Col >
              <Popover content="Highlight"  trigger="hover">
                  <Switch defaultChecked={false} checkedChildren="Enable" unCheckedChildren="Disaled" onChange={this.updateHighlight} />
              </Popover>
                
              </Col>
              {this.props.isLoggedIn  &&
              <Col >
                  <Button onClick={this.logOut}>Logout</Button>
              </Col>
              }
            </Row>
          </PageHeader>
        )
    }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});



export default connect(mapStateToProps, {loggedOut, enableHighlight, disableHighlight})(Header);
