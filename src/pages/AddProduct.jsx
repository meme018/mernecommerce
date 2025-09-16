import { useForm } from "react-hook-form"
import { usePostProductMutation } from "../services/productApi"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"


export default function AddProduct() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const nav = useNavigate()
    const [postProduct] = usePostProductMutation()

    const onSubmit = async (formData) => {
        try {
            await postProduct(formData).unwrap();
            toast.success("Product added successfully!")
            nav('/')
            console.log(formData)
        } catch (err) {
            console.log(err)
        }
    }

    //   console.log(watch("example")) // watch input value by passing the name of it

    return (  
        <form class="max-w-sm mx-auto shadow-2xl p-4 my-8 rounded" onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" {...register("title")} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div class="mb-5">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="text" id="price" {...register("price")} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div> 
            <div class="mb-5">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                <input type="text" id="description" {...register("description")} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div> 
            <div class="mb-5">
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">category</label>
                <input type="text" id="category" {...register("category")} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div> 
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form> 

    )
}