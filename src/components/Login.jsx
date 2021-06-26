import React, { Component } from 'react';
import {Form, Input, Button, Divider } from 'antd';
import { getLogin } from '../redux/user/actions';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {email: '',password: '', err: ''}

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleEmail(event) {
        this.setState(state=> ({...state ,email: event.target.value}));
      }

      handlePassword(event) {
        this.setState(state=> ({...state ,password: event.target.value}));
      }
    
      handleSubmit() {
        this.props.getLogin(this.state.email, this.state.password);
       
      }

    render() {
        return (
            <div>
                <Divider orientation="center">Sign In </Divider>
                    <Form onFinish={this.handleSubmit}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input value={this.state.email} onChange={this.handleEmail}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password value={this.state.password} onChange={this.handlePassword}/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                    </Form>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
  });


  export default connect(
    mapStateToProps,
    {getLogin}
  )(Login);
