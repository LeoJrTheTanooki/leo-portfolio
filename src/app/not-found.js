export default function Custom404() {
  return (
    <div className="bg-pink-300 flex justify-center min-h-[66vh]">
      <div className=" border-[16px] border-black w-full flex">
        <div className=" border-[16px] border-dashed border-[#044a8c] w-full bg-[#fc6204]">
          <div className=" bg-black h-full text-[#fca2dc] font-bold font-mono flex flex-col justify-center items-center text-center">
            <p className=" text-[#f86000] underline">
              ERROR 404
            </p>
              --------------------------------------
            <div className=" w-64">
              <p className=" text-left">
                THE URL FOR THIS PAGE WAS NOT FOUND. PLEASE REFER TO ANY OF
                THE TABS ON THE TASKBAR TO CORRECT THIS MISTAKE.
              </p>
            </div>
              --------------------------------------
              <p>LEO GARCIA @ <br/> PIXELBYTE@WORKMAIL.COM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
