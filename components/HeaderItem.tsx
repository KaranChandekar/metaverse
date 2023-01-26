import React, { InsHTMLAttributes } from "react";

function HeaderItem({ Icon, title }: any) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-14 sm:w-16 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
