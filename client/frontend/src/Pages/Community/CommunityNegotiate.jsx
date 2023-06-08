import React, {useState, useEffect} from "react";
import ButtonsComponent from "./ButtonsComponent";
import { HeaderComponent, CardComponent} from "./ListingComponent";
import Footer from "../../Components/Footer/Footer";
import Card from "../Home/Card";

export default function communitynegotiate() {
    const greeting1= "Everything is a Negotiation"
    const greeting2= "Lets's Negotiate"
    
    const [post, setPost] = useState([]);

    const searchPost = () => {
      // e.preventDefault();
      const filteredPost = post.filter((post) =>
     
          // post.country.toLowerCase() === location && 
          // post.livingSituation.toLowerCase() === livingSituation &&
          // post.implementationDifficulty.toLowerCase() === difficulty

          post.title === "test12"
        
      );
      console.log(filteredPost);
      setPost(filteredPost);
    };

    

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(`http://localhost:8080/post/getType/negotiation`);
        console.log(response.data.getPost);
        setPost(response.data.getPost);
      }
      fetchData();
    }, []);

    return (
      <div>
        <ButtonsComponent greeting1={greeting1} neg={true}/>
        <HeaderComponent greeting2={greeting2} />
  
        <div className="w-screen bg-[#F4EBDC]">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-10 max-w-screen-xl mx-auto">
            {post && post.length !== 0 ? (
                post.map((item) => (
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