import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Save, Image, Trash, Share, BookMarkedIcon } from "lucide-react";

const MenuButton = ({
  icon,
  items,
}: {
  icon: React.ReactNode;
  items?: string[];
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="px-3" variant="secondary">
          {icon}
      </Button>
    </DropdownMenuTrigger>
    {items && (
      <DropdownMenuContent className="min-w-[180px] ml-5 mt-1">
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <DropdownMenuItem className="text-xs py-1.5">
              {item}
            </DropdownMenuItem>
            {index < items.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    )}
  </DropdownMenu>
);

export default function MenuBar() {
  return (
    <div className="flex items-center">
      <MenuButton
        icon={<Menu className="h-4 w-4" />}
        items={[
          "Reset",
        ]}
      />
    </div>
  );
}
