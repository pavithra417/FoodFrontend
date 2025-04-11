"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import ReactMarkdown from 'react-markdown';

const BannerSection = ({heading, paragraph, watch, order, bgImg, playIcon, food1Img ,food2Img }) => {
const [value, setValue] = React.useState(3);
const [Svalue, setSvalue] = React.useState(4);

  return (
    
    <div className="grid grid-cols-2 w-full mt-25">

        <div className="col-span-2 lg:col-span-1 space-y-6 my-0 lg:my-36">
          
           
          <div className="text-5xl font-extrabold leading-snug text-gray-900">
            <ReactMarkdown>{heading}</ReactMarkdown>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            {paragraph}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <p className="px-6 py-2 text-white text-lg font-semibold shadow-md bg-[#39DB4A] rounded-full">
              {order}
            </p>
            <p className="text-lg font-medium text-gray-800">{watch}</p>
            <span
              className="w-15 h-15 flex items-center justify-center bg-white rounded-full shadow-black shadow-lg text-[#39DB4A]"
              dangerouslySetInnerHTML={{ __html: playIcon }}
            />
          </div>
        </div>

        <div className="">

            <img className="absolute z-8"
              src={bgImg}
              width="500"
              alt="img"
            />
            <div className="relative sm:p-56 p-46 w-min mt-26 ml-10 lg:ml-12 bg-[#39DB4A] rounded-full"></div>
          
          <div className="absolute flex flex-col sm:flex-row lg:top-152">

            <div className="flex bg-white z-10 m-5 sm:mx-5 p-2 rounded-xl shadow-2xl">
                <div>
                  <img src={food1Img} className="rounded-xl h-20 w-20"/>
                </div>
                <div className="px-2">
                  <p>Spicy noodles</p>
                  <Box sx={{ '& > legend': { mt: 2 } }}>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                  <p>$18.00</p>
                </div>
            </div>

            <div className="flex bg-white z-10 m-5 sm:mx-5 p-2 rounded-xl shadow-2xl">
              <div>
                <img src={food2Img} className="rounded-xl h-20 w-20"/>
              </div>
              <div className="px-2">
                <p>Vegetarian salad</p>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Rating
                    name="simple-controlled"
                    value={Svalue}
                    onChange={(event, newSValue) => {
                      setSvalue(newSValue);
                    }}
                  />
                </Box>
                <p>$23.00</p>
              </div>
            </div>

          </div>
        </div>
    </div>
  );
};
 
export default BannerSection;
