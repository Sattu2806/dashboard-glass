import ActiveListing from "@/components/ActiveListing";
import AnalyticCard from "@/components/AnalyticCard";
import InfoCard from "@/components/InfoCard";
import Mortage from "@/components/Mortage";
import Properties from "@/components/Properties";
import Revenue from "@/components/Revenue";
import {FaHome} from "react-icons/fa"
import { IoSearchSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-10 max-w-[1340px] mx-auto">
      <div className="w-full 2xl:h-[91vh] h-[88vh] glass-1 overflow-y-scroll">
        <div className="border-b border-neutral-700 py-2 px-6 glass-2 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-6 ">
            <FaHome size={24} className="text-orange-600" />
            <div className="flex items-center space-x-6 text-[15px] text-neutral-300 font-medium max-md:hidden">
              <p>Product List</p>
              <p>Analyitcs</p>
              <p>What is Horizon?</p>
              <p>Tools & Calculators</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 border-[1px] border-neutral-500 rounded-full p-1 px-3 bg-neutral-700 max-lg:hidden">
            <IoSearchSharp size={20} strokeWidth={2} />
            <input type="text" className="w-[300px] h-[30px] focus:ring-0 focus:border-0 focus:outline-0 placeholder:text-sm" placeholder="Search..." />
          </div>
          <GiHamburgerMenu className="md:hidden" />
          <div className="flex items-center space-x-2 max-md:hidden">
            <span>
              <RxAvatar size={32} />
            </span>
            <div className="text-xs text-neutral-400">
              <p>Gabriel Foxx</p>
              <p>latina</p>
            </div>
          </div>
        </div>
        <div className="my-4 mx-6 glass-3 p-3 py-6 xl:grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-lg">Personel Cabinet</h1>
              <div className="flex items-center space-x-2 text-sm font-medium">
                <span className="p-2 px-4 bg-orange-600 rounded-full ">
                  My Cabinet
                </span>
                <span className="p-2 px-4 border-[1px] rounded-full border-neutral-600">
                  Portfolio
                </span>
                <span className="p-2 px-4 border-[1px] rounded-full border-neutral-600">
                  Statistics
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 place-items-center">
            <AnalyticCard name="Sales" value={100} change={20} />
            <AnalyticCard name="Revenue" value={80} change={-10} />
            <AnalyticCard name="Customers" value={150} change={5} />
            <AnalyticCard name="Orders" value={200} change={-2} />
            </div>
            <div className="max-md:space-y-4 md:flex items-center justify-between gap-4">
              <Mortage/>
              <ActiveListing/>
            </div>
            <Revenue/>
          </div>
          <div className="col-span-3 space-y-3 max-xl:mt-10">
            <InfoCard/>
            <Properties/>
          </div>
        </div>
      </div>
    </div>
  );
}
