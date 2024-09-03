import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";

export type PositionLoggerNodeData = {
  label?: string;
};

interface CustomNodeData {
  label: string;
}

export const ActionNode: React.FC<{ data: CustomNodeData }> = ({ data }) => {
  return (
    <div style={{ padding: 10, borderRadius: 5, border: '1px solid #ddd', background: '#e3f2fd' }}>
      <strong>{data.label}</strong>
      <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
      <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
    </div>
  );
};

export type PositionLoggerNode = Node<PositionLoggerNodeData>;

export default function PositionLoggerNode({
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}: NodeProps<PositionLoggerNode>) {
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      <div>
        {x} {y}
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}