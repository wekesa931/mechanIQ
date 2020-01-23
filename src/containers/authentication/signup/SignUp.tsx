import React, { useState } from "react";
import { Form, Icon, Input, Button, Checkbox, Modal } from "antd";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { signUp } from "../../../actions/authentication";

export interface LogInProps extends RouteComponentProps {}

const SignUp: React.SFC<LogInProps> = props => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);
  // @ts-ignore
  const handleSubmit = e => {
    e.preventDefault();
    // @ts-ignore
    props.form.validateFields(async (err, values) => {
      if (!err) {
        let action = signUp(values.username, values.password);
        setError(null);
        try {
          await dispatch(action);
          localStorage.loggedIn && props.history.push("/profile");
        } catch (err) {
          setError(err.message);
          setVisible(true);
        }
      }
    });
  };
  // @ts-ignore
  const { getFieldDecorator } = props.form;
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <p>{error}</p>
      </Modal>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <p className="login-form-forgot">Forgot password</p>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const signUpForm = Form.create({ name: "normal_login" })(SignUp);

// @ts-ignore
export default withRouter(signUpForm)
