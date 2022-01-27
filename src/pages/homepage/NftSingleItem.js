import './NftSingleItem.css';
import img1 from "../../resources/homeCover.jpg";
import img2 from "../../resources/002.jpg";
import verified_Badge from "../../resources/Verified_Badge.png";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const NftSingleItem = () => {
    const [showMore, setShowMore] = useState(false);
    const text =  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam minus iusto magni numquam quisquam vel esse ex unde perferendis modi aut hic, officia aliquam dicta ut. Vitae corporis at commodi et dicta. Soluta ex enim cum, ipsa, odio corporis placeat facere, iusto ipsum nisi veritatis quas quam incidunt eum recusandae ut exercitationem. Non maxime quidem, dolores animi aliquid doloremque dolore fugit, fuga iste illum blanditiis dolorem, inventore deserunt laboriosam! Eos ducimus ab corrupti reiciendis. Excepturi possimus odio libero tempora officia quaerat id porro, error velit iusto at consequuntur quis nemo, quae sunt ut ipsam! Repudiandae ipsum fuga, inventore blanditiis cumque modi veniam maiores. Tempora aspernatur animi reiciendis a asperiores recusandae iste delectus natus debitis nam rerum omnis saepe eaque, accusamus tenetur ut minima. Nobis possimus ut deserunt voluptatem eveniet saepe velit repellendus reiciendis ex quisquam dolore repellat impedit harum quod aliquid odio est a modi, voluptas, nesciunt vel quo autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam minus iusto magni numquam quisquam vel esse ex unde perferendis modi aut hic, officia aliquam dicta ut. Vitae corporis at commodi et  dicta. Soluta ex enim cum, ipsa, odio corporis placeat facere, iusto ipsum nisi veritatis quas quam incidunt eum recusandae ut exercitationem. Non maxime quidem, dolores animi aliquid doloremque dolore fugit, fuga iste illum blanditiis dolorem, inventore deserunt laboriosam! Eos ducimus ab corrupti reiciendis.  Excepturi possimus odio libero tempora officia quaerat id porro, error velit iusto at consequuntur quis nemo, quae sunt ut ipsam! Repudiandae ipsum fuga, inventore blanditiis cumque modi veniam maiores. Tempora aspernatur animi reiciendis a asperiores recusandae iste delectus natus debitis nam rerum omnis saepe eaque, accusamus tenetur ut minima. Nobis possimus ut deserunt voluptatem eveniet saepe velit repellendus reiciendis ex quisquam dolore repellat impedit harum quod aliquid odio est a modi, voluptas, nesciunt vel quo autem.';
    const getText = () => {
        // For Text that is shorter than desired length
        if (text.length <= 258) return text;
        // If text is longer than desired length & showMore is true
        if (text.length > 258 && showMore) {
          return (
            <>
              <p className="text-expand">{text}</p>
    
              <button 
                className="see-more-btn"
                onClick={() => setShowMore(false)}>
                <FontAwesomeIcon className="see-more-icon" icon={faChevronUp} />
              </button>
            </>
          );
        }
         // If text is longer than desired length & showMore is false
        if (text.length > 258) {
          return (
            <>
              <p>{text.slice(0, 258)}</p>
              <button
                className="see-more-btn"
                onClick={() => setShowMore(true)}>
                <FontAwesomeIcon className="see-more-icon" icon={faChevronDown} />
              </button>
            </>
          );
        }
      };
    return (
        <section>
            <div className="cover-img">
                <img src={img1} alt="" />
                <div className="cr-image-container">
                    <div className="cr-image-on-page">
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className="body-container">
                <div className="heading-box">
                    <h1>From the Fragments of Tezuka Osamu - Mosaic Art</h1>
                    <div>
                        <span>Created by <b>thatNPC</b>
                            <span className="verified_Badge">
                                <img src={verified_Badge} alt="" />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="info-item-container">
                <div className="info-item-box">
                <span>3</span>   items
                </div>
                <div className="info-item-box">
                <span>5</span> owners
                </div>
                <div className="info-item-box">
                <span>12000</span> floor price
                </div>
                <div className="info-item-box">
                <span>180</span> volume traded
                </div>
            </div>
            <div className="description">
                {getText()}
            </div>
        </section>
    );
};

export default NftSingleItem;