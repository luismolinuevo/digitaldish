import Reactj, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserListingCard({ type, title, img, price, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const shortTitle = title.slice(0, 16) + "...";

  const negoLink = `/specneglisting/` + id;
  const bidLink = `/specbarterlisting/` + id;
  const barterLink = `/specbidlisting/` + id;

  const deleteListing = async () => {
    const token = localStorage.getItem("token");
    const deletePost = await axios.delete(
      `${import.meta.env.VITE_HOSTED_API}/post/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    );
  };

  return (
    <div>
      <div
        className="w-[275px] h-[220px] px-[10px] mb-[20px]"
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <div>
            <div
              className="w-[300px] h-[160px] bg-cover bg-no-repeat z-[-1] rounded-[4px]"
              style={{ backgroundImage: `url(${img})` }}
              onMouseEnter={() => setIsHovered(true)}
            >
              <div className="flex h-full items-end ">
                <p className="text-[20px] bg-white m-[15px] p-1">
                  {type == "barter"
                    ? "Barter"
                    : type == "bid"
                    ? "Auction"
                    : "Negotiation"}
                </p>
              </div>
            </div>
            <div className="flex justify-between text-[25px]">
              <p>{title.length > 16 ? shortTitle : title}</p>
              {type !== "barter" ? <p>${price}</p> : <p></p>}
            </div>
          </div>
        ) : (
          <div className="flex gap-4 h-full items-center">
            <Link
              to={`${
                type === "barter"
                  ? "/specbarterlisting/" + id
                  : type === "bid"
                  ? "/specbidlisting/" + id
                  : "/specneglisting/" + id
              }`}
              className="rounded-[57px] border-2 border-[#DAB24E] text-[16px] px-2 py-2 text-center"
            >
              View Post
            </Link>
            <button className=" border-2 border-[#DAB24E] text-[16px] px-2 py-1 text-center">
              Edit Post
            </button>
            <button className=" border-2 border-[#DAB24E] text-[16px] px-2 py-1 text-center" onClick={deleteListing}>
              Delete Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
