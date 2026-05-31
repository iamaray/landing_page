type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <h1 className="text-page-title font-semibold tracking-tight text-foreground">
        {title}
      </h1>

      {description ? (
        <p className="mt-3 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </header>
  );
}
