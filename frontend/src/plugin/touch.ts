type MutableTouchEvent = Event & {
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  touches: TouchListLike;
  targetTouches: TouchListLike;
  changedTouches: TouchListLike;
};

type TouchPointPosition = {
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
};

type TouchListLike = Array<TouchPoint> & {
  item(index: number): TouchPoint | null;
  identifiedTouch(id: number): TouchPoint | null;
};

class TouchPoint {
  identifier: number;
  target: EventTarget;
  clientX: number;
  clientY: number;
  screenX: number;
  screenY: number;
  pageX: number;
  pageY: number;

  constructor(
    target: EventTarget,
    identifier: number,
    position: TouchPointPosition,
    deltaX = 0,
    deltaY = 0,
  ) {
    this.identifier = identifier;
    this.target = target;
    this.clientX = position.clientX + deltaX;
    this.clientY = position.clientY + deltaY;
    this.screenX = position.screenX + deltaX;
    this.screenY = position.screenY + deltaY;
    this.pageX = position.pageX + deltaX;
    this.pageY = position.pageY + deltaY;
  }
}

function createTouchList(...points: TouchPoint[]): TouchListLike {
  const touchList = [...points] as TouchListLike;

  touchList.item = function item(index: number) {
    return this[index] || null;
  };

  touchList.identifiedTouch = function identifiedTouch(id: number) {
    return this[id + 1] || null;
  };

  return touchList;
}

function isDispatchableTarget(target: EventTarget | null): target is EventTarget {
  return !!target && typeof target.dispatchEvent === 'function';
}

function isElement(target: EventTarget | null): target is Element {
  return target instanceof Element;
}

function shouldSkipTouchSimulation(target: EventTarget | null) {
  return isElement(target) && target.closest('[data-no-touch-simulate]') !== null;
}

function installPolyfills() {
  const documentWithLegacyTouch = document as Document & {
    createTouch?: (
      view: Window,
      target: EventTarget,
      identifier: number,
      pageX: number,
      pageY: number,
      screenX: number,
      screenY: number,
    ) => TouchPoint;
    createTouchList?: (...points: TouchPoint[]) => TouchListLike;
  };

  if (!documentWithLegacyTouch.createTouch) {
    documentWithLegacyTouch.createTouch = (
      _view,
      target,
      identifier,
      pageX,
      pageY,
      screenX,
      screenY,
    ) => new TouchPoint(
      target,
      identifier,
      {
        pageX,
        pageY,
        screenX,
        screenY,
        clientX: pageX - window.scrollX,
        clientY: pageY - window.scrollY,
      },
    );
  }

  if (!documentWithLegacyTouch.createTouchList) {
    documentWithLegacyTouch.createTouchList = (...points) => createTouchList(...points);
  }
}

class TouchEmulator {
  private eventTarget: EventTarget | null = null;
  private initiated = false;

  constructor() {
    window.addEventListener('mousedown', this.onMouse('touchstart'), true);
    window.addEventListener('mousemove', this.onMouse('touchmove'), true);
    window.addEventListener('mouseup', this.onMouse('touchend'), true);
  }

  private onMouse(touchType: string) {
    return (event: MouseEvent) => {
      if (event.type === 'mousedown') {
        this.initiated = true;
      }

      if (event.type === 'mouseup') {
        this.initiated = false;
      }

      if (event.type === 'mousemove' && !this.initiated) {
        return;
      }

      if (event.type === 'mousedown' || !isDispatchableTarget(this.eventTarget)) {
        this.eventTarget = event.target;
      }

      if (!shouldSkipTouchSimulation(this.eventTarget)) {
        this.triggerTouch(touchType, event);
      }

      if (event.type === 'mouseup') {
        this.eventTarget = null;
      }
    };
  }

  private triggerTouch(eventName: string, mouseEvent: MouseEvent) {
    if (!isDispatchableTarget(this.eventTarget)) {
      return;
    }

    const touchEvent = new Event(eventName, {
      bubbles: true,
      cancelable: true,
    }) as MutableTouchEvent;

    touchEvent.altKey = mouseEvent.altKey;
    touchEvent.ctrlKey = mouseEvent.ctrlKey;
    touchEvent.metaKey = mouseEvent.metaKey;
    touchEvent.shiftKey = mouseEvent.shiftKey;
    touchEvent.touches = this.getActiveTouches(mouseEvent);
    touchEvent.targetTouches = this.getActiveTouches(mouseEvent);
    touchEvent.changedTouches = this.createTouchList(mouseEvent);
    this.eventTarget.dispatchEvent(touchEvent);
  }

  private createTouchList(mouseEvent: MouseEvent) {
    if (!isDispatchableTarget(this.eventTarget)) {
      return createTouchList();
    }

    return createTouchList(new TouchPoint(this.eventTarget, 1, mouseEvent));
  }

  private getActiveTouches(mouseEvent: MouseEvent) {
    if (mouseEvent.type === 'mouseup') {
      return createTouchList();
    }

    return this.createTouchList(mouseEvent);
  }
}

if (typeof window !== 'undefined' && !('ontouchstart' in window)) {
  installPolyfills();
  new TouchEmulator();
}

export {};
