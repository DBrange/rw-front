function InspectContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <div className="w-[90%] m-auto">{children}</div>;
}
export default InspectContainer