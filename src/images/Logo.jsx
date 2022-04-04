import React from 'react'

const Logo = (props) => {
  const { elemento } = props
  if (elemento === 'completo') {
    return <LogoRN />
  } else if (elemento === 'icono') {
    return <IconoRN />
  } else {
    console.log(
      'Debe especificar un elemento="(completo o icono)" como props en el componente Logo.jsx'
    )
    return <></>
  }
}

export default Logo

const LogoRN = () => {
  return (
    <>
      <svg
        className='logo-completo'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 4074.28 1414.62'
      >
        <g id='f7d5c86c-ff2e-4ccc-a6dc-0fcb350aa6ae' data-name='Layer 2'>
          <g id='eb25235c-3fae-40ee-98c6-cbf52173e9fe' data-name='Layer 9'>
            <path
              d='M996.6,92.53a13.78,13.78,0,0,1-6.84,11.93A594.55,594.55,0,0,0,714.18,37.23c-307.66,0-561,232.47-594,531.28a598.25,598.25,0,0,0,21.69,245.74c44.66,146.15,143.92,268.45,274,343.13a591.34,591.34,0,0,0,119,51.94,7.73,7.73,0,0,1,2.67,13.27L411.9,1329.72a7.91,7.91,0,0,1-8.31,1.17,674,674,0,0,1-64.11-33.58,693.14,693.14,0,0,1-145.67-115c-1.29-1.32-2.53-2.67-3.77-4C73,1052.49,1,884.07,0,698.86,2.05,319.33,310.33,12.36,690.3,12.36a688.37,688.37,0,0,1,244,44.37l54.46,23.33A13.82,13.82,0,0,1,996.6,92.53Z'
              fill='#fe005f'
            />
            <path
              d='M1128.59,716.35,332,1399.08a23,23,0,0,1-5.82,3.7c-17.59,7.71-38-11.6-27.54-30.73l40.82-74.72,76.4-139.93L579.8,857.13a21.82,21.82,0,0,0-14-31.67l-304.7-73.52a21.78,21.78,0,0,1-10-36.9L913.79,78.1l21.72-20.88L987.63,7.11c17-16.31,44.26,2.2,35.3,24l-22.46,54.72-10.53,25.71-190.37,464a21.79,21.79,0,0,0,15,29.47l304.92,73.55C1136.82,682.74,1142.08,704.76,1128.59,716.35Z'
              fill='#44c6e9'
            />
            <path
              d='M1613.13,780.48a20.3,20.3,0,0,1,5-13.89c3.32-3.74,8-5.6,14.06-5.6h99.7a24.76,24.76,0,0,1,11.5,2.8,28.3,28.3,0,0,1,9.75,8.87q74.16,105.76,146.92,210t147,210V777.45c.87-5.2,3-9.23,6.48-12.14a19,19,0,0,1,12.55-4.32h83.7a22.83,22.83,0,0,1,14.94,5.19c4.21,3.45,6.25,8.12,6.25,13.89V1386.9c0,11.85-6.77,17.74-20.37,17.74h-94c-6.36,0-12.26-3.91-17.74-11.67q-76.35-110.58-151.94-220.88T1735.41,950.81v434.8q0,9.47-4.55,14.31t-15.41,4.72h-83.24c-6.65,0-11.49-1.63-14.53-5s-4.55-7.88-4.55-13.66Z'
              fill='#fe005f'
            />
            <path
              d='M2742.83,1343.35a311.06,311.06,0,0,1-83.47,51.14q-45.27,18.65-99.46,18.62a282.34,282.34,0,0,1-111-22.13,290.28,290.28,0,0,1-154.5-151q-23.2-51.84-23.23-111.66a291.46,291.46,0,0,1,36.65-142,281.07,281.07,0,0,1,42.67-57.62,269.92,269.92,0,0,1,56.15-44.88A274.86,274.86,0,0,1,2473.86,855a281.78,281.78,0,0,1,76.52-10.15,268.36,268.36,0,0,1,65,8,285,285,0,0,1,114.87,58.55,260.41,260.41,0,0,1,44.25,47.45,256.14,256.14,0,0,1,38.12,78.45q12.16,42,12.14,93.22a175.87,175.87,0,0,1-1.05,21q-1.14,8.4-5.43,13.66c-2.92,3.44-7.24,6-13,7.58s-13.89,2.34-24.28,2.34H2396.46c3.79,20.84,10.91,39.22,21.48,55.28a166.27,166.27,0,0,0,37.47,40.74,159.42,159.42,0,0,0,47.28,25.16,163.11,163.11,0,0,0,51.14,8.46,178,178,0,0,0,37.47-3.91,197,197,0,0,0,33.62-10.39,189.66,189.66,0,0,0,28.84-15,168.5,168.5,0,0,0,23.17-17.51c0-.29.12-.47.41-.47a68.91,68.91,0,0,1,10-7.59,17.71,17.71,0,0,1,18.86-.17,30.47,30.47,0,0,1,9.74,8.64q11.74,14.36,20,23.87c5.48,6.36,10,11.67,13.42,16a70.47,70.47,0,0,1,7.59,11.27,21.43,21.43,0,0,1,2.39,9.57Q2759.29,1331.16,2742.83,1343.35Zm-192.45-391a138.19,138.19,0,0,0-49.85,9.29,167,167,0,0,0-44.47,25.39,173.85,173.85,0,0,0-35.08,37.71,152.87,152.87,0,0,0-21.89,46.81h306.85a166.19,166.19,0,0,0-21-48.33,153.46,153.46,0,0,0-34-37.71A149,149,0,0,0,2605.43,961,171,171,0,0,0,2550.38,952.38Z'
              fill='#fe005f'
            />
            <path
              d='M2920.28,1130.3a283.55,283.55,0,0,1,141.2-246,291,291,0,0,1,67.77-28.66,285.69,285.69,0,0,1,150.95,0,285.76,285.76,0,0,1,125.15,72.85,286.09,286.09,0,0,1,73.43,277.61,278.74,278.74,0,0,1-28.84,67.83,288.31,288.31,0,0,1-44.59,57.44,283.4,283.4,0,0,1-57.38,44.42,286.86,286.86,0,0,1-67.77,28.66,285.69,285.69,0,0,1-150.95,0,291,291,0,0,1-67.77-28.66,279.89,279.89,0,0,1-57.61-44.42,290.83,290.83,0,0,1-44.65-57.44,281,281,0,0,1-38.94-143.65Zm122.23,0a178.15,178.15,0,0,0,12.14,65.67,164.38,164.38,0,0,0,33.8,53.93,160.16,160.16,0,0,0,51.37,36.43q29.68,13.39,64.79,13.42,34.23,0,63.51-13.42a157.24,157.24,0,0,0,50.49-36.43,166.86,166.86,0,0,0,33.15-53.93,186.51,186.51,0,0,0,0-131.16,174.88,174.88,0,0,0-33.15-54.81,161.67,161.67,0,0,0-50.49-37.71q-29.25-14.1-63.51-14.07-35.12,0-64.79,14.07a164.55,164.55,0,0,0-51.37,37.71,172.15,172.15,0,0,0-33.8,54.81A179,179,0,0,0,3042.51,1130.3Z'
              fill='#fe005f'
            />
            <path
              d='M3589.69,866.75c3.44-4.61,6.77-7.53,10-8.69,2.27-2.28,5.72-3.5,10.39-3.68s8.93-.23,13-.23h43.78c8.35,0,14.54,2.8,18.62,8.29a47.75,47.75,0,0,1,8.23,18.15l4.79,46A185.6,185.6,0,0,1,3723,897.52,164.48,164.48,0,0,1,3757.44,872a194.53,194.53,0,0,1,45.48-18.21q25.56-6.91,57.67-7,51.12,0,91,18.45a193.23,193.23,0,0,1,67.18,50.49q27.32,32,41.39,75.41t14.12,93.22v289.11c0,10.39-2.45,18.16-7.35,23.41s-12,7.76-21.25,7.76h-65.9c-11.56,0-19.26-2.16-23.17-6.48s-5.9-12-5.9-23V1086.52a133,133,0,0,0-7.76-44.89,122.29,122.29,0,0,0-22.77-39.22,110.15,110.15,0,0,0-37.06-27.73c-14.71-6.94-31.82-10.39-51.14-10.39-13.3,0-27.08,2.63-41.38,8a136.42,136.42,0,0,0-39.23,22.76,123.78,123.78,0,0,0-29.47,35.73q-11.74,21.09-12.14,47.51v280.88a156.34,156.34,0,0,1-.88,16.46,50.12,50.12,0,0,1-3.68,14.71,25.23,25.23,0,0,1-8,10.39c-3.45,2.63-7.94,3.91-13.43,3.91h-71.5c-9.52,0-16.58-2.21-21-6.71s-6.71-10.91-6.71-19.26V879.77C3584.49,875.69,3586.18,871.37,3589.69,866.75Z'
              fill='#fe005f'
            />
            <path
              d='M1609.81,20.37c0-13.54,6.36-20.37,19.08-20.37h265.24q43.78,0,81.95,16.52a215.33,215.33,0,0,1,66.55,44.59,207.19,207.19,0,0,1,44.65,66.37,204.93,204.93,0,0,1,16.23,81,197,197,0,0,1-8.23,57.2,207.65,207.65,0,0,1-58.08,93,208.44,208.44,0,0,1-45.06,31.87L2104.79,613a34.21,34.21,0,0,0,3,8.64,20.1,20.1,0,0,1,2.16,9.11c0,8.64-5,13-15.12,13H1994.3c-10.45,0-17.34-5.37-20.84-16.06l-104.9-208c-4.61,0-9.57.06-14.94.17s-12.72.24-22.12.24H1736V625c0,12.43-6.66,18.68-20,18.68h-87.09c-5.78,0-10.39-1.52-13.89-4.56s-5.19-7.76-5.19-14.12Zm365.4,188.77a97.41,97.41,0,0,0-7-36.07,100.93,100.93,0,0,0-49.38-53.88,97.64,97.64,0,0,0-37.71-9.92c-10.15-.29-20-.52-29.71-.64s-19.73-.24-30.12-.24H1736V309.48h130.69a162.14,162.14,0,0,0,16.22-.81,102,102,0,0,0,37.54-9.52,92.45,92.45,0,0,0,29.24-21.89,101,101,0,0,0,18.86-31.11A102.09,102.09,0,0,0,1975.21,209.14Z'
              fill='#44c6e9'
            />
            <path
              d='M2790.67,618.15c0,5.19-1.11,9.45-3.27,12.78a22.52,22.52,0,0,1-8.47,7.77,35.41,35.41,0,0,1-11.9,3.91,84.27,84.27,0,0,1-14.07,1.11h-54.23q-13.83,0-19.26-7.36a49.92,49.92,0,0,1-8-18.68l-2.62-36.83a271.88,271.88,0,0,1-33.57,28.37,238,238,0,0,1-39.69,23,232.22,232.22,0,0,1-45.06,15.17,220.14,220.14,0,0,1-49,5.43,277.47,277.47,0,0,1-75.25-10.21A288.23,288.23,0,0,1,2358.49,614a276.59,276.59,0,0,1-57.44-44.42,286.86,286.86,0,0,1-72.79-125.73,286.85,286.85,0,0,1,0-151.7,287.91,287.91,0,0,1,28.6-68,278.81,278.81,0,0,1,44.19-57.43,282.41,282.41,0,0,1,57.44-44.25,290.74,290.74,0,0,1,67.82-28.6,277.45,277.45,0,0,1,75.25-10.16,232.78,232.78,0,0,1,52.88,5.84,224.76,224.76,0,0,1,47,16.46A212.63,212.63,0,0,1,2642,131.57a253.64,253.64,0,0,1,33.79,32.74l6.07-46.4c1.46-5.2,2.8-9.46,4.09-12.78a25.33,25.33,0,0,1,4.79-8,14.29,14.29,0,0,1,7.18-4.15,46.47,46.47,0,0,1,10.79-1h43.37a73.67,73.67,0,0,1,13.84,1.29,48.59,48.59,0,0,1,12.61,4.08,22.73,22.73,0,0,1,8.87,7.83,22.3,22.3,0,0,1,3.27,12.37ZM2339.87,368A178,178,0,0,0,2352,433.7a169.53,169.53,0,0,0,33.8,54.4,161.66,161.66,0,0,0,51,37.06q29.25,13.67,63.92,13.66a159,159,0,0,0,65.67-13.66,168.93,168.93,0,0,0,53.11-37.06A174.83,174.83,0,0,0,2655,433.7a171.09,171.09,0,0,0,0-130.93,175.42,175.42,0,0,0-35.49-54.4,171.25,171.25,0,0,0-53.11-37.24,156.5,156.5,0,0,0-65.67-13.89q-34.68,0-63.92,13.89a163.91,163.91,0,0,0-51,37.24,170.07,170.07,0,0,0-33.8,54.4A176.87,176.87,0,0,0,2339.87,368Z'
              fill='#44c6e9'
            />
            <path
              d='M3423.7,107.92a45.83,45.83,0,0,1-1.13,8.7c-.68,3.72-1.32,5.9-1.9,6.49l-234.9,606.73a273.94,273.94,0,0,0-56.5,9.57,288.88,288.88,0,0,0-67.8,28.66q-8.66,5-16.88,10.6a3.83,3.83,0,0,1-5.74-4.56l69.29-176.81L2914.82,126.15a1.71,1.71,0,0,0-.4-1.27v-3.95a24.78,24.78,0,0,1-2.23-10.79,14.44,14.44,0,0,1,5.26-11.75c3.45-2.85,8.8-4.3,16-4.3h78.45q18.63,0,25.62,18.23l7.8,20.36q8.63,24.28,19.5,54.41t22.58,62.17c7.75,21.41,15.64,42.81,23.58,64.35s15.46,41.76,22.54,60.72,13.51,36,19.31,51.15,10.39,27.07,13.83,35.69L3295,112.32q3.89-9.6,9.93-14.15c4.09-3,9.39-4.54,16.06-4.54h81.49c8.11,0,13.64,1.41,16.68,4.13A13.19,13.19,0,0,1,3423.7,107.92Z'
              fill='#44c6e9'
            />
            <path
              d='M3505.63,367.32a283.55,283.55,0,0,1,141.2-246,290.19,290.19,0,0,1,67.77-28.6,283.8,283.8,0,0,1,151,0,284.77,284.77,0,0,1,125.14,72.79,283.88,283.88,0,0,1,44.6,345.5,287.93,287.93,0,0,1-44.6,57.43,282.71,282.71,0,0,1-57.37,44.42,286.29,286.29,0,0,1-67.77,28.6,283.8,283.8,0,0,1-151,0,290.19,290.19,0,0,1-67.77-28.6,279.55,279.55,0,0,1-57.61-44.42A290.4,290.4,0,0,1,3544.57,511a281,281,0,0,1-38.94-143.71Zm122.23,0A178.06,178.06,0,0,0,3640,433a165.32,165.32,0,0,0,33.8,54,160.81,160.81,0,0,0,51.36,36.36q29.68,13.49,64.8,13.49,34.23,0,63.5-13.49A157.73,157.73,0,0,0,3904,487a167.83,167.83,0,0,0,33.15-54,186.34,186.34,0,0,0,0-131.1A173.53,173.53,0,0,0,3904,247.07a161.59,161.59,0,0,0-50.5-37.76,145.13,145.13,0,0,0-63.5-14.07q-35.11,0-64.8,14.07a164.61,164.61,0,0,0-51.36,37.76,170.84,170.84,0,0,0-33.8,54.81A178.44,178.44,0,0,0,3627.86,367.32Z'
              fill='#44c6e9'
            />
          </g>
        </g>
      </svg>
    </>
  )
}

