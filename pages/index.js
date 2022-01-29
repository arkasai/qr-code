import Head from 'next/head'
import styles from '../styles/home.module.css'
import {useState} from "react";
import QrCodeImage from "../components/qr-code-image";
import QrCodeDownload from "../components/qr-code-download";

export default function Home() {
    const [data, setData] = useState('');
    return (
        <div className={styles.container}>
            <Head>
                <title>Create QR code</title>
                <meta name="description" content="Create QR code"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>QR Code Generator</h1>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Enter Text which should be converted"
                    onChange={(input) => setData(input.target.value)}
                />
                {data && <QrCodeImage input={data}/>}
                {data && <QrCodeDownload input={data}/>}
            </main>
        </div>
    )
}
