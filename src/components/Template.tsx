import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { ColorPicker } from 'primereact/colorpicker';
import { useAppDispatch, useAppSelector } from '../context/hooks';
import themeActions from '../context/slices/themeSlice';

const Template: NextPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    // Theme context
    const { changeThemeAsync, changeAccentColor } = themeActions;
    const { accentColor, dark, status } = useAppSelector((state) => state.theme);

    const style = {
        '--accent-color': `#${accentColor}`,
        backgroundColor: dark ? '#343434' : '#f4f4f4',
        color: dark ? '#f4f4f4' : '#343434',
        justifyContent: 'center',
    } as const;

    return (
        <div className="h-full flex flex-column align-items-center flex-grow-1" style={style}>
            <h1 className={'mb-5 mt-5'} style={{ color: 'var(--accent-color)' }}>
                NextJS Template
            </h1>

            {dark ? (
                <Button
                    label={status === 'loading' ? 'Loading...' : 'Switch to Light Mode'}
                    onClick={() => dispatch(changeThemeAsync(false))}
                    className="p-button-secondary  mb-5"
                    loading={status === 'loading'}
                />
            ) : (
                <Button
                    label={status === 'loading' ? 'Loading...' : 'Switch to Dark Mode'}
                    onClick={() => dispatch(changeThemeAsync(true))}
                    className="p-button-secondary  mb-5"
                    loading={status === 'loading'}
                />
            )}

            <p className="mb-2">Change Accent Color:</p>
            <ColorPicker value={accentColor} onChange={(e) => dispatch(changeAccentColor(e.value as string))} />

            <Button label="Go to About" onClick={() => router.push('/about')} className="p-button-text mb-2 mt-2" />
            <Button
                label="Go to QR Reader"
                onClick={() => router.push('/camera')}
                className="p-button-text mb-2 mt-2"
            />
            <Button label="Go to NFC Reader" onClick={() => router.push('/nfc')} className="p-button-text mb-2 mt-2" />
            <Button
                label="Go to Push Notifications"
                onClick={() => router.push('/push')}
                className="p-button-text mb-2 mt-2"
            />
        </div>
    );
};

export default Template;
