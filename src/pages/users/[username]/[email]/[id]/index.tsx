import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { useAppSelector } from '../../../../../context/hooks';

export async function getStaticProps({ params }: Record<string, Record<string, string>>) {
    const { id, username, email } = params;

    return {
        props: { id, username, email },
    };
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map(({ id, username, email }: Record<string, string>) => ({
        params: { id: id.toString(), username, email },
    }));

    return { paths, fallback: 'blocking' };
}

interface SearchProps {
    readonly email: string;
    readonly username: string;
    readonly id: string;
}

const Users: NextPage<SearchProps> = ({ id, username, email }) => {
    const router = useRouter();

    // Theme context
    const { accentColor, dark } = useAppSelector((state) => state.theme);

    const style = {
        '--accent-color': `#${accentColor}`,
        backgroundColor: dark ? '#343434' : '#f4f4f4',
        color: dark ? '#f4f4f4' : '#343434',
    } as const;

    return (
        <div className="h-full flex flex-column justify-content-center align-items-center" style={style}>
            <h1 className="mb-5" style={{ color: 'var(--accent-color)' }}>
                User Details
            </h1>

            <p className="mb-3">{`ID: ${id as string}`}</p>
            <p className="mb-3">{`UsserName: ${username as string}`}</p>
            <p className="mb-3">{`Email: ${email as string}`}</p>

            <Button label="Go Back" onClick={() => router.push('/users')} className="p-button-secondary mt-5" />
        </div>
    );
};

export default Users;
