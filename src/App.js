import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <LikeButton />
      <ClickablePicture img={img} imgClicked={imgClicked} />
      <Dice />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
    </div>
  );
}

export default App;
