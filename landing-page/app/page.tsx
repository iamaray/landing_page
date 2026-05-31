import { CustomItemList } from "@/components/CustomItemListLayout";
import ExternalLinkItem from "@/components/ExternalLinkItem";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex flex-col">
      <div className="w-full">
        <h1 className="text-4xl tracking-tight text-black">
          My Startup, Socials, and Projects.
        </h1>
        {/* <p className="mt-2 max-w-3xl text-black"></p> */}
      </div>

      <CustomItemList>
        <ExternalLinkItem
          href=""
          siteName="GraphonMarkets (My Startup)"
          Icon={FaGithub}
        />

        <ExternalLinkItem href="" siteName="GitHub" Icon={FaGithub} />

        <ExternalLinkItem href="" siteName="LinkedIn" Icon={FaLinkedin} />
      </CustomItemList>

      {/* <div className="mt-6 w-full">
      </div> */}
    </section>
  );
}
