import Navbar from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";


export const metadata = {
  title: "Student Dashboard",
  description: "Generated by create next app",
};


export default function DashboardLayout({ children }) {
  return (
    <div className="h-full bg=[#E4E7EC]">
      <div className="h-[84px] md:pl-60 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-[252px] flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-[260px] lg:pl-[260px] pt-[70px] md:pt-[80px] h-full md:h-[130vh] lg:h-[350vh] bg-[#E4E7EC]">
        {children}
      </main>
    </div>
  );
}
