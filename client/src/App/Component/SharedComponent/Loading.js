/** @format */

import React from "react";
import GifLoader from "react-gif-loader";

const imageStyle = {
  //   backgroundColor: "green",
};
export default function Loader() {
  return (
    <GifLoader
      loading={true}
      imageSrc='https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif'
      imageStyle={imageStyle}
      overlayBackground='rgba(0,0,0,0.1)'
    />
  );
}
