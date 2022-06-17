import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { useThemeContext } from '../../context/Theme';

const About: NextPage = () => {
    const router = useRouter();
    const { themeState } = useThemeContext();

    const { accentColor, dark } = themeState;

    const style = {
        '--accent-color': `#${accentColor}`,
        backgroundColor: dark ? '#343434' : '#f4f4f4',
        color: dark ? '#f4f4f4' : '#343434',
    } as const;

    return (
        <div className="h-full flex flex-column justify-content-center align-items-center flex-grow-1" style={style}>
            <h1 className={'mb-5'} style={{ color: 'var(--accent-color)' }}>
                About Page
            </h1>

            <p>The theme and accend color should be mantained</p>

            <Button label="Go to Home" onClick={() => router.push('/')} className="p-button-text mt-5" />
            <Button label="Go to Users" onClick={() => router.push('/users')} className="p-button-text mt-5" />
        </div>
    );
};

export default About;
