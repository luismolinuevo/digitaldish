import React from "react";
import ButtonsComponent from "./ButtonsComponent";
import { HeaderComponent, CardComponent} from "./ListingComponent";

export default function CommunityAuction() {
  
    const greeting1= "Life's an Auction"
    const greeting2= "Lets's Auction"
    

  return (
    <div>
      <ButtonsComponent greeting1={greeting1}/>
      <HeaderComponent greeting2={greeting2}/>
      <CardComponent />
      
    </div>
  );
}