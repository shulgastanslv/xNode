import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MousePointer2, 
  Square, 
  Circle, 
  Pencil, 
  Type, 
  Image, 
  Eraser, 
  Undo2, 
  Redo2,
  Hand,
  ArrowRight,
  HelpCircle
} from "lucide-react";

import React from "react";
import { debounce } from "lodash";

type Tool = 'select' | 'action' | 'condition';

interface ToolButtonProps {
  tool: Tool;
  icon: React.ReactNode;
  label: string;
  selectedTool: Tool;
  onClick: (tool: Tool) => void;
}

const ToolButton = React.memo(({ tool, icon, label, selectedTool, onClick }: ToolButtonProps) => (
  <Button 
    variant="ghost"
    size="icon" 
    className={`h-9 w-9 ${
      selectedTool === tool 
        ? 'bg-primary-foreground bg-zinc-200' 
        : 'hover:bg-muted-foreground/10'
    }`}
    onClick={() => onClick(tool)}
  >
    {icon}
    <span className="sr-only">{label}</span>
  </Button>
));

export default function Component() {
  const [selectedTool, setSelectedTool] = useState<Tool>('select');

  const debouncedHandleToolClick = useCallback(debounce((tool: Tool) => {
    setSelectedTool(tool);
  }, 200), []);

  const handleToolClick = (tool: Tool) => {
    alert(tool)
    debouncedHandleToolClick(tool);
  };

  return (
    <div className="flex justify-center w-full p-2 bg-background">
      <div className="flex items-center space-x-1 rounded-lg bg-white p-1 shadow-md">
        <ToolButton tool='select' icon={<MousePointer2 className="h-4 w-4" />} label='Select' selectedTool={selectedTool} onClick={handleToolClick} />
        <Separator orientation="vertical" className="mx-1 h-6" />
        <ToolButton tool='action' icon={<ArrowRight className="h-4 w-4" />} label='Action' selectedTool={selectedTool} onClick={handleToolClick} />
        <ToolButton tool='condition' icon={<HelpCircle className="h-4 w-4" />} label='Ellipse' selectedTool={selectedTool} onClick={handleToolClick} />
        <Separator orientation="vertical" className="mx-1 h-6" />
        <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-muted-foreground/15">
          <Undo2 className="h-4 w-4" />
          <span className="sr-only">Undo</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-muted-foreground/15">
          <Redo2 className="h-4 w-4" />
          <span className="sr-only">Redo</span>
        </Button>
      </div>
    </div>
  );
}
