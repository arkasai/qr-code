import styles from './qr-code-download.module.css'
import {saveAs} from 'file-saver'

var qr = require('qrcode')

export default function QrCodeDownload({input}) {
    const downloadQrCode = () => {
        qr.toCanvas(input, {errorCorrectionLevel: 'M'}, (err, res) => {
            if (err) {
                throw err
            }

            res.toBlob((b) => saveAs(b, 'qr-code.png'))
        })
    }

    return (<button className={styles.button} onClick={downloadQrCode}>Download</button>)
}