import homeIMG from "../../../Assets/homeIMG.jpg"


export const BackgroundIMG = () => {
    return (
        <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-gradient-to-t via-transparent from-black to-black" />
      <img src={homeIMG} alt="Image" className="h-full w-full" />
    </div>
      );
}
