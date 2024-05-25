import {useState} from 'react'
import "./Menu.css";

function Menu() {
  const [activeDiv,setActiveDiv] = useState(7);

  const handleActive = (num) => {
    setActiveDiv(num);
  };
  
  return (
    <div className="Menu">
      <div className={`tabs${activeDiv === 0 ? ' active' : ''}`} onClick={() => handleActive(0)}>
        <svg
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Dashboard</p>
        {activeDiv === 0 && <div className="selection"></div>}
      </div>

      <div className={`tabs${activeDiv === 1 ? ' active' : ''}`} onClick={() => handleActive(1)}>
        <svg
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2855 2H19.5521C20.9036 2 22 3.1059 22 4.47018V7.7641C22 9.12735 20.9036 10.2343 19.5521 10.2343H16.2855C14.933 10.2343 13.8366 9.12735 13.8366 7.7641V4.47018C13.8366 3.1059 14.933 2 16.2855 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.44892 2H7.71449C9.06703 2 10.1634 3.1059 10.1634 4.47018V7.7641C10.1634 9.12735 9.06703 10.2343 7.71449 10.2343H4.44892C3.09638 10.2343 2 9.12735 2 7.7641V4.47018C2 3.1059 3.09638 2 4.44892 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.44892 13.7657H7.71449C9.06703 13.7657 10.1634 14.8716 10.1634 16.2369V19.5298C10.1634 20.8941 9.06703 22 7.71449 22H4.44892C3.09638 22 2 20.8941 2 19.5298V16.2369C2 14.8716 3.09638 13.7657 4.44892 13.7657Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2855 13.7657H19.5521C20.9036 13.7657 22 14.8716 22 16.2369V19.5298C22 20.8941 20.9036 22 19.5521 22H16.2855C14.933 22 13.8366 20.8941 13.8366 19.5298V16.2369C13.8366 14.8716 14.933 13.7657 16.2855 13.7657Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Campaign</p>
        {activeDiv === 1 && <div className="selection"></div>}
      </div>

      <div className={`tabs${activeDiv === 2 ? ' active' : ''}`} onClick={() => handleActive(2)}>
        <svg
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.27002 14.9519L9.8627 9.8627L14.9519 8.27002L13.3593 13.3593L8.27002 14.9519Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="11.611"
            cy="11.611"
            r="9.61098"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Social Network</p>
        {activeDiv === 2 && <div className="selection"></div>}
      </div>

      <div className={`tabs${activeDiv === 3 ? ' active' : ''}`} onClick={() => handleActive(3)}>
        <svg
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.24481 14.7815L10.2379 10.8913L13.6521 13.5732L16.5812 9.79291"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="19.9954"
            cy="4.20021"
            r="1.9222"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9245 3.12012H7.65673C4.64529 3.12012 2.77802 5.25284 2.77802 8.26428V16.3467C2.77802 19.3581 4.60868 21.4817 7.65673 21.4817H16.2609C19.2723 21.4817 21.1396 19.3581 21.1396 16.3467V9.30776"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Spending</p>
        {activeDiv === 3 && <div className="selection"></div>}
      </div>

      <div className={`tabs${activeDiv === 4 ? ' active' : ''}`} onClick={() => handleActive(4)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.5241 9.75284C20.885 5.81944 17.544 2.89321 13.5607 2.77801C13.3713 2.77059 13.1867 2.83878 13.0477 2.96755C12.9086 3.09632 12.8264 3.27511 12.8193 3.46451V3.46451V3.52859L13.2678 10.238C13.2972 10.6896 13.6855 11.0329 14.1374 11.0068L20.865 10.5583C21.0546 10.5443 21.2308 10.4553 21.3545 10.311C21.4782 10.1666 21.5392 9.97894 21.5241 9.78946V9.75284Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.90163 6.76886C9.32959 6.66987 9.76753 6.88884 9.94511 7.2906C9.99163 7.38509 10.0196 7.48763 10.0275 7.59266C10.119 8.89243 10.3112 11.7391 10.4211 13.2769C10.4398 13.5539 10.5682 13.812 10.7778 13.9941C10.9874 14.1762 11.2609 14.2672 11.5378 14.2471V14.2471L17.1854 13.8993C17.4375 13.8841 17.6847 13.9738 17.8684 14.1472C18.0522 14.3205 18.1561 14.562 18.1556 14.8146V14.8146C17.9268 18.225 15.4765 21.076 12.1393 21.815C8.80214 22.5541 5.3773 21.004 3.73001 18.0091C3.23826 17.1472 2.92684 16.1942 2.81467 15.2082C2.76672 14.9056 2.74833 14.5991 2.75975 14.2929C2.76947 10.6509 5.32726 7.51282 8.89248 6.76886"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Analytics</p>
        {activeDiv === 4 && <div className="selection"></div>}
      </div>

      <div className={`tabs${activeDiv === 5 ? ' active' : ''}`} onClick={() => handleActive(5)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.4923 2.789H7.7533C4.6783 2.789 2.75031 4.966 2.75031 8.048V16.362C2.75031 19.444 4.6693 21.621 7.7533 21.621H16.5773C19.6623 21.621 21.5813 19.444 21.5813 16.362V12.334"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.82782 10.9209L16.3008 3.4479C17.2318 2.5179 18.7408 2.5179 19.6718 3.4479L20.8888 4.6649C21.8198 5.5959 21.8198 7.1059 20.8888 8.0359L13.3798 15.5449C12.9728 15.9519 12.4208 16.1809 11.8448 16.1809H8.09882L8.19282 12.4009C8.20682 11.8449 8.43382 11.3149 8.82782 10.9209Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1652 4.60251L19.7312 9.16851"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Form Campaign</p>
        {activeDiv === 5 && <div className="selection"></div>}
      </div>

      <div className={`tabs${activeDiv === 6 ? ' active' : ''}`} onClick={() => handleActive(6)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.55493 20.8518C10.0542 21.4784 10.7874 21.884 11.5922 21.9787C12.3971 22.0734 13.2072 21.8495 13.8433 21.3564C14.0389 21.2106 14.2149 21.041 14.3672 20.8518"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Notification</p>
        {activeDiv === 6 && <div className="selection"></div>}
      </div>

      <div className={`tabs${activeDiv === 7 ? ' active' : ''}`} onClick={() => handleActive(7)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.6389 14.3958H17.5906C16.1042 14.3949 14.8993 13.1909 14.8984 11.7045C14.8984 10.218 16.1042 9.01413 17.5906 9.01321H21.6389"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0486 11.6429H17.7369"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.03558 7.53817H12.4345"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Payment</p>
        {activeDiv === 7 && <div className="selection"></div>}
      </div>
    </div>
  );
}

export default Menu;
