import "../styles/features.css"

import first from "../assets/first.png"
import second from "../assets/second.png"
import third from "../assets/third.png"

const Features = () => {
    return(
        <div className="features-section" id="features">
                <div className="feature item">
                    <span className="icon">
                        <img src={first} alt="hey" />
                    </span>
                    <span className="title">Information</span>
                    <span className="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>

                <div className="feature item">
                    <span className="icon">
                        <img src={second} alt="hey" />
                    </span>
                    <span className="title">Data Secure</span>
                    <span className="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>

                <div className="feature item">
                    <span className="icon">
                        <img src={third} alt="hey" />
                    </span>
                    <span className="title">Add Cards</span>
                    <span className="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
            </div>
    )
}

export default Features;