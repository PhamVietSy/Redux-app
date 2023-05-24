import { ContainerLogin, WrapperLogin } from '../../style/StyledComponents/Login/Login';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        if (localStorage.getItem('accounts')) {
            // @ts-ignore
            const storage = JSON.parse(localStorage.getItem('accounts'));
            const findAcc = storage.find(
                (item: any) => item.email === values.email && item.password === values.password,
            );
            if (findAcc) {
                localStorage.setItem('logedAcc', JSON.stringify({ email: values.email }));
                navigate('/todoapp');
            } else {
                alert('SAi');
            }
        } else {
            alert('SAi');
        }
    };

    return (
        <ContainerLogin>
            <WrapperLogin>
                <h1>Login</h1>
                <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <Link to="/">register now!</Link>
                    </Form.Item>
                </Form>
            </WrapperLogin>
        </ContainerLogin>
    );
}

export default Login;
