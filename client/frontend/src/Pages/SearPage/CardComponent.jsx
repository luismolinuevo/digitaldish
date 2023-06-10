import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Select,
    Option
  } from "@material-tailwind/react";

  export const CardComponent = (props) => {
    const { title, price, image, type } = props;
    
    return (
        
            <div className=" w-3/4 h-auto bg-[#F4EBDC]">
        <Card className="w-72 h-80 ml-20" color="transparent">
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
  