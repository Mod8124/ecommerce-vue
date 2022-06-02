import {ref} from 'vue'

const get = () => {
    const shoes = ref([])

    const load = async () => {
        try {
            const response = await fetch('https://eccomerce-node.herokuapp.com/api')
            const data = await response.json();
            if(data) {
                shoes.value = data
            }
         } catch(err) {
             console.log(err)
         }
     
    }

   return {
       shoes,
       load
   }
}

export default get;

