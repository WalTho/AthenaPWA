const SvgCentauri = ({ toggleModal }) => {

    return (<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none"
        xmlns="http://www.w3.org/2000/svg" className="maps-svg"
    >
        <g className="assets">
            <circle cx="540" cy="538" r="82" stroke="url(#paint0_radial_135_48)"
                strokeWidth="22"
            />
            <circle cx="539.5" cy="538.5" r="94.5" stroke="url(#paint1_radial_135_48)"
                strokeWidth="22"
            />
            <circle cx="540" cy="538" r="125" stroke="url(#paint2_radial_135_48)"
                strokeWidth="22"
            />
            <circle cx="540" cy="538" r="156" stroke="url(#paint3_radial_135_48)"
                strokeWidth="30"
            />
            <circle cx="539.5" cy="538.5" r="177" stroke="url(#paint4_radial_135_48)"
                strokeWidth="37"
            />
            <circle cx="213" cy="937" r="30.5" stroke="#979797" />
            <circle cx="857" cy="202" r="32.5" stroke="#979797" />
            <circle cx="440" cy="139" r="29.5" stroke="#979797" />
            <circle cx="337" cy="240" r="32.5" stroke="#979797" />

            <circle cx="539.5" cy="538.5" r="202" stroke="white" strokeOpacity="0.5" />
            <circle cx="539.5" cy="538.5" r="245" stroke="white" strokeOpacity="0.5" />
            <circle cx="540" cy="540" r="283.5" stroke="white" strokeOpacity="0.5" />
            <circle cx="540" cy="540" r="323.5" stroke="white" strokeOpacity="0.5" />
            <circle cx="538" cy="538" r="361.5" stroke="white" strokeOpacity="0.5" />
            <circle cx="537.5" cy="540.5" r="412" stroke="white" strokeOpacity="0.5" />
            <circle cx="540" cy="540" r="465.5" stroke="white" strokeOpacity="0.5" />
            <circle cx="539.5" cy="538.5" r="515" stroke="white" strokeOpacity="0.5" />
        </g>
        <circle cx="213" cy="937" r="24" stroke="url(#paint5_radial_135_48)"
            strokeWidth="10"
        />

        <g className="maps-svg-avernus">
            <circle cx="678" cy="685" r="16" fill="#776239"
                cursor="pointer" className="maps-svg-avernus-planet"
                onClick={() => toggleModal('avernus')}
            />
            <title>Avernus</title>
        </g>
        <g className="maps-svg-triton">
            <circle cx="288" cy="669" r="16" fill="#7BA5AB"
                cursor="pointer" className="maps-svg-triton-planet"
                onClick={() => toggleModal('triton')}
            />
            <title>Triton</title>
        </g>
        <g className="maps-svg-exolia">
            <circle cx="213" cy="937" r="16" fill="#2C7652"
                cursor="pointer" className="maps-svg-exolia-planet"
                onClick={() => toggleModal('exolia')}
            />
            <title>Exolia</title>
        </g>
        <g className="maps-svg-pertam">
            <circle cx="216" cy="538" r="16" fill="#D3AF67"
                cursor="pointer" className="maps-svg-pertam-planet"
                onClick={() => toggleModal('pertam')}
            />
            <title>Pertam</title>
        </g>
        <g className="maps-svg-treossa">
            <circle cx="785" cy="538" r="16" fill="#753A3A"
                cursor="pointer" className="maps-svg-treossa-planet"
                onClick={() => toggleModal('treossa')}
            />
            <title>Treossa</title>
        </g>
        <g className="maps-svg-alien">
            <circle cx="857" cy="202" r="16" fill="#654E82"
                cursor="pointer" className="maps-svg-alien-planet"
                onClick={() => toggleModal('alien')}
            />
            <title>Alien</title>
        </g>
        <g className="maps-svg-mars">
            <circle cx="440" cy="139" r="16" fill="#A76042"
                cursor="pointer" className="maps-svg-mars-planet"
                onClick={() => toggleModal('mars')}
            />
            <title>Mars</title>
        </g>
        <g className="maps-svg-terra">
            <circle cx="337" cy="240" r="16" fill="#579B6E"
                cursor="pointer" className="maps-svg-terra-planet"
                onClick={() => toggleModal('terra')}
            />
            <title>Terra</title>
        </g>
        <g className="maps-svg-titan">
            <circle cx="838" cy="177" r="8" fill="#D09259"
                cursor="pointer" className="maps-svg-titan-planet"
                onClick={() => toggleModal('titan')}
            />
            <title>Titan</title>
        </g>
        <g className="maps-svg-europa">
            <circle cx="432" cy="110" r="8" fill="#64998C"
                cursor="pointer" className="maps-svg-europa-planet"
                onClick={() => toggleModal('europa')}
            />
            <title>Europa</title>
        </g>
        <g className="maps-svg-luna">
            <circle cx="319" cy="212" r="8" fill="#828282"
                cursor="pointer" className="maps-svg-luna-planet"
                onClick={() => toggleModal('luna')}
            />
            <title>Luna</title>
        </g>
        <g className="maps-svg-rothis">
            <circle cx="189" cy="916" r="8" fill="#636894"
                cursor="pointer" className="maps-svg-rothis-planet"
                onClick={() => toggleModal('rothis')}
            />
            <title>Rothis</title>
        </g>
        <g className="maps-svg-overvent">
            <circle cx="540" cy="538" r="109.5" fill="#62452A"
                stroke="url(#paint6_radial_135_48)" strokeWidth="30"
                cursor="pointer" className="maps-svg-overvent-planet"
                onClick={() => toggleModal('overvent')}
            />
            <title>Overvent</title>
        </g>

        <path d="M410.433 480.75L410 480L409.567 480.75L401.773 494.25L401.34 495H402.206H417.794H418.66L418.227 494.25L410.433 480.75Z"
            fill="#992B95" stroke="black" cursor="pointer" className="maps-svg-wormhole-planet"
            onClick={() => toggleModal('wormhole')}
        />
        <defs>
            <radialGradient id="paint0_radial_135_48" cx="0" cy="0" r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(540 538) rotate(90) scale(232.525)"
            >
                <stop />
                <stop offset="1" stopColor="#F09000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_135_48" cx="0" cy="0" r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(539.5 538.5) rotate(90) scale(273.463)"
            >
                <stop />
                <stop offset="1" stopColor="#F09000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_135_48" cx="0" cy="0" r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(540 538) rotate(90) scale(373.35)"
            >
                <stop />
                <stop offset="1" stopColor="#F09000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint3_radial_135_48" cx="0" cy="0" r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(540 538) rotate(90) scale(461.775)"
            >
                <stop />
                <stop offset="1" stopColor="#F09000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint4_radial_135_48" cx="0" cy="0" r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(539.5 538.5) rotate(90) scale(519.088)"
            >
                <stop />
                <stop offset="1" stopColor="#F09000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint5_radial_135_48" cx="0" cy="0" r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(213 937) rotate(90) scale(32.0625)"
            >
                <stop />
                <stop offset="1" stopColor="#BBBBBB" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint6_radial_135_48" cx="0" cy="0" r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(540 538) rotate(90) scale(197)"
            >
                <stop />
                <stop offset="1" stopColor="#876533" stopOpacity="0" />
            </radialGradient>
        </defs>
    </svg>)

}

export default SvgCentauri;