
//largeImageURL
const ImageGalleryItem = ({ webformatURL, tag }) =>  (
    <li className="ImageGalleryItem">
        <img
            src={webformatURL}
            alt={tag}
            className="ImageGalleryItem-image"
            loading="lazy" 
        />
    </li>
);

export default ImageGalleryItem;
