import axios from "axios";
import * as React from "react";
interface Props {}

export const Add: React.FC<Props> = () => {
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState<any>("");
    const [caption, setCaption] = React.useState("");

    async function postImage(e: React.FormEvent<HTMLDivElement>) {
        e.preventDefault();
        let formData = new FormData();
        formData.set("name", name);
        formData.append("image", image);
        formData.append("caption", caption);
        const headers = { headers: { "Content-Type": "multipart/form-data" } };

        const response = await axios.post(
            "http://127.0.0.1:5000/image",
            formData,
            headers
        );
        setName("");
        setImage("");
        setCaption("");
    }
    return (
        <div onSubmit={postImage}>
            <form>
                Name:
                <input value={name} onChange={e => setName(e.target.value)} />
                Caption:
                <input
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                />
                <input
                    type="file"
                    onChange={e => {
                        if (e.target.files) {
                            setImage(e.target.files[0]);
                        }
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
