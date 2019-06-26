import React from 'react'

import { Text } from 'react-native'

import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />

    <Text accessibilityRole='header'>Hi from the second page</Text>

    <Text>Welcome to page 2</Text>

    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
