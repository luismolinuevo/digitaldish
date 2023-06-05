import React from "react";
import CommunityComponent from "./CommunityComponent";

export default function CommunityAuction() {
  
    const title= "Life's an Auction"
    const description= "Lets's Auction"
    const showGoogleimg = false;

  return (
    <div>
      <CommunityComponent title={title} description={description} showGoogleimg={showGoogleimg} />
      
    </div>
  );
}