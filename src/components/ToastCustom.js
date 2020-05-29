import React from 'react';
import { DefaultToast } from "react-toast-notifications";

export const ToastCustom = ({ children, ...props }) => (
  <DefaultToast {...props}>
    <div>
      <p>{children}</p>
    </div>
  </DefaultToast>
);
