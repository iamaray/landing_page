import ExternalLinkItem from "@/components/ExternalLinkItem";
import ItemList from "@/components/ItemList";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <PageSection>
      <PageHeader title="My Startup, Socials, and Projects." />

      <ItemList>
        <ExternalLinkItem
          href=""
          siteName="GraphonMarkets (My Startup)"
          Icon={FaGithub}
        />

        <ExternalLinkItem href="" siteName="GitHub" Icon={FaGithub} />

        <ExternalLinkItem href="" siteName="LinkedIn" Icon={FaLinkedin} />
      </ItemList>
    </PageSection>
  );
}
