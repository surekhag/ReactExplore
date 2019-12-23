import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
export default class LoaderModule extends React.Component {
  //other logic
  render() {
    return <Loader type="Oval" color="#A9A9A9" height={100} width={100} />;
  }
}
