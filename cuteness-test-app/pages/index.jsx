import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import WelcomeScreen from '../components/WelcomeScreen';
import InteractionScreen from '../components/InteractionScreen';
import MeasuringScreen from '../components/MeasuringScreen';
import ResultScreen from '../components/ResultScreen';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [score, setScore] = useState(0);

  const nextScreen = () => {
    setCurrentScreen((prev) => prev + 1);
  };

  const restart = () => {
    setCurrentScreen(0);
    setScore(0);
  };

  const screens = [
    <WelcomeScreen key="welcome" onNext={nextScreen} />,
    <InteractionScreen key="interaction" onNext={nextScreen} />,
    <MeasuringScreen key="measuring" onNext={nextScreen} setScore={setScore} />,
    <ResultScreen key="result" score={score} onRestart={restart} />,
  ];

  return (
    <>
      <Head>
        <title>Cuteness Test - How Cute Are You?</title>
        <meta name="description" content="Take the viral cuteness test and find out how cute you really are!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {screens[currentScreen]}
        </AnimatePresence>
      </main>
    </>
  );
}
