import React from "react";
import { Node, Handle, Position, NodeProps } from "@xyflow/react";


export type RootNodeData = {
    label: string;
};

export type RootNode = Node<RootNodeData>;

export default function RootNode({ data }: NodeProps<RootNode>) {
    return (
      <div className="p-4 bg-black text-white rounded-sm">
        <strong>{data.label}</strong>
        <Handle type="source" position={Position.Bottom} />
      </div>
    );
  };