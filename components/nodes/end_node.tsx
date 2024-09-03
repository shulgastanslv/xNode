import { Handle, NodeProps, Position, Node } from "@xyflow/react";

export type EndNodeData = {
  label: string;
};

export type EndNode = Node<EndNodeData>;

export default function EndNode({ data }: NodeProps<EndNode>) {
  return (
    <div className="p-4 bg-red-200 border border-red-400 rounded">
      <strong>{data.label}</strong>
      <Handle type="target" position={Position.Top} />
    </div>
  );
};
