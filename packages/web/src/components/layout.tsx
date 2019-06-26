/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { graphql, useStaticQuery } from 'gatsby'

import Header from './header'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <View style={styles.container}>
        <View>{children}</View>

        <View>
          <Text>
            © {new Date().getFullYear()}, Built with
            {` `}
          </Text>

          <Text
            accessible
            accessibilityRole='link'
            href='https://www.gatsbyjs.org'
          >
            <Text>Gatsby</Text>
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    marginHorizontal: `auto`,
    maxWidth: 960,
    paddingTop: 0,
    paddingBottom: 16 * 1.45, // 1.45rem
    padding: 16 * 1.0875 // 1.0875rem
  }
})

export default Layout
