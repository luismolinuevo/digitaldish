import React from "react";
import ButtonsComponent from "./ButtonsComponent";
import { HeaderComponent, CardComponent} from "./ListingComponent";

export default function communitynegotiate() {
  
    const greeting1= "Everything is a Negotiation"
    const greeting2= "Lets's Negotiate"
    

  return (
    <div>
      <ButtonsComponent greeting1={greeting1} />
      <HeaderComponent greeting2={greeting2}/>
      <CardComponent />
      
    </div>
  );
}