import { useForm } from "react-hook-form"
import { usePostProductMutation } from "../services/productApi"
import { useNavigate } from "react-router"


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
            nav('/') 
            console.log(formData)
        } catch (err) {
            console.log(err)
        }

    }

    //   console.log(watch("example")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className="border-2 border-gray-600 shadow-2xs p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="">Name</label>
            <input className="border" {...register("title")} />


            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="">Price</label>
            <input className="border" {...register("price", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.price && <span>This field is required</span>}


            <button>Submit</button>
        </form>
    )
}