const IconoRN = () => {
  return (
    <>
      <svg
        className='logo-icono'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1136.22 1403.62'
      >
        <g id='f2fd77e4-d324-4de0-a452-0a53441bd63e' data-name='Layer 2'>
          <g id='b32c6d5f-493b-4a90-9aaa-796fadecf112' data-name='Layer 9'>
            <path
              fill='#fe005f'
              d='M996.6,91.64a13.75,13.75,0,0,1-6.84,11.92A594.66,594.66,0,0,0,714.18,36.34c-307.66,0-561,232.46-594,531.27a598.25,598.25,0,0,0,21.69,245.74c44.66,146.15,143.92,268.45,274,343.14a591.87,591.87,0,0,0,119,51.93,7.74,7.74,0,0,1,2.67,13.28L411.9,1328.82a7.89,7.89,0,0,1-8.31,1.17,674,674,0,0,1-64.11-33.57,693.79,693.79,0,0,1-145.67-115c-1.29-1.32-2.53-2.67-3.77-4C73,1051.59,1,883.17,0,698,2.05,318.43,310.33,11.47,690.3,11.47a688.59,688.59,0,0,1,244,44.36l54.46,23.34A13.8,13.8,0,0,1,996.6,91.64Z'
            />
            <path
              fill='#44c6e9'
              d='M1128.59,715.46,332,1398.19a23,23,0,0,1-5.82,3.69c-17.59,7.72-38-11.59-27.54-30.72l40.82-74.72,76.4-139.93L579.8,856.23a21.82,21.82,0,0,0-14-31.67l-304.7-73.51a21.78,21.78,0,0,1-10-36.91L913.79,77.21l21.72-20.89,52.12-50.1c17-16.31,44.26,2.19,35.3,24L1000.47,85l-10.53,25.71-190.37,464a21.8,21.8,0,0,0,15,29.48l304.92,73.55C1136.82,681.85,1142.08,703.87,1128.59,715.46Z'
            />
          </g>
        </g>
      </svg>
    </>
  )
}
