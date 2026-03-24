import {onMounted, ref} from "vue";

export const useFetch = async (url: string) =>{
    const data = ref(null)
    const hasError = ref(false)
    const error = ref(false)
    const isLoading = ref(null)


    onMounted(()=>{
        fetchData();
    })
    async function fetchData(){
        isLoading.value = true;

        
        try {
            const response = await fetch(url);
            const responseData = await response.json();
            data.value = responseData
        }catch (error) {
            error.value = err as any;
        } finally {
            isLoading.value = false
        }

    }
    return {
        data,
        hasError,
        isLoading,
        error,
    }
}