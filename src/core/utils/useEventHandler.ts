import { useEffect, useRef } from "react";
import EventManager from "./eventhandler";
import type { EventName, Handler } from "./eventhandler";

type Options = {
  disposing?: boolean;
};

const DefaultOptions: Options = {
  disposing: true,
};

export default function useEventHandler(
  eventName: EventName,
  eventHandler: Handler,
  deps: React.DependencyList = [],
  options = DefaultOptions
) {
  const handler = EventManager.find(eventName);
  const ref = useRef({
    needDispose: handler === null,
    handler,
  });
  if (ref.current.handler === null) {
    ref.current = {
      ...ref.current,
      handler: new EventManager(eventName),
    };
  }

  useEffect(() => {
    ref.current.handler?.setEvents(eventName, eventHandler);
    return () => {
      ref.current.handler?.unsetEvents(eventName, eventHandler);
    };
  }, deps);

  useEffect(() => {
    return () => {
      if (options.disposing && ref.current.needDispose) {
        ref.current.handler?.dispose();
      }
    };
  }, []);

  return {
    send: (name: string, ...value: any[]) => {
      ref.current.handler?.send(name, ...value);
    },
  };
}
