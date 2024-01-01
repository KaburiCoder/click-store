export default function SubTextWrapper({
  children,
  text,
}: {
  children: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="flex flex-col">
      {children}
      <span className="text-sm text-slate-500">{text}</span>
    </div>
  );
}
