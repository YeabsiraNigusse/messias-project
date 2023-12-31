
import './register.css'

export default function Register(){
    return(
        <div className="contents">
            <div className="discription">
                <h1>Subscribe to Our Newsletter</h1>
                <p> The Evangelical Students and Graduates Union of Ethiopia (EvaSUE) has many stories to share with you. A free subscription gives you the opportunity to stay tuned to our dynamic ministry through our monthly publication, 
                    “The Harvest.” There you can find major ministry updates, information about our upcoming events, and job opportunities. </p>
                </div>
            <div className="input">
                <input placeholder='Your Email'/>
                <button>Subscribe Now</button>
                </div>
        </div>
    )
}