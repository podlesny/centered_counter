import { factory } from './factory';

let count = factory(0, 1);

function update_count() {
  if (current_count) {
    current_count.textContent = count().toString();
  }
}

function update_count_and_reset_counter() {
  let start_at = parseInt(start_at_control.value);
  let step = parseInt(step_control.value);
  if (!start_at) {
    start_at = 0;
    start_at_control.value = '0';
  }
  if (!step) {
    step = 1;
    step_control.value = '1';
  }

  count = factory(start_at, step);

  if (current_count) {
    current_count.textContent = start_at_control.value;
  }
}

const start_at_control = document.getElementById(
  'start_at',
) as HTMLInputElement;
const step_control = document.getElementById('step') as HTMLInputElement;
const count_button = document.querySelector(
  '.count_button',
) as HTMLButtonElement;
const current_count = document.querySelector(
  '.current_count',
) as HTMLSpanElement;

start_at_control?.addEventListener('change', () => {
  update_count_and_reset_counter();
});

step_control?.addEventListener('change', () => {
  update_count_and_reset_counter();
});

count_button.addEventListener('click', update_count);

if (current_count) {
  current_count.textContent = start_at_control.value;
}
