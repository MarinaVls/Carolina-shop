import shareIcon from '../../image/share-icon.png'

export const ImageList = ({image}) => {
    const {name, image_link} = image;
    return (
        <li className="main__about__product__img__item">
            <div className="img__item__wrapper">
                <img src={image_link} alt='изображение товара' />
                <button className="button img__item__btn__share">
                    <img src={shareIcon} alt="share"/>
                </button>
                <div className="img__item__text">{name}</div>
            </div>
        </li>
    )
}