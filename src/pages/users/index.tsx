import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { useAppSelector } from "../../context/hooks";

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return {
        props: {
            users,
        },
        revalidate: 10,
    };
}

interface SearchProps {
    readonly users: Record<string, unknown>[];
}

const generatePath = (id: string, username: string, email: string) => {
    return `users/${username}/${email}/${id}`;
};

const Users: NextPage<SearchProps> = ({ users }) => {
    const router = useRouter();

    // Theme context
    const { accentColor, dark } = useAppSelector((state) => state.theme);

    const style = {
        "--accent-color": `#${accentColor}`,
        backgroundColor: dark ? "#343434" : "#f4f4f4",
        color: dark ? "#f4f4f4" : "#343434",
    } as const;

    return (
        <div className="h-full w-full flex flex-column justify-content-center align-items-center" style={style}>
            <h1 className={"mb-5"} style={{ color: "var(--accent-color)" }}>
                NextJS Template
            </h1>
            <div className="flex flex-wrap justify-content-center align-items-center">
                {users.map(({ id, username, email }) => (
                    <div
                        key={id as string}
                        className="w-20rem flex flex-column justify-content-center align-items-center p-5 m-2"
                        style={{
                            boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.1)",
                            borderRadius: "1rem",
                        }}
                    >
                        <p>{id as string}</p>
                        <p>{username as string}</p>
                        <p>{email as string}</p>
                        <Button
                            label="View Details"
                            onClick={() => router.push(generatePath(id as string, username as string, email as string))}
                            className="p-button-secondary mt-5"
                        />
                    </div>
                ))}
            </div>
            <Button label="Go to Home" onClick={() => router.push("/")} className="p-button-text mt-5" />
            <Button label="Go to About" onClick={() => router.push("/about")} className="p-button-text mt-5" />
        </div>
    );
};

export default Users;
