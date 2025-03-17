// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript

function likes(names) {
  let people;
  switch (names.length) {
    case 0:
      people = 'no one';
      break;
    case 1:
      people = names[0];
      break;
    case 2:
      people = `${names[0]} and ${names[1]}`;
      break;
    case 3:
      people = `${names[0]}, ${names[1]} and ${names[2]}`;
      break;
    default:
      people = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
      break;
  }
  return `${people} like${names.length < 2 ? 's' : ''} this`;
}

// other solution memo
// Math.min(maximum,names.length)
// 用取最小值來確保超過最大極限後的 default case

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]}, and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]}, and ${names.length - 1} like this`,
  }[Math.min(4, names.length)];
}
