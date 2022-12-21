import React from "react";

const CmItem = (props) => {
    console.log(props.data);
    
  return <>
    <div className="w-2/5">
        <div>
            <img src={props.data?.front_img} alt="" />
        </div>
        <div>
            <h2 className="text-base text-[#833AE0] ">{props.data?.title}</h2>
            <p className="text-xs">
                {props.data?.description.split("\n").slice(0,1)}
            </p>
        </div>
    </div>
  </>;
};

export default CmItem;
