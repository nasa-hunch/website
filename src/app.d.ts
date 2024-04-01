import 'unplugin-icons/types/svelte';

declare global {
  namespace App {
    interface PageState {
      modal?: string;
    }
  }
}

export {};
