/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<Type1, Type2>(objA: Type1, objB: Type2): Type1 & Type2 {
  return Object.assign({}, objA, objB);
}

export {}