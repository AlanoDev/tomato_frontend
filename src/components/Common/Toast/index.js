import Toast from "./Toast.vue";
import { createApp } from "vue";
Toast.show = (props, callback) => {
  let div = document.createElement("div");
  const toast = createApp(Toast, { ...props, close });
  open();
  function open() {
    toast.mount(div);
    document.body.appendChild(div);
  }
  function close() {
    toast.unmount();
    div.remove();
    typeof callback === "function" && callback();
    div = null;
  }
};

export default Toast;
