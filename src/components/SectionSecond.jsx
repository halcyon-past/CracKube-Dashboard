import './SectionSecond.css'

function SectionSecond() {
  return (
    <div className='SectionSecond'>
        <div className="left">
            <div className="header">
                <span>Transfer</span>
            </div>
            <p>Transfer to</p>
            <input type="text" placeholder="Kevin.ta@mail.coz" />
            <p>Amount</p>
            <input type="text" placeholder="Enter amount" />
            <p>Your Pin</p>
            <div className="pin">
                <input type="password" placeholder="⬤⬤⬤⬤⬤⬤" />
                <span>Transfer</span>
            </div>
        </div>
        <div className="right">
            <div className="header">
                <span>Billing Info</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4"/>
                <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4"/>
                <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4"/>
                </svg>
            </div>
            <div className="records">
                <div className="item_header">
                    <span>Company</span>
                    <span>Address</span>
                    <span>Amount</span>
                    <span>Status</span>
                    <span>⠀⠀⠀⠀⠀</span>
                </div>
                <div className="item">
                    <div className="user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <circle cx="16.5" cy="16.5" r="16.5" fill="#2BC155"/>
                    <path d="M19.3303 21.3717H13.3566L12.3681 24.2297H9.2093L14.6029 9.2093H18.1055L23.4991 24.2297H20.3188L19.3303 21.3717ZM18.5138 18.965L16.3434 12.6904L14.1731 18.965H18.5138Z" fill="#202020"/>
                    </svg>
                    <span>Peterdraw.co</span>
                    </div>
                    <span>New York Steel 16th</span>
                    <span className="cash">$ 122,42.93</span>
                    <span className="status paid">Unpaid</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2153 11.0708C18.2153 13.3988 16.3273 15.2855 13.9993 15.2855C11.6713 15.2855 9.78467 13.3988 9.78467 11.0708C9.78467 8.74146 11.6713 6.8548 13.9993 6.8548C16.3273 6.8548 18.2153 8.74146 18.2153 11.0708Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9974 20.8065C19.0747 20.8065 23.7187 17.1559 26.3334 11.0705C23.7187 4.9852 19.0747 1.33453 13.9974 1.33453H14.0027C8.92535 1.33453 4.28135 4.9852 1.66669 11.0705C4.28135 17.1559 8.92535 20.8065 14.0027 20.8065H13.9974Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="item">
                    <div className="user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <circle cx="16.5" cy="16.5" r="16.5" fill="#FD6162"/>
                    <path d="M19.3303 21.3717H13.3566L12.3681 24.2297H9.2093L14.6029 9.2093H18.1055L23.4991 24.2297H20.3188L19.3303 21.3717ZM18.5138 18.965L16.3434 12.6904L14.1731 18.965H18.5138Z" fill="#202020"/>
                    </svg>
                    <span>Bridgestone.co</span>
                    </div>
                    <span>New York Steel 16th</span>
                    <span className="cash">$ 122,42.93</span>
                    <span className="status pending">Unpaid</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2153 11.0708C18.2153 13.3988 16.3273 15.2855 13.9993 15.2855C11.6713 15.2855 9.78467 13.3988 9.78467 11.0708C9.78467 8.74146 11.6713 6.8548 13.9993 6.8548C16.3273 6.8548 18.2153 8.74146 18.2153 11.0708Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9974 20.8065C19.0747 20.8065 23.7187 17.1559 26.3334 11.0705C23.7187 4.9852 19.0747 1.33453 13.9974 1.33453H14.0027C8.92535 1.33453 4.28135 4.9852 1.66669 11.0705C4.28135 17.1559 8.92535 20.8065 14.0027 20.8065H13.9974Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="item">
                    <div className="user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <circle cx="16.5" cy="16.5" r="16.5" fill="#369DC9"/>
                    <path d="M19.3303 21.3717H13.3566L12.3681 24.2297H9.2093L14.6029 9.2093H18.1055L23.4991 24.2297H20.3188L19.3303 21.3717ZM18.5138 18.965L16.3434 12.6904L14.1731 18.965H18.5138Z" fill="#202020"/>
                    </svg>
                    <span>Sevenma.id</span>
                    </div>
                    <span>New York Steel 16th</span>
                    <span className="cash">$ 122,42.93</span>
                    <span className="status paid">Unpaid</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2153 11.0708C18.2153 13.3988 16.3273 15.2855 13.9993 15.2855C11.6713 15.2855 9.78467 13.3988 9.78467 11.0708C9.78467 8.74146 11.6713 6.8548 13.9993 6.8548C16.3273 6.8548 18.2153 8.74146 18.2153 11.0708Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9974 20.8065C19.0747 20.8065 23.7187 17.1559 26.3334 11.0705C23.7187 4.9852 19.0747 1.33453 13.9974 1.33453H14.0027C8.92535 1.33453 4.28135 4.9852 1.66669 11.0705C4.28135 17.1559 8.92535 20.8065 14.0027 20.8065H13.9974Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="item">
                    <div className="user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <circle cx="16.5" cy="16.5" r="16.5" fill="#D45BFF"/>
                    <path d="M19.3303 21.3717H13.3566L12.3681 24.2297H9.2093L14.6029 9.2093H18.1055L23.4991 24.2297H20.3188L19.3303 21.3717ZM18.5138 18.965L16.3434 12.6904L14.1731 18.965H18.5138Z" fill="#202020"/>
                    </svg>
                    <span>Wowcracky</span>
                    </div>
                    <span>New York Steel 16th</span>
                    <span className="cash">$ 122,42.93</span>
                    <span className="status unpaid">Unpaid</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2153 11.0708C18.2153 13.3988 16.3273 15.2855 13.9993 15.2855C11.6713 15.2855 9.78467 13.3988 9.78467 11.0708C9.78467 8.74146 11.6713 6.8548 13.9993 6.8548C16.3273 6.8548 18.2153 8.74146 18.2153 11.0708Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9974 20.8065C19.0747 20.8065 23.7187 17.1559 26.3334 11.0705C23.7187 4.9852 19.0747 1.33453 13.9974 1.33453H14.0027C8.92535 1.33453 4.28135 4.9852 1.66669 11.0705C4.28135 17.1559 8.92535 20.8065 14.0027 20.8065H13.9974Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionSecond