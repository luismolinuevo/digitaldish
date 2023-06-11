// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
//     Select,
//     Option
//   } from "@material-tailwind/react";
import {useState, useEffect} from "react"
import Card from "../Home/Card";
import axios from "axios"

  export const SearchData = () => {
    // const { title, price, image, type } = props;
    const [post, setPost] = useState([])

    useEffect(() => {
      async function fetchData() {
        const fetch = await axios.get("http://localhost:8080/post/");
        console.log(fetch.data.post);
        setPost(fetch.data.post);
      }
      fetchData();
    }, []);
    
    
    return (
        
            <div className=" w-3/4 h-auto bg-[#F4EBDC] flex gap-[45px] flex-wrap p-2">
        {/* <Card className="w-72 h-80 ml-20" color="transparent">
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
          </Card> */}
          
            {post && post.length !== 0 ? (
              post.map((item) => (
                <div className="">
                  <Card
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    img={item.img != 0 ? item.img[0].url.toString() : ""}
                  />
                </div>
              ))
            ) : (
              <p></p>
            )}

  
        </div>

        
      
    );
  };
  