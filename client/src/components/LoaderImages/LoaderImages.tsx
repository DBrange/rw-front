import { Loader, SectionModalBg } from ".."

function LoaderImages({modalActive}: {modalActive: boolean}) {
  return <SectionModalBg $modalActive={modalActive}><Loader /></SectionModalBg>;
}
export default LoaderImages