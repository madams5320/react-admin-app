import './Widget.scss';

// import material ui icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined';

const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            {/* title, counter, link */}
            <span className="title">USERS</span>
            <span className="counter">21312</span>
            <span className="link">See all user</span>
        </div>
        <div className="right">
            {/* percentage & icons */}
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                20 %
            </div>
            <PersonOutlineIcon className="icon" />
        </div>
    </div>
  )
}

export default Widget