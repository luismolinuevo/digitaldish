import { useState, useEffect } from "react";
import ButtonsComponent from "./ButtonsComponent";
import { HeaderComponent, CardComponent } from "./ListingComponent";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

export default function CommunityAuction(props) {
  const greeting1 = "Life's an Auction";
  const greeting2 = "Lets's Auction";

  const [post, setPost] = useState([]);
  const { image, type } = props;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8080/posts", {
        params: {
          type: bid,
        },
      });
      console.log(response.data.post);
      setPost(response.data.post);
    }
    fetchData();
  }, [type]);

  return (
    <div>
      <ButtonsComponent greeting1={greeting1} />
      <HeaderComponent greeting2={greeting2} />

      <div className="w-screen bg-[#F4EBDC]">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-10 max-w-screen-xl mx-auto">
          {post && post.length !== 0 ? (
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
