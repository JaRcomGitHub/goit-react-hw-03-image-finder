import React, { Component } from "react";
import axios from "axios";
import Notiflix from 'notiflix';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";

const API_KEY = "29840548-44be53550e175681813a70adf";
const PER_PAGE = 12;
const PHOTO_LIMIT = 500;


function getPixabayURL(searchTerm, pageNum) {
  const basePixabayURL = "https://pixabay.com/api/";
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchTerm,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: PER_PAGE,
    page: pageNum,
  });
  return `${basePixabayURL}?${searchParams}`;
}

async function axiosGetPixabayPhoto(url) {
  try {
    const response = await axios.get(url);
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

const getGalleryPhotoByNumPage = (requestTerm, numPage, onSuccess, onError) => {
  const url = getPixabayURL(requestTerm, numPage);
  axiosGetPixabayPhoto(url)
    .then(data => {
      onSuccess(data);
  })
    .catch(error => {
      console.log(error);
      onError(error);
  });
}

class App extends Component {
  state = {
    searchValue: '',
    pageCnt: 1,
    galleryPhotos: [],
  }

  
  responseGalleryPhoto = (data) => {
    //const total = data.data.total;
    const totalHits = data.data.totalHits;
    const hits = data.data.hits;

    //console.log(total);
    //console.log(totalHits);
    //console.log(hits);
    
    this.setState({ galleryPhotos: [...hits] });

    if (totalHits === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }
    
  //   if (glPageCnt === 1) {
  //     glSimpleLightbox = new SimpleLightbox('.gallery a');
  //     Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`); 
  //     if (totalHits > PER_PAGE) {
  //       btnLoadMoreEl.style.display = 'block';
  //     }
  //   } else {
  //     glSimpleLightbox.refresh();
  //   }

    if ((this.state.pageCnt > 1) && (hits.length < PER_PAGE)) {
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    }
  }


  gotAnError = (error) => {
    //if (error.message == 404) { }
    if (error.message === 400) {
      if (this.state.pageCnt > (PHOTO_LIMIT/PER_PAGE)) {
          Notiflix.Notify.info('The API is limited to return a maximum of 500 images per query.');
      }
    }
  }
  

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, pageCnt } = this.state;

    if (prevState.searchValue !== searchValue)
    {
      getGalleryPhotoByNumPage(searchValue, pageCnt, this.responseGalleryPhoto, this.gotAnError)
    }
  }

  handleSearchValue = searchValue => {
    this.setState({ searchValue: searchValue });
  }
  
  render() {
    const { galleryPhotos } = this.state;

    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.handleSearchValue} />
          {galleryPhotos.length > 0 && <ImageGallery galleryPhotos={galleryPhotos} />}
          {galleryPhotos.length > 0 && <Button />}
        </div>
      </>
    )
  };
};

export default App;