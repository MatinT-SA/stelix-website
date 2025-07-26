import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid sm:grid-cols-[16rem_1fr] grid-cols-[12rem_1fr] h-full xs:gap-12 gap-2">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
