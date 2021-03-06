import facebook from '../../image/f-icon.png';
import pint from '../../image/pint-icon.png'
import insta from '../../image/inst-icon.png'
import './Contacts.css'

export const Contacts = () => {

    return (
        <main className="main__contacts">
            <div className="container">
                <div className="main__contacts__wrapper">
                    <h1>Свяжитесь с нами</h1>
                    <div className="main__contacts__tel">
                        <span>Обслуживание клиентов</span>
                        <a href='tel:+7 (495) 000-00-00'>+7 (495) 000-00-00</a>
                    </div>
                    <div className="main__contacts__adress">
                        <span>Наш адрес:</span>
                        <span>ул. Арбат, 1а, Москва, 119019, Россия</span>
                    </div>
                    <div className="main__contacts__social">
                        <a className='insta' href='https://www.instagram.com/?hl=ru' target='_blank'><img src={insta} /></a>
                        <a href='https://www.pinterest.ru/' target='_blank'><img src={pint} /></a>
                        <a href='https://www.facebook.com/' target='_blank'><img src={facebook} /></a>
                    </div>
                    <div className="main__contacts__form">
                        <p>Отправьте письмо на <a href="mailto:info@mysite.ru">info@mysite.ru</a> или сообщение через форму ниже, и мы ответим в ближайшее время</p>
                        <form>
                            <div className="form__input">
                                <div className="form__input__name">
                                    <label htmlFor='name'>Имя</label>
                                    <input type="text" name="name" id='name' required />
                                </div>
                                <div className="form__input__email">
                                     <label htmlFor='email'>Эл. почта*</label>
                                    <input type="email" name="email" id='email' required />
                                </div>
                            </div>
                            <label htmlFor='tema'>Тема </label>
                            <input type="text" name="tema" id='tema' required/>
                            <textarea name='message' minLength={10} rows={3} placeholder='Отправьте сообщение'></textarea>
                            <button className="button contacts__form__btn">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

                    