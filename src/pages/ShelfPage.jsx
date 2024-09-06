import React from "react";
import Transition from "../components/transition/Transition";
import NoShelfComponent from "../components/shelf/NoShelf";
function ShelfPage() {
  return (
    <Transition>
      <NoShelfComponent />
    </Transition>
  );
}

export default ShelfPage;
