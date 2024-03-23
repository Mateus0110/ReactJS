// Conditional
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// non-null assertion (!)
const body2 = document.querySelector('body')!; // non-nulll
body2.style.backgroundColor = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Type assertion
const body4 = (document.querySelector('body') as unknown) as number;
// body4.style.backgroundColor = 'red';
