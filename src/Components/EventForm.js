import { useForm } from "react-hook-form";

export default function EventForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => props.setFormData([...props.formData, data]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="Event Name" placeholder="Event Name"{...register("eventName", { required: true, maxLength: 20 })}
            />
            {errors.eventName && <p>event Name is required</p>}

            <input type="text" name="Event Description" placeholder="Description" {...register("eventDescription", { required: true, maxLength: 500 })}
            />
            {errors.eventDescription && <p>event Description is required</p>}
        
        <p>Start date:</p>
            <input type="Date" name="Start Date" {...register("startDate", { required: true })} />
            {errors.startDate && <p>Event dates are required</p>}

            <p>End date:</p>
            <input type="Date" name="End Date" {...register("endDate", { required: true })} />
            {errors.endDate && <p>Event dates are required</p>}

            <input type="submit" />
        </form>
    );
}