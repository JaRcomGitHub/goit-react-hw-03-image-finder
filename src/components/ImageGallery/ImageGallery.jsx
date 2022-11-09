import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ galleryPhotos }) =>  (
  <ul className="ImageGallery">
    {galleryPhotos.map(({ id, largeImageURL, webformatURL, tag }) => (
      <ImageGalleryItem
        key={id}
        largeImageURL={largeImageURL}
        webformatURL={webformatURL}
        tag={tag} />
    ))}
  </ul>
);

export default ImageGallery;