import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tailwind-user-card',
  template: `
    <label
      class="perspective-100 block h-[240px] w-[320px] max-w-[320px] relative rounded-lg cursor-pointer transition duration-150 ease-out hover:ease-in hover:scale-105 hover:shadow-lg"
    >
      <input type="checkbox" class="hidden" #checkbox (change)="(0)" />
      <div
        class="relative w-full h-full transotion-transform duration-500 preserve-3d"
        [class.[transform:rotateY(180deg)]]="checkbox.checked"
      >
        <div
          class="backface-hidden absolute w-full h-full rounded-lg p-4 bg-white dark:bg-zinc-600"
        >
          <div class="flex items-center mb-4">
            <div class="">
              <h2 class="font-bold m-0 text-xl dlh-text-primary">
                {{ user.name }}
              </h2>
              <p class="dlh-text-primary text-base">
                {{ user.title }}
              </p>
            </div>
          </div>
          <div class="">
            <p class="dlh-text-primary text-[0.875rem]">
              {{ user.description }}
            </p>
          </div>
        </div>
        <div
          class="backface-hidden absolute w-full h-full rounded-lg p-4 bg-zinc-200 dark:bg-zinc-600 [transform:rotateY(180deg)]"
        >
          <div class="flex items-center mb-4">
            <div class="">
              <h2 class="font-bold m-0 text-xl dlh-text-primary">
                Contact Information
              </h2>
            </div>
          </div>
          <div class="">
            <p class="dlh-text-primary text-[0.875rem]">
              Email: {{ user.email }}
              <br />
              Phone: {{ user.phone }}
            </p>
          </div>
        </div>
      </div>
    </label>
  `,
})
export class UserCardComponent {
  @Input() user: any;
}
