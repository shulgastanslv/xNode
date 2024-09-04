import { Tool } from "@/types/tool";
import {create} from "zustand";

interface ToolBarStoreState {
  selectedTool: Tool;
  setSelectedTool: (tool: Tool) => void;
}

export const useToolBarStore = create<ToolBarStoreState>((set) => ({
  selectedTool: 'select',
  setSelectedTool: (tool: Tool) => set({ selectedTool: tool }),
}));
