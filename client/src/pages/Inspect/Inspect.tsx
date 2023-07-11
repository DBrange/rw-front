import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ElectronicData, VehicleData } from "../../interfaces";

function Inspect() {
  type FormData = VehicleData | ElectronicData;


  const currentYear = new Date().getFullYear()

  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    phoneNumber: z.number().lte(10),
    email: z.string().email().max(30),
    altEmail: z.string().email().max(30),
    gender: z.enum(["hombre", "mujer", "otro"]),
    dni: z.number().gte(7).lte(8).int(),
    address: z.string().min(1).max(50),
    year: z.number().lte(currentYear),
    color: z.string().min(1).max(20),
    tireBrand: z.string(),
    tireZise: z.string(),
    tireWear: z.string(),
    damage: z.boolean(),
    damageLocation: z.string().min(1).max(50),
    images: z.string(),
    plate: z.string(),
    gnc: z.boolean(),
    brand: z.string(),
    engine: z.string(),
    model: z.string(),
    fuel: z.enum(["diesel", "gasoline"]),
    type: z.enum(["normal", "premium"]),
  });

  const { handleSubmit, register, formState, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  console.log(formState.errors);

  const submitData = (data: FormData) => {
    console.log(data);
    reset({
      firstName: "",
      lastName: "",
      phoneNumber: 0,
      email: "",
      altEmail: "",
      gender: "hombre",
      dni: 0,
      address: "",
      year: 0,
      color: "",
      tireBrand: "",
      tireZise: "",
      tireWear: "",
      damage: false,
      damageLocation: "",
      images: "",
      plate: "",
      gnc: false,
      brand: "",
      engine: "",
      model: "",
      fuel: "diesel",
      type: "normal",
    });
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <label htmlFor="">Nombre</label>
      <input type="text" {...register("firstName")} />
      <label htmlFor="">Apellido</label>
      <input type="text" {...register("lastName")} />
      <label htmlFor="">Numero de telefono</label>
      <input
        type="number"
        {...register("phoneNumber", { valueAsNumber: true })}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
export default Inspect;
