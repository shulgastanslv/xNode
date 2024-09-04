import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  Save,
  Image,
  Trash,
  Share,
  BookMarkedIcon,
  Folder,
  Download,
  Github,
  HelpCircle,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  action?: () => void;
};

const MenuItem = (item: MenuItem) => (
  <DropdownMenuItem
    className="text-xs py-1.5 h-8 flex items-center"
    onClick={item.action}
  >
    {item.icon && <span className="mr-2">{item.icon}</span>}
    {item.label}
  </DropdownMenuItem>
);

const MenuButton = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="px-3" variant="secondary">
        {icon}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="min-w-[225px] min-h-28 ml-5 mt-1 p-2 flex flex-col">
      {children}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default function MenuBar() {


  return (
    <div className="flex items-center">
      <MenuButton icon={<Menu className="h-4 w-4" />}>
        <MenuItem
          label="Save to..."
          icon={<Download className="h-4 w-4" />}
          action={() => console.log("Save clicked")}
        />
        <MenuItem
          label="Help"
          icon={<HelpCircle className="h-4 w-4" />}
          action={() => console.log("Help clicked")}
        />
        <MenuItem
          label="Reset the canvas"
          icon={<Trash className="h-4 w-4" />}
          action={() => console.log("Reset clicked")}
        />
        <DropdownMenuSeparator />
        <MenuItem
          label="GitHub"
          icon={<GitHubLogoIcon className="h-4 w-4" />}
          action={() => window.open("https://github.com/shulgastanslv/xNode", "_blank")}
        />
      </MenuButton>
    </div>
  );
}
