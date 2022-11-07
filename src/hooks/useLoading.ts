import { onMounted, onUnmounted, ref } from 'vue'

const useMouse = () => {
  const isShow = ref(false)
  
 
  return{
    isShow
  }
}

export default useMouse