import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { NearbyOrderResponseDto } from "../types/delivery";
import { storeIcon, riderIcon } from "../../../utils/mapIcons";

type Props = {
  orders: NearbyOrderResponseDto[];
};

// Demo rider location
const RIDER_LOCATION: [number, number] = [18.5832, 73.7634];

export default function NearbyOrdersMap({ orders }: Props) {
  if (!orders.length) return <p>No nearby orders</p>;

  const center: [number, number] = [
    orders[0].deliveryLatitude,
    orders[0].deliveryLongitude,
  ];

  return (
    <MapContainer center={center} zoom={14} style={{ height: 350 }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* 🏪 Store – black pin */}
      {orders.map(order => (
        <Marker
          key={order.orderId}
          position={[order.storeLatitude, order.storeLongitude]}
          icon={storeIcon}
        >
          <Popup>
            <strong>Store</strong><br />
            Order #{order.orderId}
          </Popup>
        </Marker>
      ))}

      {/* 🚴 Rider – blue bike */}
      <Marker position={RIDER_LOCATION} icon={riderIcon}>
        <Popup>You (Delivery Partner)</Popup>
      </Marker>
    </MapContainer>
  );
}
