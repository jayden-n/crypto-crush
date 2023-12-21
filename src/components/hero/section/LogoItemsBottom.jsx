import { LogoItem } from "./LogoItem";
import {
  SiCoinmarketcap,
  SiBmw,
  SiBitcoin,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiTrustpilot,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";
import { GiBuyCard } from "react-icons/gi";
import { BsFileBarGraphFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";

import { BiCoinStack } from "react-icons/bi";
import { TbCoin } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { GiProfit } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={BiCoinStack} />
    <LogoItem Icon={TbCoin} />
    <LogoItem Icon={MdOutlineSecurity} />
    <LogoItem Icon={SiCoinmarketcap} />
    <LogoItem Icon={GoGraph} />
    <LogoItem Icon={GiProfit} />
    <LogoItem Icon={SiTrustpilot} />
    <LogoItem Icon={VscWorkspaceTrusted} />
    <LogoItem Icon={SiBitcoin} />
  </>
);
