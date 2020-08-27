import React from 'react'
import './styles.css'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import Hero from '../componets/Hero'
import selo from '../assets/selo.png'
import projeto from '../assets/projeto.png'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Selo = () => {
  const selos = [1, 2, 3, 4]
  return (
    <div className=' flex 
                   flex-col 
                   items-center 
                   sm:flex-row 
                   sm:justify-around '>
      {
        selos.map(() => {
          return <img src={selo} alt='Selos' className='my-4' />
        })
      }
    </div>
  )
}

const Projetos = () => {
  const projetos = [1, 2, 3, 4]
  return (
    <div>
      <h2 className='px-8 py-2 text-2xl font-bold '>Projetos de móveis Executados</h2>
      <div className='flex 
                      flex-col 
                      items-center 
                      sm:flex-row 
                      sm:justify-around
                      shadow-lg'
      >
        {
          projetos.map(() => {
            return (
              <div>
                <img src={projeto} alt='Projetos' className='mx-1 p-1' />
                <div className='px-6 py-4'>
                  <p className='font-bold text-xl mb-2'>Projeto</p>
                  <p>Descrição</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const Index = () => {
  const {site} = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>

      <Header />

      <Hero />
      <Selo />
      <Projetos />

      <Footer />
    </div>
  )
}

export default Index
