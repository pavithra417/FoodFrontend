// "use client"
// import Image from "next/image";
// import { fetchBanner } from "./strapiendpoints";
// import { useState, useEffect } from "react";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';

// export default function Home() {

// const [value, setValue] = React.useState(3);
// const [Svalue, setSvalue] = React.useState(4);
// const [homepageData, setHomepageData] = useState(null);

//     useEffect(() => {
//         async function getHomepageData() {
//             const data = await fetchHomepage();
//             setHomepageData(data);
//         }
//         getHomepageData();
//     }, []);

//     if (!homepageData) {
//         return <h1>Loading...</h1>;
//     }

//   return (
//     <div className="grid grid-cols-2 pt-24 w-full">
//       <div className="xl:p-20 lg:p-10 xl:m-5 lg:my-10 lg:ml-5 md:m-10 lg:text-start md:text-center col-span-2 lg:col-span-1">
//         <h1 className="text-5xl font-bold xl:p-5 lg:my-5 md:m-5">{homepageData.heading}</h1>
//         <p className="font-base text-xl text-gray-700 xl:p-5 lg:py-2 lg:my-5 md:m-5">{homepageData.paragraph}</p>
//         <div className="flex xl:m-5 md:m-5 md:justify-center">
//           <p className="xl:py-5 xl:px-10 lg:px-3 lg:py-2 md:p-2 md:mx-2 text-white text-xl shadow-xl font-semibold bg-[#39DB4A] rounded-full">{homepageData.order}</p>
//           <p className="xl:p-5 lg:p-2 md:p-2 text-xl font-semibold">{homepageData.watch}</p>
//             <span  className=" xl:py-5 xl:px-5.5 lg:p-2 md:p-2 items-center justify-center bg-white rounded-full shadow-black shadow-lg" dangerouslySetInnerHTML={{ __html: homepageData.playIcon }}/>
//         </div>
//       </div>

//       <div className="">

//       <img className="absolute z-8"
//           src={homepageData.Img}
//           width="500"
//           alt="img"
//         />
//         <div className="relative p-56 w-min mt-26 ml-12 bg-[#39DB4A] rounded-full"></div>

//         <div className="absolute flex lg:top-152">

//           <div className="flex bg-white z-10 mx-5 p-2 rounded-xl shadow-2xl">
//             <div>
//               <img src={homepageData.food1Img} className="rounded-xl h-20 w-20"/>
//             </div>
//             <div className="px-2">
//               <p>Spicy noodles</p>
//               <Box sx={{ '& > legend': { mt: 2 } }}>
//                 <Rating
//                   name="simple-controlled"
//                   value={value}
//                   onChange={(event, newValue) => {
//                     setValue(newValue);
//                   }}
//                 />
//               </Box>
//               <p>$18.00</p>
//             </div>
//           </div>

//           <div className="flex bg-white z-10 mx-5 p-2 rounded-xl shadow-2xl">
//             <div>
//               <img src={homepageData.food2Img} className="rounded-xl h-20 w-20"/>
//             </div>
//             <div className="px-2">
//               <p>Vegetarian salad</p>
//               <Box sx={{ '& > legend': { mt: 2 } }}>
//                 <Rating
//                   name="simple-controlled"
//                   svalue={Svalue}
//                   onChange={(event, newSValue) => {
//                     setSvalue(newSValue);
//                   }}
//                 />
//               </Box>
//               <p>$23.00</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }

import {
  fetchBanner,
  fetchCategory,
  fetchDishes,
  fetchService,
  fetchTestimonial,
} from "./strapiendpoints";
import { domain } from "./config/config";
import Container from "./components/container";
import BannerSection from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Dishes from "./components/Dishes/Dishes";
import Testimonials from "./components/Testimonials/Testimonials";
import Service from "./components/Service/Service";

