import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { useEffect, useRef, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { createWorker } from 'tesseract.js';
import { useAppSelector } from '../../context/hooks';
import styles from './index.module.scss';

// const worker = createWorker({
//   logger: m => console.log(m)
// });

// (async () => {
//   await worker.load();
//   await worker.loadLanguage('eng');
//   await worker.initialize('eng');
//   const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
//   console.log(text);
//   await worker.terminate();
// })();

const Camera = () => {
    const router = useRouter();

    const [qrData, setQRData] = useState('');
    const [textData, setTextData] = useState('');
    const tesseractWorker = useRef(createWorker());

    // Theme context
    const { accentColor, dark } = useAppSelector((state) => state.theme);

    const style = {
        '--accent-color': `#${accentColor}`,
        backgroundColor: dark ? '#343434' : '#f4f4f4',
        color: dark ? '#f4f4f4' : '#343434',
        justifyContent: 'center',
    };

    const handleResult = (result) => {
        if (result) setQRData(result?.text);
    };

    function takeVideoScreenshot() {
        var canvas = document.getElementById('readerCanvasElement');
        var video = document.getElementById('readerVideoElement');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        canvas.toBlob((blob) => {
            const img = new Image();
            img.src = global.URL.createObjectURL(blob);
            readImageText(img);
        });
    }

    const readImageText = async (imageBlob) => {
        console.log('read image');
        try {
            // await tesseractWorker.current.load();
            // await tesseractWorker.current.loadLanguage('eng');
            // await tesseractWorker.current.initialize('eng');

            const { data } = await tesseractWorker.current.recognize(imageBlob);
            // await tesseractWorker.current.terminate();
            console.log(data);
            setTextData(data.text);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const tesseract = tesseractWorker.current;
        const loadTesseract = async () => {
            await tesseractWorker.current.load();
            await tesseractWorker.current.loadLanguage('eng');
            await tesseractWorker.current.initialize('eng');
        };

        loadTesseract();

        return async () => {
            await tesseract.terminate();
        };
    }, []);

    return (
        <div className="h-full flex flex-column align-items-center flex-grow-1" style={style}>
            <h1 className={'mb-5 mt-5'} style={{ color: 'var(--accent-color)' }}>
                Camera test
            </h1>

            <p>Try to scan a QR code</p>

            <QrReader
                onResult={handleResult}
                constraints={{ facingMode: 'environment' }}
                className={`${styles.qrReader} mt-5 mb-5`}
                videoStyle={{ objectFit: 'cover' }}
                videoId="readerVideoElement"
            />
            {qrData && <p>{`QR data: ${qrData}`}</p>}

            <canvas id="readerCanvasElement" style={{ overflow: 'auto', display: 'none' }}></canvas>
            <Button label="Detect Text" onClick={takeVideoScreenshot} className="p-button-secondary mt-5" />
            {textData && <p>{`Text data: ${textData}`}</p>}

            <Button label="Go to Home" onClick={() => router.push('/')} className="p-button-text mb-2 mt-2" />
        </div>
    );
};

export default Camera;
