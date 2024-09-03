import type { BuiltInNode, Node, NodeTypes } from "@xyflow/react";
import PositionLoggerNode, { ActionNode, type PositionLoggerNode as PositionLoggerNodeType} from "./PositionLoggerNodeType";


export const initialNodes = [
  { id: '1', type: 'actionNode', position: { x: 250, y: 0 }, data: { label: 'Action 1' } },
] satisfies Node[];

export const nodeTypes = {
  actionNode: ActionNode,
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType = BuiltInNode | PositionLoggerNodeType;