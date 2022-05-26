import { Button, Form, Input, Select, Space } from 'antd';
import { useState } from 'react';
import { DataPopUpModal } from '../PopUpModal/DataPopUpModal';

const { Option } = Select;

export const FormaData = () => {
    const [dataPopUp, setDataPopUp] = useState(false)
    
    const onFinish = () => {
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
    <div className='forma'>
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 3 }} wrapperCol={{span: 16 }} 
        initialValues={{prefix: '375(29)'}} style={{ display: 'flex', justifyContent: 'center', height: 56}}>
        <Form.Item label="" style={{marginBottom: 0, marginRight: 10}}>
            <Space >
                <Form.Item name="username" style={{marginBottom: 0}} noStyle rules={[{required: true,message: 'Введите Ваше имя'}]}>
                    <Input style={{width: 230}} placeholder="Имя"/>
                </Form.Item>
            </Space>
        </Form.Item>
        <Form.Item label="" style={{marginBottom: 0, marginRight: 10}} >
            <Space>
                <Form.Item name="phone" style={{marginBottom: 0}} rules={[{required: true, message: 'Введите номер телефона'}]}>
                    <Input addonBefore={prefixSelector} style={{width: 230}} placeholder="Телефон"/>
                </Form.Item>
            </Space>
        </Form.Item>
        <Form.Item label=" " colon={false} style={{marginBottom: 0, marginRight: 10}} >
            <Button type="primary" htmlType="submit" 
                style={{height: 35, width: 200, backgroundColor: 'rgb(27, 20, 100)', border: 'none', fontSize: 18}} >
                    Подписаться
            </Button>
             {dataPopUp && <DataPopUpModal setDataPopUp={setDataPopUp}/>} 
        </Form.Item>
    </Form>
    </div>
    )
}