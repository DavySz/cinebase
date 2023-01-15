import React, { useEffect } from "react";
import ToastMessage from "react-native-toast-message";
import { toastConfig } from "./toast.config";
import { IToast } from "./toast.types";

export function Toast({
  onChangeVisible,
  lifetime,
  visible,
  variant,
  onPress,
  description,
  title,
}: IToast) {
  useEffect(() => {
    if (!visible) return;
    ToastMessage.show({
      text2: description,
      type: variant,
      text1: title,
    });
  }, [visible]);

  return (
    <ToastMessage
      position="bottom"
      onPress={onPress}
      config={toastConfig}
      onHide={onChangeVisible}
      visibilityTime={lifetime || 10000}
    />
  );
}
