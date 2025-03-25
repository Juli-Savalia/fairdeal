declare module "wowjs" {
  export default class WOW {
    constructor(config?: {
      boxClass?: string;
      animateClass?: string;
      offset?: number;
      mobile?: boolean;
      live?: boolean;
    });
    init(): void;
  }
}
