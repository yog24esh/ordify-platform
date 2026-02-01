import L from "leaflet";

import storeBlack from "../assets/store-black.png";
import customerRed from "../assets/customer-red.png";
import bikeBlue from "../assets/bike-blue.png";

/**
 * 🏪 Store (Black Pin)
 */
export const storeIcon = L.icon({
  iconUrl: storeBlack,
  iconSize: [28, 42],
  iconAnchor: [14, 42],
  popupAnchor: [0, -36],
});

/**
 * 🏠 Customer (Red Pin)
 */
export const customerIcon = L.icon({
  iconUrl: customerRed,
  iconSize: [28, 42],
  iconAnchor: [14, 42],
  popupAnchor: [0, -36],
});

/**
 * 🚴 Rider (Blue Bike)
 */
export const riderIcon = L.icon({
  iconUrl: bikeBlue,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
});
