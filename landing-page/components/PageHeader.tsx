type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <h1 className="text-page-title font-semibold text-foreground">
        {title}
      </h1>

      {description ? (
        <p className="mt-2 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </header>
  );
}
