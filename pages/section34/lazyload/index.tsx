import LazyLoad from "react-lazyload";
// import MyComponent from "./MyComponent";
const divStyle = {
  width: "500px",
  height: "400px",
  backgroundColor: "blue",
};
const imgStyle = {
  height: "400px",
};

export default function Lazyload(): JSX.Element {
  return (
    <>
      <div className="list">
        <div style={divStyle}></div>
        <div style={divStyle}></div>
        <div style={divStyle}></div>
        <div style={divStyle}></div>
        <div style={divStyle}></div>
        <LazyLoad height={400}>
          <img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/8/85/%22_Shot_From_The_Sky%22_Army_Show_1945_Oak_Ridge_%2824971013612%29.jpg" />
          Lazy loading images is supported out of box, no extra config needed, set `height` for better experience
        </LazyLoad>
      </div>
    </>
  );
}
