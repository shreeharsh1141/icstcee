import "./Map.css"


const Map = () => {
    return (

        <div className="map container-fluid" >
            <div className="row">
                <div className="col-12 text-center">
           <iframe className="map-src" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7291172872892!2d77.63310401482352!3d13.116339290761024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19721a651fd3%3A0xdee225fe28f600f6!2sREVA%20University!5e0!3m2!1sen!2sin!4v1677925719592!5m2!1sen!2sin" title="Reva University Map" width="80%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
           </div>
        </div>
    )
}

export default Map