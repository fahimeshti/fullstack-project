import React, { useState } from 'react';
import './Homepage.css';
import NavigationBar from '../../components/NavigationBar';
import homeCover from "../../resources/homeCover.jpg";
import PrimaryBtn from '../../components/PrimaryBtn';
import SecondaryBtn from '../../components/SecondaryBtn';
import MyCarousel from '../../components/MyCarousel';
import NftContainer from '../../components/NftContainer';
import CreatorsCard from '../../components/CreatorsCard';
// images 
import nft001 from "../../resources/001.png";
import nft003 from "../../resources/003.png";
import L1 from "../../resources/l1.jpg";
import L2 from "../../resources/l2.jpg";
import L3 from "../../resources/l3.jpg";
import ChitraLogo from "../../resources/crafts-png-692033.png";



const Homepage = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };
      const newYear = (new Date()).getFullYear();
    return (
        <div>
            <NavigationBar />
            <section className="firstSection">
                <img src={homeCover} alt="" />
                <div className="top-content">
                    <div className="top-content-left">
                        <h1>Discover, collect, and sell extraordinary NFTs</h1>
                        <h5>Chitra is the world's first and largest NFT marketplace </h5>
                        <div className="top-btns">
                            <PrimaryBtn btnText="Explore" />
                            <SecondaryBtn btnText="Create" />
                        </div>
                    </div>
                    <div className="top-content-right">
                        <div className="top-nft-container">
                            <div className="top-img-container">
                                <img src={homeCover} alt="" />
                                <div className="img-info-container-full">
                                    <div className="img-info-container">
                                        <span>
                                            <span className="text-lightGrey">Current Bid</span> <br/> 0.88ETH
                                            </span>
                                        <span>
                                            <span className="text-lightGrey">Ends In</span> <br/> 15:22H
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="ntf-detail">
                               <div className="ntf-user-box">
                                    <img src={homeCover} alt="" />
                                    <div className="ntf-user-detail">
                                        <span>NFT name</span>
                                        <span>@creator</span>   
                                    </div>
                               </div>
                                <div className="ntf-detail-info">
                                    <span>i</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hot-drops-container">
                <h2>Hot Drops</h2>
                <MyCarousel />
                <h2>Trending</h2>
            <div className="category-container">
                <button 
                className={toggleState === 1 && "active"} 
                onClick={() => toggleTab(1)}
                >
                    All
                </button>
                <button 
                className={toggleState === 2 && "active"} 
                onClick={() => toggleTab(2)}
                >Art</button>
                <button 
                className={toggleState === 3 && "active"} 
                onClick={() => toggleTab(3)}
                >Collectibles</button>
                <button 
                className={toggleState === 4 && "active"} 
                onClick={() => toggleTab(4)}
                >Domain Names</button>
                <button 
                className={toggleState === 5 && "active"} 
                onClick={() => toggleTab(5)}
                >Music</button>
                <button 
                className={toggleState === 6 && "active"} 
                onClick={() => toggleTab(6)}
                >Photography</button>
                <button className={toggleState === 7 && "active"} 
                onClick={() => toggleTab(7)}
                >Sports</button>
                <button className={toggleState === 8 && "active"} 
                onClick={() => toggleTab(8)}
                >Trading Cards</button>
            </div>
            <div className="nft-market">
                <NftContainer image={nft001} />
                <NftContainer image={nft003} />
                <NftContainer image={nft001} />
                <NftContainer image={nft003} />
                <NftContainer image={nft001} />
                <NftContainer image={nft003} />
                <NftContainer image={nft001} />
                <NftContainer image={nft003} />
            </div>
            <div className="headings">
                <h6>NFT Creators</h6>
                <h4>Top Creators This Week</h4>
            </div>
            <div className="nft-creator">
                <CreatorsCard />
                <CreatorsCard />
                <CreatorsCard />
                <CreatorsCard />
                <CreatorsCard />
                <CreatorsCard />
                <CreatorsCard />
                <CreatorsCard />
                <CreatorsCard />
            </div>
            <div className="view-more-btn">
                <button>View Rankings</button>
            </div>
            <div className="headings">
                <h6>How to be a Creator</h6>
                <h4>Create & Sell your NFTs</h4>
            </div>
            <div className="be-a-creator">
                <div className="be-creator-box">
                    <div className="creator-box-img">
                        <img src={L1} alt="" />
                    </div>
                    <h6>Create Artwork</h6>
                    <p>Create your collection. Add social links,
                         profile & banner images and set a secondary sales fee. </p>
                </div>
                <div className="be-creator-box">
                    <div className="creator-box-img">
                        <img src={L2} alt="" />
                    </div>
                    <h6>Upload</h6>
                    <p>Upload your work, customize your NFTs
                         with properties, stats and unlockable content.
                    </p>
                </div>
                <div className="be-creator-box">
                    <div className="creator-box-img">
                        <img src={L3} alt="" />
                    </div>
                    <h6>Listing</h6>
                    <p>Set up & choose between auctions,
                         fixed price listings, and declining price listings. </p>
                </div>
            </div>
            <div className="view-more-btn">
                <button className="home-primary-btn">Create Now</button>
                <button>Watch video</button>
            </div>
            <div className="newsletter">
                <div className="newsletter-container">
                    <h2>Never miss a Drop!</h2>
                    <p>Subscribe to our super 
                        exclusive drop list and be the 
                        first to know about upcoming drops.
                    </p>
                    <div className="subscribe-box">
                        <input type="text" placeholder="Enter your email address" />
                        <button className="home-primary-btn">Subscribe</button>
                    </div>
                </div>
            </div>
            </section>
            <section className="footer">
                <div className="footer-top">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={ChitraLogo} alt="" />
                        <h2>Chitra</h2>
                    </div>
                    <div className="footer-desc">
                        <p>The Largest NFT marketplace. 
                            Authentic & truely unique digital creation. 
                            Signed & issued by the creator, made possible by blockchain technology.
                        </p>
                    </div>
                    <div className="footer-social">
                        <span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>                        </span>
                        <span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" class="svg-inline--fa fa-discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"></path></svg>
                        </span>
                        <span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"></path></svg>
                        </span>
                        <span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" class="svg-inline--fa fa-tiktok" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.2 121.2 0 0 0 1.86 22.17h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.14z"></path></svg>
                        </span>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="inner">
                        <h6>MarketPlace</h6>
                            <span>Explore</span>
                            <span>All NFT</span>
                            <span>Collectibles</span>
                            <span>Virtual worlds</span>
                    </div>
                    <div className="inner">
                        <h6>Resources</h6>
                        <span>Help center</span>
                        <span>Pertners</span>
                        <span>Blog</span>
                        <span>Docs </span>
                        <span>Newsletter </span>
                    </div>
                    <div className="inner">
                        <h6>Company</h6>
                        <span>About Us</span>
                        <span>Careers</span>
                        <span>Support</span>
                    </div>
                  </div>
                </div>
                <div className="footer-credit">
                    <span> &copy; {newYear} Chitra. All Right Reserved. </span>
                    <span> Created by <a href="https://github.com/fahimeshti">@fahimesti</a></span>
                </div>
            </section>
        </div>
    );
};

export default Homepage;