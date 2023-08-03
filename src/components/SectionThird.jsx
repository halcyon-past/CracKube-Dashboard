import './SectionThird.css'

function SectionThird() {
  return (
    <div className="SectionThird">
        <div className="left">
            <div className="header">
                <span>Add Balance Form</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4"/>
                <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4"/>
                <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4"/>
                </svg>
            </div>
            <div className="top">
                <div className="section_1">
                    <span className="star">Campaign Name</span>
                    <input type="text" placeholder="50% OFF Dimsum Shuky Nacky" />
                </div>
                <div className="section_2">
                    <span className="star">Due Date</span>
                    <div className="Date">
                        <input type="text" placeholder="23 March 2021" />
                        <span className='img'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                            <path d="M1.12354 11.539H24.8888" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.9228 16.7463H18.9351" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.0061 16.7463H13.0185" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.07718 16.7463H7.08954" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.9228 21.9283H18.9351" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.0061 21.9283H13.0185" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.07718 21.9283H7.08954" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.3916 1.66669V6.05439" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.62068 1.66669V6.05439" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.651 3.77228H7.36128C3.4457 3.77228 1 5.95352 1 9.96298V22.0292C1 26.1017 3.4457 28.3333 7.36128 28.3333H18.6387C22.5666 28.3333 25 26.1395 25 22.13V9.96298C25.0123 5.95352 22.579 3.77228 18.651 3.77228Z" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="section_3">
                    <span className="star">ID Ads</span>
                    <input type="text" placeholder="AD-213543TS" />
                </div>
                <div className="section_4">
                    <span className="star">Total Budget</span>
                    <input type="text" placeholder="$ 1432,65" />
                </div>
                <span className="send">Send</span>
            </div>
        </div>
        <div className="right">
            <div className="top">
                <span>Ad Campaign
                Tutorials Video</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                <circle cx="41" cy="41" r="40.5" stroke="white"/>
                <path d="M33.4074 57.7037L54.6667 40.2407L33.4074 22.7778" fill="white"/>
                </svg>
            </div>
            <div className="bottom">
                <span>How to make
                Great Campaign 
                Video</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                <circle cx="41" cy="41" r="40.5" stroke="white"/>
                <path d="M33.4074 57.7037L54.6667 40.2407L33.4074 22.7778" fill="white"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default SectionThird