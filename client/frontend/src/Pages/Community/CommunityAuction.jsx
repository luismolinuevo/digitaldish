import { useState, useEffect } from "react";
import ButtonsComponent from "./ButtonsComponent";
import { useSelector } from "react-redux";
import { HeaderComponent, CardComponent } from "./ListingComponent";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import Card from "../Home/Card";

export default function CommunityAuction(props) {
  const greeting1 = "Life's an Auction";
  const greeting2 = "Lets's Auction";

  const category = useSelector((state) => state.filter.category);
  const [post, setPost] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/post/getType/bid`);
      console.log(response.data.getPost);
      setPost(response.data.getPost);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (category == null) {
      setFilteredPost(post);
    } else {
      const filtered = post.filter((item) => category.includes(item.category));      
      console.log(filtered)
      setFilteredPost(filtered);
    }
  }, [category, post]);


  return (
    <div>
      <ButtonsComponent greeting1={greeting1} auction={true}/>
      <HeaderComponent greeting2={greeting2} />

      <div className="w-screen bg-[#F4EBDC]">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-10 max-w-screen-xl mx-auto">
          {filteredPost && filteredPost.length !== 0 ? (
              filteredPost.map((item) => (
                <div className="">
                  <Card
                    title={item.title}
                    price={item.price}
                  />
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#F4EBDC]">
        <Footer />
      </div>
    </div>
  );
}
