var companyInfo = {
  title: 'VISTA SUSHI RESTUARANT',
  phone: '(718) - 219 - 8652',
  location: 'Vista Sushi Restuarant'
}

var specialMenuData = [
  {
    title: 'Dragon Rolls Sushi',
    description: 'Shrimp with avocado, shichimi powder and spring onion.',
    price: 16.99
  },
  {
    title: 'Vegan Ramen Noodles',
    description:
      'Mixed vedgtables, broth, top amazing tofu with carrots and spinach',
    price: 13.99
  },
  {
    title: 'Tempura Ultimate Rolls',
    description: 'Shrimp with vedg friend rolls',
    price: 6.99
  }
]

var reviewsData = [
  {
    company: 'Top Oriental Cuisines',
    author: 'Merrylyn Benz',
    authorInfo: 'Winner Of Chef Masters',
    highlight: 'Best Restuarant in Central London!!!',
    review: 'Vista Sushi Restuarant got to love it!'
  },
  {
    company: 'FS and rice',
    author: 'Paula',
    authorInfo: 'Sushi Circles',
    highlight: 'Best Restuarant in Central London!!!',
    review: 'SUSHI TASTE AMAZING'
  },
  {
    company: 'BM COOKING',
    author: 'Alexander',
    authorInfo: 'First Class Chef',
    highlight: 'Best Restuarant in Central London!!!',
    review: 'Mouthwatering flavours'
  },
  {
    company: 'Love to cook forever',
    author: 'Cindy',
    authorInfo: 'Quick Cooking Made Daily',
    highlight: 'Best Restuarant in Central London!!!',
    review: 'DEFFINITELY MY FAVOURITE PLACE'
  },
  {
    company: 'London Mayfair',
    author: 'Italian cooking special',
    authorInfo: 'Winner Of Chef Masters',
    highlight: 'Best Restuarant in Central London!!!',
    review: 'Loved everything about it'
  }
]

var randomQuoteData = [
  {
    author: 'Chinese Proverb',
    quote:
      'Give A Man A Fish And You Feed Him For A Day; Teach A Man How To Fish And You Feed Him For A Lifetime.'
  },
  {
    author: 'Benz',
    quote: 'Love Oriental Meals in the City'
  },
  {
    author: 'Jeff',
    quote: 'Give me the best food now!'
  }
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
}
