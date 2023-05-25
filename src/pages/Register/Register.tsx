import { ContainerRegister, WrapperRegister } from '../../style/StyledComponents/Register/Register';
import { Button, Form, Input, Checkbox, Radio, message } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
interface IValues {
    email: string;
    password: string;
    confirm: string;
    fullname: string;
    sex: string;
}

function Register() {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values: IValues) => {
        let accounts = localStorage.getItem('accounts');
        // @ts-ignore
        const storage = JSON.parse(localStorage.getItem('accounts'));
        const findAcc = storage?.find((item: any) => item.email === values.email);
        console.log(findAcc);

        if (findAcc) {
            message.warning('Registered email please try another email ');
            // alert('Registered email please try another email ');
        } else {
            if (!accounts) {
                localStorage.setItem('accounts', JSON.stringify([values]));
            } else {
                let arr = JSON.parse(accounts);
                arr.push(values);
                localStorage.setItem('accounts', JSON.stringify(arr));
            }
            navigate('/login');
        }
    };
    const [disabled, setDisabled] = useState<boolean>(true);
    const handleClick = () => setDisabled(!disabled);

    return (
        <ContainerRegister>
            <WrapperRegister>
                <h1>Register</h1>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                    style={{ maxWidth: 600 }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
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
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                validator: (_, value) => {
                                    if (value.length < 6 || value.length > 15) {
                                        return Promise.reject('Password length from 6 to 15 :)');
                                    } else {
                                        return Promise.resolve();
                                    }
                                },
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Repassword"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error('The two passwords that you entered do not match!'),
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="fullname"
                        label="Fullname"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your nickname!',
                                whitespace: true,
                            },
                            {
                                validator: (_, value) => {
                                    if (/^[a-zA-Z0-9- ]+$/.test(value)) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject('Name cannot contain special characters :)');
                                    }
                                },
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="sex"
                        label="Sex"
                        rules={[
                            {
                                required: true,
                                message: 'Please choose sex',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Radio.Group>
                            <Radio value="male">Male</Radio>
                            <Radio value="frmale">Frmale </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Checkbox onClick={handleClick}>I have read the agreement</Checkbox>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" disabled={disabled}>
                            Register
                        </Button>
                    </Form.Item>
                    <Link to="/login">I have account</Link>
                </Form>
            </WrapperRegister>
        </ContainerRegister>
    );
}

export default Register;
