import React from "react";

const CmItem = (props) => {
    console.log(props.data);
    
  return <>
    <div className="flex gap-5 items-center m-5">
        <div className='w-[100px] h-[100px]'>
            <img src={props.data.front_img} alt=""/>
        </div>
        <div>
            <h2 className="text-base text-[#833AE0] ">{props.data?.title}</h2>
            <p className="text-xs w-72">
                {props.data?.description.split("\n").slice(0,1)}
            </p>
        </div>
    </div>
  </>;
};

export default CmItem;
