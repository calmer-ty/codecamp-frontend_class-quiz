import LazyLoad from "react-lazyload";
// import MyComponent from "./MyComponent";
const imgStyle = {
  width: "500px",
};

export default function LazyloadPreload(): JSX.Element {
  return (
    <>
      <div className="list">
        <LazyLoad height={200}>
          <img
            style={imgStyle}
            src="https://upload.wikimedia.org/wikipedia/commons/8/85/%22_Shot_From_The_Sky%22_Army_Show_1945_Oak_Ridge_%2824971013612%29.jpg"
          />
          Lazy loading images is supported out of box, no extra config needed,
          set `height` for better experience
        </LazyLoad>
        <LazyLoad height={800}>
          <img
            style={imgStyle}
            src="https://upload.wikimedia.org/wikipedia/commons/7/7d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29.jpg"
          />
          Lazy loading images is supported out of box, no extra config needed,
          set `height` for better experience
        </LazyLoad>
        {/* <LazyLoad height={200} once>
          Once this component is loaded, LazyLoad will not care about it
          anymore, set this to `true` if you're concerned about improving
          performance
        </LazyLoad>
        <LazyLoad height={200} offset={100}>
          This component will be loaded when it's top edge is 100px from
          viewport. It's useful to make user ignorant about lazy load effect.
        </LazyLoad> */}
      </div>
      {/* <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/8/85/%22_Shot_From_The_Sky%22_Army_Show_1945_Oak_Ridge_%2824971013612%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/8/85/%22_Shot_From_The_Sky%22_Army_Show_1945_Oak_Ridge_%2824971013612%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/8/85/%22_Shot_From_The_Sky%22_Army_Show_1945_Oak_Ridge_%2824971013612%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/8/85/%22_Shot_From_The_Sky%22_Army_Show_1945_Oak_Ridge_%2824971013612%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/8/85/%22_Shot_From_The_Sky%22_Army_Show_1945_Oak_Ridge_%2824971013612%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/8/85/%22_Shot_From_The_Sky%22_Army_Show_1945_Oak_Ridge_%2824971013612%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/8/85/%22_Shot_From_The_Sky%22_Army_Show_1945_Oak_Ridge_%2824971013612%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29.jpg"
      />
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/%22_The_Calutron_Girls%22_Y-12_Oak_Ridge_1944_Large_Format_%2832093954911%29_%282%29.jpg"
      /> */}
    </>
  );
}
