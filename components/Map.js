import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/dkountanis/cl0seqq06003514mdk1ucsw0v",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  }, []);

  return <div className={style.wrapper} id="map"></div>;
};

export default Map;
