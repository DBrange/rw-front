import { ClientInspectionDetailContainer, InspectionDetail, Sidebar } from "../..";

function ClientInspectionDetail() {
  return (
    <ClientInspectionDetailContainer>
      <Sidebar />
      <InspectionDetail
        plate={"aa111aa"}
        year={1999}
        brand={"Peugeot"}
        model={"Alguno"}
        color={"Rojo"}
        tireBrand={"Micheline"}
        tireSize={"12/122/23"}
        tireWear={20}
        damage={false}
        damageLocation={""}
        images={[
          "https://1830262577.rsc.cdn77.org/files/5YJSA1H20FFP71439/COPART/56246272/photo/beec87c29c154caf81864a44b8798225_ful.jpg",
          "https://1830262577.rsc.cdn77.org/files/5YJSA1H27EFP64325/COPART/42138762/photo/4b16956441d14a80b35156de69106df5_ful.jpg",
        ]}
        okm={false}
        explodedAirbag={false}
        noSpareTire={false}
        gnc={false}
        fuel={"DIESEL"}
        type={"AUTOMOVIL"}
        oblea={"12121212"}
        expireDate={"12/12/1998"}
      />
    </ClientInspectionDetailContainer>
  );
}
export default ClientInspectionDetail;
