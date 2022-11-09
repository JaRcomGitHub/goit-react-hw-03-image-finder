import PropTypes from 'prop-types';
// import Modal from "../Modal/Modal";

const ImageGalleryItem = ({ largeImageURL, webformatURL, tag, onClick }) =>  (
    <li className="ImageGalleryItem">
        <img
            src={webformatURL}
            alt={tag}
            className="ImageGalleryItem-image"
            loading="lazy" 
            onClick={() => onClick(largeImageURL)}
        />
        {/* <Modal urlBigPhoto={largeImageURL} tag={tag} /> */}
    </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tag: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};