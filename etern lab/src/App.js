import Slider from "./components/Slider";

const App = () => {
  const slides = [
    { url: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg", title: "" },
    { url: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg", title: "" },
    { url: "https://media.istockphoto.com/photos/hd-wallpaper-for-mobile-phones-picture-id1257005098?b=1&k=20&m=1257005098&s=170667a&w=0&h=je8sgDZ9o62xavDKDHVSaAE4M6wug7Yt5vOaPI0VHFo=", title: "" },
    { url: "https://images8.alphacoders.com/118/1186452.jpg", title: "" },
    { url: "https://wallpaperaccess.com/full/3678503.png", title: "" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default App;