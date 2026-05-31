import type { IconType } from "react-icons";

type CreateExternalLinkItemArgs = {
  href: string;
  siteName: string;
  Icon: IconType;
};

export default function ExternalLinkItem({
  href,
  siteName,
  Icon,
}: CreateExternalLinkItemArgs) {
  return (
    <li className="w-full">
      <a
        href={href}
        className="flex w-full cursor-pointer justify-between border border-black rounded-sm p-3 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
      >
        <Icon className="h-5 w-5 text-black" aria-hidden="true" />

        <div className="">
          <p className="text-black">{siteName}</p>
        </div>
      </a>
    </li>
  );
}
