import React from "react";
import CreatorCard from "../commons/CreaterCard/CreaterCard.js";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

function SlideCards({ isTabletOrMobile = false }) {
  return (
    <div class="mb-24">
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#be4b47",
          fontSize: isTabletOrMobile ? 32 : "48px",
          fontWeight: 400,
          margin: "60px 0 30px 0",
        }}
      >
        Deals Are Waiting
      </div>
      <div
        class="container"
        style={{
          width: isTabletOrMobile ? "80%" : "100%",
        }}
      >
        <div className="words words--first">
          <Swiper
            slidesPerView={isTabletOrMobile ? 1 : 4}
            spaceBetween={40}
            loop={true}
            speed={4000} // slow, smooth movement
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            grabCursor={true}
            style={{
              padding: "10px",
            }}
          >
            {/* <div class="words words--first"> */}
            <SwiperSlide>
              <div class="words words--first">
                <CreatorCard
                  name="Loreal Paris color"
                  type="Loreal Styling & Salon"
                  img="https://m.media-amazon.com/images/I/51MAaw-IrGL.jpg"
                  category="Fashion"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <CreatorCard
                name="Maharaja Burger"
                type="Rolling Panda FoodHub"
                img="https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png"
                category="Food"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CreatorCard
                name="Hair Styling @2999"
                type="Jawed Habib Styling & Salon"
                img="https://www.pngitem.com/pimgs/m/374-3744759_hair-salon-mohawk-women-braid-hairstyle-hd-png.png"
                category="Styling"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CreatorCard
                name="Shahi Sherwani"
                type="Manyawar Traditionals"
                img="https://paaneriindia.com/cdn/shop/files/11946_2.jpg?v=1698750692"
                category="Clothes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CreatorCard
                name="Chinese Platter"
                type="Mominoez Fast Foods"
                img="https://en.pimg.jp/066/773/432/1/66773432.jpg"
                category="Food"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CreatorCard
                name="Bridal Mehndi Only @299"
                type="Surbhi Shukla Mehndi Artist"
                img="https://media.weddingz.in/images/d4d1c5c3e15d298ad37c0ab79cfc0bb4/Henna-for-all-5.jpg"
                category="Fashion"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CreatorCard
                name="Fur.Room for Rent"
                type="Shivam Apartments"
                img="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1660739488/Website/CMS-Uploads/mzhezfp7nqujkuxb5j8o.jpg"
                category="Rooms/PG"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CreatorCard
                name="Delux Gaming Pass"
                type="Fun Gaming Zone"
                img="https://img.freepik.com/premium-vector/gaming-zone-video-game-neon-style_518759-160.jpg"
                category="Entertainment"
              />
            </SwiperSlide>
            {/* </div> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SlideCards;
