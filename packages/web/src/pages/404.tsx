import React from 'react'

import { Text } from 'react-native'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />

    <Text accessibilityRole='header'>NOT FOUND</Text>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
)

export default NotFoundPage
