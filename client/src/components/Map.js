
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

// import ChangeView from "./ChangeView";

function Map(props) {
  return (
    <MapContainer id="map-container"
      center={props.center}
      zoom={12}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={true}
      touchZoom={false}
      style={{
        height: "500px",
        width: "500px",
        zIndex: 0,
        
        
      }}
    >
      {/* <ChangeView center={props.center} zoom={props.zoom} /> */}
      <TileLayer
        url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"
        attribution='Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
      />

      <Marker position={[40.6867628, -73.9547501]}>
        <Popup>
          <Link to={"/restaurant/do-or-dive"}>Do or Dive</Link>
        </Popup>
      </Marker>
      <Marker position={[40.6885852, -73.9419114]}>
        <Popup>
          <Link to={"/restaurant/the-coyote-club"}>The Coyote Club</Link>
        </Popup>
      </Marker>
      <Marker position={[40.7288139, -73.98966236200172]}>
        <Popup>
          <Link to={"/restaurant/mcSorley's-old-ale-house"}>
            McSorley's Old Ale House
          </Link>
        </Popup>
      </Marker>
      <Marker position={[40.70885025, -73.95788101547618]}>
        <Popup>
          <Link to={"/restaurant/duff's-brooklyn"}>Duff's Brooklyn</Link>
        </Popup>
      </Marker>
      <Marker position={[40.717863, -73.9851883]}>
        <Popup>
          <Link to={"/restaurant/nakamura"}>Nakamura</Link>
        </Popup>
      </Marker>
      <Marker position={[40.6799138, -73.9429674]}>
        <Popup>
          <Link to={"/restaurant/fulton-ale-house"}>Fulton Ale House</Link>
        </Popup>
      </Marker>
      <Marker position={[40.652414294218424, -74.00338851736798]}>
        <Popup>
          <Link to={"/restaurant/tacos-el-bronco"}>Tacos El Bronco</Link>
        </Popup>
      </Marker>
      <Marker position={[40.738246399999994, -73.98321372069306]}>
        <Popup>
          <Link to={"/restaurant/molly's-shebeen"}>Molly's Shebeen</Link>
        </Popup>
      </Marker>
      <Marker position={[40.6825734, -73.993138]}>
        <Popup>
          <Link to={"/restaurant/zombie-hut"}>Zombie Hut</Link>
        </Popup>
      </Marker>
      <Marker position={[40.7214424,-73.9573563]}>
        <Popup>
          <Link to={"/restaurant/brooklyn-brewery"}>Brooklyn Brewery</Link>
        </Popup>
      </Marker>
      <Marker position={[40.7310814,-74.0027985]}>
        <Popup>
          <Link to={"/restaurant/tacombi"}>Tacombi</Link>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
