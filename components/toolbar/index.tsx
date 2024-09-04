import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MousePointer2,
  ArrowRight,
  HelpCircle,
  Undo2,
  Redo2,
  Hand,
  RotateCw,
  AtSign,
  Type,
  Eraser,
  ArrowRightLeft,
  Split,
} from "lucide-react";
import { ReactNode, memo } from "react";
import { debounce } from "lodash";
import { useToolBarStore } from "@/store/use_toolbar";
import { Tool } from "@/types/tool";

interface ToolButtonProps {
  tool: Tool;
  icon: ReactNode;
  label: string;
  selectedTool: Tool;
  onClick: (tool: Tool) => void;
}

const ToolButton = memo(
  ({ tool, icon, label, selectedTool, onClick }: ToolButtonProps) => {
    const isSelected = selectedTool === tool;

    return (
      <Button
        variant="ghost"
        size="icon"
        className={`h-9 w-9 ${
          isSelected
            ? "bg-primary-foreground bg-zinc-200"
            : "hover:bg-muted-foreground/10"
        }`}
        onClick={() => onClick(tool)}
      >
        {icon}
        <span className="sr-only">{label}</span>
      </Button>
    );
  }
);

ToolButton.displayName = "ToolButton";

export default function ToolBar() {
  const { selectedTool, setSelectedTool } = useToolBarStore();

  const debouncedSetSelectedTool = useCallback(
    debounce((tool: Tool) => {
      alert(tool)
      setSelectedTool(tool);
    }, 200),
    [setSelectedTool]
  );

  return (
    <div className="flex justify-center w-full p-2 bg-background">
      <div className="flex items-center space-x-1 rounded-lg bg-white p-1 shadow-md">
        <ToolButton
          tool="hand"
          icon={<Hand className="h-4 w-4" />}
          label="Hand"
          selectedTool={selectedTool}
          onClick={debouncedSetSelectedTool}
        />
        <ToolButton
          tool="select"
          icon={<MousePointer2 className="h-4 w-4" />}
          label="Select"
          selectedTool={selectedTool}
          onClick={debouncedSetSelectedTool}
        />
        <Separator orientation="vertical" className="mx-1 h-6" />
        <ToolButton
          tool="action"
          icon={<ArrowRight className="h-4 w-4" />}
          label="Action"
          selectedTool={selectedTool}
          onClick={debouncedSetSelectedTool}
        />
        <ToolButton
          tool="condition"
          icon={<Split className="h-4 w-4" />}
          label="Condition"
          selectedTool={selectedTool}
          onClick={debouncedSetSelectedTool}
        />
        <ToolButton
          tool="parallel"
          icon={<ArrowRightLeft className="h-4 w-4" />}
          label="Parallel"
          selectedTool={selectedTool}
          onClick={debouncedSetSelectedTool}
        />
        <ToolButton
          tool="fallback"
          icon={<RotateCw className="h-4 w-4" />}
          label="Fallback"
          selectedTool={selectedTool}
          onClick={debouncedSetSelectedTool}
        />
        <ToolButton
          tool="decorator"
          icon={<AtSign className="h-4 w-4" />}
          label="Decorator"
          selectedTool={selectedTool}
          onClick={debouncedSetSelectedTool}
        />
        <Separator orientation="vertical" className="mx-1 h-6" />
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-muted-foreground/15"
        >
          <Undo2 className="h-4 w-4" />
          <span className="sr-only">Undo</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-muted-foreground/15"
        >
          <Redo2 className="h-4 w-4" />
          <span className="sr-only">Redo</span>
        </Button>
      </div>
    </div>
  );
}
