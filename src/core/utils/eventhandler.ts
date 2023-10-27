import EventEmitter from "eventemitter3";

export type EventName = string;
export type Handler = (...args: any[]) => void;
export type EventHandlers = { [name: EventName]: Handler };
type EventModules = { [name: EventName]: EventHandler };

export default class EventHandler extends EventEmitter {
  private static moduleList: EventModules = {};

  public static find(name: EventName) {
    return Object.hasOwn(EventHandler.moduleList, name) ? EventHandler.moduleList[name] : null;
  }

  public static registry(moduleName: string, module: EventHandler) {
    if (EventHandler.find(moduleName) === null) {
      EventHandler.moduleList[moduleName] = module;
    }
  }

  public static unregistry(moduleName: string) {
    if (EventHandler.find(moduleName)) {
      delete EventHandler.moduleList[moduleName];
    }
  }

  public static install(events: EventHandlers) {
    for (const [name, handler] of Object.entries(events)) {
      const _module = (() => {
        const _module = EventHandler.find(name);
        return _module ? _module : new EventHandler(name);
      })();
      _module.setEvents(name, handler);
    }
  }

  public static uninstall(events: EventHandlers) {
    for (const [name, handler] of Object.entries(events)) {
      const _module = EventHandler.find(name);
      if (_module) {
        _module.unsetEvents(name, handler);
        EventHandler.unregistry(name);
      }
    }
  }

  public static emit(name: EventName, ...value: any[]) {
    EventHandler.find(name)?.send(name, ...value);
  }

  constructor(public moduleName: string) {
    super();

    EventHandler.registry(moduleName, this);
  }

  public dispose() {
    EventHandler.unregistry(this.moduleName);
  }

  public setEvents(name: EventName, handler: Handler) {
    this.on(name, handler);
  }

  public unsetEvents(name: EventName, handler: Handler) {
    this.off(name, handler);
  }

  public send(name: EventName, ...value: any[]) {
    this.emit(name, ...value);
  }
}
