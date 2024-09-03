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

export type ConditionNodeData = {
  conditionType: string;
};

export type ConditionNode = Node<ConditionNodeData>;

export default function ConditionNode({ data }: NodeProps<ConditionNode>) {

  const [conditionType, setConditionType] = useState(data.conditionType || "");

  return (
    <div className=".react-flow__node p-4 border-2 rounded">
      <div className="mt-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Condition" />
          </SelectTrigger>
          <SelectContent>
          </SelectContent>
        </Select>
      </div>
      <Handle type="source" position={Position.Top} />
      <Handle  type="target" position={Position.Left} />
      <Handle  type="target" position={Position.Right} />
    </div>
  );
}
