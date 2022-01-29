import {useEffect, useRef} from "react";

var qr = require('qrcode')

export default function QrCodeImage({input}) {
    const imageRef = useRef();


    useEffect(() => {
        if (input) {
            qr.toDataURL(input, {errorCorrectionLevel: 'M'}, (err, res) => {
                if (err) {
                    throw err
                }
                imageRef.current.src = res;
            })

        }
    })

    return (<img alt="qr code" ref={imageRef}/>)
}