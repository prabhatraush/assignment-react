import React, { Component } from 'react'
import { Form, Input, InputNumber, Button, Divider, DatePicker, Alert } from 'antd';
import { connect } from 'react-redux';
import {addForm} from '../redux/form/actions'

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlePublishDate = this.handlePublishDate.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleTitle(event) {
        this.setState({title: event.target.value});
      }

      handleDescription(event){
          this.setState({desc: event.target.value})
      }

      handlePrice(value){
        this.setState({price: value});
      }

      handlePublishDate(date, dateString) {
        console.log(date, dateString);
        this.setState({publish_date: dateString});
      }
    
      handleSubmit() {
        // api call 
        this.props.addForm(this.state.title, this.state.desc, this.state.price, this.state.publish_date);
        
      }

    render() {
        return (
            <div>
                <Divider orientation="center">Add Application </Divider>

                    <Form onFinish={this.handleSubmit}>
                    <Form.Item
                        label="Form Name"
                        name="title"
                        rules={[
                        {
                            required: true,
                            message: 'Enter Name for Form',
                        },
                        ]}
                    >
                        <Input value={this.state.title} onChange={this.handleTitle}/>
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[
                        {
                            required: true,
                            message: 'Enter price of products',
                        },
                        ]}
                    >
                        <InputNumber  value={this.state.price} onChange={this.handlePrice}/>
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="desc"
                        rules={[
                        {
                            required: true,
                            message: 'Enter description for application',
                        },
                        ]}
                    >
                        <Input value={this.state.desc} onChange={this.handleDescription}/>
                    </Form.Item>

                    <Form.Item
                        label="Date"
                        name="date"
                        rules={[
                        {
                            required: true,
                            message: 'Enter publish date',
                        },
                        ]}
                    >
                        <DatePicker onChange={this.handlePublishDate} />
                    </Form.Item>

                    
                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Add 
                        </Button>
                    </Form.Item>
                    {this.props.isAdded && <Alert message="Form Data Added" type="success" showIcon />}
                    </Form>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    isAdded: state.forms.isAdded
  });


  export default connect(
    mapStateToProps,
    {addForm}
  )(Application);
