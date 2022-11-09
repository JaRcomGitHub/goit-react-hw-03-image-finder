import PropTypes from 'prop-types';

const Modal = ({ urlBigPhoto, tag}) =>  (
    <div className="Overlay">
        <div className="Modal">
            <img src={urlBigPhoto} alt={tag} />
        </div>
    </div>
);

export default Modal;

Modal.propTypes = {
    urlBigPhoto: PropTypes.string.isRequired,
    tag: PropTypes.string,
};