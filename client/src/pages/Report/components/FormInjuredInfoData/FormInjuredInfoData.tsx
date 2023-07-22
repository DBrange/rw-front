import { FormInput, FormSelect } from "../../../../components";
import { useReportContext } from "../../context";

function FormInjuredInfoData({person}: {person: number}) {
  const { register, errors, touchedFields } = useReportContext();
  return (
    <div className="border-b-2 border-violet-500">
      <h4 className="text-violet-500 text-lg my-5">{`Persona ${person}`}</h4>

      <FormInput
        register={register("thridParty.firstName")}
        error={errors.firstName?.message}
        type="text"
        id="name"
        label="Nombre"
        placeholder="Ingrese su nombre"
        touched={touchedFields.firstName}
      />
      <FormInput
        register={register("thridParty.lastName")}
        error={errors.lastName?.message}
        type="text"
        id="lastName"
        label="Apellido"
        placeholder="Ingrese su Apellido"
        touched={touchedFields.lastName}
      />
      <FormInput
        register={register("thridParty.phoneNumber", { valueAsNumber: true })}
        error={errors.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Numero de telefono"
        placeholder="Ingrese su numero de telefono"
        touched={touchedFields.phoneNumber}
      />
      <FormInput
        register={register("thridParty.email")}
        error={errors.email?.message}
        type="text"
        id="email"
        label="Email"
        placeholder="Ingrese su email"
        touched={touchedFields.email}
      />
      <FormSelect
        register={register("thridParty.gender")}
        error={errors.gender?.message}
        id="role"
        label="Genero"
        options={["hombre", "mujer", "otro"]}
        touched={touchedFields.gender}
      />
      <FormInput
        register={register("thridParty.dni", { valueAsNumber: true })}
        error={errors.dni?.message}
        type="number"
        id="dni"
        label="DNI"
        placeholder="Ingrese su DNI"
        touched={touchedFields.dni}
      />
      <FormInput
        register={register("thridParty.injuries")}
        error={errors.injuries?.message}
        type="text"
        id="injuries"
        label="Direccion"
        placeholder="Ingrese su direccion"
        touched={touchedFields.injuries}
      />
    </div>
  );
}
export default FormInjuredInfoData