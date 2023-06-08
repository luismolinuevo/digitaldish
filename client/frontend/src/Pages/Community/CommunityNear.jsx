import React from "react";
import ButtonsComponent from "./ButtonsComponent";
import { HeaderComponent, CardComponent} from "./ListingComponent";

export default function communitynear() {

  const greeting1 = "Welcome to the community";
  const greeting2 = "What's new in the area";
  const showGoogleimg = true;

  return (
    <div>
      <ButtonsComponent greeting1={greeting1}/>
      <HeaderComponent  greeting2={greeting2} showGoogleimg={showGoogleimg} />
      <CardComponent />
    </div>

  );
}