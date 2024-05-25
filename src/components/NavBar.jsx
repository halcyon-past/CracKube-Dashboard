import './NavBar.css'
import profile from '../assets/profile.png'

function NavBar() {
  return (
    <div className="NavBar">
        <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M14.0617 23.3113C16.2963 23.3114 18.4669 22.5956 20.2298 21.2772L26.8806 27.6629C27.3774 28.1236 28.1691 28.1104 28.6489 27.6334C29.117 27.1681 29.117 26.4303 28.6489 25.965L21.9981 19.5793C25.4053 15.3681 24.6119 9.3023 20.2259 6.03089C15.8399 2.75948 9.52239 3.52128 6.11519 7.73247C2.70799 11.9437 3.50141 18.0095 7.8874 21.2809C9.65315 22.5979 11.8257 23.3124 14.0617 23.3113ZM8.71787 8.52615C11.6692 5.69235 16.4543 5.6923 19.4058 8.52604C22.3572 11.3598 22.3572 15.9542 19.4059 18.788C16.4545 21.6218 11.6694 21.6218 8.71797 18.7881C8.71792 18.788 8.71792 18.788 8.71787 18.788C5.7665 15.9749 5.74911 11.3972 8.67897 8.56349C8.69192 8.55101 8.70487 8.53858 8.71787 8.52615Z" fill="#2BC155"/>
            </svg>
            <input type="text" placeholder="Search here" />
        </div>
        <div className="notif">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08431 16.085V15.8295C4.12179 15.0736 4.36404 14.3412 4.78609 13.7079C5.4886 12.947 5.9695 12.0147 6.17834 11.0086C6.17834 10.2311 6.17834 9.4424 6.24626 8.66484C6.59715 4.92146 10.2985 2.33331 13.9546 2.33331H14.0451C17.7012 2.33331 21.4026 4.92146 21.7648 8.66484C21.8327 9.4424 21.7648 10.2311 21.8214 11.0086C22.033 12.017 22.5134 12.9522 23.2136 13.719C23.6388 14.3467 23.8815 15.0764 23.9154 15.8295V16.0738C23.9407 17.0894 23.5909 18.0796 22.9306 18.8619C22.0581 19.7767 20.8741 20.3458 19.6028 20.4615C15.8748 20.8614 12.1135 20.8614 8.38557 20.4615C7.11568 20.3408 5.93339 19.7725 5.05775 18.8619C4.40768 18.079 4.06262 17.0947 4.08431 16.085Z" stroke="#2BC155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.1474 24.327C11.7299 25.0581 12.5853 25.5313 13.5243 25.6418C14.4632 25.7523 15.4084 25.491 16.1505 24.9157C16.3787 24.7456 16.5841 24.5478 16.7617 24.327" stroke="#2BC155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="bubble"></div>
        </div>
        <div className="message">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1457 10.5713L15.1693 14.5779C14.2276 15.3163 12.9074 15.3163 11.9657 14.5779L6.94659 10.5713" stroke="#FD6162" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.03583 4.08331H19.0351C20.621 4.1011 22.1305 4.77156 23.212 5.93855C24.2935 7.10554 24.8525 8.66718 24.7589 10.2598V17.8756C24.8525 19.4682 24.2935 21.0299 23.212 22.1969C22.1305 23.3639 20.621 24.0343 19.0351 24.0521H8.03583C4.62927 24.0521 2.33331 21.2808 2.33331 17.8756V10.2598C2.33331 6.85467 4.62927 4.08331 8.03583 4.08331Z" stroke="#FD6162" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="bubble"></div>
        </div>
        <div className="settings">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2744 8.89418L23.5482 7.63407C22.9339 6.56783 21.5725 6.2 20.5048 6.8118V6.8118C19.9965 7.11119 19.3901 7.19614 18.8191 7.04789C18.2482 6.89965 17.7597 6.5304 17.4613 6.02156C17.2693 5.69813 17.1662 5.32975 17.1623 4.95367V4.95367C17.1796 4.35072 16.9521 3.76643 16.5317 3.33391C16.1112 2.90139 15.5336 2.65747 14.9304 2.65772H13.4674C12.8764 2.65771 12.3098 2.89319 11.893 3.31206C11.4761 3.73093 11.2433 4.29865 11.2462 4.8896V4.8896C11.2287 6.10971 10.2345 7.08957 9.01429 7.08945C8.63821 7.08554 8.26983 6.98239 7.9464 6.79044V6.79044C6.8787 6.17864 5.51726 6.54647 4.90292 7.61271L4.12336 8.89418C3.50977 9.95909 3.87259 11.3197 4.93496 11.9377V11.9377C5.62551 12.3363 6.05091 13.0731 6.05091 13.8705C6.05091 14.6679 5.62551 15.4047 4.93496 15.8034V15.8034C3.87394 16.4172 3.51072 17.7745 4.12336 18.8362V18.8362L4.86021 20.107C5.14805 20.6264 5.631 21.0096 6.20218 21.172C6.77337 21.3343 7.38571 21.2623 7.90368 20.972V20.972C8.41289 20.6749 9.01968 20.5935 9.58919 20.7459C10.1587 20.8983 10.6437 21.2718 10.9365 21.7836C11.1284 22.107 11.2316 22.4754 11.2355 22.8515V22.8515C11.2355 24.0841 12.2347 25.0833 13.4674 25.0833H14.9304C16.1589 25.0834 17.1564 24.0906 17.1623 22.8621V22.8621C17.1594 22.2693 17.3936 21.7 17.8128 21.2808C18.232 20.8616 18.8013 20.6274 19.3942 20.6303C19.7693 20.6403 20.1362 20.743 20.462 20.9293V20.9293C21.5269 21.5429 22.8875 21.18 23.5055 20.1177V20.1177L24.2744 18.8362C24.572 18.3254 24.6537 17.717 24.5014 17.1457C24.349 16.5745 23.9753 16.0875 23.4628 15.7927V15.7927C22.9503 15.4979 22.5766 15.011 22.4242 14.4397C22.2719 13.8685 22.3536 13.2601 22.6512 12.7492C22.8447 12.4114 23.1249 12.1312 23.4628 11.9377V11.9377C24.5188 11.32 24.8808 9.96737 24.2744 8.90485V8.90485V8.89418Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <ellipse cx="14.2042" cy="13.8706" rx="3.07552" ry="3.07551" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="bubble"></div>
        </div>
        <div className="profile">
            <div className="details">
                <div className="name">Samantha</div>
                <div className="id">Peterdraw.co</div>
            </div>
            <div className="avatar">
                <img src={profile} alt="profile picture"/>
            </div>
        </div>

    </div>
  )
}

export default NavBar