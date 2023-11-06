"use client"
export default function Header() {

    // Style definition for the SVG element in the header
    const svgStyle = {
        fill: '#ffffff' // Fill color of the SVG element set to white
    };

    return (
        <div id='logo' className="w-40 m-12 bg-black">
            <svg id="Ebene_1" data-name="Ebene 1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.7 64.9"><title>logo-ws-white</title>
                <path
                    d="M94.2,5.5v54l-82.8-.4L6,5.5M99.7,0H0L.5,5.9,4.7,59.5l.4,5h5.1l84,.4h5.5V0Z"
                    style={svgStyle} />
                <path
                    d="M28.3,31h-.1L26,51.5H17.7L13.4,13.1h5.9l3.2,30.3h.1l2.8-30.3h5.8l3,30.5h.1l3.1-30.5h5.3L38.4,51.5h-8Z"
                    style={svgStyle} />
                <path
                    d="M49.9,31.3v-.1c-2.9-1.2-4.2-3.7-4.2-7.8v-.7c0-6.1,3-9.5,9-9.5h6.9v5.5H54.8c-1.9,0-3.1,1-3.1,3.7v2.4c0,3.1,1.4,4.1,3.6,4.1h2.6V24.6h6v4.3h1.6v5.5H63.9V47a11.633,11.633,0,0,0,.7,4.7H58.5a8.6,8.6,0,0,1-.5-3h-.1a5.632,5.632,0,0,1-5.5,3.5c-4.4,0-6.7-3.1-6.7-8.8V39.5C45.8,35.4,47,32.6,49.9,31.3Zm5,15.1c1.8,0,3-.9,3.1-3.3V34.2H55.7c-2.7,0-3.9,1.3-3.9,4.9v3.6C51.8,45.4,53,46.4,54.9,46.4Z"
                    style={svgStyle} />
                <path
                    d="M77.6,12.7c5.9,0,8.9,3.5,8.9,9.6v1.2H80.8V21.9c0-2.7-1.1-3.8-3-3.8s-3,1-3,3.8S76,26.8,80,30.2c5,4.4,6.6,7.6,6.6,12,0,6.1-3.1,9.6-9,9.6s-9-3.5-9-9.6V39.8h5.7v2.7c0,2.7,1.2,3.7,3.1,3.7s3.1-1,3.1-3.7c0-2.8-1.2-4.9-5.2-8.3-5-4.4-6.6-7.6-6.6-12C68.7,16.2,71.8,12.7,77.6,12.7Z"
                    style={svgStyle} /></svg>
        </div>
    )
}