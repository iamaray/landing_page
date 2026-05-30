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
    <li className="flex w-full justify-between border border-black rounded-sm p-3">
      <div className="flex">
        <p className="text-black">{icon}</p>
      </div>

      <div className="flex flex-1">
        <a href={href} className="w-full">
          <p className="text-black">{siteName}</p>
        </a>
      </div>
    </li>
  );
}
