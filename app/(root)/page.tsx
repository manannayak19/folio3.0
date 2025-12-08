// import { Bitcount_Grid_Single, Poppins, Courier_Prime } from "next/font/google";

// const btc = Bitcount_Grid_Single({
//   weight: "500",
// });

// const pop = Poppins({
//   weight: ["200", "300", "400"],
//   fallback: ["sans"]
// })

export default function Home() {
  return (
    <>
      <div className="text-center mx-auto">
        <h1 className={`text-8xl  mb-4`}>about me</h1>
        <div className="text-2xl">
          hi i am Manan, engineering grad, love to build stuff, always curious
        </div>
      </div>
    </>
    // <div className="flex flex-col ">
    // <div className="flex flex-col md:flex-row">
    //   <div className="flex flex-col md:w-screen border-2 rounded-3xl p-10 m-1 bg-[#EFF8E2] shadow-md">
    //     <div className={`text-8xl ${btc.className}`}>about me</div>
    //     <div className="text-3xl pt-3">
    //       hi! i am Manan, i am an engineering grad, interested in MERN, ML,
    //       Math, Go
    //       <br />
    //       currently looking for opportunities to build interesting stuff!!
    //       <br />
    //       hit me up
    //     </div>
    //   </div>
    //   <div className="flex flex-col md:w-3xl border-2 rounded-3xl p-6 m-1 bg-[#EFF8E2] shadow-md ">

    //     <div className={`text-8xl ${btc.className}`}>about me</div>
    //     <div className="text-3xl pt-3">
    //       hi! i am Manan, i am an engineering grad, interested in MERN, ML,
    //       Math, Go
    //       <br />
    //       currently looking for opportunities to build interesting stuff!!
    //       <br />
    //       hit me up
    //     </div>
    //   </div>
    // </div>
    // <div className=" md:w-full h-auto  border-2 rounded-3xl p-6 m-1 bg-[#EFF8E2] shadow-md">
    //   <div className={`text-8xl ${btc.className}`}>about me</div>
    //     <div className="text-3xl pt-3">
    //       hi! i am Manan, i am an engineering grad, interested in MERN, ML,
    //       Math, Go
    //       <br />
    //       currently looking for opportunities to build interesting stuff!!
    //       <br />
    //       hit me up
    //     </div>
    // </div>
    // </div>
  );
}
