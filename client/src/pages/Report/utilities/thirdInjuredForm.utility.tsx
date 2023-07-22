// import { FormInjuredInfoData, PageButtonReport } from "..";
// import { FormEffectOpenClose } from "../../../components";
// import { useReportContext } from "../context";


// export const thirdInjuredForm = () => {
//   let people: any = [];

//   if (people.length) {
//     setPeople(true);
//     for (let i = 0; i < people.length; i++) {
//       people.push(<FormInjuredInfoData person={i + 1} />);
//     }
//     return (
//       <FormEffectOpenClose
//         formName={"Terceros lesionados"}
//         isActive={typeComplaintForm.crash && page === 5}
//         form={
//           <>
//             {people}
//             <div className="w-full">
//               <PageButtonReport
//                 changePage={changePage}
//                 page={page}
//                 errors={errors.schemaVehicle}
//               />
//             </div>
//           </>
//         }
//       />
//     );
//   } else {
//     setPeople(false);

//     return;
//   }
// };
