import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ElectronicData, VehicleData } from "../../interfaces";
import { FormInput, FormSelect } from "../../components";

function Inspect() {
  type FormData = VehicleData | ElectronicData;

  const currentYear = new Date().getFullYear();

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

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

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
    <form
      className="w-full bg-slate-600 mx-auto gap-5 flex flex-col items-center"
      onSubmit={handleSubmit(submitData)}
    >
      <FormInput
        register={register("firstName")}
        error={errors.firstName?.message}
        type="text"
        id="name"
        label="Nombre"
        placeholder="Ingrese su nombre"
      />
      <FormInput
        register={register("lastName")}
        error={errors.lastName?.message}
        type="text"
        id="lastName"
        label="Apellido"
        placeholder="Ingrese su Apellido"
      />
      <FormInput
        register={register("phoneNumber", { valueAsNumber: true })}
        error={errors.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Numero de telefono"
        placeholder="Ingrese su numero de telefono"
      />
      <FormInput
        register={register("email")}
        error={errors.email?.message}
        type="text"
        id="email"
        label="Email"
        placeholder="Ingrese su email"
      />
      <FormInput
        register={register("altEmail")}
        error={errors.altEmail?.message}
        type="text"
        id="altEmail"
        label="Email alternativo"
        placeholder="Ingrese su email"
      />
      <FormSelect
        register={register("gender")}
        error={errors.gender?.message}
        id="role"
        label="Genero"
        options={["hombre", "mujer", "otro"]}
      />
      <FormInput
        register={register("dni")}
        error={errors.dni?.message}
        type="number"
        id="dni"
        label="DNI"
        placeholder="Ingrese su DNI"
      />
      <FormInput
        register={register("address")}
        error={errors.address?.message}
        type="text"
        id="address"
        label="Direccion"
        placeholder="Ingrese su direccion"
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
export default Inspect;
