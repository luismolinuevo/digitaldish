import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ButtonsComponent from "./ButtonsComponent";
import { HeaderComponent } from "./ListingComponent";
import Card from "../Home/Card"
import axios from "axios";
import Footer from "../../Components/Footer/Footer";

export default function CommunityNew(props) {
  const category = useSelector((state) => state.filter.category);
  const [post, setPost] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);

  const greeting1 = "Welcome to the Community";
  const greeting2 = "Discover what's new";

  useEffect(() => {
    async function fetchData() {
      const fetch = await axios.get("http://localhost:8080/post/getNew");
      console.log(fetch.data.getPost);
      setPost(fetch.data.getPost);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (category.length <= 0) {
      setFilteredPost(post);
    } else {
      const filtered = post.filter((item) => category.includes(item.category));      
      console.log(filtered)
      setFilteredPost(filtered);
    }
  }, [category, post]);

  return (
    <div>
      <div>
        <ButtonsComponent greeting1={greeting1} />
        <HeaderComponent greeting2={greeting2} />
      </div>

      <div className="w-screen bg-[#F4EBDC]">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-10 max-w-screen-xl mx-auto">
            {filteredPost && filteredPost.length != 0 ? (
              filteredPost.map((item) => (
                <div className="">
                  <Card
                    title={item.title}
                    price={item.price}
                    id={item.id}
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
