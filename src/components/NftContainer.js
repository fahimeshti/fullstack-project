import './NftContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const NftContainer = (props) => {
    return (
        <div className="main-nft-container">
            <div className="nft-image">
                <img src={props.image} alt="" />
            </div>
            <div className="nft-details">
                <div className="details-left">
                    <h6>NFT name</h6>
                    <span className="creator">@creator</span>
                    <span className="currency">0.55ETH</span>
                </div>
                <div className="details-right">
                <FontAwesomeIcon className="faIcon2" icon={faEllipsisV} />
                </div>
            </div>
            <div className="main-nft-btn">
                <button>Collect Now</button>
            </div>
        </div>
    );
};

export default NftContainer;