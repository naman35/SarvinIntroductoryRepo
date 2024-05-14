import React from "react";
import CreatorCard from "../commons/CreaterCard/CreaterCard.js";
import "./style.css";

function SlideCards() {
  return (
    <div class="mb-24">
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#DC4653",
          fontSize: "48px",
          fontWeight: 700,
          margin: "60px 0 30px 0",
        }}
      >
        Deals Are Waiting
      </div>
      <div class="container">
        <div class="words words--first">
          <span class="gap-20">
            <CreatorCard
              name="Loreal Paris color"
              type="Loreal Styling & Salon"
              img="https://m.media-amazon.com/images/I/51MAaw-IrGL.jpg"
              category="Fashion"
            />
            <CreatorCard
              name="Maharaja Burger"
              type="Rolling Panda FoodHub"
              img="https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png"
              category="Food"
            />
            <CreatorCard
              name="Hair Styling @2999"
              type="Jawed Habib Styling & Salon"
              img="https://www.pngitem.com/pimgs/m/374-3744759_hair-salon-mohawk-women-braid-hairstyle-hd-png.png"
              category="Styling"
            />
            <CreatorCard
              name="Shahi Sherwani"
              type="Manyawar Traditionals"
              img="https://paaneriindia.com/cdn/shop/files/11946_2.jpg?v=1698750692"
              category="Clothes"
            />
            <CreatorCard
              name="Chinese Platter"
              type="Mominoez Fast Foods"
              img="https://en.pimg.jp/066/773/432/1/66773432.jpg"
              category="Food"
            />
            <CreatorCard
              name="Bridal Mehndi Only @299"
              type="Surbhi Shukla Mehndi Artist"
              img="https://media.weddingz.in/images/d4d1c5c3e15d298ad37c0ab79cfc0bb4/Henna-for-all-5.jpg"
              category="Fashion"
            />
            <CreatorCard
              name="Fur.Room for Rent"
              type="Shivam Apartments"
              img="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1660739488/Website/CMS-Uploads/mzhezfp7nqujkuxb5j8o.jpg"
              category="Rooms/PG"
            />
            <CreatorCard
              name="Delux Gaming Pass"
              type="Fun Gaming Zone"
              img="https://img.freepik.com/premium-vector/gaming-zone-video-game-neon-style_518759-160.jpg"
              category="Entertainment"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SlideCards;
