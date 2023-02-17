export interface ToDoProps {
  key: number;
  contentText: string;
  isLast: boolean;
  onRemove: Function;
}

export interface ToDoItemData {
  key: number;
  text: string;
}
