import React from 'react'

import { Text } from 'react-native'

import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <Text accessibilityRole='header'>Hi people</Text>

    <Text>Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>

    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
