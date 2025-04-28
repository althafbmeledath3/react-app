import React from 'react';
import './App.css';

class App extends React.Component {

  data = [
    { name: "Porshe", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/some-shots-of-the-porsche-gt3rs-992-v0-h75duwnbnbyb1.webp", price: 35000000 },
    { name: "Porshe", path: "public/223804-1002119-car-20240229-133425-992-gt3rs-23.webp", price: 35000000 },
    { name: "test", path: "public/land_rover_defender_110_v8_carpathian_edition_2021_7_4k_5k_hd_cars.jpg", price: 35000000 },
    { name: "Porshe", path: "public/ford_mustang_dark_horse_2024_car_4k_8k_hd_cars.jpg", price: 35000000 },
    { name: "test", path: "public/181773-2560x1440-desktop-hd-jeep-wallpaper.jpg", price: 35000000 },
    { name: "test", path: "public/223804-1002119-car-20240229-133426-992-gt3rs-30.webp", price: 35000000 },
    { name: "Porshe", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/1357373.jpeg", price: 35000000 }
  ];

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="logo">
            CarWow
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Sell Your Car</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="container">
          {this.data.map((dt, index) => (
            <div key={index} className="car-card">
              <img src={dt.path} alt={dt.name} className="car-image" />
              <h2 className="car-name">Name: {dt.name}</h2>
              <h2 className="car-price">Price: ${dt.price}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
