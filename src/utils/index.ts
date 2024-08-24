import { Modal } from "antd";

export const BASE_URL = "http://localhost:8000";

interface NotificationOptions {
  type?: "success" | "error" | "info" | "warning" | "confirm";
  title: string;
  content?: string;
  okText?: string;
  onOk?: () => void;
  cancelText?: string;
  onCancel?: () => void;
}

export function showNotification({
  type = "warning",
  title,
  content,
  okText = "OK",
  onOk,
  cancelText = "Cancel",
  onCancel,
}: NotificationOptions) {
  Modal[type]({
    title,
    content,
    okText,
    onOk,
    cancelText,
    onCancel,
  });
}
