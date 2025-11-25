import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows?.txtfile?.data;

    if (!data) return null;

    return <>
        <div id="window-header">
            <WindowControls target="txtfile" />
            <h2>{data.name}</h2>
        </div>

        <div className="textfile p-4 overflow-auto h-full">
            {data.image && (
                <div className="mb-4">
                    <img src={data.image} alt={data.name} className="w-28" />
                </div>
            )}

            {data.subtitle && <h3 className="mb-2">{data.subtitle}</h3>}

            <div className="space-y-3">
                {data.description?.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>
        </div>
    </>;
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
