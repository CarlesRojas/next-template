import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useAppSelector } from '../../context/hooks';
import styles from './index.module.scss';

const Camera = () => {
    const router = useRouter();

    const [data, setData] = useState('');

    // Theme context
    const { accentColor, dark } = useAppSelector((state) => state.theme);

    const style = {
        '--accent-color': `#${accentColor}`,
        backgroundColor: dark ? '#343434' : '#f4f4f4',
        color: dark ? '#f4f4f4' : '#343434',
        justifyContent: 'center',
    };

    const handleResult = (result) => {
        console.log(result);
        if (result) setData(result?.text);
    };

    return (
        <div className="h-full flex flex-column align-items-center flex-grow-1" style={style}>
            <h1 className={'mb-5 mt-5'} style={{ color: 'var(--accent-color)' }}>
                Camera test
            </h1>

            <p>Try to scan a QR code</p>

            <QrReader onResult={handleResult} constraints={{ facingMode: 'environment' }} className={styles.qrReader} />

            <p>{data}</p>

            <Button label="Go to Home" onClick={() => router.push('/')} className="p-button-text mb-2 mt-2" />
        </div>
    );
};

export default Camera;
