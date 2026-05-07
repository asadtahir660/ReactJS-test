import berryPunchCan from '../../assets/landing/products/berry-punch-can.png';
import fanFuel from '../../assets/landing/products/fan-fuel.png';
import gamerRaspberry from '../../assets/landing/products/gamer-raspberry.png';
import regularOrange from '../../assets/landing/products/regular-orange.png';
import watermelon from '../../assets/landing/products/watermelon.png';
import berryExtra from '../../assets/landing/products/berry-extra.png';
import runnerIcon from '../../assets/landing/icons/runner.png';
import rocketIcon from '../../assets/landing/icons/rocket.png';
import flameIcon from '../../assets/landing/icons/flame.png';
import targetIcon from '../../assets/landing/icons/target.png';
import boltIcon from '../../assets/landing/icons/bolt.png';

export const navItems = ['Shop', 'Build A Bundle', 'Merch', 'Pre Workout', 'FAQs', 'Blogs', 'Store Locator'];

export const productCards = [
  {
    category: 'Regular Strength',
    name: 'Orange Flavor',
    description: 'Lorem ipsum dolor sit amet, etetur adipiscing elit.',
    price: '$32.99',
    image: regularOrange,
    glow: 'from-orange-500/65'
  },
  {
    category: 'Gamer Shots',
    name: 'Rocket Raspberry',
    description: 'Lorem ipsum dolor sit amet, etetur adipiscing elit.',
    price: '$58.96',
    image: gamerRaspberry,
    glow: 'from-fuchsia-500/65'
  },
  {
    category: 'Energy Drinks',
    name: 'Berry Punch Flavor',
    description: 'Lorem ipsum dolor sit amet, etetur adipiscing elit.',
    price: '$58.96',
    image: berryPunchCan,
    glow: 'from-red-500/65'
  },
  {
    category: 'Extra Strength',
    name: 'Fan Fuel',
    description: 'Lorem ipsum dolor sit amet, etetur adipiscing elit.',
    price: '$58.96',
    image: fanFuel,
    glow: 'from-sky-500/65'
  }
];

export const energyWords = [
  { label: 'Power', icon: boltIcon, accent: '#ffe500' },
  { label: 'Energy', icon: flameIcon, accent: '#ff7d1a' },
  { label: 'Focus', icon: targetIcon, accent: '#ef3340' },
  { label: 'Speed', icon: rocketIcon, accent: '#2fb7ff' }
];

export const featuredProducts = [
  {
    title: 'Orange Flavor',
    image: regularOrange,
    eyebrow: 'Regular Strength',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut odio in urna consectetur consectetur.',
    facts: [
      {
        title: 'Lasts for hours',
        text: 'Drink it in seconds, feel it in minutes, lasts for hours.',
        icon: runnerIcon
      },
      {
        title: '230mg of caffeine',
        text: 'The same amount in a 12 oz cup of coffee.',
        icon: boltIcon
      },
      {
        title: 'Orange flavor',
        text: 'Enhanced with a blend of essential B vitamins and amino acids.',
        icon: flameIcon
      }
    ]
  },
  {
    title: 'Watermelon Flavor',
    image: watermelon,
    eyebrow: 'Regular Strength',
    body: 'A bright fruit shot with the same fast routine and compact bottle format.',
    facts: [
      {
        title: 'Fast routine',
        text: 'A small shot format built for quick energy support.',
        icon: runnerIcon
      },
      {
        title: 'Sugar free',
        text: 'Made for busy days without a heavy drink format.',
        icon: boltIcon
      },
      {
        title: 'Watermelon flavor',
        text: 'A fresh flavor profile for daily focus.',
        icon: flameIcon
      }
    ]
  },
  {
    title: 'Berry Extra',
    image: berryExtra,
    eyebrow: 'Extra Strength',
    body: 'A bold berry option for days that need an extra push.',
    facts: [
      {
        title: 'Extra strength',
        text: 'A stronger option with the same compact bottle feel.',
        icon: runnerIcon
      },
      {
        title: 'Berry profile',
        text: 'A deep berry flavor with a sharp finish.',
        icon: boltIcon
      },
      {
        title: 'Focused energy',
        text: 'Built for focus, speed, and long task sessions.',
        icon: targetIcon
      }
    ]
  }
];

export const faqItems = [
  'What is a 5-hour Energy shot?',
  'How do you ensure code quality?',
  'How do you manage project timelines?',
  'What makes your team unique?',
  'How do you test the software?'
];
