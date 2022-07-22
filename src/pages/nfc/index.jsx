import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../context/hooks';

const Nfc = () => {
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

    // const onWrite = async () => {
    //     try {
    //         const ndef = new window.NDEFReader();
    //         await ndef.write({
    //             records: [{ recordType: 'text', data: 'Hellow World!' }],
    //         });
    //         console.log(`Value Saved!`);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const onReading = (event) => {
        console.log(event);
        setData((prev) => prev + `${JSON.stringify(event)}`);
        // const { message, serialNumber } = event;
        // for (const record of message.records) {
        //     console.log(record);

        //     setData((prev) => prev + `${JSON.stringify(record)}`);

        //     if (record.recordType === "text") {
        //         const textDecoder = new TextDecoder(record.encoding);
        //         console.log(`Message ${textDecoder.decode(record.data)}`);
        //     }
        // }
    };

    const scan = useCallback(async () => {
        if ('NDEFReader' in window) {
            try {
                const ndef = new window.NDEFReader();
                await ndef.scan();

                console.log('Scan started successfully.');

                ndef.onreadingerror = () => {
                    console.log('Cannot read data from the NFC tag. Try another one?');
                };

                ndef.onreading = (event) => {
                    console.log('NDEF message read.');
                    onReading(event);
                };
            } catch (error) {
                console.log(`Error! Scan failed to start: ${error}.`);
            }
        }
    }, []);

    useEffect(() => {
        scan();
    }, [scan]);

    console.log(data);

    return (
        <div className="h-full flex flex-column align-items-center flex-grow-1" style={style}>
            <h1 className={'mb-5 mt-5'} style={{ color: 'var(--accent-color)' }}>
                NFC Test
            </h1>

            <p>Get the phone close to an NFC tag</p>
            {/* <Button label="WRITE" onClick={scan} className="mb-2 mt-2" /> */}

            {data && <p>{data}</p>}

            <Button label="Go to Home" onClick={() => router.push('/')} className="p-button-text mb-2 mt-2" />
        </div>
    );
};

export default Nfc;