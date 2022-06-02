import {ref} from 'vue'

const get =  (id) => {
    const shoe = ref([])

   const load = async () => {
    try {
        const response = await fetch('https://eccomerce-node.herokuapp.com/api/'+id)
        const data = await response.json();
        if(data) {
            shoe.value = data
        }
     } catch(err) {
         console.log(err)
     }
   }

    return {
        shoe,
        load
    }
}

export default get;