// import { createContext, useContext, useState } from "react";

// interface IImageContext {
//   images: Record<string, string[]>;
//   setImages: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
// }

// const ImageContext = createContext<IImageContext | undefined>(undefined);

// // export const useImageContext = () => useContext(ImageContext)
// type ChildrenType = {
//   children: React.ReactElement[] | React.ReactElement;
  
// };
// export const ImageProvider = ({ children }: ChildrenType) => {
//   const [images, setImages] = useState<Record<string, string[]>>({});

//   return (
//     <ImageContext.Provider value={{ images, setImages }}>
//       {children}
//     </ImageContext.Provider>
//   );
// };

// export const useImageContext = () => {
//   const context = useContext(ImageContext);
//   if (!context)
//     throw new Error("useImageContext can only be used inside ImagesProvider");

//   return context;
// };
