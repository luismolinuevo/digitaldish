import React from "react";
import CommunityComponent from "./CommunityComponent";
import Googleimg from "../../assets/googleimg.png";

export default function communitynear() {

  const title = "Welcome to the community";
  const description = "What's new in the area";
  const showGoogleimg = true;

  return (
    <div>
      <CommunityComponent title={title} description={description} showGoogleimg={showGoogleimg}/>
    </div>

  );
}