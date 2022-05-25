import { Button, Form, Input, Select, Space } from 'antd';
import { useContext, useState } from 'react';
import { Context } from '../../Context';
import { PopUpMpdal } from '../PopUpModal/PopUpMpdal';

const { Option } = Select;

export const FormOrder = ({onCloseAndClearBasket}) => {
    const[valuesModal, setValuesModal] = useState({})
    const { modalActive, setModalActive} = useContext(Context)

    const onFinish = (values) => {
        setModalActive(true);
        setValuesModal(values);
    }; 

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 100,
            }}
          >
            <Option value="375(29)">+375(29)</Option>
            <Option value="375(33)">+375(33)</Option>
            <Option value="375(44)">+375(44)</Option>
            <Option value="375(25)">+375(25)</Option>
          </Select>
        </Form.Item>
    );

    return (
    <Form name="complex-form" onFinish={onFinish} 
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        >
        <Form.Item label="Ваше имя">
            <Space>
                <Form.Item
                    name="username"
                    noStyle
                    rules={[
                    {
                        required: true,
                        message: 'Введите Ваше имя',
                    },
                    ]}
                >
                    <Input
                        style={{
                            width: 230,
                        }}
                        placeholder="Введите Ваше имя"
                    />
                </Form.Item>
            </Space>
        </Form.Item>
        <Form.Item label="Телефон" >
            <Space>
                <Form.Item
                    name="phone"
                    noStyle
                    rules={[
                    {
                        required: true,
                        message: 'Введите Ваш номер телефона',
                    },
                    ]}
                >
                    <Input addonBefore={prefixSelector}
                        style={{
                            width: 230,
                        }}
                    />
                </Form.Item>
            </Space>
        </Form.Item>
        <Form.Item label="Адрес">
            <Form.Item
                name="country"
                rules={[
                {
                    required: true,
                    message: 'Введите Вашу страну',
                },
                ]}
                style={{ display: 'inline-block', width: 230 }}
            >
                <Select placeholder="Введите Вашу страну">
                    <Option value="Российская Федерация">Россия</Option>
                    <Option value="Республика Беларусь">Беларусь</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name='adress'
                rules={[
                {
                    required: true,
                    message: 'Введите Ваш адрес',
                },
                ]}
                style={{ display: 'inline-block', width: 230 }}
            >
                <Input placeholder="Введите Ваш адрес"/>
            </Form.Item>
        </Form.Item>
        <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
                Оформить заказ
            </Button>
            {modalActive && <PopUpMpdal>
                <h3>
                <span>{valuesModal.username}</span>, Ваш заказ принят!
                </h3>
                <div className="popUp__modal__content__adress">Доставка будет осуществлена по адресу: <span>{valuesModal.country}, {valuesModal.adress}</span></div>
                <p>
                Ожидайте, пожалуйста, с Вами свяжуться для уточнения деталей.
                </p>
                <button className="button popUp__modal__btn__ok" onClick={()=>{onCloseAndClearBasket()}}>Ok</button>
                <button className="button popUp__modal__btn__close" onClick={()=>{setModalActive(false)}}>X</button>
            </PopUpMpdal>}
        </Form.Item>
    </Form>
    )
}