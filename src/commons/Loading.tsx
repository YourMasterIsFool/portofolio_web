import { Icon } from "@iconify/react";

const Loading = () => {
  return (
    <div className="fixed z-10 bg-black bg-opacity-30 w-screen h-screen flex justify-center items-center">
      <div className="">
        <Icon
          icon={"fluent:spinner-ios-16-filled"}
          className="animate-spin h-10 w-10 text-gray-300"
        />
      </div>
    </div>
  );
};

export default Loading;
