import Image from '../imgs/marker.png'

function Entry(props) {
    return (
        <>
            <article className="journey-entry">
                <div className="main-img-container">
                    <img className="main-img" src={props.img.src} alt={props.img.alt} />
                </div>
                <div className="japan-container">
                    <div className="marker-container">
                        <img className="marker-img" src={Image} alt="marker" />
                        <span className="japan">{props.country}</span>
                        <a className="jp-link" href={props.googleMapsLink} target="_blank">View on Google maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <div className="p-container">
                        <p className="date">{props.dates}</p>
                        <p className="facts">{props.text}</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Entry;