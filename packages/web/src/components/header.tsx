import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Link } from 'gatsby'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = '' }: Props) => (
  <View style={styles.header}>
    <View style={styles.container}>
      <Text accessibilityRole='header' style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  header: {
    background: `rebeccapurple`,
    marginBottom: 16 * 1.45 // 1.45rem
  },
  container: {
    marginVertical: 0,
    marginHorizontal: `auto`,
    maxWidth: 960,
    paddingVertical: 16 * 1.45, // 1.45rem
    paddingHorizontal: 16 * 1.0875 // 1.0875rem
  }
})

export default Header
