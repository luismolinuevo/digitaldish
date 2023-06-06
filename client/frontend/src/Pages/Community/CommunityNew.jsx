import { useState, useEffect } from "react";
import ButtonsComponent from "./ButtonsComponent";
import { HeaderComponent, CardComponent } from "./ListingComponent";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";

export default function CommunityNew(props) {
  const [post, setPost] = useState([]);

  const greeting1 = "Welcome to the Community";
  const greeting2 = "Discover what's new";
  const { title, price, image, type } = props;

  useEffect(() => {
    async function fetchData() {
      const fetch = await axios.get("http://localhost:8080/post");
      console.log(fetch.data.post);
      setPost(fetch.data.post);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <ButtonsComponent greeting1={greeting1} />
        <HeaderComponent greeting2={greeting2} />
      </div>

      <div className="w-screen bg-[#F4EBDC]">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-10 max-w-screen-xl mx-auto">
            {post && post.length != 0 ? (
              post.map((item) => (
                <div className="">
                  <CardComponent
                    title={item.title}
                    price={item.price}
                    image={image}
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
