import React from 'react';

// const hocforsearch = (WrappedComponent, props) => {
//   class hocforsearch extends React.Component {
//     render() {
//       console.log(WrappedComponent);
//       return (
//         <div className="inhoc">
//           <WrappedComponent {...this.props} />{' '}
//         </div>
//       );
//     }
//   }
//   return hocforsearch;
// };
// export default hocforsearch;

function hocforsearch(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData
      };
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
export default hocforsearch;
