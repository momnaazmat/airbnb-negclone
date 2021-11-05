import { useState } from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // const coordinates = searchResults.map((result) => ({
    //     longitude: result.long,
    //     latitude: result.lat,
    // }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });
    
    return( 
        <ReactMapGL 
            mapStyle="mapbox://styles/momnaazmat/ckv3vd8hx538m14o3bhi1138u" 
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport) }
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p role="img" onClick={() => setSelectedLocation(result)} className="cursor-pointer text-xl animate-bounce" aria-label="push-pin">
                        📌
                        </p>
                    </Marker>

                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ):(
                        false
                    )}

                </div>
            ))}
        </ReactMapGL>
    );
}

export default Map;
