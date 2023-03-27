
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import {
  AnimationBuilder,
  AnimationFactory,
  AnimationMetadata,
  AnimationPlayer,
  style,
  animate,
} from '@angular/animations';

@Directive({
  selector: '[sxpAnimate]',
})
export class AnimateDirective {
  @Input() animateInAnimation!: AnimationMetadata | AnimationMetadata[];
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.animate();
  }

  private animating: boolean = false;
  private player!: AnimationPlayer 
  private defaults: any = {
    offset: 0,
  };



  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit() {
    this.initialize();
    this.animate();
  }

  private initialize(): void {
    let animation: AnimationFactory;

    if (
      this.animateInAnimation !== null &&
      this.animateInAnimation !== undefined
    ) {
      animation = this.animationBuilder.build(this.animateInAnimation);
    } else {
      animation = this.animationBuilder.build([
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate(
          '1200ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateX(0)' })
          // style({ opacity: 0, transform: 'translate3d(0, 20%, 0)' }),
          // animate('500ms', style({ opacity: 1, transform: 'translate3d(0, 0, 0)'}))
        ),
      ]);
    }

    this.player = animation.create(this.el.nativeElement);
    this.player.init();
  }

  private animate(): void {
    const inView = this.isInViewport();

    if (!inView) this.animating = false;
    if (!inView || this.animating) return;

    this.player.play();
    this.animating = true;
  }

  private isInViewport(): boolean {
    const bounding = this.el.nativeElement.getBoundingClientRect();

    let top =
      bounding.top -
      (window.innerHeight || document.documentElement.clientHeight);
    let bottom = bounding.top + bounding.height + this.defaults.offset;

    return top < 0 && bottom > 0;
  }
}