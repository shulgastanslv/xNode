import { ArrowRight, ArrowRightLeft, AtSign, BookOpen, HelpCircle, Library, Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import ToolBar from "../toolbar";
import MenuBar from "../menubar";

export const Navbar = () => {
  return (
    <nav className="fixed bg-transparent w-full h-20 z-50 px-2 lg:px-4 flex justify-between items-center">
      <div className="items-start m-0">
        <MenuBar/>
      </div>
      <div className="items-center">
       <ToolBar/>
      </div>
      <div className="items-end m-0 gap-x-3 flex">
        <Button  className="text-xs" variant="default">
          Send
        </Button>
        <Button className="text-xs gap-2 opacity-75" variant="secondary">
          <BookOpen width={15} height={15}/>Library
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
