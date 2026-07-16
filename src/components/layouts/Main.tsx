export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className='min-w-0'>{children}</main>;
}
