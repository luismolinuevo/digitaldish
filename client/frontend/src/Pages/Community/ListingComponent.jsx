import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";
// import Googleimg from "../../assets/googleimg.png";
import { Link } from "react-router-dom"

export const HeaderComponent = (props) => {
  const { greeting2, showGoogleimg } = props;

  return (
    <div className=" h-30 w-full bg-[#F4EBDC]">
      <div className="w-36 mt-2 ml-[1230px]">
        <Select className="text-[#1b72f6]" label="Sort By:">
          <Option className="hover:bg-[#DAB24E4D]">Relevance</Option>
          <Option className="hover:bg-[#DAB24E4D]">Most recent</Option>
          <Option className="hover:bg-[#DAB24E4D]">Lowest price</Option>
          <Option className="hover:bg-[#DAB24E4D]">Highest price</Option>
        </Select>
      </div>

      <div>
        <p className="font-bold text-[45px] mt-5 ml-40 pb-[70px]">{greeting2}</p>
      </div>

      {showGoogleimg && (
        <div className=" w-1/4 ml-40 mt-5 border border-black">
          <img src={"/assets/googleimg.png"} alt="Google Image" />
        </div>
      )}
    </div>
  );
};

export const CardComponent = (props) => {
  const { title, price, image, type } = props;
  

  // const shortTitle = title.slice(0, 16)+'...';

  return (
    <div className="w-screen bg-[#F4EBDC]">
      <Card className="w-72 h-80" color="transparent">
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src= ""
              className="w-full h-full object-cover"
              alt="Card Image"
            />
            {image}
          </CardHeader>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <Typography color="black" className="font-medium">
                {title}
              </Typography>
              <Typography color="black" className="font-medium">
                {price}
              </Typography>
            </div>
          </CardBody>
        </Card>

      </div>
    
  );
};
