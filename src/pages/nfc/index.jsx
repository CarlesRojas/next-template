import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../context/hooks';

const Nfc = () => {
    const router = useRouter();

    const [data, setData] = useState('');
    const [console, setConsole] = useState([]);

    // Theme context
    const { accentColor, dark } = useAppSelector((state) => state.theme);

    const style = {
        '--accent-color': `#${accentColor}`,
        backgroundColor: dark ? '#343434' : '#f4f4f4',
        color: dark ? '#f4f4f4' : '#343434',
        justifyContent: 'center',
    };

    const onWrite = async () => {
        try {
            const ndef = new window.NDEFReader();
            await ndef.write(JSON.stringify({ isTrusted: true, name: 'Carles Rojas Domenech' }), { overwrite: true });
            setConsole((prev) => [...prev, 'Write successfull']);
        } catch (error) {
            setConsole((prev) => [...prev, `Error! Write failed ${JSON.stringify(error)}`]);
        }
    };

    const onReading = (nfcData) => {
        setData(JSON.stringify(nfcData));
    };

    const scan = useCallback(async () => {
        if ('NDEFReader' in window) {
            try {
                const ndef = new window.NDEFReader();
                await ndef.scan();

                ndef.onreadingerror = () =>
                    setConsole((prev) => [...prev, 'Cannot read data from the NFC tag. Try another one?']);
                ndef.onreading = (event) => onReading(event);
            } catch (error) {
                setConsole((prev) => [...prev, `Error! Scan failed to start: ${JSON.stringify(error)}.`]);
            }
        }
    }, []);

    useEffect(() => {
        scan();
    }, [scan]);

    return (
        <div className="h-full flex flex-column align-items-center flex-grow-1" style={style}>
            <h1 className={'mb-5 mt-5'} style={{ color: 'var(--accent-color)' }}>
                NFC Test
            </h1>

            <p>Get the phone close to an NFC tag</p>
            <Button label="WRITE" onClick={onWrite} className="mb-2 mt-2" />

            {data && <p>{data}</p>}

            {console.map((line, i) => (
                <p key={i}>{line}</p>
            ))}

            <Button label="Go to Home" onClick={() => router.push('/')} className="p-button-text mb-2 mt-2" />
        </div>
    );
};

export default Nfc;
