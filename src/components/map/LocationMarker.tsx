import { LatLng } from "leaflet";
import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

interface Props {
    position: LatLng;
    editable: boolean;
    name?: string;
}

const LocationMarker: React.FC<Props> = ({ position, editable, name }) => {
    const [marker, setMarker] = React.useState(position);

    useMapEvents({
        click(e) {
            if (!editable) return;
            setMarker(e.latlng);
        }
    });

    return (
        <>
            <Marker position={marker}>
                {!editable && name && <Popup>{name}</Popup>}
            </Marker>
        </>
    );
};

export default LocationMarker;