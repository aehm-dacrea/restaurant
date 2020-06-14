import {graphql, useStaticQuery} from 'gatsby'

const useData = (props) => {

  const data = useStaticQuery(graphql`
  query contentfulData {
    gustariRece: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Холодные Закуски"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    gustariCalde: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Горячие Закуски"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    salate: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Салаты"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    supe: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Супы"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    pizza: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Пицца"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    bucateDinPorc: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Блюда из Cвинины"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    bucateDinVita: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Блюда из Говядины"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    bucateDinPui: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Блюда из Курицы"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    bucateDinPeste: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Рыбные блюда"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    pentruCompanii: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Для Компаний"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    garnituri: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Гарниры"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    clatite: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Блинчики"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    deserte: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Десерты"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    bauturiAlcoholice: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Алкогольные Напитки"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
    bauturiNonAlcoholice: allContentfulNewDish(
      sort: {order: ASC, fields: contentfulid}, 
      filter: {category: {eq: "Безалкогольные Напитки"}}
      ) {
      group(field: node_locale) {
        fieldValue
        nodes {
          id
          name
          weight
          price
          foto {
          localFile {
          childImageSharp {
            fixed(width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        }
        alt
        composition
        contentfulid
        }
      }
    }
  }
  `)

  // return {nodes: data.images.nodes, desktop: data.desktop}
  return {
    gustariRece: data.gustariRece.group,
    gustariCalde: data.gustariCalde.group,
    salate: data.salate.group,
    supe: data.supe.group,
    pizza: data.pizza.group,
    bucateDinPorc: data.bucateDinPorc.group,
    bucateDinVita: data.bucateDinVita.group,
    bucateDinPeste: data.bucateDinPeste.group,
    pentruCompanii: data.pentruCompanii.group,
    garnituri: data.garnituri.group,
    clatite: data.clatite.group,
    deserte: data.deserte.group,
    bauturiAlcoholice: data.bauturiAlcoholice.group,
    bauturiNonAlcoholice: data.bauturiNonAlcoholice.group,
  }
}

export default useData


// const data = useStaticQuery(graphql`
//     query Image {
//       images: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
//         nodes {
//           childImageSharp {
//             id
//             fixed (width: 320, height: 240, quality: 70, cropFocus: CENTER) {
//               src
//               ...GatsbyImageSharpFixed_withWebp
//             }
//           }
//         }
//       }
//     }
//   `)
