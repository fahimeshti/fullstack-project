import './MyCarousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NftContainer from './NftContainer';
// images 
import nft001 from "../resources/001.png";
import nft002 from "../resources/002.jpg";
import nft003 from "../resources/003.png";
import HotDrops from './HotDrops';

const MyCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <Carousel 
        responsive={responsive}
        infinite={true}
        itemClass="carousel-item-padding"
        containerClass="carousel-container"
        >
            <HotDrops image={nft001} creatorImage={nft003} />
            <HotDrops image={nft002} creatorImage={nft002} />
            <HotDrops image={nft003} creatorImage={nft001} />
        </Carousel>
    );
};

export default MyCarousel;