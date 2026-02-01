import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";
import { storeIcon, customerIcon, riderIcon } from "../../../utils/mapIcons";

type Props = {
  riderLocation: {
    latitude: number;
    longitude: number;
  };
};

const ROUTE: [number, number][] = [
  [18.559000, 73.786800], // 🏪 Store (UNCHANGED)

  [18.557900, 73.789200],
  [18.556400, 73.791800],
  [18.554900, 73.794300],
  [18.553200, 73.797100],
  [18.551300, 73.800000],
  [18.549100, 73.803200],
  [18.547200, 73.806000],
  [18.545300, 73.808800],

  [18.543500, 73.811600], // 🏠 Customer
];


function FollowRider({ pos }: { pos: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(pos, map.getZoom(), {
      animate: true,
      duration: 1,
    });
  }, [pos, map]);

  return null;
}

export default function ActiveDeliveryMap({ riderLocation }: Props) {
  const riderPos: [number, number] = [
    riderLocation.latitude,
    riderLocation.longitude,
  ];

  return (
    <MapContainer center={riderPos} zoom={15} style={{ height: 400 }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Polyline positions={ROUTE} pathOptions={{ color: "#2563eb" }} />

      <FollowRider pos={riderPos} />

      {/* 🏪 Store – black */}
      <Marker position={ROUTE[0]} icon={storeIcon} />

      {/* 🏠 Customer – red */}
      <Marker
        position={ROUTE[ROUTE.length - 1]}
        icon={customerIcon}
      />

      {/* 🚴 Rider – blue bike */}
      <Marker position={riderPos} icon={riderIcon} />
    </MapContainer>
  );
}
