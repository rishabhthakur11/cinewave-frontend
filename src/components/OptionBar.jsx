import Link from "next/link";
import React from "react";

function OptionBar() {
  return (
    <div className="bg-[#F5F5F5] py-2">
      <div className="flex items-center max-w-7xl mx-auto px-5 justify-between">
        {/* {left Side} */}
        <div className="text-sm text-gray-600 font-normal flex items-center gap-x-6">
          <Link href="#">
            <p>Movies</p>
          </Link>
          <Link href="#">
            <p>Stream</p>
          </Link>
          <Link href="#">
            <p>Events</p>
          </Link>
          <Link href="#">
            <p>Plays</p>
          </Link>
          <Link href="#">
            <p>Sports</p>
          </Link>
          <Link href="#">
            <p>Activity</p>
          </Link>
        </div>
        {/* {Right Side} */}
        <div className="text-sm text-gray-600 font-normal flex items-center gap-x-6">
          <Link href="#">
            <p>ListYourShow</p>
          </Link>
          <Link href="#">
            <p>offers</p>
          </Link>
          <Link href="#">
            <p>GiftCards</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OptionBar;
