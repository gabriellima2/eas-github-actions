import { StyleSheet, Text, type TextProps } from "react-native";

export type TitleProps = TextProps

export function Title(props: TitleProps) {
  const { style, ...rest } = props
  return <Text {...rest} style={[styles.title, style]}>{rest.children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "500"
  }
})
