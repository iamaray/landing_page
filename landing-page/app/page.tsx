import ExternalLinkItem from "@/components/ExternalLinkItem";
import ItemList from "@/components/ItemList";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import { fetchLatestPost, formatPostDate } from "@/lib/blog";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default async function Home() {
  const latestPost = await fetchLatestPost();
  const FeaturedPost = latestPost
    ? (await import(`@/content/blog/${latestPost.slug}.mdx`)).default
    : null;

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

      {latestPost && FeaturedPost ? (
        <section className="mt-10 border-t border-border pt-6">
          <PageHeader title="Featured Blog Post" />

          <article className="mt-5 text-foreground">
            <header>
              <h3 className="text-section-title font-semibold">
                {latestPost.metadata.title}
              </h3>

              <p className="mt-2 font-mono text-xs text-muted">
                {formatPostDate(latestPost.metadata.date)}
              </p>

              <p className="mt-3 max-w-3xl leading-7 text-muted">
                {latestPost.metadata.description}
              </p>
            </header>

            <div className="mt-6">
              <FeaturedPost />
            </div>
          </article>
        </section>
      ) : null}
    </PageSection>
  );
}
