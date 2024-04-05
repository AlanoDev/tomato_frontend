import LoginDialog from "./LoginDialog.vue";
import { createApp } from "vue";
LoginDialog.show = (callback) => {
  let div = document.createElement("div");
  const loginDialog = createApp(LoginDialog, { close });
  open();
  function open() {
    loginDialog.mount(div);
    document.body.appendChild(div);
  }
  function close(res) {
    loginDialog.unmount();
    div.remove();
    typeof callback === "function" && callback(res);
    div = null;
  }
};

export default LoginDialog;
