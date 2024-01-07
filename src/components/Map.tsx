import { MapContainer, TileLayer, type MapContainerProps } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

//defaultMarker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export type MapProps = MapContainerProps & {
  children: React.ReactNode
}


export const Map = ({
  children,
  ...props
}:MapProps) => {
  return (
    <MapContainer {...props}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  )
}