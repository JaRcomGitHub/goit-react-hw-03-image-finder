import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ galleryPhotos, onClick }) =>  (
  <ul className="ImageGallery">
    {galleryPhotos.map(({ id, largeImageURL, webformatURL, tag }) => (
      <ImageGalleryItem
        key={id}
        largeImageURL={largeImageURL}
        webformatURL={webformatURL}
        tag={tag}
        onClick={onClick}
       />
    ))}
  </ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  galleryPhotos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tag: PropTypes.string,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};