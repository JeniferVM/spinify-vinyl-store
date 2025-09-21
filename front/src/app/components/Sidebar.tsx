import Link from "next/link";
import Image from "next/image";
import { navItems } from "../helpers/navItems";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SideBarProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed" onClick={onClose} />

      <aside className="fixed top-0 left-0 h-screen w-60 bg-black shadow-md flex flex-col p-6 z-50">
        <div className="mb-10">
          <Image
            src="/assets/close.png"
            alt="close"
            width={30}
            height={15}
            className="justify-content: flex-end; mx-auto cursor-pointer"
            onClick={onClose}
          />
        </div>

        <nav className="flex flex-col gap-6">
          {navItems.map((navigatorByItem) => (
            <Link
              key={navigatorByItem.name}
              href={navigatorByItem.route}
              className="flex items-center gap-3 text-white text-2xl hover:text-custume-orange hover:font-semibold transition"
              onClick={onClose}
              prefetch
            >
              {navigatorByItem.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
