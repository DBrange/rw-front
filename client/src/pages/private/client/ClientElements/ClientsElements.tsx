import { ClientElementsProvider, ClientElementsContainer, ClientElementsBox } from ".";

function ClientsElements() {
   return (
     <ClientElementsProvider>
       <ClientElementsContainer>
         <ClientElementsBox />
       </ClientElementsContainer>
     </ClientElementsProvider>
   );
}
export default ClientsElements