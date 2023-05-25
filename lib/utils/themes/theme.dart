import 'package:flutter/material.dart';
import 'package:portfolio/utils/themes/colors.dart';

class PortfolioTheme {
  static ThemeData lightTheme = ThemeData(
    brightness: Brightness.light,
    scaffoldBackgroundColor: ColorPallete.lightBackground,
    textTheme: const TextTheme(
      displayLarge: TextStyle(
        color: ColorPallete.lightPrimaryColor,
        fontSize: 50,
        fontWeight: FontWeight.bold,
      ),
      displayMedium: TextStyle(
        color: ColorPallete.lightPrimaryColor,
        fontSize: 25,
        fontWeight: FontWeight.bold,
      ),
      displaySmall: TextStyle(
        color: ColorPallete.lightPrimaryColor,
        fontSize: 25,
      ),
    ),
    drawerTheme:
        const DrawerThemeData(backgroundColor: ColorPallete.lightBackground),
    appBarTheme:
        const AppBarTheme(backgroundColor: ColorPallete.lightPrimaryColor),
  );

  static ThemeData darkTheme = ThemeData(
    brightness: Brightness.dark,
    scaffoldBackgroundColor: ColorPallete.darkBackground,
    textTheme: const TextTheme(
      displayLarge: TextStyle(
        color: ColorPallete.darkPrimaryColor,
        fontSize: 50,
        fontWeight: FontWeight.bold,
      ),
      displayMedium: TextStyle(
        color: ColorPallete.darkPrimaryColor,
        fontSize: 25,
        fontWeight: FontWeight.bold,
      ),
      displaySmall: TextStyle(
        color: ColorPallete.darkSecondaryColor,
        fontSize: 25,
      ),
    ),
    drawerTheme:
        const DrawerThemeData(backgroundColor: ColorPallete.darkBackground),
    appBarTheme:
        const AppBarTheme(backgroundColor: ColorPallete.lightPrimaryColor),
  );
}
