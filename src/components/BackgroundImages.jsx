import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

// export default function BackgroundImages({ children }) {
// const { desktop } = useStaticQuery(
//   graphql`
//     query {
//       desktop: file(relativePath: { eq: "bck_img001.png" }) {
//         childImageSharp {
//           fluid(quality: 90, maxWidth: 1067) {
//             ...GatsbyImageSharpFluid_withWebp_tracedSVG
//           }
//         }
//       }
//     }
//   `
// )
// const { desktop } = useStaticQuery(
//   graphql`
//     query {
//       desktop: file(relativePath: { eq: "bck_img001.png" }) {
//         childImageSharp {
//           gatsbyImageData(
//             quality: 90
//             layout: FULL_WIDTH
//             backgroundColor: "linear-gradient(270deg, #041426 7.34%, #192940 80.71%)"
//             placeholder: DOMINANT_COLOR
//           )
//         }
//       }
//     }
//   `
// )

// const GbiBridged = () => {
//   const { imagenFondo } = useStaticQuery(
//     graphql`
//       query imagenFondo {
//         file(relativePath: { eq: "bck_img001.png" }) {
//           childImageSharp {
//             gatsbyImageData(
//               quality: 90
//               layout: FULL_WIDTH
//               backgroundColor: "linear-gradient(270deg, #041426 7.34%, #192940 80.71%)"
//               placeholder: DOMINANT_COLOR
//             )
//           }
//         }
//       }
//     `
//   )
// }

// const { desktop } = useStaticQuery(
//   graphql`
//     query MyQuery {
//       file(relativePath: { eq: "bck_img001.png" }) {
//         childImageSharp {
//           gatsbyImageData(
//             quality: 90
//             layout: FULL_WIDTH
//             backgroundColor: "linear-gradient(270deg, #041426 7.34%, #192940 80.71%)"
//             placeholder: DOMINANT_COLOR
//           )
//         }
//       }
//     }
//   `
// )
// const imageData = desktop(MyQuery)
//   return (
//     <>
//       <Box>
//         {/* <BackgroundImage
//           Tag='section'
//           fluid={imageData}
//           style={{ width: '100vw', height: '90.5vh', opacity: '0.2' }}
//         ></BackgroundImage> */}
//         <BackgroundImage
//           Tag='section'
//           {...fondoPantalla}
//           preserveStackingContext
//         >
//           {children}
//         </BackgroundImage>
//       </Box>
//     </>
//   )
// }

const BackgroundImages = ({ children }) => {
  const { imagenFondo } = useStaticQuery(
    graphql`
      query {
        imagenFondo: file(relativePath: { eq: "bck_img001.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    `
  )
  const image = getImage(imagenFondo)
  const fondoPantalla = convertToBgImage(image)
  return (
    <>
      <BackgroundImage
        Tag='section'
        {...fondoPantalla}
        preserveStackingContext
        style={{ width: '100vw', height: '90.5vh', opacity: '0.3' }}
      >
        {children}
      </BackgroundImage>
    </>
  )
}

export default BackgroundImages
