import "../styles/newsletter.css"

const Newsletter = () => {
    return(
        <div className="newsletter-section" id="newsletter">
                <span className="title">Subscribe Newsletter</span>
                <span className="caption">Rentide updates remotely on a mobile</span>
                <span>
                    <input type="text" placeholder="Enter your mail." />
                    <button 
                    className="btn-hover active"
                    type="submit">
                    Get start
                    </button>
                </span>
            </div>
    )
}

export default Newsletter;