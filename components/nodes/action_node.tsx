import { Label } from "@/components/ui/label";
import { Handle, NodeProps, Position, Node } from "@xyflow/react";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type ActionNodeData = {
  actionName: string;
  actionType: string;
};

export type ActionNode = Node<ActionNodeData>;

export default function ActionNode({ data }: NodeProps<ActionNode>) {

  const [actionName, setActionName] = useState(data.actionName || "");
  const [actionType, setActionType] = useState(data.actionType || "");

  return (
    <div className=".react-flow__node p-4 border-2 rounded">
      <div className="items-center flex-col flex gap-5">
        <Label>Action</Label>
        <Input
          className="w-44 h-8"
          type="text"
          value={actionName}
          onChange={(e) => setActionName(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Action" />
          </SelectTrigger>
          <SelectContent>
          </SelectContent>
        </Select>
      </div>
      <Handle  type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
}
