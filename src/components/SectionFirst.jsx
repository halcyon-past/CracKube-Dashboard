import './SectionFirst.css'

function SectionFirst() {
  return (
    <div className="SectionFirst">
        <div className="left">
            <div className="balance">
                <div className="curr">Current Balance</div>
                <div className="amt">$ 82,683.82</div>
                <div className="acc">1234 **** 9876</div>
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="73" height="45" viewBox="0 0 83 51" fill="none">
                    <circle opacity="0.15" cx="25.5" cy="25.5" r="25.5" fill="white"/>
                    <circle opacity="0.15" cx="57.5" cy="25.5" r="25.5" fill="white"/>
                    </svg>
                </div>
            </div>  
            <div className="payment">
                <div className="header">
                    <span>Payment Due</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4"/>
                    <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4"/>
                    <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4"/>
                    </svg>
                </div>
                <div className="records">
                    <div className="item_header">
                        <label>
                            <input type="checkbox" />
                            <span className="checks">Ads Id</span>
                        </label>
                        <span>Social Network</span>
                        <span>Total Spend</span>
                        <span>Status</span>
                        <span>⠀⠀⠀⠀⠀</span>
                    </div>
                    <div className="item">
                        <label>
                            <input type="checkbox" />
                            <span className="checks">#AD-001234</span>
                        </label>
                        <span>Instagram</span>
                        <span className="cash">$ 539.28</span>
                        <span className="status unpaid">Unpaid</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#828282"/>
                        <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#828282"/>
                        <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#828282"/>
                        </svg>
                    </div>
                    <div className="item">
                        <label>
                            <input type="checkbox" />
                            <span className="checks">#AD-001234</span>
                        </label>
                        <span>Youtube</span>
                        <span className="cash">$ 539.28</span>
                        <span className="status unpaid">Unpaid</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#828282"/>
                        <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#828282"/>
                        <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#828282"/>
                        </svg>
                    </div>
                    <div className="item">
                        <label>
                            <input type="checkbox" />
                            <span className="checks">#AD-001234</span>
                        </label>
                        <span>Facebook</span>
                        <span className="cash">$ 539.28</span>
                        <span className="status unpaid">Unpaid</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#828282"/>
                        <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#828282"/>
                        <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#828282"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="header">
                <span>Latest Transaction</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4"/>
                <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4"/>
                <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4"/>
                </svg>
            </div>
            <div className="records">
                <div className="item_header">
                    <label>
                        <input type="checkbox" />
                        <span className="checks">Ads Id</span>
                    </label>
                    <span>Total Spend</span>
                    <span>Status</span>
                </div>
                <div className="item">
                    <label>
                        <input type="checkbox" />
                        <span className="checks">50% OFF Floor Lamp Get it Now!</span>
                    </label>
                    <span className="cash">$ 539.28</span>
                    <span className="status paid">Paid</span>
                </div>
                <div className="item">
                    <label>
                        <input type="checkbox" />
                        <span className="checks">50% OFF Floor Lamp Get it Now!</span>
                    </label>
                    <span className="cash">$ 349.28</span>
                    <span className="status paid">Paid</span>
                </div>
                <div className="item">
                    <label>
                        <input type="checkbox" />
                        <span className="checks">Lorem Ipsum sit dolor amet</span>
                    </label>
                    <span className="cash">$ 569.28</span>
                    <span className="status paid">Paid</span>
                </div>
                <div className="item">
                    <label>
                        <input type="checkbox" />
                        <span className="checks">50% OFF Floor Lamp Get it Now!</span>
                    </label>
                    <span className="cash">$ 564.28</span>
                    <span className="status paid">Paid</span>
                </div>
                <div className="item">
                    <label>
                        <input type="checkbox" />
                        <span className="checks">50% OFF Floor Lamp Get it Now!</span>
                    </label>
                    <span className="cash">$ 507.28</span>
                    <span className="status paid">Paid</span>
                </div>
                <div className="item">
                    <label>
                        <input type="checkbox" />
                        <span className="checks">Lorem Ipsum sit 50% OFF</span>
                    </label>
                    <span className="cash">$ 123.28</span>
                    <span className="status paid">Paid</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFirst