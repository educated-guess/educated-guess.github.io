import React, { Component } from "react";

export class Gallery extends Component {
  state = {
    items: [
      { image: "20191229_105007.jpg", name: "Bathroom" },
      { image: "20191229_105133.jpg", name: "Bathroom" },
      { image: "20191229_105140.jpg", name: "Bathroom" },
      { image: "20200802_095636_resized_1.jpg", name: "Salon" },
      { image: "20200802_100608_resized_1.jpg", name: "Salon" },
      { image: "20200802_100618_resized_1.jpg", name: "Salon" },
      { image: "20200810_160339_resized.jpg", name: "Laundry" },
      { image: "20200810_160451_resized.jpg", name: "Bathroom" },
      { image: "DSC03032.JPG", name: "Bathroom" },
      { image: "DSC03042.JPG", name: "Bathroom" },
      { image: "DSC03046.JPG", name: "Bathroom" },
      { image: "ErinsRoomMarch.jpg", name: "Living Room" },
      { image: "LaundryRoom3.jpg", name: "Laundry" },
      { image: "LaundryRoom.jpg", name: "Laundry" },
      { image: "20200817_100448_resized.jpg", name: "Tile Floor" },
      { image: "20200817_100705_resized.jpg", name: "Mantel" },
      { image: "20200817_100725_resized.jpg", name: "Roller Blinds" },
      { image: "20200817_100836_resized.jpg", name: "Backsplash" },
    ],
  };
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
          </div>
          {this.state.items.map((item) => (
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href={"img/portfolio/large/" + item.image}
                    title={item.name}
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>{item.name}</h4>
                    </div>
                    <img
                      src={"img/portfolio/small/" + item.image}
                      className="img-responsive"
                      alt={item.name}
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
