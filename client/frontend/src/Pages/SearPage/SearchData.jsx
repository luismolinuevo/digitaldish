// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
//     Select,
//     Option
//   } from "@material-tailwind/react";
import {useState, useEffect} from "react"
import { useSelector } from "react-redux";
import Card from "../Home/Card";
import axios from "axios"


  export const SearchData = () => {
    // const { title, price, image, type } = props;
    const query = useSelector((state) => state.filter.search);
    const category = useSelector((state) => state.filter.category);
    const color = useSelector((state) => state.filter.color);
    const condition = useSelector((state) => state.filter.condition);
    const type = useSelector((state) => state.filter.type)
    const startPrice = useSelector((state) => state.filter.startPrice)
    const endPrice = useSelector((state) => state.filter.endPrice)

    const [post, setPost] = useState([])
    const [filteredPost, setFilteredPost] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const fetch = await axios.get(`${import.meta.env.VITE_HOSTED_API}/post/getNew/`);
        console.log(fetch.data.post);
        setPost(fetch.data.getPost);
      }
      fetchData();
    }, []);

    useEffect(() => {
      let filtered = post

      if(query != null) {
        // const filtered = post.filter((item) => query.includes(item.title))
        filtered = filtered.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))  //this is the way to do it for non arrays
      } 

      if (category.length != 0) {
        filtered = filtered.filter((item) => category.includes(item.category.toLowerCase()));    
      }

      if(color.length != 0) {
        filtered = filtered.filter((item) => color.includes(item.color))
      }

      if(condition.length != 0) {
        filtered = filtered.filter((item) => condition.includes(item.condition))
      }

      if(type.length != 0) {
        filtered = filtered.filter((item) => type.includes(item.type))
      }

      if (startPrice !== null && endPrice !== null) {
        filtered = filtered.filter((item) => {
          const price = parseFloat(item.price);
          return price > parseFloat(startPrice) && price < parseFloat(endPrice);
        });
      }
      





      
      setFilteredPost(filtered)
    }, [query, category, post, color, condition, type, startPrice, endPrice]);
    
    
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
          
            {filteredPost && filteredPost.length !== 0 ? (
              filteredPost.map((item) => (
                <div className="">
                  <Card
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    img={item.img != 0 ? item.img[0].url.toString() : ""}
                    type={item.type}
                  />
                </div>
              ))
            ) : (
              <p></p>
            )}

  
        </div>

        
      
    );
  };
  