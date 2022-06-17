import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { useAppSelector } from '../../context/hooks';

const About: NextPage = () => {
    const router = useRouter();

    // Theme context
    const { accentColor, dark } = useAppSelector((state) => state.theme);

    const style = {
        '--accent-color': `#${accentColor}`,
        backgroundColor: dark ? '#343434' : '#f4f4f4',
        color: dark ? '#f4f4f4' : '#343434',
        justifyContent: 'center',
    } as const;

    return (
        <div className="h-full flex flex-column align-items-center flex-grow-1" style={style}>
            <h1 className={'mb-5 mt-5'} style={{ color: 'var(--accent-color)' }}>
                About Page
            </h1>

            <p>The theme and accend color should be mantained</p>

            <Button label="Go to Home" onClick={() => router.push('/')} className="p-button-text mb-2 mt-2" />
            <Button label="Go to Users" onClick={() => router.push('/users')} className="p-button-text mb-2 mt-2" />
        </div>
    );
};

export default About;
