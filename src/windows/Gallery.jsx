import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { gallery } from "#constants";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

const Gallery = () => {
    const { openWindow } = useWindowStore();

    useGSAP(() => {
        // make gallery items draggable (attach to list items)
        try {
            Draggable.create('#photos .gallery ul li');
        } catch (e) {
            // ignore if Draggable already initialized
        }
    }, []);

    const handleOpenImage = (item) => {
        const data = {
            name: item.name || `Image ${item.id}`,
            imageUrl: item.img || item.image || item.imageUrl || null,
        };

        openWindow('imgfile', data);
    };

    return <>
        <div id="window-header">
            <WindowControls target="photos" />
            <h2>Gallery</h2>
        </div>

        <div className="bg-white flex h-full">

            <div className="gallery">
                <ul>
                    {gallery.map((item) => (
                        <li key={item.id} className="cursor-pointer" onClick={() => handleOpenImage(item)}>
                            <img src={item.img} alt={`Gallery-${item.id}`} className="w-4" />
                            <p className="text-sm font-medium truncate">
                                {item.img.split('/').pop()}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>;
};

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;
