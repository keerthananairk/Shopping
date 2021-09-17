import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = { product: [] };
  }

  componentDidMount() {
    fetch("http://localhost:5002/product")
      .then(response => {
        response.json();
      })
      .then(product => {
        this.setState({ product });
      })
      .then(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.product.map(product => (
            <p>
                <li>{product.id}</li>
              <li>{product.title}</li>
              <li>{product.price}</li>
              <li>{product.image}</li>
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

export default Display;