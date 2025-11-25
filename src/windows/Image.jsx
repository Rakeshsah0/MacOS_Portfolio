import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows?.imgfile?.data;

    if (!data) return null;

    return <>
        <div id="window-header">
            <WindowControls target="imgfile" />
            <h2>{data.name}</h2>
        </div>

        <div className="p-4 flex items-center justify-center h-full">
            <img
                src={data.imageUrl || data.image}
                alt={data.name}
                className="max-w-full max-h-[70vh] object-contain"
            />
        </div>
    </>;
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
