import React from "react";
import CommunityComponent from "./CommunityComponent";

export default function communitynegotiate() {
  
    const title= "Everything is a Negotiation"
    const description= "Lets's Negotiate"
    const showGoogleimg = false;

  return (
    <div>
      <CommunityComponent title={title} description={description} showGoogleimg={showGoogleimg} />
      
    </div>
  );
}