import React from 'react'

const Loader = () => {
  return (
    <div class='mx-auto'>
        <svg xmlnsXlink="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" overflow="visible" fill="#005486" stroke="#005486">
            <defs><circle id="loader" cx="20" cy="50" r="6" /></defs><use xlinkHref="#loader" x="-6"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.13s" repeatCount="indefinite"></animate></use><use xlinkHref="#loader" x="10"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.25s" repeatCount="indefinite"></animate></use><use xlinkHref="#loader" x="26">
            <animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.38s" repeatCount="indefinite">
            </animate></use><use xlinkHref="#loader" x="42"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.50s" repeatCount="indefinite"></animate></use><use xlinkHref="#loader" x="58">
            <animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.63s" repeatCount="indefinite"></animate></use><use xlinkHref="#loader" x="74"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.75s" repeatCount="indefinite"></animate></use><use xlinkHref="#loader" x="90"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.88s" repeatCount="indefinite"></animate></use><use xlinkHref="#loader" x="106"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="1.00s" repeatCount="indefinite"></animate></use>
        </svg>
    </div>
  )
}

export default Loader