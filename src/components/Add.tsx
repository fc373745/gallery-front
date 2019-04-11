import axios from "axios";
import * as React from "react";
interface Props {}

export const Add: React.FC<Props> = () => {
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState<any>("");

    async function postImage(e: React.FormEvent<HTMLDivElement>) {
        e.preventDefault();
        let formData = new FormData();
        formData.set("name", name);
        formData.append("image", image);
        const headers = { headers: { "Content-Type": "multipart/form-data" } };

        const response = await axios.post(
            "http://127.0.0.1:5000/image",
            formData,
            headers
        );
        setName("");
        setImage("");
    }
    return (
        <div onSubmit={postImage}>
            <form>
                <input value={name} onChange={e => setName(e.target.value)} />
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
