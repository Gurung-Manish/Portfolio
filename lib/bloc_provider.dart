import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:portfolio/app.dart';
import 'package:portfolio/pages/splash/bloc/splash_bloc.dart';

class BlocProviderContainer extends StatelessWidget {
  const BlocProviderContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(providers: [
      BlocProvider<SplashBloc>(
        create: (BuildContext context) => SplashBloc(),
      ),
    ], child: const App());
  }
}
