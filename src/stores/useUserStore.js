import {reactive} from "vue";
const store = reactive({
    isLogin:false,
});

export default function useUserStore(){
    return store;
}