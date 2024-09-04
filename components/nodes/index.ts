import type { BuiltInNode, Node, NodeTypes } from "@xyflow/react";
import ActionNode, {type ActionNode as ActionNodeType} from "./action_node";
import RootNode, { type RootNode as RootNodeType} from "./root_node";
import EndNode, { type EndNode as EndNodeType} from "./end_node";
import ConditionNode, {type ConditionNode as ConditionNodeType} from "./condition_node";

export const initialNodes = [
  {
    id: '1',
    type: 'actionNode',
    position: { x: 100, y: 100 },
    data: {
      actionName: 'First Action',
      actionType: 'start',
    },
  },
  {
    id: '2',
    type: 'actionNode',
    position: { x: 100, y: 400 },
    data: {
      actionName: 'Second Action',
      actionType: 'start',
    },
  },
  {
    id: '3',
    type: 'rootNode',
    position: { x: 100, y: 50 },
    data: {
      label: 'Root',
    }
  },
  {
    id: '4',
    type: 'endNode',
    position: { x: 500, y: 350 },
    data: {
      label: 'End',
    }
  },
] satisfies Node[];

export const nodeTypes = {
  "actionNode": ActionNode,
  "rootNode" : RootNode,
  "endNode" : EndNode,
  "conditionNode" : ConditionNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType = BuiltInNode | ActionNodeType | RootNodeType | EndNodeType | ConditionNodeType;