const Homepage = async () => {
  let bannerData = null;
  let CategoryData = null;
  let DishesData = null;
  let TestimonialsData = null;
  let ServiceData = null;
  let error = null;

  try {
    const data = await fetchBanner(); // already parsed JSON
    bannerData = data.data[0]; // No need to use .attributes here
  } catch (err) {
    error = "Failed to fetch banner data";
  }

  try {
    const data = await fetchCategory();
    CategoryData = data.data[0];
    // console.log(CategoryData)
  } catch (err) {
    error = "failed to fetch category data";
  }

  try {
    const data = await fetchDishes();
    DishesData = data.data[0];
    // console.log(DishesData)
  } catch (err) {
    error = "failed to fetch Dishesdata";
  }

  try {
    const data = await fetchTestimonial();
    TestimonialsData = data.data[0];
  } catch (err) {
    error = "failed to fetch TestimonialsData";
  }

  try {
    const data = await fetchService();
    ServiceData = data.data[0];
  } catch (err) {
    error = "failed to fetch serviceData";
  }

  if (error) return <div>{error}</div>;

  const imgUrl = `${domain.APIURL}${bannerData?.Img?.url}`;
  const food1ImgUrl = `${domain.APIURL}${bannerData?.food1Img?.url}`;
  const food2ImgUrl = `${domain.APIURL}${bannerData?.food2Img?.url}`;
  const maindish = `${domain.APIURL}${CategoryData?.Maindish?.url}`;
  const breakfast = `${domain.APIURL}${CategoryData?.Breakfast?.url}`;
  const dessert = `${domain.APIURL}${CategoryData?.Dessert?.url}`;
  const browseall = `${domain.APIURL}${CategoryData?.Browseall?.url}`;

  return (
    <div>
      {/* <Container> */}
      <div>
        {bannerData && (
          <BannerSection
            heading={bannerData.heading}
            newheading={bannerData.newheading}
            paragraph={bannerData.paragraph}
            watch={bannerData.watch}
            order={bannerData.order}
            bgImg={imgUrl}
            playIcon={bannerData?.playIcon}
            food1Img={food1ImgUrl}
            food2Img={food2ImgUrl}
          />
        )}
      </div>
      {/* </Container> */}

      {/* <Container> */}
      {CategoryData && (
        <Categories
          favourites={CategoryData.Favorites}
          heading={CategoryData.category}
          maindish={maindish}
          breakfast={breakfast}
          dessert={dessert}
          browseall={browseall}
        />
      )}
      {/* </Container> */}

      {DishesData && (
        <Dishes
          spldish={DishesData.spldish}
          heading={DishesData.heading}
          fattoushsalad={`${domain.APIURL}${DishesData?.fattoushsalad?.url}`}
          vegsalad={`${domain.APIURL}${DishesData?.vegsalad?.url}`}
          eggsalad={`${domain.APIURL}${DishesData?.eggsalad?.url}`}
          fattoushtext={DishesData.fattoushtext}
          vegtext={DishesData.vegtext}
          eggtext={DishesData.eggtext}
          description={DishesData.description}
          starIcon={DishesData.starIcon}
          right={DishesData.angleRight}
          left={DishesData.angleLeft}
        />
      )}

      {TestimonialsData && (
        <Testimonials
          testimonial={TestimonialsData.testimonial}
          heading={TestimonialsData.heading}
          paragraph={TestimonialsData.paragraph}
          testimonialpic={`${domain.APIURL}${TestimonialsData?.testimonialpic?.url}`}
          cmrfb={TestimonialsData.cmrfb}
          cmrone={`${domain.APIURL}${TestimonialsData?.cmrone?.url}`}
          cmrtwo={`${domain.APIURL}${TestimonialsData?.cmrtwo?.url}`}
          cmrthree={`${domain.APIURL}${TestimonialsData?.cmrthree?.url}`}
          starIcon={DishesData.starIcon}
        />
      )}

      {ServiceData && (
        <Service
          story={ServiceData.story}
          heading={ServiceData.heading}
          paragraph={ServiceData.Paragraph}
          explore={ServiceData.explore}
          catering={ServiceData.catering}
          cateringDes={ServiceData.cateringDes}
          delivery={ServiceData.delivery}
          deliveryDes={ServiceData.deliveryDes}
          order={ServiceData.order}
          orderDes={ServiceData.orderDes}
          gift={ServiceData.gift}
          giftDes={ServiceData.giftDes}
          cateringIcon={ServiceData.cateringIcon}
          deliveryIcon={ServiceData.deliveryIcon}
          orderIcon={ServiceData.orderIcon}
          giftIcon={ServiceData.giftIcon}
        />
      )}

      {/* </Container> */}
      <h1>Hello World!</h1>
    </div>
  );
};

export default Homepage;
