<<<<<<< Updated upstream
import { Carousel } from "react-bootstrap";
import {gpuImage } from "../img/"
const ItemCarousel = () =>{
    return (
      <>
        <Carousel variant="dark">
          <Carousel.Item  interval={1000}>
            <img
              className="d-block w-100"
              src='.'
              alt="pp"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="../img"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </>
    );

}
export default ItemCarousel;
=======
import { Carousel } from "react-bootstrap"
import '../css/itemCarousel.css'
export default function ItemCarousel() {
  return (<>
    <Carousel variant="light">
      <Carousel.Item>
        <img
          className="item-photo d-block w-100"
          src="https://cdn.vox-cdn.com/thumbor/s0V50B4OAK9K05tKM0IOEXcSFn0=/0x0:2450x1628/1400x788/filters:focal(1225x814:1226x815)/cdn.vox-cdn.com/uploads/chorus_asset/file/20081590/ps5.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-photo d-block w-100"
          src="https://www.nvidia.com/content/dam/en-zz/Solutions/ces-2023/geforce-rtx-40-series-laptops-available-february-8/geforce-rtx-40-series-laptop-announement-ces-2023.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-photo d-block w-100"
          src="https://www.techquila.co.in/wp-content/uploads/2019/07/0001-ASUS-X570-Fighting-Guide.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </>)
}
>>>>>>> Stashed changes
