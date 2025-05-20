declare module "react-slick" {
  import { Component } from "react";

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: true;
  }
  export default class Slider extends React.Component<Settings> {}
}
