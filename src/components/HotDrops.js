import './HotDrops.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const HotDrops = (props) => {
    return (
        <div className="main-nft-container-2">
            <div className="nft-image-2">
                <img src={props.image} alt="" />
            </div>
            <div className="nft-details-2">
                <span className="cr-image-small">
                    <span className="inner-cont">
                        <img src={props.creatorImage} alt="" />
                    </span>
                </span>
                <div className="details-left">
                    <h6>NFT name</h6>
                    <span className="creator">@creator</span>
                    <span className="currency">0.55ETH</span>
                </div>
                <div className="details-right">
                <FontAwesomeIcon className="faIcon2" icon={faEllipsisV} />
                </div>
            </div>
        </div>
    );
};

export default HotDrops;