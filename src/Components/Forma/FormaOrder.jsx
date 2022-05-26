import { Button, Form, Input, Select, Space } from 'antd';
import { useState } from 'react';
import { OrderPopUpModal } from '../PopUpModal/OrderPopUpModal';
import './FormaOrder.css'
const { Option } = Select;


export const FormaOrder = ({onCloseAndClearBasket, orderPopUp, setOrderPopUp}) => {
    const[valuesModal, setValuesModal] = useState('')
    
    const onFinish = (values) => {
        setOrderPopUp(true);
        setValuesModal(values);
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
    <Form name="complex-form" onFinish={onFinish} labelCol={{span: 8}} wrapperCol={{span: 16}} initialValues={{prefix: '375(29)'}}
            style={{width:320}}>
        <Form.Item label="Ваше имя" style={{marginBottom: 0}}>
            <Space>
                <Form.Item name="username" rules={[{required: true, message: 'Введите Ваше имя'}]}>
                    <Input style={{width: 230}} placeholder="Введите Ваше имя" />
                </Form.Item>
            </Space>
        </Form.Item>
        <Form.Item label="Телефон" style={{marginBottom: 0}}>
            <Space>
                <Form.Item name="phone" rules={[{required: true, message: 'Введите Ваш номер телефона'}]}>
                    <Input addonBefore={prefixSelector} style={{width: 230}}/>
                </Form.Item>
            </Space>
        </Form.Item>
        <Form.Item label="Адрес" style={{marginBottom: 0}}>
            <Form.Item name="country" rules={[{required: true,message: 'Введите Вашу страну'}]} 
                    style={{ display: 'inline-block', width: 230}}>
                <Select placeholder="Введите Вашу страну">
                    <Option value="Российская Федерация">Россия</Option>
                    <Option value="Республика Беларусь">Беларусь</Option>
                </Select>
            </Form.Item>
            <Form.Item name='adress' rules={[{required: true, message: 'Введите Ваш адрес'}]}
                style={{ display: 'inline-block', width: 230 }}>
                <Input placeholder="Введите Ваш адрес"/>
            </Form.Item>
        </Form.Item>
        <Form.Item label=" " colon={false} style={{marginBottom: 5}}>
            <Button type="primary" htmlType="submit" 
                style={{height: 35, width: 230, backgroundColor: 'rgb(27, 20, 100)', border: 'none', fontSize: 16}}>
                Оформить заказ
            </Button>
            {orderPopUp && <OrderPopUpModal onCloseAndClearBasket={onCloseAndClearBasket} valuesModal={valuesModal} 
                        setOrderPopUp={setOrderPopUp}/>}
        </Form.Item>
    </Form>
    )
}