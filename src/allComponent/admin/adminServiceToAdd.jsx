import ServiceMBX from './servicesMBX'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import BusinessData from './businessMBX'

export default function AdminServiceToAdd({setIsAdd}) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function submitFunc(data) {
        console.log("addService",data)
        ServiceMBX.addService({ id: data.id, name: data.name, description: data.description, price: data.price, duration: data.duration })
        setIsAdd(false)
    }
    return (
        <form onSubmit={handleSubmit(submitFunc)}>
            <input placeholder="id" {...register("id", { required: "id is..." })} />
            <p>{errors.id?.message}</p>
            <input placeholder="name"  {...register("name", { minLength: 3 })} />
            {errors.name?.type === "minLength" && <span> name is not valid</span>}
            <input placeholder="description" {...register("description", { minLength: 5 })} />
            <input placeholder="price" {...register("price", { min: 5 })} />
            <input placeholder="duration" {...register("duration", { min: 15 })} />
            <button type="submit">Send</button>
        </form>
    )
}