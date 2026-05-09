/**
 * Opinionated Zustand store factory.
 *
 * - Wraps `zustand/devtools` so every store shows up in the Redux DevTools
 *   browser extension during development.
 * - Optional `persistKeys` wraps the store in `zustand/persist` with a
 *   narrow `partialize` that saves only the listed keys to localStorage.
 * - Action names flow through the third argument of `setState(...)`; pass
 *   a short label (e.g. `'theme/toggle'`) so DevTools groups updates cleanly.
 */

import {
  create,
  type Mutate,
  type StateCreator,
  type StoreApi,
  type UseBoundStore,
} from "zustand";
import { devtools, persist } from "zustand/middleware";

type StoreWithDevtools<T> = UseBoundStore<
  Mutate<StoreApi<T>, [["zustand/devtools", never]]>
>;

interface CreateStoreOptions<T> {
  /**
   * Keys to persist in localStorage. Uses the store `name` as the storage key.
   */
  persistKeys?: (keyof T)[];
}

export function createStore<T extends object>(
  initializer: StateCreator<T, [["zustand/devtools", never]], []>,
  name = "ZustandStore",
  options: CreateStoreOptions<T> = {},
): StoreWithDevtools<T> {
  const { persistKeys } = options;

  if (persistKeys && persistKeys.length > 0) {
    return create<T>()(
      devtools(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (persist as any)(initializer, {
          name,
          partialize: (state: T) => {
            const partial: Partial<T> = {};
            for (const key of persistKeys) {
              partial[key] = state[key];
            }
            return partial;
          },
        }),
        { name },
      ),
    ) as StoreWithDevtools<T>;
  }

  return create<T>()(devtools(initializer, { name }));
}
