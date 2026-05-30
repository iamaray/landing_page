import Image from "next/image";
import { CustomItemList } from "@/components/CustomItemListLayout";
import ExternalLinkItem from "@/components/ExternalLinkItem";
export default function Home() {
  return (
    <section className="flex flex-col">
      <div className="w-full">
        <h1 className="text-4xl tracking-tight text-black">Arya Nahri</h1>
        <p className="mt-2 max-w-3xl text-neutral-700">
          My Startup, Social Profiles, and Projects
        </p>
      </div>

      <div className="mt-6 w-full">
        <CustomItemList>
          <ExternalLinkItem
            href=""
            siteName="GraphonMarkets (My Startup)"
            icon="icon1"
          />

          <ExternalLinkItem 
          href="" 
          siteName="GitHub" 
          icon="icon2" 
          />

          <ExternalLinkItem 
          href="" 
          siteName="LinkedIn"
          icon="icon3" 
          />
          
        </CustomItemList>
      </div>
    </section>
  );
}
