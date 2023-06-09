import React from "react";
import { Link } from "react-router-dom";

export default function Card({ type, title, img, price, id }) {
  const shortTitle = title.slice(0, 16) + "...";
  console.log(id)

    const negoLink = `specneglisting/` + id
    const bidLink = `specbarterlisting/` + id
    const barterLink = `specbidlisting/` + id


  return (
    <div>
      <Link to={`${type == "barter" ? barterLink : type == "bid" ? bidLink : negoLink}`}>
        <div className="w-[320px] h-[220px] px-[10px] mb-[20px]">
          <div
            className="w-[300px] h-[160px] bg-cover bg-no-repeat z-[-1] rounded-[4px]"
            style={{ backgroundImage: `url(${img})` }}
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
      </Link>
    </div>
  );
}

//TODO add link
