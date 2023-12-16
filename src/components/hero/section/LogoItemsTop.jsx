import { LogoItem } from "./LogoItem";

import { FaCoins } from "react-icons/fa";
import { PiHandCoinsFill, PiCoins } from "react-icons/pi";
import { LuCoins } from "react-icons/lu";
import { GrSecure } from "react-icons/gr";

import { GiTakeMyMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { FaBitcoinSign } from "react-icons/fa6";

export const LogoItemsTop = () => (
  <>
    <LogoItem Icon={FaCoins} />
    <LogoItem Icon={GrSecure} />
    <LogoItem Icon={PiHandCoinsFill} />
    <LogoItem Icon={PiCoins} />
    <LogoItem Icon={LuCoins} />
    <LogoItem Icon={GiTakeMyMoney} />
    <LogoItem Icon={RiMoneyCnyCircleLine} />
    <LogoItem Icon={TbPigMoney} />
    <LogoItem Icon={FaBitcoinSign} />
  </>
);
