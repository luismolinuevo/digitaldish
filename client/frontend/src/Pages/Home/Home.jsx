import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import robot from "../../assets/HomePage/robot2.jpg";
import monitor from "../../assets/HomePage/Monitors.jpg";
import headphones from "../../assets/HomePage/Headphones.jpg";
import keyboard from "../../assets/HomePage/Keyboard.jpg";
import keycaps from "../../assets/Homepage/Keycaps.jpg";
import computer from "../../assets/Homepage/Computer.png";
import controller from "../../assets/Homepage/controller.png";
import game from "../../assets/Homepage/Game.png";
import phone from "../../assets/Homepage/Phone.png";
import logo from "../../assets/HomePage/logo.png";
import robotHand from "../../assets/HomePage/robotHand.png";
import logoIcon from "../../assets/HomePage/logoIcon.png";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginStatus } from "../../Utils/auth";
import Card from "./Card";
import BiggerCard from "./BiggerCard";
import FooterNav from "../../Components/Footer/FooterNav";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();

  const [barterPost, setBarterPost] = useState([]);
  const [bidPost, setBidPost] = useState([]);
  const [negoPost, setNegoPost] = useState([]);
  const [firstBarter, setFirstBarter] = useState([]);
  const [secondBarter, setSecondBarter] = useState([]);
  const [firstNeg, setFirstNeg] = useState([]);
  const [secondNeg, setSecondNeg] = useState([]);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:8080/post/getType/barter`
      );
      setFirstBarter(response.data.getPost[0]);
      setSecondBarter(response.data.getPost[1]);
      setBarterPost(response.data.getPost.splice(0, 6));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:8080/post/getType/bid`
      );
      console.log(response.data.getPost);
      setBidPost(response.data.getPost.splice(0, 6));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:8080/post/getType/negotiation`
      );
      setFirstNeg(response.data.getPost[0]);
      setSecondNeg(response.data.getPost[1]);
      console.log(response.data.getPost);
      setNegoPost(response.data.getPost.splice(0, 6));
    }
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="bg-[#F1F0EB] pt-20 px-4">
        <h1 className="text-[48px]">What's new in the Community</h1>
        <div className="flex justify-between">
          <div
            className="w-[770px] h-[680px] bg-cover bg-no-repeat z-[1] rounded-[4px]"
            style={{ backgroundImage: `url(${robot})` }}
          >
            <div className="h-full flex items-end p-[40px] justify-between">
              <button className="bg-white rounded-[57px] border-2 border-[#DAB24E] text-[32px] px-4 py-2">
                Devices
              </button>
              <button className="bg-white rounded-[57px] border-2 border-[#DAB24E] text-[32px] px-4 py-2">
                Accessories
              </button>
            </div>
          </div>
          <div>
            <div>
              <Card
                title={`${firstBarter.title}`}
                type={"barter"}
                img={firstBarter.img && firstBarter.img.length > 0 ? firstBarter.img[0].url.toString() : ""}
                price={`${firstBarter.price}`}
                id={firstBarter.id}
              />
            </div>
            <div>
              <Card
                title={`${firstNeg.title}`}
                type={"negotiation"}
                img={firstNeg.img && firstNeg.img.length > 0 ? firstNeg.img[0].url.toString() : ""}
                price={`${firstNeg.price}`}
                id={firstNeg.id}
              />
            </div>
            <div>
              <Card
                title={`${secondBarter.title}`}
                type={"barter"}
                img={secondBarter.img && secondBarter.img.length > 0 ? secondBarter.img[0].url.toString() : ""}
                price={`${secondBarter.price}`}
                id={secondBarter.id}
              />
            </div>
          </div>
          <div>
            <div className="w-[320px] h-[430px] mb-[50px] bg-white">
              {!isAuthenticated ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="text-[27px] mb-[26px]">Welcome,</h1>
                  <Link to={"/login"} className="bg-black text-white px-[70px] py-4 rounded-[4px]">
                    Login
                  </Link>
                  <h1 className="text-[27px] my-4">or</h1>
                  <Link to={"/signup"} className="bg-black text-white px-[70px] py-4 rounded-[4px]">
                    Signup
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col justify-center p-4">
                  <h1 className="text-center text-[27px] mb-[30px]">
                    {userName}'s Activity
                  </h1>
                  <Link
                    to={"/activity"}
                    className="bg-black text-white px-[70px] py-4 rounded-[4px] m-4 text-center"
                  >
                    Offers Received
                  </Link>
                  <Link
                    to={"/activity"}
                    className="bg-black text-white px-[70px] py-4 rounded-[4px] m-4 text-center"
                  >
                    Offers Sent
                  </Link>
                  <Link
                    to={"/activity"}
                    className="bg-black text-white px-[70px] py-4 rounded-[4px] m-4 text-center"
                  >
                    Auctions
                  </Link>
                </div>
              )}
            </div>
            <div>
              <Card
                title={`${secondNeg.title}`}
                type={"negotiation"}
                price={`${secondNeg.price}`}
                id={secondNeg.id}
                img={secondNeg.img && secondNeg.img.length > 0 ? secondNeg.img[0].url.toString() : ""}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[581px] flex items-center px-4 gap-[58px]">
        <BiggerCard title={"Keyboards"} img={keyboard} />
        <BiggerCard title={"Headphones"} img={headphones} />
        <BiggerCard title={"Monitor"} img={monitor} />
        <BiggerCard title={"Keycaps"} img={keycaps} />
      </div>
      <div className=" bg-[#F1F0EB]">
        <div className="px-4 py-[150px]">
          <div>
            <h1 className="text-[38px] mb-2">Explore Active Auctions</h1>
            <div className="flex">
              <div className="">
                <div className="flex gap-[60px] flex-wrap w-[1125px]">
                  {bidPost.length != 0 ? (
                    bidPost.map((item) => (
                      <Card
                        title={item.title}
                        type={"bid"}
                        img={item.img != 0 ? item.img[0].url.toString() : ""}
                        price={item.price}
                        id={item.id}
                      />
                    ))
                  ) : (
                    <p>Error</p>
                  )}
                </div>
              </div>
              <p className="ml-[70px] text-[28px]">
                purchase products
                <br /> through an auction;
                <br /> outbidding other buyers
                <br /> until you win
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[581px] flex items-center px-4 gap-[58px]">
        <BiggerCard title={"Computers"} img={computer} />
        <BiggerCard title={"Game Systems"} img={game} />
        <BiggerCard title={"Controllers"} img={controller} />
        <BiggerCard title={"Phones"} img={phone} />
      </div>
      <div className=" bg-[#F1F0EB]">
        <div className="px-4 py-[150px]">
          <div className="">
            <h1 className="text-[38px] mb-2">Explore Active Barters</h1>
            <div className="flex pb-[100px]">
              <p className="text-[28px]">
                the exchange of goods
                <br /> and services between
                <br /> two users without the
                <br /> use of money.
              </p>
              <div className="pl-[70px]">
                <div className="flex gap-[60px] flex-wrap w-[1100px]">
                  {barterPost.length != 0 ? (
                    barterPost.map((item) => (
                      <Card
                        title={item.title}
                        type={"barter"}
                        img={item.img != 0 ? item.img[0].url.toString() : ""}
                        price={item.price}
                        id={item.id}
                      />
                    ))
                  ) : (
                    <p>Error</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[38px] mb-2">Explore Active Negotiations</h1>
            <div className="flex">
              <div className="">
                <div className="flex gap-[60px] flex-wrap w-[1125px]">
                  {negoPost.length != 0 ? (
                    negoPost.map((item) => (
                      <Card
                        title={item.title}
                        type={"negotiation"}
                        img={item.img != 0 ? item.img[0].url.toString() : ""}
                        price={item.price}
                        id={item.id}
                      />
                    ))
                  ) : (
                    <p>Error</p>
                  )}
                </div>
              </div>
              <p className="ml-[70px] text-[28px]">
                a back and forth
                <br /> discussion between
                <br /> users creating offers
                <br /> and counter offers to
                <br /> come to an agreed
                <br /> upon price.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[840px] flex">
        <div className="h-full bg-[#3E3E3E] w-1/2">
          <div className="py-[55px] px-[49px] ">
            <img src={logo} alt="" className="w-[160px] h-[51px]" />
            <h1 className="text-[44px] text-white">Who we are</h1>
            <p className="text-white text-[28px] pb-[100px]">
              born to connect hobbyists within
              <br /> technology, Tech Niche is a one of a kind
              <br /> marketplace where products are sold
              <br /> through bartering, bidding, and
              <br /> negotiating. Learn more by signing up
              <br /> and becoming a part of the community
            </p>
            <div className="">
              <button className="bg-white rounded-[57px] border-2 border-black text-[32px] px-4 py-2 w-[270px]">
                Contact
              </button>
              <button className="bg-white rounded-[57px] border-2 border-black text-[32px] px-4 py-2 w-[270px]">
                About Us
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={robotHand} alt="" className="h-full " />
        </div>
      </div>
      <FooterNav />
    </div>
  );
}