import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://images.pexels.com/photos/26100528/pexels-photo-26100528/free-photo-of-chipmunk-on-ground.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Adorable chipmunk foraging on a sunlit forest floor
          </h5>
        </a>
      </div>
    </div>
  );
}
