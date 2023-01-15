import { ErrorToast, ToastProps } from "react-native-toast-message";
import theme from "../../global/theme/theme";

export const toastConfig = {
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
        color: theme.colors.background_primary,
      }}
      text2Style={{
        fontSize: 15,
      }}
      style={{
        borderLeftColor: theme.colors.main,
        backgroundColor: theme.colors.header,
      }}
    />
  ),
};
