type CreateExternalLinkItemArgs = {
  href: string;
  siteName: string;
  icon: string;
};

export default function ExternalLinkItem({
  href,
  siteName,
  icon,
}: CreateExternalLinkItemArgs) {
  return (
    <li className="flex w-full cursor-pointer justify-between border border-black rounded-sm p-3 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="">
        <p className="text-black">{icon}</p>
      </div>

      <div className="">
        <a href={href} className="w-full">
          <p className="text-black">{siteName}</p>
        </a>
      </div>
    </li>
  );
}
