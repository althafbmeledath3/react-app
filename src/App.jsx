import React from 'react';
import './App.css';
import Nav from './components/nav';
import Card from './components/card';
class App extends React.Component {

  data = [
    { name: "Porshe", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/some-shots-of-the-porsche-gt3rs-992-v0-h75duwnbnbyb1.webp", price: 35000000 },
    { name: "Porshe", path: "/223804-1002119-car-20240229-133425-992-gt3rs-23.webp", price: 35000000 },
    { name: "test", path: "/land_rover_defender_110_v8_carpathian_edition_2021_7_4k_5k_hd_cars.jpg", price: 35000000 },
    { name: "Porshe", path: "/ford_mustang_dark_horse_2024_car_4k_8k_hd_cars.jpg", price: 35000000 },
    { name: "test", path: "/181773-2560x1440-desktop-hd-jeep-wallpaper.jpg", price: 35000000 },
    { name: "test", path: "/223804-1002119-car-20240229-133426-992-gt3rs-30.webp", price: 35000000 },
    { name: "Porshe", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/1357373.jpeg", price: 35000000 },
    { name: "test", path: "/1357373.jpeg", price: 35000000 }
  ];

  render() {
    return (
      <div>
       <Nav></Nav>

        <div className="container">
          {this.data.map((dt, index) => (
            <div  className="car-card" key={index}>
             <Card  name={dt.name} price={dt.price} path={dt.path} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
