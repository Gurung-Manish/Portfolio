import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:portfolio/pages/home/pages/home_page.dart';
import 'package:portfolio/pages/splash/pages/splash_page.dart';
import 'package:portfolio/routes/routes_constant.dart';

final GlobalKey<NavigatorState> _rootNavigatorKey =
    GlobalKey<NavigatorState>(debugLabel: 'root');
final GlobalKey<NavigatorState> _shellNavigatorKey =
    GlobalKey<NavigatorState>(debugLabel: 'shell');

class Routes {
  static final GoRouter router = GoRouter(
      navigatorKey: _rootNavigatorKey,
      initialLocation: (kIsWeb)
          ? (Uri.base.toString().replaceFirst(Uri.base.origin, ''))
          : RoutesConstant.splash,
      routes: <RouteBase>[
        GoRoute(
          path: RoutesConstant.splash,
          builder: (context, state) => const SplashPage(),
        ),
        GoRoute(
          path: RoutesConstant.home,
          builder: (context, state) => const HomePage(),
        ),
      ]);
}
