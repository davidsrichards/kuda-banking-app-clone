import image from "../assets/ImageFolder/dave.jpg";

function GlobalProfileCard({ comment, userImage, userName }) {
  return (
    <>
      <div className="shadow-md flex flex-col items-start justify-center w-[28rem] h-[15rem] container p-4 mx-auto rounded-lg space-y-10">
        <p className="break-words text-slate-500 text-[15px] font-normal">
          {comment}
        </p>
        <div className="flex items-center space-x-2">
          <img
            src={userImage}
            alt=""
            className="w-12 rounded-full h-12 object-cover"
          />
          <p className="font-bold text-sm">{userName}</p>
        </div>
      </div>
    </>
  );
}

export default GlobalProfileCard;
