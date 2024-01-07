import { Marker } from "react-leaflet";
import L from "leaflet";
//defaultMarker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});