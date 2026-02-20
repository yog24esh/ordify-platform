// src/utils/leafletIcon.ts

import L from "leaflet";

// These imports let the bundler resolve the image assets correctly
import icon from "leaflet/dist/images/marker-icon.png";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

// Remove the default method that points to broken URLs
delete (L.Icon.Default.prototype as any)._getIconUrl;

// Override with bundled asset URLs
L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon2x,
  iconUrl: icon,
  shadowUrl: shadow,
});