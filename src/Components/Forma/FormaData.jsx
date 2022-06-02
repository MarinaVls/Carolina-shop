import { Button, Form, Input, Select, Space } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useState } from 'react';
import { DataPopUpModal } from '../PopUpModal/DataPopUpModal';
import './FormaData.css'

const { Option } = Select;

export const FormaData = () => {
    const [dataPopUp, setDataPopUp] = useState(false)
    const [form] = useForm()
    
    const onFinish = () => {
        form.resetFields();
        setDataPopUp(true);
    }; 

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{width: 100}}>
            <Option value="375(29)">+375(29)</Option>
            <Option value="375(33)">+375(33)</Option>
            <Option value="375(44)">+375(44)</Option>
            <Option value="375(25)">+375(25)</Option>
          </Select>
        </Form.Item>
    );

    return (
    <Form form={form} name="complex-form" onFinish={onFinish} labelCol={{ span: 3 }} wrapperCol={{span: 16 }} 
        initialValues={{prefix: '375(29)'}} className="form__data">
        <Form.Item label="">
            <Space >
                <Form.Item name="username" rules={[{required: true,message: 'Введите Ваше имя'}]}>
                    <Input style={{width: 230}} placeholder="Имя"/>
                </Form.Item>
            </Space>
        </Form.Item>
        <Form.Item label="">
            <Space>
                <Form.Item name="phone" rules={[{required: true, message: 'Введите номер телефона'}]}>
                    <Input addonBefore={prefixSelector} style={{width: 230}} placeholder="Телефон"/>
                </Form.Item>
            </Space>
        </Form.Item>
        <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit" >
                    Подписаться
            </Button>
             {dataPopUp && <DataPopUpModal setDataPopUp={setDataPopUp}/>} 
        </Form.Item>
    </Form>
    )
}