enum Colors {
  RED = 10, // 10
  BLUE = 100, // 100
  YELLOW = 200,
}

enum Colors {
  PURPLE = 'PURPLE',
  GREEN = 201,
  PINK,
}

export function chooseTheColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseTheColor(123456);
